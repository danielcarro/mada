# Agent Communication

Status: waiting for agent stack selection

This is the generic operational channel for agent-to-agent communication in
MADA. It supports any agent stack selected during START.md discovery.

Default compatibility preset:

- Primary agent: Codex.
- Auxiliary agent: OpenCode.
- Compatibility channel: `tasks/OPENCODE-CODEX.md`.

If the user selects another model, assistant or CLI agent, record the active
agent stack here before delegation.

## Active Agent Stack

- Mode: To define.
- Primary agent: To define.
- Auxiliary agents: To define.
- Models: To define.
- CLI commands: To define.
- Communication protocol: To define.
- Human approval points: To define.

## Active Delegations

No active delegation.

Template:

```text
### Delegation ID

Status: pending
From:
To:
Objective:
Allowed files:
Allowed commands:
Disallowed actions:
Expected return:
```

## Agent Returns

No return recorded.

Template:

```text
### Return ID

Status: returned
Agent:
Summary:
Files read:
Files changed:
Commands run:
Findings:
Risks:
Requests for coordinator:
```

## Agent Requests

No active request.

Template:

```text
### Request ID

Status: pending
Agent:
Question:
Reason:
Needed decision:
```

## Coordinator Log

- 2026-06-08: Generic agent communication channel created. Codex + OpenCode
  remains the default ready-to-use preset, but MADA can now record other
  single-agent or multi-agent stacks.

