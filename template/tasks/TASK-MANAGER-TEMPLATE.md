# Task Manager

## Topic

[YYYY-MM-DD] - [area/module]: [short request summary]

## Objective

Describe in one or two sentences the expected result:

- problem to solve;
- main scope;
- general success criterion.

## Project Context

Record how this request fits the current application. If the application context
is not documented yet, update docs/PROJECT-CONTEXT.md before implementation.

## Allowed Scope

- List files, modules, services or layers that may be changed.
- Prefer incremental changes.
- Reuse existing code whenever possible.

## Out Of Scope

- List what must not be changed without authorization.
- Do not change global architecture without a recorded approval.
- Do not remove existing code without impact analysis.
- Do not change critical integrations without validation.
- Do not touch secrets, database, infrastructure or remote publication without
  authorization.

## Acceptance Criteria

- [ ] The main request was implemented.
- [ ] No existing flow was broken.
- [ ] The code follows the current architecture.
- [ ] Concrete evidence was recorded.
- [ ] Validations proportional to risk were executed.
- [ ] Documentation impact was evaluated.
- [ ] The next step was updated.

## How To Use

- Understand objective and scope before implementation.
- Break the request into objective tasks.
- Keep each task with status: Pending, In Progress, Blocked or Done.
- Update concrete evidence.
- Recalculate general progress after each cycle.
- Update Next Step before closing.

## Overall Progress

0% complete - 0 of 5 tasks done.

## Tasks

| ID | Task | Status | Evidence/result |
| -- | ---- | ------ | --------------- |
| T-001 | Understand the request and define technical scope. | Pending | Waiting for analysis. |
| T-002 | Locate affected files, flows and dependencies. | Pending | Waiting for code analysis. |
| T-003 | Implement the main change. | Pending | Waiting for implementation. |
| T-004 | Validate behavior with tests, typecheck, lint or manual verification. | Pending | Waiting for validation. |
| T-005 | Record final result and next step. | Pending | Waiting for closure. |

## Related Files

| File | Purpose | Status |
| ---- | ------- | ------ |
| src/... | Describe purpose. | To map. |

## Dependencies And Impacts

| Item | Expected impact | Note |
| ---- | --------------- | ---- |
| Related module | Low/Medium/High | Describe impact. |

## Technical Decisions

| Date | Decision | Reason |
| ---- | -------- | ------ |
| YYYY-MM-DD | Record relevant decision here. | Explain the criterion. |

## Execution Log

| Date | Action | Result |
| ---- | ------ | ------ |
| YYYY-MM-DD | Record executed action. | Inform result or evidence. |

## Validations

| Command/action | Result | Notes |
| -------------- | ------ | ----- |
| npm run typecheck | Not executed | Execute when TypeScript exists. |
| npm run lint | Not executed | Execute when a linter exists. |
| npm test | Not executed | Execute when tests exist. |
| Manual validation | Not executed | Describe manually validated flow. |

## Pending Items And Risks

- Record blockers, known risks or pending validations.

## Documentation Impact

Record updated docs/READMEs or justify no update.

## Final Result

Fill when the task is complete.

Summary:

- What was done:
- Files changed:
- What was validated:
- What remains pending:

## Next Step

Define the next objective action before closing each cycle.

