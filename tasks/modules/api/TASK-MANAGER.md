# Permanent Task Manager - API

Status: waiting for orders.

This folder is ready to receive requests for **api**. No product task is
active right now.

## Current State

| Field | Value |
| ----- | ----- |
| Module | api |
| Operational status | Waiting for orders |
| Active task | None |
| Current progress | 0% |
| Last update | 2026-06-08 |
| Next step | Wait for a user request or orchestrator delegation |

## What This Module Controls

- create API routes.
- validate requests.
- standardize responses.
- apply authorization.
- test status codes and limits.

## How To Register A New Order

When the user asks for a task related to this module, the active coordinator must:

1. Create a YYYY-MM-DD-short-summary.md file in this folder.
2. Copy the structure from tasks/TASK-MANAGER-TEMPLATE.md.
3. Record objective, allowed scope and out-of-scope items.
4. Define small tasks with initial progress.
5. Execute only what is inside the allowed scope.
6. Update this manager if the permanent module state changes.
7. Update tasks/ORCHESTRATOR.md at the end of the cycle.

## Initial Inventory

| Item | State | Note |
| ---- | ----- | ---- |
| Application context | To define | Fill docs/PROJECT-CONTEXT.md before implementing real product work. |
| Related code | To map | Read only when there is an active task. |
| Related docs | To map | Create or update as the active project or initiative requires. |
| Validations | To define | Choose commands proportional to task risk. |

## Known Pending Items

- Wait for the first concrete order for this module.
- Map real files only after the application context is filled.

## Risks

- Using memory from an old application instead of the new context.
- Creating structure before understanding the request.
- Running administrative commands without recording reason and risk.

## Next Step

Waiting for orders.



