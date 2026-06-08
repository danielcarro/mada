# GitHub Distribution

MADA can be distributed through GitHub without publishing to the npm registry.

## Distribution Modes

### Repository Clone

Users clone the repository and run the local CLI:

```powershell
git clone https://github.com/<owner>/<repo>.git mada
cd mada
node bin/mada.js init C:\projetos\novo-projeto
```

### GitHub Release ZIP

Users download a release ZIP, extract it and run:

```powershell
node bin/mada.js init C:\projetos\novo-projeto
```

### Manual Template Copy

Users copy the contents of `template/` into the target project. This works even
without Node.js, but it does not apply CLI options such as `--agent-preset` or
`--language`.

## Recommended Release Contents

- Source code archive.
- `template/` folder.
- `bin/mada.js` CLI.
- `README.md`.
- `LICENSE`.
- Optional `mada-framework-<version>.tgz` for local npm installation.

## Agent Stack Notes

GitHub distribution must keep MADA agent-stack configurable:

- Default preset: Codex + OpenCode.
- Supported alternatives: Codex only, OpenCode only, single-agent, multi-agent
  and custom agent/model stacks.
- START.md must ask the user which agents, models and programming language or
  runtime stack they want to use.
- docs/AGENT-STACK.md records the selected configuration.
