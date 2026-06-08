#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const templateRoot = path.join(packageRoot, "template");

const args = process.argv.slice(2);
const command = args.find((arg) => !arg.startsWith("-")) ?? "help";
const flags = new Set(args.filter((arg) => arg.startsWith("-")));

function readOption(name) {
  const inlinePrefix = `${name}=`;
  const inline = args.find((arg) => arg.startsWith(inlinePrefix));
  if (inline) {
    return inline.slice(inlinePrefix.length);
  }

  const index = args.indexOf(name);
  if (index >= 0 && args[index + 1] && !args[index + 1].startsWith("-")) {
    return args[index + 1];
  }

  return null;
}

function printHelp() {
  console.log(`MADA - Multi-Agent Development Architecture

Usage:
  mada init [target] [--force] [--dry-run] [--agent-preset <preset>] [--language <name>]
  mada --help
  mada --version

Commands:
  init      Install the MADA framework files into the target folder.

Options:
  --force                 Overwrite existing files.
  --dry-run               Show what would be copied without writing files.
  --agent-preset <preset> Initial agent stack preset.
                          Examples: codex-opencode, codex-only, opencode-only,
                          single-agent, multi-agent, custom.
  --language <name>       Initial programming language or stack hint.

Examples:
  npx mada-framework init
  npx mada-framework init ./my-project
  npx mada-framework init . --force
  npx mada-framework init . --agent-preset codex-opencode --language typescript
`);
}

function readPackageVersion() {
  const packageJsonPath = path.join(packageRoot, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8").replace(/^\uFEFF/u, ""));
  return packageJson.version;
}

function walkFiles(root) {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function resolveTarget() {
  const positional = args.filter((arg) => !arg.startsWith("-"));
  const targetArg = positional[1] ?? ".";
  return path.resolve(process.cwd(), targetArg);
}

function buildAgentStackPatch(agentPreset, language) {
  const preset = agentPreset ?? "codex-opencode";
  const languageHint = language ?? "To define during START.md discovery.";

  const presets = {
    "codex-opencode": {
      mode: "supervised multi-agent delegation",
      primary: "Codex CLI",
      auxiliary: "OpenCode CLI",
      communication: "tasks/AGENT-COMMUNICATION.md and tasks/OPENCODE-CODEX.md",
    },
    "codex-only": {
      mode: "single-agent",
      primary: "Codex CLI",
      auxiliary: "None",
      communication: "tasks/AGENT-COMMUNICATION.md",
    },
    "opencode-only": {
      mode: "single-agent",
      primary: "OpenCode CLI",
      auxiliary: "None",
      communication: "tasks/AGENT-COMMUNICATION.md",
    },
    "single-agent": {
      mode: "single-agent",
      primary: "To define during START.md discovery.",
      auxiliary: "None",
      communication: "tasks/AGENT-COMMUNICATION.md",
    },
    "multi-agent": {
      mode: "multi-agent",
      primary: "To define during START.md discovery.",
      auxiliary: "To define during START.md discovery.",
      communication: "tasks/AGENT-COMMUNICATION.md",
    },
    custom: {
      mode: "custom",
      primary: "To define during START.md discovery.",
      auxiliary: "To define during START.md discovery.",
      communication: "tasks/AGENT-COMMUNICATION.md",
    },
  };

  const selected = presets[preset] ?? presets.custom;

  return `\n## Initial CLI Selection\n\n- Agent preset: ${preset}\n- Agent mode: ${selected.mode}\n- Primary agent: ${selected.primary}\n- Auxiliary agents: ${selected.auxiliary}\n- Communication channel: ${selected.communication}\n- Programming language or stack hint: ${languageHint}\n\nThis initial selection can be refined or replaced during START.md discovery.\n`;
}

function applyInitialSelections(targetRoot, dryRun) {
  const agentPreset = readOption("--agent-preset");
  const language = readOption("--language");

  if (!agentPreset && !language) {
    return;
  }

  const agentStackPath = path.join(targetRoot, "docs", "AGENT-STACK.md");
  const patch = buildAgentStackPatch(agentPreset, language);

  if (dryRun) {
    console.log(`would update  ${path.relative(targetRoot, agentStackPath)} with initial agent/language selection`);
    return;
  }

  if (!fs.existsSync(agentStackPath)) {
    fs.mkdirSync(path.dirname(agentStackPath), { recursive: true });
    fs.writeFileSync(agentStackPath, "# Agent Stack\n", "utf8");
  }

  const current = fs.readFileSync(agentStackPath, "utf8");
  const withoutPreviousSelection = current.replace(/\n## Initial CLI Selection[\s\S]*$/u, "");
  fs.writeFileSync(agentStackPath, `${withoutPreviousSelection.trimEnd()}\n${patch}`, "utf8");
}

function installTemplate() {
  if (!fs.existsSync(templateRoot)) {
    console.error("MADA template folder was not found inside this package.");
    process.exitCode = 1;
    return;
  }

  const targetRoot = resolveTarget();
  const force = flags.has("--force");
  const dryRun = flags.has("--dry-run");
  const templateFiles = walkFiles(templateRoot);

  let created = 0;
  let overwritten = 0;
  let skipped = 0;

  for (const sourcePath of templateFiles) {
    const relativePath = path.relative(templateRoot, sourcePath);
    const targetPath = path.join(targetRoot, relativePath);
    const exists = fs.existsSync(targetPath);

    if (exists && !force) {
      skipped += 1;
      console.log(`skip  ${relativePath}`);
      continue;
    }

    if (!dryRun) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }

    if (exists) {
      overwritten += 1;
      console.log(`${dryRun ? "would overwrite" : "overwrite"}  ${relativePath}`);
    } else {
      created += 1;
      console.log(`${dryRun ? "would create" : "create"}  ${relativePath}`);
    }
  }

  applyInitialSelections(targetRoot, dryRun);

  console.log("");
  console.log(`MADA install summary for ${targetRoot}`);
  console.log(`created: ${created}`);
  console.log(`overwritten: ${overwritten}`);
  console.log(`skipped: ${skipped}`);

  if (skipped > 0 && !force) {
    console.log("");
    console.log("Some files already existed. Re-run with --force only if you want to overwrite them.");
  }
}

if (flags.has("--version") || command === "version") {
  console.log(readPackageVersion());
} else if (flags.has("--help") || command === "help") {
  printHelp();
} else if (command === "init") {
  installTemplate();
} else {
  console.error(`Unknown command: ${command}`);
  console.error("Run `mada --help` for usage.");
  process.exitCode = 1;
}
