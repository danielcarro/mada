# Global Module Catalog

This document describes the generic tasks/modules taxonomy used by this
workspace. The goal is to cover most software projects that involve code before
creating application-specific modules.

Rule: choose the most specific module. Use `features` only when the request is
broad and still needs to be split.

## Product And Planning

- product: product goals, personas, journeys and prioritization.
- requirements: functional and non-functional requirements.
- project-management: planning, milestones, backlog and sequencing.

## Architecture And Design

- architecture: system design, boundaries, layers and tradeoffs.
- design: visual design, design systems, components and tokens.
- ux: usability, flows, information architecture and interface copy.
- accessibility: a11y, keyboard flows, semantics, contrast and screen readers.

## Application Surfaces

- frontend: client-side code, UI components, rendering and forms.
- pages: page-level views and screens.
- pages/layout: shells, headers, sidebars, menus and layout composition.
- pages/styles: themes, visual polish, responsiveness and style consistency.
- mobile: mobile application work, device APIs and mobile builds.
- desktop: desktop application work, installers and desktop runtime behavior.
- cli: command-line tools, flags, arguments and terminal workflows.

## Backend And APIs

- backend: server-side code, services, domain logic and runtime behavior.
- api: HTTP/RPC APIs, endpoints, handlers, status codes and rate limits.
- routes: URL structure, redirects, route groups and entry points.
- worker: jobs, queues, consumers, schedulers and async processing.
- workflows: state machines, approvals, scheduling and long-running processes.

## Data And Storage

- database: persistence, models, migrations, repositories and queries.
- database/mysql: relational database work.
- database/qdrant: vector database and semantic-search work.
- data: imports, exports, transformations, datasets and data quality.
- records: business records, normalization and deduplication.
- cache: cache strategy, invalidation and freshness.
- storage: files, uploads, downloads, blobs and retention.
- search: text search, filters, indexing and search relevance.

## Contracts And Validation

- contracts: DTOs, types, schemas, event contracts and layer interfaces.
- validation: schemas, input validation, normalization and safe parsing.
- state-management: client state, server state, stores and synchronization.
- shared: shared utilities, components, schemas and helpers.
- packages: reusable packages, exports, versioning and boundaries.
- monorepo: workspace structure, package graph and cross-package conventions.

## Identity, Safety And Compliance

- auth: authentication, sessions, login, signup and identity.
- permissions: authorization, RBAC, policies and guards.
- user: profiles, account data, preferences and personal data.
- security: hardening, secrets, vulnerabilities, isolation and sanitization.
- compliance: privacy, legal constraints, retention, consent and policies.

## Integrations And Product Operations

- integrations: third-party APIs, SDKs, adapters and webhooks.
- payments: payment providers, subscriptions, invoices and reconciliation.
- communications: email, SMS, WhatsApp, push, chat and delivery providers.
- notifications: in-app alerts, push notifications and preferences.
- analytics: events, funnels, dashboards and measurement quality.
- localization: translations, locales, timezones and i18n behavior.

## AI

- ai: AI features, agents, prompts, tools, RAG and supervised actions.
- ai/next-gen: isolated future AI work.

## Quality And Operations

- tests: automated and manual validations.
- tests/logs: validation evidence and command summaries.
- qa: quality assurance, regression plans and acceptance checks.
- performance: latency, speed, throughput, bundle size and profiling.
- observability: logs, metrics, tracing, health checks and troubleshooting.
- errors: error handling, failure states, recovery and diagnostics.
- troubleshooting: debugging, reproduction, logs and root-cause analysis.
- code-review: review findings, risks, regressions and missing tests.

## Tooling And Delivery

- configuration: envs, config files, feature flags and runtime options.
- dependencies: packages, lockfiles, updates and compatibility.
- tooling: developer tools, generators, linters, formatters and automation.
- scripts: setup, maintenance and utility scripts.
- devops: operational workflows, automation and environment handoff.
- ci-cd: continuous integration, checks, artifacts and deployment gates.
- deployment: releases, rollout, rollback and post-deploy validation.
- release: release notes, changelogs, rollout and post-release checks.
- maintenance: cleanup, upgrades, bugfix maintenance and project health.
- refactoring: code restructuring, simplification and deduplication.

## Infrastructure

- infrastructure: cloud resources, servers, networks and runtime services.
- infrastructure/docker: containers, images, compose, volumes and networks.
- infrastructure/domains: domains, DNS, certificates and public routing.
- infrastructure/vercel: Vercel projects, builds, envs, logs and deployments.
- infrastructure/vps: server runtime, processes, logs and VPS operations.

## Catch-All

- features: broad cross-cutting requests before a more specific module is known.

If an active project or initiative needs a domain-specific module, the active coordinator may create it only
after recording the reason in a dated task. The new folder must include
README.md and TASK-MANAGER.md in the same cycle.


