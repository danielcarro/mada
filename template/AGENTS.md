# AGENTS.md - MADA Agent Instructions

## Role In This Workspace

MADA supports configurable agent stacks. The default ready-to-use preset is:

- Primary coordinator: Codex CLI.
- Auxiliary agent: OpenCode CLI.
- Mode: supervised multi-agent delegation.

This preset must remain available, but it is not mandatory. During START.md
discovery, the user may choose Codex only, OpenCode only, Codex + OpenCode,
another single-agent workflow, another multi-agent workflow, specific models,
local models, or a custom stack.

The active stack must be recorded in docs/AGENT-STACK.md before project context
is finalized.

## Language Policy

Use "Portuguese in, English inside, Portuguese out" when the user speaks
Portuguese.

- The user may write requests in Portuguese.
- Internally translate intent to English for planning, task IDs, folder names,
  file names, operational instructions and agent delegation messages.
- Keep internal micro-memories in English whenever possible to reduce token
  usage, ambiguity, redundant wording and hallucination.
- Reply to the user in their language.

## Required Startup Order

1. Read README.md at the repository root.
2. Read START.md.
3. Read docs/AGENT-STACK.md.
4. Read docs/PROJECT-CONTEXT.md when START.md is completed.
5. Read tasks/ORCHESTRATOR.md.
6. Read tasks/AGENT-COMMUNICATION.md.
7. If the default Codex + OpenCode preset is active, read
   tasks/OPENCODE-CODEX.md.
8. Read the permanent manager for the active module.
9. Read the dated task file selected by the coordinator.
10. Read only docs and code that the coordinator or task manager points to.

## Auxiliary Agent Limits

Auxiliary agents may execute reading, validation, command and small edit tasks
only when the active coordinator delegates them through the orchestrator, agent
communication channel and task managers.

Auxiliary agents must stop and return the decision to the coordinator when a
task requires:

- a new folder structure;
- architecture changes;
- convention changes;
- product-flow decisions;
- credentials or secrets;
- destructive commands;
- unclear scope;
- infrastructure, database, keys, environment variables or remote publication.

Commit and push are coordinator responsibilities only when explicitly
authorized by the user. Auxiliary agents must not run git commit, git push,
tags, rebase, merge, reset or any remote publication command.

## Before Any Work

1. Read README.md first.
2. Read START.md.
3. If START.md is not completed and the request requires project context, pause
   docs/PROJECT-CONTEXT.md work and run Start Discovery first.
4. Read docs/AGENT-STACK.md.
5. Read tasks/ORCHESTRATOR.md.
6. Read tasks/AGENT-COMMUNICATION.md.
7. If the default Codex + OpenCode preset is active, read
   tasks/OPENCODE-CODEX.md.
8. Read all tasks/modules/**/README.md.
9. Check tasks/modules/<module>/ for task-specific .md files.
10. Read only docs and code related to the active task.
11. Treat code and runtime schemas/configuration as the operational source of
   truth for the active project.

## Start Discovery

START.md is the discovery gate for the user's exact project intent. If it is
not completed, the active coordinator must ask Socratic questions in the user
language and record ordered answers in docs/START-ANSWERS.md.

docs/PROJECT-CONTEXT.md must remain paused until START.md is marked completed.
docs/AGENT-STACK.md must remain pending until the user chooses the agent/model
stack and programming language/stack.

The final Start Discovery question must be:

```text
Podemos prosseguir com a criação do contexto do projeto?
```

If the user answers yes, the active coordinator must mark START.md as completed,
record the final approval in docs/START-ANSWERS.md, update docs/AGENT-STACK.md,
create or verify an active Metas goal when Codex is part of the selected stack,
and then create or update docs/PROJECT-CONTEXT.md.

If the user answers no, keep START.md not completed and continue discovery.

## Continuous Orchestration Command

When the user asks the coordinator to start the orchestrator and execute tasks
without stopping, the coordinator must create or verify an active Metas goal
when Codex is part of the selected stack and the Metas tool is available.

The active goal must preserve this objective: keep the orchestrator running,
execute registered tasks, update dated task managers, update progress
percentages, update permanent module managers when state changes and update
tasks/ORCHESTRATOR.md after each completed task or verifiable block.

If the web connection drops, wait for connectivity to return and resume from the
last documented state. Ask for manual admin intervention only as a last resort
when there is a real blocker, missing credential, destructive risk or product
decision that cannot be safely inferred.

## Project Context

No project-specific context is assumed in this base. Before implementation,
review, repair, improvement, innovation or tool adoption, create or update:

- docs/AGENT-STACK.md
- docs/PROJECT-CONTEXT.md
- docs/README.md
- the active module manager in tasks/modules/<module>/TASK-MANAGER.md
- a dated task file under the active module

## Environment And Secrets

- Never print, log or commit .env values or secrets.
- Never copy real credentials into docs, tests, prompts or task logs.
- Never run destructive commands against databases, queues, containers, cloud
  resources or Git history without explicit authorization.

## Reuse Before Creating

Before writing new helpers, services, schemas, adapters, jobs, routes or UI
patterns, inspect existing code and docs/reusable-functions-index.md when
relevant.
