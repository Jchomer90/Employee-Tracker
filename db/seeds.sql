USE employees_db;

INSERT INTO jobRole (title, salary, department_id)

INSERT INTO department (name) values ('Engineering'), ('Sales'), ('Finance'), ('Legal');

INSERT INTO jobRole (department_id, title, salary) values (1, 'Engineer', 90000);
INSERT INTO jobRole (department_id, title, salary) values (2, 'Sales Lead', 80000);
INSERT INTO jobRole (department_id, title, salary) values (3, 'Accountant', 100000);
INSERT INTO jobRole (department_id, title, salary) values (4, 'Lawyer', 140000);

INSERT INTO employees (first_name, last_name, manager_id, role_id) values ('John', 'Doe', 1, 1);