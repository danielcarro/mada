# Codex <-> OpenCode Communication

This document is the compatibility operational channel for the default MADA
preset: Codex as coordinator and OpenCode as auxiliary CLI agent.

The generic agent communication channel is:

```text
tasks/AGENT-COMMUNICATION.md
```

Use this file only when the selected docs/AGENT-STACK.md configuration includes
the default Codex + OpenCode preset or explicitly keeps OpenCode as an auxiliary
agent.

## Language Policy

Operational communication in this file should be written in English whenever
possible, even when the user request is written in Portuguese.

Rule: Portuguese in, English inside, Portuguese out.

- Codex translates the user's intent into concise English before creating a
  delegation.
- OpenCode reads and returns operational results in English in this file.
- Codex answers the user in Portuguese after reviewing the result.
- Folder names, file names, task IDs and delegation IDs should use English names
  when possible.

## Authority Rule

- Codex coordinates, updates the orchestrator, task managers and docs, breaks
  large tasks into short blocks, supervises code, validates results and decides
  commit/push only when the user authorizes that flow.
- OpenCode assists with short tasks explicitly delegated by Codex in this file.
- OpenCode does not choose the next task, change architecture, create
  structures, change contracts, run destructive commands or touch secrets.
- If there is doubt, conflict or risk, OpenCode must stop and register the
  blocker in this file for Codex to decide.
- OpenCode should keep returns concise and operational.

## Required Work Cycle

1. Codex creates or updates the dated task file in the correct module.
2. Codex breaks the problem into small tasks.
3. Codex records an objective delegation in Active Delegations.
4. OpenCode executes only delegations with Status: pending.
5. Before executing, OpenCode changes the delegation to in_progress.
6. OpenCode respects objective, allowed files and allowed commands.
7. OpenCode records the result in OpenCode Returns.
8. OpenCode changes the delegation to returned.
9. Codex reviews, validates, fixes when necessary and closes the delegation.

Valid statuses:

- pending
- in_progress
- returned
- reviewed
- completed

## First Operational OpenCode Command

When Codex delegates a task that requires attaching a file through the OpenCode
CLI, the first allowed operational command is:

```bash
opencode run -f file.ts
```

file.ts is a placeholder for the real path authorized by Codex.

## Delegation Format

```text
ID:
Status: pending | in_progress | returned | reviewed | completed
Module:
Dated task:
Objective:
Allowed scope:
Out of scope:
Allowed files:
Allowed commands:
Expected validation:
Expected return:
```

## Active Delegations

No active delegation. Codex should create the next delegation only after opening
a dated task for the active project or initiative.

## OpenCode Returns

No return registered for the new base.

## OpenCode Requests

No open request.

Template:

```text
Delegation ID:
Request status: open | answered | assumed_by_codex | blocked
Request:
Reason:
Risk if unanswered:
Codex answer:
Codex action:
```

## Codex Supervision Log

- 2026-06-08: Old context removed from this channel. Document ready for the next
  active project or initiative.
- 2026-06-08: Internal language policy recorded. Operational Codex/OpenCode
  communication should use English.
- 2026-06-08: Channel marked as compatibility-specific for the default
  Codex + OpenCode preset. Generic communication now lives in
  tasks/AGENT-COMMUNICATION.md.


