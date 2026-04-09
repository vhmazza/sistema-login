Nome:Vitor Hugo Mazzarioli Ferreira 
Ra:5168121
# Sistema de Autenticação de Acesso Básico

Aplicação web simples de login com front-end em HTML/CSS/JS e back-end em Node.js com Express.

## Tecnologias

- HTML, CSS e JavaScript (front-end)
- Node.js, Express, Body-Parser e CORS (back-end)

## Como rodar o projeto

**1. Clone o repositório:**
```bash
git clone https://github.com/SEU_USUARIO/sistema-login.git
cd sistema-login
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor:**
```bash
node server.js
```

**4. Abra o arquivo `index.html` no navegador.**

O servidor roda em `http://localhost:3000`.

## Usuários de teste

| Usuário | Senha     |
|---------|-----------|
| admin   | 123     |
| vitor   | 123  |

## Funcionalidades

- Login com validação de usuário e senha
- Bloqueio de campos vazios
- Proteção contra injeção com o caractere `;`
- Mensagens de erro e sucesso na tela
