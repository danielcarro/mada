# MADA - Multi-Agent Development Architecture

**MADA** means **Multi-Agent Development Architecture**.

MADA is a reusable framework for creating, reviewing, repairing, improving and
innovating software projects with configurable AI agents. Codex + OpenCode is the default ready-to-use preset, but MADA can also run as a single-agent workflow or with another multi-agent stack. It works as a system of
**dynamically updated micro-memories**: small markdown files for context, tasks,
progress, decisions and agent communication.

The core rule is simple: the user may speak in Portuguese, the internal system
works in English, and the final user response may return in the user's language.

## Language And Token Policy

Practical rule: **Portuguese in, English inside, Portuguese out**.

- The user may give instructions in Portuguese.
- Codex interprets the request and normalizes the internal intent in English.
- Folder names, file names, task IDs, internal instructions, OpenCode
  delegations and operational micro-memories should use English.
- Final responses to the user should be written in the user's language.

This reduces linguistic variation, ambiguity, duplicated wording and AI
hallucination. Token savings are not mathematically guaranteed for every
sentence, but English internal names and instructions are usually shorter and
better aligned with code, commands and development tools.

## Required Tools

MADA has one default ready-to-use tool preset:

- **VS Code**: workspace editor.
- **Codex CLI**: default primary agent; coordinates tasks, edits files,
  validates work and updates micro-memories.
- **OpenCode**: default auxiliary agent; Codex calls it through the CLI for
  short, supervised operational tasks.

Required or recommended tools depend on the selected agent stack. Common tools:

- **Node.js LTS** with npm.
- **Git**, even though MADA must not run Git commands without explicit user
  authorization.
- **PowerShell** on Windows.

Quick install:

```powershell
npm install -g @openai/codex
npm install -g opencode-ai
npm install -g mada-framework
cd C:\projetos\base_ia
code .
```

Verify:

```powershell
node -v
npm -v
codex --version
opencode --version
mada --version
```

## Install MADA By npm

After publication on npm, MADA can be installed globally:

```powershell
npm install -g mada-framework
mada init .
```

Or used without a global install:

```powershell
npx mada-framework init .
```

Install into a specific folder:

```powershell
npx mada-framework init C:\projetos\novo-projeto
```

By default, `mada init` does not overwrite existing files. To overwrite files
intentionally:

```powershell
mada init . --force
```

To preview the installation without writing files:

```powershell
mada init . --dry-run
```

To initialize with an agent/model preset and a language hint:

```powershell
mada init . --agent-preset codex-opencode --language typescript
mada init . --agent-preset single-agent --language python
mada init . --agent-preset custom --language "go + postgres"
```

Supported initial presets:

- `codex-opencode`: default MADA preset.
- `codex-only`: single-agent Codex workflow.
- `opencode-only`: single-agent OpenCode workflow.
- `single-agent`: generic single-agent workflow.
- `multi-agent`: generic multi-agent workflow.
- `custom`: user-defined agent/model stack.

These CLI hints update `docs/AGENT-STACK.md`. START.md can still refine or
replace them during discovery.

Before the package is published, create and install a local tarball:

```powershell
npm pack
npm install -g .\mada-framework-0.1.0.tgz
mada init C:\projetos\novo-projeto
```


## Use MADA From GitHub Without npm Registry

MADA can also be distributed through GitHub without publishing to npm.

Option 1: clone the repository and run the local CLI:

```powershell
git clone https://github.com/<owner>/<repo>.git mada
cd mada
node bin/mada.js init C:\projetos\novo-projeto
```

Option 2: download a GitHub release ZIP, extract it, and run:

```powershell
node bin/mada.js init C:\projetos\novo-projeto
```

Option 3: copy the `template/` folder manually into the target project. This is
useful when the user wants MADA as a GitHub-only framework without npm package
installation.

Recommended GitHub release contents:

- source code archive;
- `template/` folder;
- `bin/mada.js` CLI;
- `README.md`;
- `LICENSE`;
- optional `mada-framework-<version>.tgz` for users who still want local npm
  installation.

## Install VS Code

1. Open https://code.visualstudio.com/Download
2. Download the Windows installer.
3. Run the installer.
4. If offered, enable the option to add `code` to PATH.
5. Open the workspace:

```powershell
cd C:\projetos\base_ia
code .
```

If `code .` does not work, open VS Code manually and use:

```text
File -> Open Folder -> C:\projetos\base_ia
```

## Install Node.js

1. Open https://nodejs.org/
2. Install the LTS version.
3. Close and reopen PowerShell.
4. Verify:

```powershell
node -v
npm -v
```

## Install Codex CLI

Install globally:

```powershell
npm install -g @openai/codex
```

Verify:

```powershell
codex --version
```

Start Codex inside the workspace:

```powershell
cd C:\projetos\base_ia
codex
```

## Install OpenCode

Install globally:

```powershell
npm install -g opencode-ai
```

Verify:

```powershell
opencode --version
```

Start OpenCode inside the workspace:

```powershell
cd C:\projetos\base_ia
opencode
```

## How MADA Works

MADA is not an application. It is a memory and orchestration layer for creating,
reviewing, repairing, improving and innovating projects with AI while preserving
context, scope, progress and safety.

In practice, MADA creates and updates micro-memories:

- `START.md`: Socratic discovery guide for the user's exact intent.
- `docs/START-ANSWERS.md`: ordered answers collected during Start Discovery.
- `docs/PROJECT-CONTEXT.md`: active project context.
- `docs/AGENT-STACK.md`: selected agents, models, mode and programming stack.
- `docs/MODULE-CATALOG.md`: global development module catalog.
- `docs/reusable-functions-index.md`: reusable code index.
- `tasks/ORCHESTRATOR.md`: central execution rulebook.
- `tasks/AGENT-COMMUNICATION.md`: generic agent-to-agent operational communication.
- `tasks/OPENCODE-CODEX.md`: compatibility channel for the default Codex + OpenCode preset.
- `tasks/TASK-MANAGER-TEMPLATE.md`: template for new dated tasks.
- `tasks/modules/**/README.md`: explanation of each module.
- `tasks/modules/**/TASK-MANAGER.md`: permanent state for each module.
- `tasks/modules/**/YYYY-MM-DD-short-summary.md`: concrete dated task.

These micro-memories reduce:

- **lost work**: state lives in files, not only in chat;
- **redundancy**: Codex checks micro-memories before recreating work;
- **hallucination**: agents must check context, code and docs before acting.

## Global Development Module Structure

`tasks/modules` is MADA's global taxonomy for most software projects. It covers
common areas such as product, requirements, architecture, design, frontend,
backend, API, data, security, tests, DevOps, deployment, documentation,
maintenance, refactoring and troubleshooting.

The full catalog is in:

```text
docs/MODULE-CATALOG.md
```

Usage rules:

1. The active coordinator should choose the most specific module for the request.
2. If the request is broad, use `features` only to split scope.
3. If a new module folder is required, create in the same cycle:
   - `README.md`
   - `TASK-MANAGER.md`
4. Internal folder and file names must remain in English.

## Start Discovery

Before creating or updating project context, MADA uses `START.md` to understand
exactly what the user wants to do.

Start Discovery is not limited to new applications. It also applies to existing
project reviews, error diagnosis, improvements, innovation proposals,
modernization and tool evaluation.

Flow:

1. If `START.md` has `Status: not completed`, the active coordinator must pause
   creation or update of `docs/PROJECT-CONTEXT.md`.
2. The active coordinator asks short Socratic questions in the user language,
   starting with the exact intent: create from zero, review an existing project,
   fix errors, improve, innovate or evaluate tools.
3. Start Discovery asks which agent/model stack the user wants: Codex only,
   OpenCode only, Codex + OpenCode, another single-agent workflow, another
   multi-agent workflow or a custom stack.
4. Start Discovery asks which programming language, framework, runtime, package
   manager and validation tools should be used or preserved.
5. Answers are recorded in order in `docs/START-ANSWERS.md`.
6. Each answer may preserve the user's original wording and include a normalized
   English internal interpretation.
7. The final question must be:

```text
Podemos prosseguir com a criação do contexto do projeto?
```

8. If the user answers yes, the active coordinator marks `START.md` as
   `Status: completed`, updates `docs/AGENT-STACK.md`, creates or verifies an
   active **Metas** goal when Codex is part of the selected stack and starts
   creating or updating `docs/PROJECT-CONTEXT.md`.
9. When `START.md` is completed, the active coordinator synthesizes
   `docs/START-ANSWERS.md` into `docs/PROJECT-CONTEXT.md`.
10. If the user changes `START.md` back to `Status: not completed`, the existing
   context is paused until Start Discovery is completed again.

This prevents context creation or updates from being based on unclear intent and
reduces rework, redundancy and hallucination.

## Continuous Orchestration Command

When the user asks the active coordinator to start the orchestrator and execute tasks without
stopping, the active coordinator must:

1. Create or verify an active **Metas** goal when the tool is available.
2. Read `README.md`, `tasks/ORCHESTRATOR.md` and `tasks/AGENT-COMMUNICATION.md`.
3. Read READMEs and TASK-MANAGERs under `tasks/modules/**`.
4. Create or open a dated task in the correct module.
5. Execute the task until a verifiable point.
6. Update percentage, evidence, validations, pending items and next step.
7. Update the permanent module TASK-MANAGER when state changes.
8. Update `tasks/ORCHESTRATOR.md` at the end of the cycle.
9. Continue while there is an active goal, registered task or objective next
   step.

Recommended activation sentence for Codex:

```text
Start the orchestrator and execute the tasks. At the end of each task, update the task manager document, update the progress percentage and update the orchestrator. The orchestrator and tasks must not stop while there is an active goal, registered task or objective next step. If web connectivity drops, wait for connectivity to return and resume from the last documented state. If admin permission is required, use the available admin authorization for console, browser, internal and external permissions, VPS, Vercel and external databases when necessary. Ask for manual admin intervention only as a last resort.
```

MADA records this as an internal orchestration rule in English.

## Configurable Agent Stack

MADA is agent-stack configurable. The default preset is Codex as coordinator
and OpenCode as auxiliary CLI assistant, but the user may choose a single-agent
workflow or another multi-agent combination during START.md discovery.

The selected stack is recorded in:

```text
docs/AGENT-STACK.md
```

Generic agent communication uses:

```text
tasks/AGENT-COMMUNICATION.md
```

When the default Codex + OpenCode preset is selected, Codex may delegate short, controlled blocks to OpenCode using:

```powershell
opencode run "<delegation-message>" -f <allowed-file>
```

Any auxiliary agent must not choose architecture, create scope independently,
run Git publication commands, manage secrets or administer infrastructure
unless the selected stack explicitly allows it and the user has authorized it.
If an auxiliary agent needs something outside delegated scope, it records a
request in `tasks/AGENT-COMMUNICATION.md`.

## Recommended Startup Order For The Active Coordinator

1. Read `README.md`.
2. Read `START.md`.
3. If `START.md` is not completed, run Start Discovery first.
4. After `START.md` is completed, update `docs/AGENT-STACK.md` and create or verify an active Metas goal when Codex is part of the selected stack.
5. Read `tasks/ORCHESTRATOR.md`.
6. Read `tasks/AGENT-COMMUNICATION.md`. If the default Codex + OpenCode preset is active, also read `tasks/OPENCODE-CODEX.md`.
7. Read `docs/AGENT-STACK.md` and `docs/PROJECT-CONTEXT.md`.
8. Read `docs/MODULE-CATALOG.md`.
9. Choose the correct module in `tasks/modules`.
10. Open or create a dated task file.
11. Execute, validate and update micro-memories.

## Safety Rules

- Do not store real secrets, tokens, passwords or connection strings in docs.
- Do not run destructive commands without explicit review and authorization.
- Do not publish, commit, push or deploy unless the user explicitly requests it.
- Treat real code and runtime configuration as the operational source of truth.
- If docs conflict with code, record the divergence before implementation.

## Package Development

Validate the CLI:

```powershell
node bin/mada.js --help
node bin/mada.js init . --dry-run
```

Create a local npm package:

```powershell
npm pack
```

Install the generated package locally:

```powershell
npm install -g .\mada-framework-0.1.0.tgz
```

Publish only when package name, license, version and npm account are ready:

```powershell
npm publish
```



