# Start Discovery

Status: not completed

This file is the discovery gate for project intent.

Start Discovery is not limited to creating a new application from zero. It also
applies when the user wants to review an existing project, diagnose errors,
plan improvements, suggest innovations, evaluate new tools, modernize a stack,
or clarify any development objective before execution.

When this file is marked as `completed`, the active coordinator should ignore the discovery flow only after docs/AGENT-STACK.md is updated and an active Metas goal is created or verified when Codex is part of the selected stack. Then the active coordinator may continue
using docs/PROJECT-CONTEXT.md as the active project context.

When this file is `not completed`, the active coordinator must pause creation or update of
docs/PROJECT-CONTEXT.md and help the user define exactly what they want to do
before implementation, review, repair, innovation or tool adoption starts.

If the user changes this file from `completed` back to `not completed`, any
existing docs/PROJECT-CONTEXT.md must be treated as paused. The active coordinator may read it for awareness, but must not treat it as final until Start Discovery is completed
again.

## Purpose

Start Discovery helps the active coordinator capture the user's real intent before work begins.
The goal is to avoid assuming that the user wants a new application when they
may actually want to fix, audit, improve, extend, rethink, modernize or equip an
existing project.

The active coordinator must:

1. Ask short Socratic questions in Portuguese.
2. First identify exactly what the user wants to do now.
3. Avoid overwhelming the user; ask one small group of questions at a time.
4. Record each answer in docs/START-ANSWERS.md.
5. Keep the answers ordered by discovery section.
6. Distinguish the user's original wording from the coordinator's normalized English
   interpretation.
7. Only create or update docs/PROJECT-CONTEXT.md after this file is marked
   `completed`.

## User-Facing Rule

Questions to the user must be in Portuguese.

Internal summaries, normalized answers, filenames, task IDs and operational
notes must be in English.

Rule: Portuguese in, English inside, Portuguese out.

## Completion Rule

Mark this file as completed only when the discovery answers are sufficient to
create the first useful version of docs/PROJECT-CONTEXT.md for the user's real
objective. That context may describe a new application, an existing project
review, an error investigation, an improvement plan, an innovation proposal, a
tool adoption plan, or a mixed initiative.

The last question in the discovery flow must be asked in Portuguese:

```text
Podemos prosseguir com a criação do contexto do projeto?
```

If the user answers yes, the active coordinator must:

1. Change this file to `Status: completed`.
2. Update docs/START-ANSWERS.md with the final approval.
3. Update docs/AGENT-STACK.md with the selected agents, models and programming
   stack.
4. Create or verify an active Metas goal when Codex is part of the selected
   stack.
5. Start creating or updating docs/PROJECT-CONTEXT.md from the ordered answers.

If the user answers no, the active coordinator must keep this file as `Status: not completed`,
ask what is missing, and continue Start Discovery.

Use exactly one of these statuses:

```text
Status: not completed
Status: completed
```

## Discovery Flow

The active coordinator should guide the user through these stages. Do not ask every question at
once. Select the smallest useful group based on the user's current answer.

### 1. Exact Intent

- What exactly do you want to do now: create from zero, review an existing
  project, fix errors, improve something, add features, suggest innovations,
  evaluate tools, modernize the stack, or another objective?
- What triggered this request now?
- What result would make you say: "yes, this is what I wanted"?

### 2. Current Situation

- Is there already a project, codebase, product, documentation or only an idea?
- If something already exists, what is working and what is not working?
- Which files, folders, URLs, logs, screenshots or docs should Codex inspect?

### 3. Problem Or Opportunity

- What pain, inefficiency, risk, error or opportunity should be addressed?
- Who feels this problem or opportunity most strongly?
- What happens if nothing changes?

### 4. Desired Outcome

- What should be different after this work is completed?
- Which outputs do you expect: context, diagnosis, fixes, code, architecture,
  tool recommendation, innovation backlog, roadmap, deployment or tests?
- What should explicitly stay out of scope?

### 5. Users And Stakeholders

- Who uses, maintains, pays for, approves or operates the project?
- Are there admins, operators, clients, tenants, support staff or external
  systems involved?
- What does each actor need to accomplish or understand?

### 6. Scope And Priority

- What is the smallest useful next step?
- What must be handled first?
- What can wait until a later cycle?

### 7. Product Flows Or Technical Areas

- Which user flows, screens, APIs, jobs, modules or services are involved?
- Which steps require data entry, approval, payment, communication, AI or
  automation?
- What should happen when a flow fails?

### 8. Data

- What information exists or must be stored?
- Which data is sensitive, private, auditable, searchable or exportable?
- Are there existing schemas, databases, files or external data sources?

### 9. Integrations, Tools And Innovation

- Which external APIs, payment providers, email, SMS, WhatsApp, maps, files,
  AI models, databases or automation tools are involved or desired?
- Are there tools the selected agent stack should evaluate, replace, install or
  avoid?
- Should the selected agent stack suggest innovations, new tools or alternative
  workflows?

### 10. Agent Stack And Models

- Which AI agents or coding assistants do you want to use? Examples: Codex,
  OpenCode, only one agent, both together, another CLI assistant, or a custom
  combination.
- Should the workflow be single-agent or multi-agent? If multi-agent, which
  agent coordinates and which agents assist?
- Which LLMs, model families, providers or local models should be used or
  avoided?
- Should MADA keep the default Codex + OpenCode preset, or adapt to another
  agent/model stack?

### 11. Programming Language And Stack

- Which programming language or languages should the project use or preserve?
- Which frameworks, runtimes, package managers, databases, test tools and build
  tools should be used?
- If this is an existing project, should MADA infer the language and commands
  from the repository before changing anything?

### 12. AI And Automation

- Should AI be part of the project, review, improvement or innovation plan?
- If yes, should AI answer, generate, classify, search, automate, monitor or
  act?
- Which AI actions need human confirmation?

### 13. Security And Permissions

- Who can access the project, system, data or operational tools?
- Are there roles, permissions or tenant/workspace boundaries?
- Which actions are risky and need audit, confirmation or rollback planning?

### 14. Platform And Runtime

- Is this a web app, mobile app, desktop app, API, automation, CLI, monorepo,
  infrastructure task, documentation effort or hybrid project?
- Are there known preferences for hosting, deployment or development tools?
- Are there constraints such as budget, deadline, team size, legacy code or
  existing contracts?

### 15. First Action Plan

- What is the first verifiable action the selected agent stack should take after
  context creation?
- Which validations will prove that the first action worked?
- What should the selected agent stack report back to the user at the end of the
  first cycle?

### 16. Final Approval

This must be the last question:

```text
Podemos prosseguir com a criação do contexto do projeto?
```

- If yes: mark START.md as completed, update docs/AGENT-STACK.md, activate or
  verify Metas in Codex when Codex is part of the selected stack, and start
  docs/PROJECT-CONTEXT.md.
- If no: keep START.md not completed and continue discovery.

## Output

The ordered answers live in:

```text
docs/START-ANSWERS.md
```

After this file is completed, the active coordinator should synthesize those
answers into:

```text
docs/PROJECT-CONTEXT.md
```




