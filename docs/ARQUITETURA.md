# 🏗 Arquitetura

Este documento descreve a organização interna do projeto e as decisões arquiteturais adotadas.

---

# 📦 Stack Tecnológica

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- ESLint
- Prettier

---

# 📂 Estrutura de Pastas

```
src/
├── app/
├── assets/
├── components/
├── data/
├── lib/
└── types/
```

---

## 📁 app/

Responsável pelas rotas da aplicação (Next.js).

Cada pasta representa uma rota:
```
├── anuario
│  └── page.tsx <- Página anuário
├── calendario
│  └── page.tsx <- Página calendário
├── documentos
│  └── page.tsx <- Página documentos
├── iniciativas
│  └── page.tsx <- Página iniciativas
├── layout.tsx  <- Responsável pelo layout global da aplicação e metadados.
├── globals.css <- Estilos globais
└── page.tsx    <- Pagina inicial
```
As páginas devem:

- Buscar dados
- Passar dados para componentes
- Não conter lógica complexa

---

## 📁 components/

Contém componentes reutilizáveis de interface.

Exemplo:
```
├── Anuario
│ ├── AnuarioCard.tsx
│ └── AnuarioList.tsx
└── Layout
  ├── Footer.tsx
  └── Header.tsx
```

Regras:

- Não acessar banco diretamente
- Receber dados via props
- Ser o mais reutilizável possível

---

## 📁 lib/

Camada de integração externa.

Responsável por:

- Conexão com Supabase
- Funções de acesso ao banco
- Serviços e integrações

Estrutura:

```
lib/
 ├── supabase/
 └── db/
```

Separação:

- `supabase/` → criação do client
- `db/` → queries organizadas por domínio

---

## 📁 data/

Dados estáticos versionados.

Atualmente:

- `anuario.json`

Este arquivo permite que alunos contribuam via Pull Request.

---

## 📁 types/

Definições de tipos TypeScript.

Cada domínio possui seu próprio tipo.

Exemplo:

```
types/anuario/index.ts
```

---

# 🔄 Fluxo de Dados

Fluxo recomendado:

```
Page (app/)
   ↓
lib/db/
   ↓
lib/supabase/
   ↓
Supabase
```

Componentes nunca devem acessar banco diretamente.

---

# 🎯 Princípios Arquiteturais

- Separação de responsabilidades
- UI desacoplada de acesso a dados
- Código tipado
- Simplicidade

---

# 🎓 Objetivo

Manter o projeto:

- Organizado
- Escalável
- Colaborativo
- Didático