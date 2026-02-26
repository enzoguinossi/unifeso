# 🤝 Contribuindo — ADS UNIFESO 2026

Obrigado por querer contribuir com o site da turma! 🚀

Este projeto aceita dois tipos de contribuição:

1. 👤 Adicionar seu nome no Anuário
2. 👨‍💻 Contribuir com código (novas funcionalidades, melhorias, correções)

---

# 👤 Quero adicionar meu nome no Anuário

Você NÃO precisa saber programar para isso.

## 📌 Como funciona a foto?

Atualmente usamos a foto pública do GitHub no formato:

```
https://github.com/SEU_USUARIO.png
```

Exemplo:
```
https://github.com/octocat.png
```

---

## 📝 Passo a passo

### 1️⃣ Faça um Fork do repositório

Clique em **Fork** no GitHub.

---

### 2️⃣ Edite o arquivo:

```
src/data/anuario.json
```

Adicione seu objeto seguindo o padrão abaixo:

```json
{
  "nome": "Seu Nome",
  "fotoUrl": "https://github.com/seuusuario.png",
  "linkedin": "https://linkedin.com/in/seuusuario",
  "instagram": "https://instagram.com/seuusuario",
  "github": "https://github.com/seuusuario",
  "bio": "Uma frase sobre você"
}
```

### ⚠️ Regras importantes

- Não remova outros alunos
- Não altere a estrutura
- Adicione seu objeto no final da lista
- Respeite o formato JSON (vírgulas!)

---

### 3️⃣ Faça commit

```
git commit -m "feat: adiciona [seu nome] ao anuário"
```

---

### 4️⃣ Abra um Pull Request

Descreva que está adicionando seu nome ao anuário.

Pronto 🎉

---

# 👨‍💻 Quero contribuir com código

Se você quer ajudar a evoluir o projeto, siga estas diretrizes.

---

## 🚀 Rodando o projeto localmente

```bash
git clone <repo>
npm install
npm run dev
```

---

## 🧱 Estrutura do Projeto

- `app/` → Rotas (Next.js App Router)
- `components/` → Componentes reutilizáveis
- `lib/` → Integrações e acesso a dados
- `types/` → Tipagens TypeScript
- `data/` → Dados estáticos (anuário)

---

## 📌 Padrões do Projeto

- Usar TypeScript corretamente (evitar `any`)
- Não misturar UI com acesso a dados
- Seguir organização de pastas existente
- Código deve passar no ESLint
- Código deve estar formatado com Prettier

---

## 🧩 Boas práticas

- Crie uma branch para sua feature:

```
git checkout -b feature/nome-da-feature
```

- Commits descritivos:

```
feat: adiciona filtro no calendário
fix: corrige bug no layout mobile
refactor: melhora tipagem do anuário
```

---

## 🛑 Antes de abrir PR

- Teste localmente
- Verifique se não quebrou outra parte do site
- Explique claramente no PR o que foi feito

---

# 💡 Ideias de contribuição

- Melhorar responsividade
- Criar animações
- Melhorar acessibilidade
- Implementar filtros no calendário
- Melhorar UI do anuário
- Criar testes
- Melhorar documentação

---

# 🎓 Objetivo do Projeto

Este projeto é:

- Um site da turma
- Um ambiente de aprendizado
- Um projeto colaborativo real

Contribuir aqui é praticar Git, organização de código e trabalho em equipe.

---

Turma ADS — UNIFESO 2026 