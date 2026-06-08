# Agent Stack

Status: waiting for START.md completion

This file records which AI agents, coding assistants, models and orchestration
mode the user wants to use for the active project or initiative.

MADA's default ready-to-use preset is:

- Primary agent: Codex CLI.
- Auxiliary agent: OpenCode CLI.
- Coordination mode: multi-agent supervised mode.
- Communication channel: `tasks/AGENT-COMMUNICATION.md`.

This default must remain available, but it is not mandatory. During Start
Discovery, the user may choose:

- a single-agent workflow;
- a multi-agent workflow;
- Codex only;
- OpenCode only;
- Codex + OpenCode;
- another coding assistant or CLI agent;
- a specific LLM/model family;
- a custom combination.

## Required Decisions

- Agent mode: To define. Examples: single-agent, multi-agent, human-led,
  supervised delegation, review-only, automation-only.
- Primary agent: To define.
- Auxiliary agents: To define.
- Models or model families: To define.
- CLI tools: To define.
- Communication channel: To define.
- Delegation rules: To define.
- Restricted actions: To define.
- Human approval points: To define.

## Adaptation Rules

- If the user chooses only one agent, MADA must disable delegation assumptions
  and keep all work in the primary agent workflow.
- If the user chooses multiple agents, MADA must define the coordinator,
  assistant roles, handoff rules and communication file before execution.
- If the user chooses Codex + OpenCode, use the default MADA preset and keep
  `tasks/OPENCODE-CODEX.md` as the compatibility-specific channel in addition
  to the generic `tasks/AGENT-COMMUNICATION.md`.
- If the user chooses another agent or model, record the CLI command, allowed
  files, allowed commands and return protocol before delegating.
- Do not assume a programming language, framework or runtime before Start
  Discovery records the user's preference or the existing project evidence.

## Programming Language And Stack

- Primary language: To define.
- Secondary languages: To define.
- Frameworks: To define.
- Runtime: To define.
- Package manager: To define.
- Test tools: To define.
- Build tools: To define.
- Deployment target: To define.

MADA must adapt its task files, validation commands and implementation plan to
the selected language and stack. If no language is selected, inspect the
existing project before choosing commands.
