# Alurakut 👨‍💻

### Projeto final da Imersão React da Alura

## Acesse 🚀🚀🚀
[alurakut-wine.vercel.app/](alurakut-wine.vercel.app/)

## Stack 🧶
- NextJs
- Datocms API com GraphQl
- Github API
- Deploy na Vercel

## Features 🥗
- Autenticação com cookies usando a lib nookies
- Listagem de seguidores e seguindo
- Listagem de repositórios
- Breve informação do perfil logado


## Roadmap 🚟
- Listar dados do perfil GitHub
- Editar Perfil
- Mensagens de seguidores
- Depoimentos


### Para rodar o projeto 🧾

```bash
npm run dev
```

Se não possuir um banco de dados MySQL, comente o trecho do código em `[...nextauth.js]`

```javascript
database: {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true
},
```