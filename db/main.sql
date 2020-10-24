DROP DATABASE IF EXISTS Burgers_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE Burgers_db;

USE Burgers_db;

CREATE TABLE menu(
id int AUTO_INCREMENT NOT NULL,
name VARCHAR (30) NOT NULL,
eaten BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);

INSERT INTO menu (name, eaten)
VALUES ("black and blue", 1);

 SELECT * FROM menu;