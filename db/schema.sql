DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE jobRole(
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  salary DECIMAL(65),
  department_id INT,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id),
  PRIMARY KEY (id)
);

CREATE TABLE employees(
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT,
  role_id INT,
  CONSTRAINT fk_jobRole FOREIGN KEY (role_id) REFERENCES jobRole(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id),
  PRIMARY KEY (id)
);



