# Desafio Blog Rockr - Back-end

![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)
![Badge](https://img.shields.io/badge/node-%3E%3D%2012.18.2-brightgreen)
![Badge](https://img.shields.io/badge/PostgreSQL-v12.0-lightblue)

> Status do Projeto: (✔️ concluído)

## Tópicos

🔹 [Descrição do projeto](#:link:-descrição-do-projeto)

🔹 [Funcionalidades](#information_source-funcionalidades)

🔹 [Pré-requisitos](#sparkles-pré-requisitos)

🔹 [Como configurar a aplicação](#floppy_disk-iniciar/configurar-banco-de-dados)

🔹 [Como rodar a aplicação](#arrow_forward-como-rodar-a-aplicação)

🔹 [Como rodar os testes](#building_construction-como-rodar-os-testes)

🔹 [Insomnia](#sleeping-insomnia)

🔹 [Layout da Aplicação](#scroll-layout-da-aplicação)

🔹 [Tarefas em aberto](#pencil-tarefas-em-aberto)

🔹 [Tarefas em aberto](#octopus-desenvolvedores)

## :link: Descrição do projeto

<p align="justify">
  Neste [projeto-desafio](https://github.com/Coderockr/fullstack-test) demonstrei meus conhecimentos em TypeScript, NodeJS e PostgreSQL.
</p>

## :information_source: Funcionalidades

✔️ Enviar artigos e contatos ao banco de dados

✔️ Recuperar todos os artigos e contatos

✔️ Recuperar apenas um artigo

## :sparkles: Pré-requisitos

⚠️ [Node](https://nodejs.org/en/download/)

⚠️ [Yarn](https://yarnpkg.com/getting-started/install)

⚠️ [Docker](https://www.docker.com/products/docker-desktop)

⚠️ [PostgreSQL Docker](https://hub.docker.com/_/postgres)

❗️ Você precisará seguir os passos a seguir para poder rodar a aplicação na sua máquina.

## :floppy_disk: Iniciar/Configurar banco de dados

Ter Docker e as imagens PostgreSQL, MongoDB e Redis instalados.

### :elephant: Instalar PostgreSQL via Docker

* `docker run --name postgresCodeRockrTest -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* Verificar se a imagem está rodando: `docker ps`
* Usuário: postgres
* Senha: docker
* Acesso pelo terminal: `docker exec -it nome_do_container bash`

### :dolphin: Criar Banco de Dados PostgreSQL

1. Instale o DBeaver, ou outro gerenciador de Banco de Dados, ou faça por linha de comando.
2. Acesse com o usuário e senha supracitados.
3. Crie um Banco de Dados com o nome __postgresCodeRockrTest__.

## :arrow_forward: Como rodar a aplicação

Agora navegue até a pasta criada e abra no Visual Studio Code, execute o comando `yarn` dentro da pasta no seu terminal para instalar todas as dependências. Após a instalação digite: `yarn dev:server`.

Pronto! Agora basta acessar a aplicação à partir do link: http://localhost:3333/ ou do front-end web.

Na mesma pasta do projeto, no terminal, digite:

## :building_construction: Como rodar os testes

```bash
yarn test
```

Há somente 1 teste criado, apenas para fins de demonstração.

## :sleeping: Insomnia

Para fazer o download do [insomnia](https://insomnia.rest/download/), para utilizar o mesmo workspace utilizado no projeto clique [aqui]().

## :scroll: Layout da Aplicação

Dados do Insomnia:

## :pencil: Tarefas em aberto

🖊 Nenhuma ainda!

## :octopus: Desenvolvedor

| [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) |
| :---: |

## :copyright: Licença

The [MIT License](https://opensource.org/licenses/MIT) - Use freely, I am not responsible for the actions of third parties.