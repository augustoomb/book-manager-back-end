# Boas-vindas ao repositório Book Manager!

Documentação feita no Swagger:

http://localhost:3000/documentation/

![alt text](https://github.com/augustoomb/book-manager-back-end/api-book-manager-swagger.png)

<br />

# Projeto

<details>
  <summary><strong>O que foi desenvolvido ?</strong></summary>
  <br />

  Neste projeto foi desenvolvido uma API e um banco de dados para a gestão de livros lidos! 

  Essa aplicação utiliza: docker, docker compose, mySQL, typescript, node, express, swagger, eslint
  
<br />
</details>

# Orientações

<details>
  <summary><strong> Rodando no Docker vs Localmente</strong></summary>
  
  ## Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `book_manager_container` e outro chamado `book_manager_db`;

  - A partir daqui você pode rodar o container `book_manager_container` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it book_manager_container sh`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano. 
  

  <br />
  
  ## Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  
</details>


<details>
  <summary><strong>🎛 Linter</strong></summary>

  Para garantir a qualidade do código, foi usado o [ESLint](https://eslint.org/) para fazer a sua análise estática.

  Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você também pode instalar o plugin do `ESLint` no `VSCode`, bastar baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo

<br />
</details>



