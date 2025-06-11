# 🚗 API RESTful de Veículos com Node.js, Express e MySQL

## 📋 Objetivo

Este projeto tem como objetivo desenvolver uma API RESTful utilizando **Node.js** com **Express** e banco de dados **MySQL**, implementando duas tabelas relacionadas por chave estrangeira. A API permite a execução completa das operações de **CRUD** (Create, Read, Update, Delete) para ambas as tabelas.

## 🧱 Estrutura do Projeto

O sistema gerencia dados de **veículos** e **marcas**, com a seguinte estrutura:

### 🔸 Tabela: `marcas`

* `id` (int, chave primária)
* `nome` (varchar)

### 🔸 Tabela: `veiculos`

* `id` (int, chave primária)
* `modelo` (varchar)
* `marca_id` (int, chave estrangeira referenciando `marcas.id`)

**Relacionamento**: Uma marca pode ter vários veículos. Cada veículo pertence a uma única marca.

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* Sequelize (ou outro ORM, se usado)
* Dotenv (para variáveis de ambiente)
* Insomnia/Postman (para testar a API)

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Celtico01/crud-veiculos.git
cd crud-veiculos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco de dados MySQL e configure as credenciais no arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306
```

### 4. Rode as migrations ou crie as tabelas manualmente

```sql
CREATE TABLE marcas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

CREATE TABLE veiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modelo VARCHAR(255) NOT NULL,
  marca_id INT,
  FOREIGN KEY (marca_id) REFERENCES marcas(id)
);
```

### 5. Inicie o servidor

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

## 📌 Endpoints

### Marcas

* `GET /marcas` – Lista todas as marcas
* `GET /marcas/:id` – Detalha uma marca
* `POST /marcas` – Cria uma nova marca
* `PUT /marcas/:id` – Atualiza uma marca
* `DELETE /marcas/:id` – Remove uma marca

### Veículos

* `GET /veiculos` – Lista todos os veículos
* `GET /veiculos/:id` – Detalha um veículo
* `POST /veiculos` – Cria um novo veículo
* `PUT /veiculos/:id` – Atualiza um veículo
* `DELETE /veiculos/:id` – Remove um veículo


## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
