CREATE DATABASE fashiongeq;

CREATE TABLE users
(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  mail VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL

);

INSERT INTO users (name, mail, password) VALUES ('Génesis Quiaragua', 'genesisqb@gmail.com', '$2a$12$8MOjRIhd2B.73Fa3tKL1M.QDZ0Q5VolzeNmDRNbMIZ6ABZ.yLVdM6');
INSERT INTO users (name, mail, password) VALUES ('Marcos Quiaragua', 'marcosqr@gmail.com', '$2a$12$OACVxHNmf1zfMqnbUvB8suiwpS2JHxeai8SrhEeZPQ5pNoPXI1XnC');
INSERT INTO users (name, mail, password) VALUES ('Lisbeth Balza', 'lisjobr@gmail.com', '$2a$12$nGXEJafgnyUYjiBcH2fE0OQjRU1IWNiZUZ6Id4jDF6uWikbJiLr6y');
INSERT INTO users (name, mail, password) VALUES ('Margarita Rodriguez', 'margothroro@gmail.com', '$2a$12$pyw/Ujh5zlgrDiLWS8w8kOY53zgYl9SyNKOEUzVI0DT66g9GBBJ6.');
INSERT INTO users (name, mail, password) VALUES ('Yolanda Martinez', 'yolanonita@gmail.com', '$2a$12$JR/GY8pnj1WS5rEhLIZYguhzTeFT4A0NDdkb9gc1jQwnDstJSZ/Uy');



CREATE TABLE producto(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  price VARCHAR(100),
  image VARCHAR (100),
  quantity VARCHAR(10)
);

INSERT INTO producto (name, price, image) VALUES ('Reme Shoes Love', '700 UYU','shoes.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme London', '700 UYU', 'london.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme Coffe Time', '700 UYU', 'shoes.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme Goku', '700 UYU', 'goku.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme FBC', '700 UYU', 'fbc.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme Vegeta', '700 UYU', 'vegeta.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme Luna', '700 UYU', 'luna.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme para Papá', '800 UYU', 'corona.jpg');
INSERT INTO producto (name, price, image) VALUES ('Reme para Papá Moderno', '900 UYU', 'papa-moderno.jpg');


CREATE TABLE provider(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name_provider VARCHAR(50) NOT NULL,
  rut_number VARCHAR(50) NOT NULL,
  commercial_address VARCHAR(100),
  phone VARCHAR(50)
);

INSERT INTO provider (name_provider, rut_number, commercial_address, phone) VALUES( 'Textil al Mayor', '1285887566588', 'Av. General Rivera Barrio Cordón, Montevideo-Uruguay', '095632897');
INSERT INTO provider (name_provider, rut_number, commercial_address, phone) VALUES( 'Ropa Nueva Del', '123415789852114', 'Av. Sarmiento 4823 Barrio Pocitos, Montevideo-Uruguay', '094358963');
INSERT INTO provider (name_provider, rut_number, commercial_address, phone) VALUES( 'Pepeganga 2021', '143251589525487', 'Plaza Independencia 848 Barrio Centro, Montevideo-Uruguay', '25698971');

CREATE TABLE stock_cost
(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  provider_id BIGINT REFERENCES provider (id),
  producto_id  BIGINT REFERENCES producto (id),
  quantity_talle1 VARCHAR(10),
  quantity_talle2 VARCHAR(10),
  quantity_talle3 VARCHAR(10),
  price_provider VARCHAR(10)

);


INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 1, 100, 100, 100, 500);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 2, 100, 100, 100, 500);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 3, 100, 100, 100, 500);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 4, 100, 100, 100, 500);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 5, 100, 100, 100, 500);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 6, 100, 100, 100, 500);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (2, 6, 10, 100, 100, 510);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 7, 100, 100, 100, 510);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 8, 100, 100, 100, 510);
INSERT INTO stock_cost (provider_id, producto_id, quantity_talle1, quantity_talle2, quantity_talle3, price_provider )
VALUES (1, 9, 100, 100, 100, 510);


CREATE TABLE online_sales
(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  users_id BIGINT REFERENCES users (id),
  producto_id  BIGINT REFERENCES producto (id),
  client_quant_talle1 VARCHAR(10),
  client_quant_talle2 VARCHAR(10),
  client_quant_talle3 VARCHAR(10),
  unit_price VARCHAR(10),
  final_product_price VARCHAR(10),
  payment_type VARCHAR(50)
);

INSERT INTO online_sales(users_id, producto_id, client_quant_talle1, client_quant_talle2, client_quant_talle3, unit_price, final_product_price, payment_type) 
VALUES( 1, 2, NULL, 3, 2, 700, 3500, 'Mercado Libre');

INSERT INTO online_sales (users_id, producto_id, client_quant_talle1, client_quant_talle2, client_quant_talle3, unit_price, final_product_price, payment_type) 
VALUES( 3, 6, NULL, NULL, 1, 700, 700, 'RedPagos');

INSERT INTO online_sales (users_id, producto_id, client_quant_talle1, client_quant_talle2, client_quant_talle3, unit_price, final_product_price, payment_type) 
VALUES( 5, 9, 2, NULL, NULL, 900, 1800, 'Contado');
