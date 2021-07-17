<h1 align="center">🎶 LabeMusic - Backend 🎵</h1>

<p align="center">

  <img src="https://img.shields.io/badge/Node.js-43853D?style=&logo=node-dot-js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/Heroku-430098?style=&logo=heroku&logoColor=white" />

</p>

## 💾 Sobre

---

O LabeMusic é o projeto full stack do Curso de Desenvolvimento Web Full Stack da [Labenu](https://www.labenu.com.br/). Neste repo estão os códigos da API que serve dados para o front end. A aplicação é um gerenciador de músicas, onde é possível registrar dados de músicas e acessa-las por meio de uma interface.

Link para a API: [https://labemusic-backend.herokuapp.com/](https://labemusic-backend.herokuapp.com/)

Link para o repo do [frontend](https://github.com/fagnerzulin/labemusic-frontend)

## 🎮 Tecnologias utilizadas

---

As seguintes ferramentas foram usadas na construção do projeto:

- **[NodeJS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)**
- **[cors](https://github.com/expressjs/cors#readme)**
- **[dotenv](https://github.com/motdotla/dotenv#readme)**
- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)**
- **[knex](http://knexjs.org/)**
- **[uuid](https://github.com/uuidjs/uuid#readme)**
- **[Eslint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**

> Veja o arquivo [package.json](https://github.com/fagnerzulin/labemusic-backend/blob/main/package.json)

---

## 🎯 Primeiros Passos

---

- Clonar este repositório
- Executar `yarn install` para adicionar as dependências
- Criar um arquivo .env na raiz do projeto, (ou renomear o arquivo .env.example) e preencher as chaves a seguir com os valores apropriados:

  ```
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_SCHEMA=
   DB_PORT=

   JWT_EXPIRES_IN=
   JWT_KEY=

   BCRYPT_COST=
  ```

- Executar `yarn run migrations` para adicionar as tabelas ao banco de dados
- E por último, execute `yarn run start`, e a api estará pronta para receber requisições

---

## 🚩 Endpoints

---

### 🔓 Endpoints Abertos

Endpoints que não requerem autenticação.

- [Signup](example/user/signup.md) : `POST /user/signup`
- [Login](example/user/login.md) : `POST /user/login`

---

### 🔒 Endpoints com Autenticação

Endpoints que requerem autenticação por meio do token.

- [Create Album](example/album/createAlbum.md) : `POST /album/create`
- [Get All Albums](example/album/getAll.md) : `GET /album/all`

- [Create Genre](example/genre/createGenre.md) : `POST /genre/create`
- [Get All Genres](example/genre/getAll.md) : `GET /genre/all`

- [Create Music](example/music/createMusic.md) : `POST /music/create`
- [Get All Musics](example/music/getAll.md) : `GET /music/all`
- [Get Music By Id](example/music/getById.md) : `GET /music/:id`
