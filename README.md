# postman-newman

Repositório de testes automatizados em API utilizando Postman e Newman, com integração contínua (CI/CD).

---

## Sobre

Este projeto contém uma API de exemplo, collections de testes no Postman e scripts para executar esses testes usando Newman, com geração de relatórios Allure integrados ao pipeline CI/CD.

---

## Estrutura do Repositório

- `.github/workflows/` — Arquivos de configuração dos workflows do GitHub Actions para execução dos testes e geração de relatórios.
- `postman/` — Collections e ambientes do Postman.
- `src/` — Código fonte da API de exemplo.
- `tests/` — Scripts e configurações relacionadas aos testes e relatórios (ex: configuração do Allure).
- `.gitignore` — Arquivos e pastas ignorados pelo Git.
- `package.json` — Gerenciamento das dependências do projeto Node.js.
- `README.md` — Documentação do projeto.

---

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)
- [Newman](https://www.npmjs.com/package/newman)
- [Allure Reports](https://docs.qameta.io/allure/)
- [GitHub Actions](https://github.com/features/actions)

---

## Como usar

### Pré-requisitos

- Node.js instalado (versão recomendada: 16+)
- Newman instalado globalmente ou via `npm install`
- Java instalado para geração de relatórios Allure (obrigatório para usar allure CLI)

### Instalação

# Clone o repositório
git clone https://github.com/VitorQuintans/postman-newman.git
cd postman-newman

# Instale as dependências
npm install

Executar API localmente

npm start
A API estará disponível em http://localhost:3333.

Executar testes Postman via Newman

npm test

Gerar relatório Allure

npm run allure:generate

Visualizar relatório Allure

npm run allure:open

Integração com CI/CD
O projeto conta com workflow configurado no GitHub Actions (.github/workflows/) que executa automaticamente os testes da collection do Postman com Newman em cada push ou pull request, além de gerar e publicar relatórios Allure.

