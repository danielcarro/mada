# Module: Domain Infrastructure

This folder is an operational micro-memory for **infrastructure/domains**.

## Purpose

Use this module for domains, subdomains, DNS, certificates, HTTPS, canonical URLs and public routing.

The README explains to the user and to agents what kind of work belongs in this
folder. The TASK-MANAGER.md file next to it records the permanent module state
and must remain waiting for orders when there is no active task.

## Typical Tasks

- record target domains.
- plan DNS.
- validate certificates.
- document public URLs.
- track propagation risks.

## When To Use This Module

Use this folder when the user request directly touches the subject described
above. If the request is broad, the active coordinator should choose the most specific module or
use eatures only to organize the first split.

## When Not To Use This Module

Do not use this module for work from another area just for convenience. Do not
create code, folders, contracts, commands or product decisions without a dated
task and an allowed scope.

## Required Files

- README.md: explains the module purpose to the user and agents.
- TASK-MANAGER.md: permanent module panel, waiting for orders and recording
  state, pending items, risks and next steps.
- YYYY-MM-DD-short-summary.md: concrete task file created when there is a real
  request.

## How The Active Coordinator Must Work Here

1. Read the root README.md.
2. Read tasks/ORCHESTRATOR.md.
3. Read tasks/OPENCODE-CODEX.md.
4. Read this README.
5. Read this folder's TASK-MANAGER.md.
6. Create or open a dated task file.
7. Map only docs and code related to the allowed scope.
8. Execute, validate and update the micro-memories.

## Guardrails

- Do not assume context from old applications.
- Do not run destructive commands without authorization and recorded risk.
- Do not expose secrets, tokens, passwords or real environment values.
- Do not leave a task without progress percentage, evidence, pending items and
  next step.
- Update the permanent task manager when the module state changes.


