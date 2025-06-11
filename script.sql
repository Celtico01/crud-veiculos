--Estrutura do banco de dados MySQL:

CREATE DATABASE veiculos_db;
USE veiculos_db;

CREATE TABLE marcas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE veiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modelo VARCHAR(100) NOT NULL,
  marca_id INT,
  FOREIGN KEY (marca_id) REFERENCES marcas(id)
);