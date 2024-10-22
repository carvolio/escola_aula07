
# Projeto Turmas - Aula 7

Projeto backend e frontend para criar um sistema para professores, incluindo login, tela de usuario, lista de turmas do professor e lista de atividades de cada turma.


## Instalação

- 1 Clone este repositório
- 2 Abrir com o Visual Studio Code e abrir um terminal
- 3 Instalar as dependências com o comando `npm install`
- 4 Criar um arquivo `.env` na raiz do projeto e adicionar as variáveis de ambiente
```js
DATABASE_URL="mysql://root:@localhost:3306/escola_aula07?schema=public&timezone=UTC"
```
- 5 Executar as migrations com o comando `npx prisma migrate dev --name init`
- 6 Iniciar o servidor com o comando `npx nodemon`
- 7 Executar o arquivo `./front/Login.html` no navegador ou com live server
    
## Autores

- [@carvolio](https://www.github.com/carvolio)

