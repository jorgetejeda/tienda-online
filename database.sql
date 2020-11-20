CREATE DATABASE storeonline;

USE storeonline;

CREATE TABLE categories (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    description varchar(255)
);

CREATE TABLE products (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    description text NOT NULL,
    price FLOAT(10,2) NOT NULL DEFAULT '0.00', 
    image text,
    category_id int NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name, description) values ("Sofa", "Para mayor comodidad y confort");

INSERT INTO products (name, description, price, category_id) values ("nolmyra", "chapa de abedul/gris", "3295.00", "1");