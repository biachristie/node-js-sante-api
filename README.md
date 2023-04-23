<h1 align="center">Santé API</h1>

<div align="center">

![code](https://img.shields.io/badge/Code-JavaScript-F7DF1E.svg)
[![made-with-node-js](https://img.shields.io/badge/Made%20with-Node%20JS%20v18.14.2-66CC33.svg)](https://github.com/angular/angular-cli)
[![made-with-express](https://img.shields.io/badge/Made%20with-Express%204.16.1-66CC33.svg)](https://github.com/angular/angular-cli)

![ide](https://img.shields.io/badge/Editor-VSCode%201.77.3-3cb48c.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/biachristie/node-js-sante-api.svg?style=social&label=Star&maxAge=2592000)](https://github.com/biachristie/node-js-sante-api/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/biachristie/node-js-sante-api.svg?style=social&label=Watch&maxAge=2592000)](https://github.com/biachristie/node-js-sante-api/watchers)
[![GitHub forks](https://img.shields.io/github/forks/biachristie/node-js-sante-api.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/biachristie/node-js-sante-api/forks)



</div>
<br>

<p align="justify">
<b>Santé API</b> é uma RESTful API que permite testar e automatizar processos nos atendimentos de pacientes em âmbito hospitalar. Essa aplicação foi criada como projeto de conclusão do módulo de <i>back-end</i> do Curso de Capacitação FullStack oferecido pelo Lab365 / Senai - SC.
</p>
<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando [Node.JS v18.x](https://nodejs.org/en) e as seguintes ferramentas foram usadas durante a sua construção:

- [DotEnv](https://www.npmjs.com/package/dotenv) - módulo que carrega variáveis de ambiente a partir de um arquivo ``.env`` ;
- [ExpressJS](https://expressjs.com/) - *framework* para Node.JS que fornece um conjunto de recursos para aplicativos *web* e móvel ;
- [Nodemon](https://nodemon.io/) - *script* que reinicia automaticamente aplicações baseadas em Node.JS quando uma alteração no diretório é detectada ;
- [Node-Postgres](https://node-postgres.com/) - coleção de módulos Node.JS que viabiliza a conexão com bancos de dados PostgreSQL ;
- [pgAdmin](https://www.pgadmin.org/) - plataforma *Open Source* de administração e desenvolvimento para PostgreSQL ;
- [pg-hstore](https://www.npmjs.com/package/pg-hstore) - módulo para serialização e deserialização dados JSON no formato hstore ;
- [Postman](https://www.postman.com/) - plataforma API para construção e uso de APIs ;
- [Sequelize](https://sequelize.org/) - Node.JS ORM (*Object Relational Mapper*) para diversos bancos de dados, como PostgreSQL ;
- [VSCode](https://code.visualstudio.com/) - editor de código-fonte para construção e *debugging* de aplicações *web* e *cloud*.

<br>

## 💻 Instalação

<p align="justify">
É interessante que tenha <a href="https://git-scm.com/">Git</a> ou outro software de controle de versionamento instalado em seu equipamento, assim como um editor de código como o <a href="https://code.visualstudio.com/">VSCode</a>.
<br><br>
Antes de iniciar o servidor API, defina as configurações de acesso ao banco de dados <a href="https://www.postgresql.org/">PostgreSQL</a>. Renomeie o arquivo <code>.env.example</code> para <code>.env</code> e determine as variáveis de ambiente. Esse é um passo importante para o acesso ao servidor.
</p>
<br>

Siga os passos abaixo para iniciar o projeto em modo de desenvolvimento:

1. Instale Node.JS v18.x+ em https://nodejs.org/en/download ;
2. Clone o repositório no terminal / cmd ;
```
    $ git clone https://github.com/biachristie/node-js-sante-api.git
```
3. Navegue até o diretório do projeto ;
```
    $ cd node-js-sante-api
```
4. Inicie o gerenciador de pacotes para o Node.JS ;
```
    $ npm init -y
```
5. Instale as dependências do projeto ;
```
    $ npm install express
    $ npm install nodemon --save --include=dev
    $ npm install --save sequelize
    $ npm install --save pg pg-hstore
    $ npm install dotenv
```
6. Execute a aplicação em modo de desenvolvimento ;
```
    $ npm run dev
```
7. As mensagens seguintes devem aparecer após ``npm run dev`` :
```
    Conexão foi estabelecida com sucesso
    Aplicação está online na porta 6666
```
Pronto! Faça bom proveito!

<br>

## 🗂️ Estrutura

```
    ├── database
    │   └── config-db.js
    ├── env
    │   └── .env.example
    ├── src
    │   ├── api
    │   │   └── v1
    │   │       ├── controllers
    │   │       │   ├── atendimento
    │   │       │   │   └── cadastrar-atendimento.js
    │   │       │   ├── enfermeiro
    │   │       │   │   ├── atualizar-enfermeiro.js
    │   │       │   │   ├── cadastrar-enfermeiro.js
    │   │       │   │   ├── excluir-enfermeiro.js
    │   │       │   │   ├── listar-enfermeiro-id.js
    │   │       │   │   └── listar-enfermeiros.js
    │   │       │   ├── medico
    │   │       │   │   ├── atualizar-estado-medico.js
    │   │       │   │   ├── atualizar-medico.js
    │   │       │   │   ├── cadastrar-medico.js
    │   │       │   │   ├── excluir-medico.js
    │   │       │   │   ├── listar-medico-id.js
    │   │       │   │   └── listar-medicos.js
    │   │       │   └── paciente
    │   │       │       ├── atualizar-paciente.js
    │   │       │       ├── atualizar-status-paciente.js
    │   │       │       ├── cadastrar-paciente.js
    │   │       │       ├── excluir-paciente.js
    │   │       │       ├── listar-paciente-id.js
    │   │       │       └── listar-pacientes.js
    │   │       ├── middlewares
    │   │       │   ├── atendimento
    │   │       │   ├── enfermeiro
    │   │       │   ├── medico
    │   │       │   └── paciente
    │   │       ├── models
    │   │       │   ├── atendimento.js
    │   │       │   ├── enfermeiro.js
    │   │       │   ├── medico.js
    │   │       │   └── paciente.js
    │   │       └── routes
    │   │           ├── atendimento.js
    │   │           ├── enfermeiro.js
    │   │           ├── medico.js
    │   │           └── paciente.js
    │   └── app
    │       └── app.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── server.js
```
<br>

## ⚙️ API Endpoints

Os *endpoints* da RESTful API estão descritos abaixo:

### Cadastrar novo paciente

``POST /pacientes`` 
```
    http://localhost:6666/api/pacientes
```

Exemplo de *body* (json)
```
{
    "nome_completo": "Mônica de Souza",
    "genero": "feminino",
    "data_nascimento": "2016-03-21",
    "cpf": "111.222.333-44",
    "telefone": "(01) 2345-6789",
    "contato_emergencia": "Luísa de Souza",
    "lista_alergias": "",
    "lista_cuidados_especificos": "não tocar no coelhinho azul",
    "convenio": "Amil"
}
```
<br>

### Atualizar dados de um paciente

``PUT /pacientes/:id`` 
```
    http://localhost:6666/api/pacientes/:id
```
<br>

### Atualizar status de atendimento de um paciente

``PUT /pacientes/:id/status`` 
```
    http://localhost:6666/api/pacientes/:id/status
```

Exemplo de *body* (json)
```
{
    "status_atendimento": "AGUARDANDO_ATENDIMENTO"
}
```
<br>

### Listar todos os pacientes

``GET /pacientes`` 
```
    http://localhost:6666/api/pacientes
```
<br>

### Listar pacientes pelo status

``GET /pacientes?status`` 
```
    http://localhost:6666/api/pacientes?status
```
<br>

### Listar um paciente

``GET /pacientes/:id`` 

```
    http://localhost:6666/api/pacientes/:id
```
<br>

### Excluir cadastro de um paciente

``DELETE /pacientes/:id`` 

```
http://localhost:6666/api/pacientes/:id
```
<br>

### Cadastrar novo médico

``POST /medicos`` 
```
    http://localhost:6666/api/medicos
```

Exemplo de *body* (json)
```
{
    "nome_completo": "Roberto Stravos",
    "genero": "masculino",
    "data_nascimento": "1993-01-01",
    "cpf": "444.555.666-11",
    "telefone": "(02) 2345-6789",
    "instituicao_ensino": "UEL",
    "crm": "11111111-0/BR",
    "especializacao": "CLINICA_GERAL"
}
```
<br>

### Atualizar dados de um médico

``PUT /medicos/:id`` 
```
    http://localhost:6666/api/medicos/:id
```
<br>

### Atualizar estado de um médico

``PUT /medicos/:id/status`` 
```
    http://localhost:6666/api/medicos/:id/status
```

Exemplo de *body* (json)
```
{
    "estado": "INATIVO"
}
```
<br>

### Listar todos os médicos

``GET /medicos`` 
```
    http://localhost:6666/api/medicos
```
<br>

### Listar médicos pelo status

``GET /medicos?status`` 
```
    http://localhost:6666/api/medicos?status
```
<br>

### Listar um médico

``GET /medicos/:id`` 
```
    http://localhost:6666/api/medicos/:id
```
<br>

### Excluir cadastro de um médico

``DELETE /medicos/:id`` 
```
    http://localhost:6666/api/medicos/:id
```
<br>

### Cadastrar novo enfermeiro

``POST /enfermeiros``
```
    http://localhost:6666/api/enfermeiros
```

Exemplo de *body* (json)
```
{
    "nome_completo": "Carmen Santos",
    "genero": "feminino",
    "data_nascimento": "1993-12-01",
    "cpf": "777.888.999-11",
    "telefone": "(03) 2345-6789",
    "instituicao_ensino": "UFAM",
    "cofen": "22222222-0/BR"
}
```
<br>

### Atualizar dados de um enfermeiro

``PUT /enfermeiros/:id``
```
    http://localhost:6666/api/enfermeiros/:id
```
<br>

### Listar todos os enfermeiros

``GET /enfermeiros``
```
    http://localhost:6666/api/enfermeiros
```
<br>

### Listar um enfermeiro

``POST /enfermeiros/:id``
```
    http://localhost:6666/api/enfermeiros/:id
```
<br>

### Excluir cadastro de um enfermeiro

``DELETE /enfermeiros``
```
    http://localhost:6666/api/enfermeiros/:id
```
<br>

### Cadastrar novo atendimento

``POST /atendimentos``
```
    http://localhost:6666/api/atendimentos
```
Exemplo de *body* (json)
```
{
    "id_paciente": 1,
    "id_medico": 1
}
```

<br>

## 🔢 *Status Code*

A API foi desenvolvida para retornar diferentes *status code* de acordo com o contexto e ação. Desse modo, se uma requisição resulta em um erro, o usuário é capaz de identificar o que gerou o erro.


A tabela abaixo fornece uma ideia geral de como a API funciona:

<br>

| Tipo de Requisição |                                               Descrição                                               |
|:------------------:|:-----------------------------------------------------------------------------------------------------:|
| GET                | Acessa um ou mais dados e retorna o resultado como JSON.                                              |
| POST               | Retorna 201 CREATED se é criado com sucesso e retorna o dado recém criado como JSON.                  |
| GET / PUT          | Retorna 200 OK se é acessado ou modificado com sucesso. O resultado (modificado) é retornado em JSON. |
| DELETE             | Retorna 204 NO CONTENT se o dado foi apagado com sucesso.                                             |

<br>

A tabela a seguir mostra os possíveis códigos de retorno das requisições API:

<br>

| Códigos de Retorno |                                                      Descrição                                                     |
|:------------------:|:------------------------------------------------------------------------------------------------------------------:|
| 200 OK             | Requisição GET, PUT ou DELETE foi bem sucedida e o dado é retornado como JSON.                                     |
| 201 CREATED        | Requisição POST foi bem sucedida e o dado é retornado como JSON.                                                   |
| 204 NO CONTENT     | O servidor conseguiu completar a requisição e não existe informação adicional para enviar no corpo da resposta.    |
| 400 BAD REQUEST    | Um atributo necessário para a requisição API está ausente, por exemplo, campo nome_completo não foi fornecido.     |
| 404 NOT FOUND      | Um dado não pôde ser acessado, por exemplo, identificador (id) do dado não foi encontrado na base de dados.        |
| 409 CONFLICT       | Um dado conflitante já existe, por exemplo, criar um cadastro de médico com um CRM que já consta na base de dados. |
| 500 SERVER ERROR   | Algo de errado aconteceu no servidor durante a requisição.                                                         |

<br>

## ✏️ ToDo

- [x] Cadastro de enfermeiro
- [x] Cadastro de médico
- [x] Cadastro de paciente
- [x] Atualização de dados de enfermeiro
- [x] Atualização de dados de médico
- [x] Atualização de estado de médico
- [x] Atualização de dados de paciente
- [x] Atualização de status de paciente
- [x] Listar todos os enfermeiros
- [x] Listar todos os médicos
- [x] Listar todos os pacientes
- [x] Listar um enfermeiro
- [x] Listar um médico
- [x] Listar um paciente
- [x] Excluir um enfermeiro
- [x] Excluir um médico
- [x] Excluir um paciente
- [x] Cadastrar atendimento médico
- [ ] Excluir atendimento médico
- [ ] Criar sistema de login com autenticação
- [ ] Criar sistema de envio de e-mail após cadastro

<br>

## ✍🏻 Autor

Feito por Beatriz Christie 🖐🏻

<br>

## 📌 Licença

Este código está sob a Licença MIT, cujo texto pode ser lido em [MIT License](https://github.com/biachristie/node-js-sante-api/blob/main/LICENSE.md).
