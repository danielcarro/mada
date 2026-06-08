# Project Documentation

This directory is clean and ready to receive documentation for the next project
context. There is no active product context in this base.

## Suggested Fill Order

1. START.md to decide whether discovery is completed.
2. docs/START-ANSWERS.md while Start Discovery is running.
3. docs/AGENT-STACK.md after the user selects agents, models and programming
   stack.
4. Active Metas goal after START.md is completed when Codex is part of the
   selected stack.
5. docs/PROJECT-CONTEXT.md after START.md is completed, AGENT-STACK is recorded
   and Metas is active when required.
6. docs/MODULE-CATALOG.md to choose the correct global task module.
7. Architecture and setup documents for the active project or initiative.
8. Module, contract, data, security, deployment and operation documents.
9. docs/GITHUB-DISTRIBUTION.md when publishing MADA without npm registry.
10. docs/reusable-functions-index.md as reusable code appears.

## Base Documents

- START.md: Socratic discovery gate for the user's exact project intent.
- docs/START-ANSWERS.md: ordered discovery answers.
- docs/AGENT-STACK.md: selected agents, models, orchestration mode and
  programming stack.
- docs/PROJECT-CONTEXT.md: project context.
- docs/MODULE-CATALOG.md: global tasks/modules taxonomy.
- docs/GITHUB-DISTRIBUTION.md: GitHub-only distribution guidance.
- docs/reusable-functions-index.md: reusable code index.

## Start Discovery Rule

If START.md is not completed, docs/PROJECT-CONTEXT.md is paused. The active
coordinator must ask Socratic questions in the user language and record ordered
answers in docs/START-ANSWERS.md before synthesizing the final project context.

Start Discovery must also ask which agent/model stack and programming language
or runtime stack the user wants to use or preserve.

The final Start Discovery question must be:

```text
Podemos prosseguir com a criação do contexto do projeto?
```

If the user answers yes, the active coordinator marks START.md as completed,
updates docs/AGENT-STACK.md, creates or verifies an active Metas goal when Codex
is part of the selected stack, and then starts creating or updating
docs/PROJECT-CONTEXT.md.

## Precedence Rule

- Code and real configuration for the active project are the operational source
  of truth.
- Docs guide the work, but divergences must be recorded in the active task
  before implementation.
- Do not copy old project context into this folder without explicit user intent.

## Guardrails

- Do not record real secrets, tokens, passwords or connection strings.
- Do not document destructive commands without clear warnings and required
  authorization.
- Update docs when architecture, business rules, contracts, setup, security,
  deployment, agent stack, model selection or operational process changes.

