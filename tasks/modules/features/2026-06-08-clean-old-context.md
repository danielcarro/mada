# Clean Old Context

## Topic

2026-06-08 - features: clean markdown structure for a project context

## Objective

Turn the operational markdown structure into a reusable base for new
applications, removing old project context without touching application
code.

## Allowed Scope

- Root instruction and context markdown files.
- tasks/ORCHESTRATOR.md.
- tasks/OPENCODE-CODEX.md.
- tasks/TASK-MANAGER-TEMPLATE.md.
- tasks/modules/**/README.md.
- tasks/modules/**/TASK-MANAGER.md.
- docs/*.md placeholders.

## Out Of Scope

- Application code.
- Git, commit, push, reset, merge or rebase.
- Infrastructure, database, secrets, envs, deployment or remote publication.

## Result

- Old context removed from central operational documents.
- Permanent task managers reset to wait for the next active project or initiative.
- Module READMEs preserved as reusable categories.
- Old dated task history removed from tasks/modules.
- docs/ reduced to generic placeholders.
- README.md, AGENTS.md and tasks/ORCHESTRATOR.md updated with the active Metas
  and continuous orchestration rule.
- README.md and tasks/ORCHESTRATOR.md updated to explain the framework as a
  system of dynamically updated micro-memories that reduces lost work,
  redundancy and AI hallucination.
- Every folder inside tasks/modules normalized to include an explanatory
  README.md and TASK-MANAGER.md with status waiting for orders, including
  subfolders such as tests/logs.
- README.md, AGENTS.md, tasks/ORCHESTRATOR.md and tasks/OPENCODE-CODEX.md
  updated with the rule Portuguese in, English inside, Portuguese out.
- Operational folders and files migrated to English names:
  tasks/, tasks/modules/, tasks/ORCHESTRATOR.md,
  tasks/TASK-MANAGER-TEMPLATE.md, docs/PROJECT-CONTEXT.md and
  docs/reusable-functions-index.md.
- tasks/modules expanded into a global software-development taxonomy covering
  common project areas such as product, requirements, architecture, design,
  frontend, backend, API, data, security, tests, DevOps, deployment, docs,
  maintenance, refactoring and troubleshooting.
- docs/MODULE-CATALOG.md created as the canonical catalog for choosing the
  correct task module.
- tasks/ORCHESTRATOR.md, docs/README.md and README.md updated to document the
  global module structure.
- START.md created as the Socratic discovery gate for project intent discovery.
- docs/START-ANSWERS.md created to store ordered discovery answers before
  synthesizing docs/PROJECT-CONTEXT.md.
- README.md, AGENTS.md, tasks/ORCHESTRATOR.md and docs/README.md updated with
  the rule that docs/PROJECT-CONTEXT.md is paused while START.md is not
  completed.
- START.md, docs/START-ANSWERS.md, README.md, AGENTS.md, tasks/ORCHESTRATOR.md
  and docs/README.md updated with the required final question:
  "Podemos prosseguir com a criação do contexto do projeto?". If the user
  answers yes, Codex must mark START.md as completed and start
  docs/PROJECT-CONTEXT.md.
- START completion rule updated: after START.md is completed, Codex must create
  or verify an active Metas goal before creating or updating
  docs/PROJECT-CONTEXT.md.
- Ambiguous wording corrected: completed START.md means skip the discovery flow
  only after Metas is active.
- MADA prepared as an npm-installable package with package.json, LICENSE,
  bin/mada.js, template/ and the local tarball mada-framework-0.1.0.tgz.
- README.md converted to English and synchronized into template/README.md.
- MADA made agent-stack configurable:
  - Codex + OpenCode remains the default ready-to-use preset.
  - START.md now asks for single-agent vs multi-agent workflow, selected agents,
    models/providers and programming language/stack.
  - docs/AGENT-STACK.md created to record selected agents, models, CLI tools,
    delegation rules and programming stack.
  - tasks/AGENT-COMMUNICATION.md created as the generic agent communication
    channel.
  - tasks/OPENCODE-CODEX.md kept as compatibility channel for the default
    Codex + OpenCode preset.
  - bin/mada.js now supports --agent-preset and --language initial hints.
- GitHub-only distribution documented in docs/GITHUB-DISTRIBUTION.md.
- No application code was changed in this cycle.
- No Git command was used to change repository state.

## Validations

- Structural scan: every folder in tasks/modules has README.md and
  TASK-MANAGER.md.
- All permanent task managers are waiting for orders.
- Internal operational docs and module micro-memories use English names and
  English instructions.
- Global module taxonomy created and documented in docs/MODULE-CATALOG.md.
- Start Discovery flow created and documented with START.md and
  docs/START-ANSWERS.md.
- npm package validation passed: node bin/mada.js --help, node bin/mada.js init
  . --dry-run, npm pack, and a temporary install containing 153 template files.
- Configurable-agent package validation passed: node bin/mada.js --version,
  node bin/mada.js --help, temp install with --agent-preset custom --language
  rust, and npm pack with 160 files.
- README.md is now written in English; only required protocol quotes may remain
  in another language when the workflow explicitly requires them.

## Documentation Impact

Operational documentation updated to generic reusable base. The next project context must be filled or updated in docs/PROJECT-CONTEXT.md before implementation, review, repair, improvement, innovation or tool adoption.

## Next Step

Run START.md discovery to capture the exact user intent, then fill or update
docs/PROJECT-CONTEXT.md and create the first dated task for the active project
or initiative.






