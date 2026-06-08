# Task Orchestrator

This file is the central coordination point for MADA AI-agent work in this workspace.
It is a reusable base for creating, reviewing, repairing, improving and innovating software projects.

This framework works through dynamically updated micro-memories. Each README,
permanent task manager, dated task file, context document and agent return stores a small part of the work state. This reduces lost work,
redundancy and AI hallucination.

There is no active product context yet. Before implementing, reviewing, repairing, improving, innovating or adopting tools, the active coordinator must record docs/AGENT-STACK.md, record docs/PROJECT-CONTEXT.md and open a dated task file in the correct module.

Before creating or updating docs/PROJECT-CONTEXT.md, the active coordinator must check START.md. If START.md is not completed, agent stack selection and project context creation or update are paused and the active coordinator must run Start Discovery first.

## Language Policy

Use Portuguese in, English inside, Portuguese out.

- The user may give instructions in Portuguese.
- The active coordinator must translate the intent internally to English before planning,
  naming folders, naming files, creating task IDs, writing operational
  instructions or delegating work to auxiliary agents.
- Internal documentation, task identifiers, folder names, file names,
  automation instructions and agent delegation messages should be in
  English whenever possible.
- Final answers to the user must be in Portuguese.

## Agent Stack

MADA supports configurable agent stacks. The default ready-to-use preset is:

- Primary coordinator: Codex CLI.
- Auxiliary agent: OpenCode CLI.
- Mode: supervised multi-agent delegation.
- Generic communication: tasks/AGENT-COMMUNICATION.md.
- Compatibility communication: tasks/OPENCODE-CODEX.md.

The user may choose a different setup during START.md discovery: single-agent,
Codex only, OpenCode only, another CLI assistant, another model provider, local
models or a custom multi-agent stack. The selected stack must be recorded in
docs/AGENT-STACK.md before project context is finalized.

Auxiliary agent limits:

- Do not create structures by initiative.
- Do not change architecture, contracts, product flow, conventions or folder
  organization without explicit coordinator delegation.
- Do not open independent tasks or choose next steps outside the orchestrator.
- Execute only short tasks delegated by the active coordinator.
- Return results in tasks/AGENT-COMMUNICATION.md, or in tasks/OPENCODE-CODEX.md
  when the default Codex + OpenCode preset is active.
- Never run commit, push, tag, merge, rebase, reset or remote publication.
- Never administer infrastructure, database, keys, environment variables or
  secrets.
- Stop and return the decision to the coordinator when scope, permission,
  secret, structure or risk is unclear.

## Main Rule

No code change should be made before consulting:

- root README.md;
- START.md;
- tasks/ORCHESTRATOR.md;
- docs/AGENT-STACK.md;
- tasks/AGENT-COMMUNICATION.md;
- tasks/OPENCODE-CODEX.md when the default Codex + OpenCode preset is active;
- every README.md in tasks/modules/**;
- TASK-MANAGER.md for the active module;
- active dated task file, when it exists;
- related docs in docs/;
- directly affected code files.

If no dated task exists for the request, create one from
tasks/TASK-MANAGER-TEMPLATE.md. If the correct module is ambiguous, choose the
most specific one and record the decision.

## Start Discovery Gate

START.md is the required discovery gate for the user's exact project intent.

Status rules:

- If START.md contains `Status: completed`, the active coordinator should ignore the discovery
  flow only after creating or verifying an active Metas goal. Then the active coordinator may
  use docs/PROJECT-CONTEXT.md as the active context source.
- If START.md contains `Status: not completed`, the active coordinator must pause creation or
  update of docs/PROJECT-CONTEXT.md and help the user clarify the exact objective through Socratic questions: create, review, fix, improve, innovate, modernize or evaluate tools.
- If the user changes START.md from completed back to not completed, any
  existing docs/PROJECT-CONTEXT.md is paused. The active coordinator may read it for awareness
  but must not treat it as final until START.md is completed again.

Discovery answer rules:

- Ask the user short Socratic questions in the user language.
- Record answers in docs/START-ANSWERS.md in the order defined by START.md.
- Preserve useful original Portuguese wording when needed.
- Also write a concise normalized English interpretation for internal use.
- Do not create or overwrite docs/PROJECT-CONTEXT.md until START.md is marked
  completed.
- The final discovery question must be:
  `Podemos prosseguir com a criação do contexto do projeto?`
- If the user answers yes to the final question, the active coordinator must mark START.md as `Status: completed`, record final approval in docs/START-ANSWERS.md, update docs/AGENT-STACK.md, create or verify an active Metas goal when Codex is part of the selected stack, and then start creating docs/PROJECT-CONTEXT.md.
- If the user answers no, the active coordinator must keep START.md as `Status: not completed`,
  ask what is missing and continue Start Discovery.

When START.md becomes completed, the active coordinator must update docs/AGENT-STACK.md, create or verify an active Metas goal when Codex is part of the selected stack, synthesize docs/START-ANSWERS.md into docs/PROJECT-CONTEXT.md and then continue normal orchestration.

## Continuous Orchestration And Metas

When the user asks the active coordinator to start the orchestrator and execute tasks without
stopping, the active coordinator must enter continuous orchestration mode.

Required rule:

1. The active coordinator must create or verify an active Metas goal immediately when Codex is part of the selected stack and the Metas
   tool is available.
2. The goal must state that the active coordinator must keep the orchestrator active, execute
   tasks, update task managers, update progress percentages and update this
   tasks/ORCHESTRATOR.md file.
3. If Metas is required but unavailable, the active coordinator must record that limitation in the active task
   and continue through the documented protocol.
4. After each task or verifiable block, the active coordinator must update:
   - the active dated task;
   - progress percentage;
   - permanent TASK-MANAGER.md for the module when state changes;
   - operational control in this orchestrator;
   - validations, pending items, risks and next step.
5. The cycle must not stop by coordinator initiative while there is a registered task,
   objective next step or active goal.

After START.md is completed, docs/AGENT-STACK.md must be active every time a project starts. If Codex is part of the selected stack, Metas must also be active. The required sequence is: START.md completed -> AGENT-STACK active -> Metas active when required -> docs/PROJECT-CONTEXT.md creation/update -> normal orchestration.

If the web connection drops, the active coordinator must wait for connectivity to return and
resume from the last documented state. If an action requires admin permission,
the user's standing authorization applies to console, browser, internal and
external permissions, VPS, Vercel and external database actions that are
necessary for the task. Ask for manual admin intervention only as a last resort
when there is a real blocker, missing credential, destructive risk or product
decision that cannot be safely inferred.

Even with standing authorization, the active coordinator must respect guardrails: do not expose
secrets, do not run destructive commands without evaluating risk, do not publish
remotely without recorded need and do not change product scope without recording
the decision.

## Required Flow Before Implementation

1. Read required documents.
2. Check START.md.
3. If START.md is not completed and the request requires project context, run Start Discovery before context creation or update.
4. Record or update docs/AGENT-STACK.md with agent mode, models, CLI tools, programming language and project stack.
5. Identify the active module.
6. Open or create the dated task manager for the request.
7. Record objective, allowed scope, out-of-scope items and acceptance criteria.
8. Map affected docs and code.
9. Confirm security, data, secrets, infrastructure and regression risks.
10. Implement incrementally using existing patterns.
11. Validate proportionally to risk and the selected language/stack.
12. Update dated task, permanent module manager and affected docs.
13. Update the operational control section of this orchestrator.
14. Answer the user in Portuguese with a clear and verifiable summary.

## Documentation Maintenance Rule

Update documentation when there is a change in:

- product context;
- business rule or user flow;
- architecture, contract, schema, endpoint, job, queue, repository or service;
- local setup, deployment, infrastructure, database, envs or integrations;
- security, permission, audit, logs or secrets;
- folder structure, work conventions, agent stack, model selection or delegation process.

If there is no documentation impact, record in the dated task:

```text
Documentation impact: reviewed; no update needed.
```

## Operational Control

Update this section at the end of every work cycle.

| Field | Value |
| ----- | ----- |
| Last update | 2026-06-08 |
| Active module | features |
| Active task file | tasks/modules/features/2026-06-08-clean-old-context.md |
| Last task progress | 100% |
| Last executed task | Internal structure migrated to English names. |
| Main files changed | README, START, AGENTS, docs, tasks and module micro-memories. |
| Last validation | Structural scan for missing README.md and TASK-MANAGER.md. |
| Immediate pending items | Complete START.md before finalizing docs/PROJECT-CONTEXT.md. |
| Registered next step | Run Start Discovery with the user. |

## Task Folder Structure

```text
tasks/
  ORCHESTRATOR.md
  OPENCODE-CODEX.md
  TASK-MANAGER-TEMPLATE.md
  modules/
    <module>/
      README.md
      TASK-MANAGER.md
      YYYY-MM-DD-short-summary.md
```

Required rule for tasks/modules subfolders:

- Every folder inside tasks/modules, including subfolders such as
  database/mysql, infrastructure/vercel, pages/layout and tests/logs, must have
  a README.md file.
- Every folder inside tasks/modules must have a TASK-MANAGER.md file.
- README.md must explain to the user what the folder is for, which tasks belong
  there, when to use it, when not to use it and which guardrails apply.
- TASK-MANAGER.md must be the permanent module micro-memory and must stay with
  status waiting for orders when there is no active task.
- If Codex creates a new subfolder inside tasks/modules, it must create both
  files in the same cycle.

## Global Module Taxonomy

The tasks/modules tree is a generic software-development taxonomy. It should
cover most code-based projects before any application-specific module is added.

Use the most specific module available:

- product: product goals, personas, journeys and prioritization.
- requirements: functional and non-functional requirements.
- project-management: planning, milestones, backlog and sequencing.
- architecture: system design, boundaries, layers and tradeoffs.
- design: visual design, design systems, components and tokens.
- ux: usability, flows, information architecture and interface copy.
- accessibility: a11y, keyboard flows, semantics, contrast and screen readers.
- frontend: client-side code, UI components, rendering and forms.
- pages: page-level views and screens.
- pages/layout: shells, headers, sidebars, menus and layout composition.
- pages/styles: themes, visual polish, responsiveness and style consistency.
- state-management: client state, server state, stores and synchronization.
- backend: server-side code, services, domain logic and runtime behavior.
- api: HTTP/RPC APIs, endpoints, handlers, status codes and rate limits.
- routes: URL structure, redirects, route groups and entry points.
- cli: command-line tools, flags, arguments and terminal workflows.
- mobile: mobile application work, device APIs and mobile builds.
- desktop: desktop application work, installers and desktop runtime behavior.
- auth: authentication, sessions, login, signup and identity.
- permissions: authorization, RBAC, policies and guards.
- user: profiles, account data, preferences and personal data.
- database: persistence, models, migrations, repositories and queries.
- database/mysql: relational database work.
- database/qdrant: vector database and semantic-search work.
- data: imports, exports, transformations, datasets and data quality.
- records: business records, normalization and deduplication.
- cache: cache strategy, invalidation and freshness.
- storage: files, uploads, downloads, blobs and retention.
- search: text search, filters, indexing and search relevance.
- validation: schemas, input validation, normalization and safe parsing.
- contracts: DTOs, types, schemas, event contracts and layer interfaces.
- integrations: third-party APIs, SDKs, adapters and webhooks.
- payments: payment providers, subscriptions, invoices and reconciliation.
- communications: email, SMS, WhatsApp, push, chat and delivery providers.
- notifications: in-app alerts, push notifications and preferences.
- workflows: state machines, approvals, scheduling and long-running processes.
- worker: jobs, queues, consumers, schedulers and async processing.
- ai: AI features, agents, prompts, tools, RAG and supervised actions.
- ai/next-gen: isolated future AI work.
- security: hardening, secrets, vulnerabilities, isolation and sanitization.
- compliance: privacy, legal constraints, retention, consent and policies.
- tests: automated and manual validations.
- tests/logs: validation evidence and command summaries.
- qa: quality assurance, regression plans and acceptance checks.
- performance: latency, speed, throughput, bundle size and profiling.
- observability: logs, metrics, tracing, health checks and troubleshooting.
- errors: error handling, failure states, recovery and diagnostics.
- analytics: events, funnels, dashboards and measurement quality.
- configuration: envs, config files, feature flags and runtime options.
- dependencies: packages, lockfiles, updates and compatibility.
- tooling: developer tools, generators, linters, formatters and automation.
- scripts: setup, maintenance and utility scripts.
- monorepo: workspace structure, package graph and cross-package conventions.
- packages: reusable packages, exports, versioning and boundaries.
- shared: shared utilities, components, schemas and helpers.
- devops: operational workflows, automation and environment handoff.
- ci-cd: continuous integration, checks, artifacts and deployment gates.
- deployment: releases, rollout, rollback and post-deploy validation.
- infrastructure: cloud resources, servers, networks and runtime services.
- infrastructure/docker: containers, images, compose, volumes and networks.
- infrastructure/domains: domains, DNS, certificates and public routing.
- infrastructure/vercel: Vercel projects, builds, envs, logs and deployments.
- infrastructure/vps: server runtime, processes, logs and VPS operations.
- docs: documentation, guides and documentation maintenance.
- localization: translations, locales, timezones and i18n behavior.
- release: release notes, changelogs, rollout and post-release checks.
- maintenance: cleanup, upgrades, bugfix maintenance and project health.
- refactoring: code restructuring, simplification and deduplication.
- code-review: review findings, risks, regressions and missing tests.
- troubleshooting: debugging, reproduction, logs and root-cause analysis.
- features: broad cross-cutting requests before a more specific module is known.

If a request fits multiple modules, choose the narrowest module and record the
decision in the dated task. Use features only as a temporary split point.

## Checklist Before Saying Done

- [ ] Was the scope understood from the orchestrator and docs?
- [ ] Were the active module and task manager consulted?
- [ ] Were all README.md files in tasks/modules/** read?
- [ ] Did changes stay inside the allowed scope?
- [ ] Were security, data, secrets and permissions preserved?
- [ ] Does the code follow local patterns?
- [ ] Were validations proportional to risk executed?
- [ ] Was documentation impact evaluated?
- [ ] Was the task manager updated?
- [ ] Did the user receive a clear and verifiable Portuguese summary?









