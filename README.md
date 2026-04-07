# 🌿 OCA SOFTWARE - Digital Transformation

<div align="center">
  <img src="public/favicon.svg" width="120" height="120" alt="OCA Software Logo" />
  <p><em>Inspirada na natureza, projetada para o futuro.</em></p>
</div>

---

## 🚀 Sobre a OCA SOFTWARE

A **OCA SOFTWARE** é uma parceira estratégica de tecnologia focada em entregar soluções de alto impacto comercial. Desenvolvemos ecossistemas de software sob medida que crescem, se adaptam e prosperam junto com o seu negócio.

Com sede em São Paulo e atuação global, combinamos excelência técnica com uma visão de negócios afiada para garantir o maior Retorno sobre Investimento (ROI) possível.

---

## 📦 Produtos em Destaque

Além de soluções personalizadas, operamos e escalamos plataformas proprietárias:

- **🏨 HotelOS**: ERP completo para gestão de hotéis, pousadas e hostels. Automação operacional e aumento de receita.
- **🚚 Roterize**: Plataforma inteligente de roteirização e otimização logística para redução de custos e eficiência em entregas.
- **🛍️ Ticlick**: Solução web para gestão e escala de vendas online, conectando negócios a clientes em tempo recorde.

---

## 🛠️ Tecnologias e Serviços

### Nossas Especialidades:
- **💻 Desenvolvimento Web**: Aplicações SPAs e SSR modernas com Angular e NestJS.
- **📱 Aplicativos Móveis**: Soluções cross-platform focadas em experiência do usuário.
- **☁️ Arquitetura em Nuvem**: Gestão e migração para infraestruturas AWS e Google Cloud.
- **🤖 IA & ML**: Automação inteligente e análise de dados para decisões estratégicas.

### Stack Principal:
- **Frontend**: Angular 21+, Tailwind CSS 4, Google Fonts (Montserrat & Open Sans).
- **Backend/API**: NestJS (Node.js), PostgreSQL, Gemini AI Integration.
- **Infra**: AWS, Google Cloud Platform, GitHub Actions.

---

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/user/ocasoftware.git

# Instale as dependências
npm install
```

### Comandos Disponíveis
```bash
# Iniciar servidor de desenvolvimento (HMR ativo)
npm start

# Gerar build de produção com Prerendering (Static Routes)
npm run build

# Executar testes unitários (Vitest)
npm test

# Linting do projeto
npm run lint
```

---

## 🚀 Deploy na Vercel

O projeto está otimizado para deploy *zero-config* na Vercel com suporte a **Angular SSR (Server-Side Rendering)** e rotas estáticas pré-renderizadas.

### Como realizar o deploy:

1. Suba o seu código para um repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse a [Vercel](https://vercel.com/) e crie um novo projeto importando este repositório.
3. A Vercel detectará automaticamente que o framework é o **Angular** (`@angular/ssr`).
4. (Opcional) Na área de configuração do build, certifique-se de que os comandos estão assim:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
5. Adicione a variável de ambiente `GEMINI_API_KEY` caso utilize a funcionalidade de IA no backend/SSR.
6. Clique em **Deploy**.

> **Nota:** Arquivos auxiliares como `vercel.json` e `.vercelignore` já estão configurados no projeto para garantir um build assíncrono rápido e sem o upload de arquivos desnecessários.

---

## 📂 Estrutura do Projeto

O projeto utiliza uma arquitetura baseada em componentes e roteamento modular:

- `src/app/pages/`: Componentes de página individuais (Home, Blog, Carreiras, etc.).
- `src/app/app.routes.ts`: Definições de rotas e navegação.
- `public/`: Assets estáticos, ícones e favicons.
- `src/styles.css`: Sistema de design baseado em Tailwind CSS 4.

---

## 📄 Licença

© 2026 **OCA SOFTWARE**. Todos os direitos reservados.

---

<div align="center">
  <sub>Construído com ❤️ pelo time da OCA Software</sub>
</div>
