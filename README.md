# MADA (Multi-Agent Development Architecture)

## O que é o MADA

**MADA (Multi-Agent Development Architecture)** é uma arquitetura de organização de projetos baseada em arquivos Markdown.

Seu objetivo é preservar contexto, decisões, tarefas, progresso, conhecimento operacional e comunicação entre agentes de IA e pessoas durante o ciclo de vida de um projeto.

O MADA não é um framework, biblioteca, aplicação, extensão ou ferramenta específica.

Ele consiste em uma estrutura de pastas e documentos que podem ser utilizados em qualquer projeto.

---

## Filosofia

O principal problema em projetos assistidos por IA é a perda de contexto.

Conversas longas, mudanças de direção, múltiplos agentes e ciclos extensos de desenvolvimento podem gerar:

- retrabalho;
- inconsistências;
- decisões esquecidas;
- documentação desatualizada;
- perda de conhecimento do projeto.

O MADA reduz esses problemas através de micro-memórias documentadas em arquivos Markdown.

Cada documento possui uma responsabilidade específica dentro da arquitetura.

---

## Independência de Ferramentas

O MADA é agnóstico em relação às ferramentas utilizadas.

Pode ser utilizado com:

- qualquer agente de IA;
- qualquer editor;
- qualquer IDE;
- qualquer linguagem de programação;
- qualquer framework;
- qualquer sistema operacional;
- qualquer metodologia de trabalho.

O foco está na organização do conhecimento e não na tecnologia utilizada.

---

## Estrutura Geral

A arquitetura é composta por documentos responsáveis por armazenar diferentes tipos de contexto.

## Micro-Memórias

As micro-memórias são pequenos documentos especializados.

### START.md

Responsável pela descoberta inicial do projeto.

### docs/START-ANSWERS.md

Armazena as respostas coletadas durante a descoberta.

### docs/PROJECT-CONTEXT.md

Representa o contexto ativo do projeto.

### docs/AGENT-STACK.md

Documenta quais agentes, modelos ou participantes fazem parte do fluxo.

### docs/MODULE-CATALOG.md

Catálogo dos módulos existentes.

### tasks/

Armazena tarefas, progresso e comunicação operacional.

---

## Descoberta Inicial

Antes de criar ou atualizar o contexto principal do projeto, recomenda-se executar um processo de descoberta.

Perguntas comuns:

- O projeto será criado do zero?
- O projeto já existe?
- O objetivo é revisar?
- O objetivo é corrigir erros?
- O objetivo é melhorar funcionalidades?
- O objetivo é modernizar uma solução existente?

---

## Organização por Módulos

Projetos podem ser divididos em módulos independentes:

- produto;
- requisitos;
- arquitetura;
- frontend;
- backend;
- APIs;
- banco de dados;
- testes;
- segurança;
- infraestrutura;
- documentação;
- manutenção.

---

## Orquestração Contínua

Fluxo recomendado:

1. Ler o contexto atual.
2. Identificar a tarefa ativa.
3. Executar a atividade.
4. Registrar evidências.
5. Atualizar progresso.
6. Atualizar documentação.
7. Registrar próximos passos.

---

## Benefícios

- Menor perda de contexto.
- Menor retrabalho.
- Melhor documentação.
- Maior rastreabilidade.
- Melhor colaboração entre agentes.
- Melhor colaboração entre pessoas e agentes.
- Facilidade para retomar projetos após longos períodos.
- Redução de inconsistências.

---

## Regras de Segurança

- Não armazenar segredos reais na documentação.
- Não armazenar senhas.
- Não armazenar tokens.
- Não armazenar credenciais de produção.
- Registrar divergências entre documentação e implementação quando identificadas.
- Tratar o código-fonte como fonte operacional da verdade.

---

## Objetivo

O MADA existe para transformar conhecimento temporário de conversas em conhecimento permanente do projeto.
