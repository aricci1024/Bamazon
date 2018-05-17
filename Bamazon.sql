-- Create a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Head and Shoulders Shampoo', 'Cosmetics', 6.75, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Golden State Warriors T-Shirt', 'Clothing', 19.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('First Aid Kit', 'Pharmacy', 25.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Clover Milk', 'Grocery', 5.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cuties Oranges', 'Grocery', 3.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Kind Granola', 'Grocery', 6.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cheerios', 'Grocery', 3.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Degree Deodorant', 'Cosmetics', 4.25, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('God of War', 'Electronics', 59.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nike shorts', 'Clothing', 24.99, 100);