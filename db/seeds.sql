USE employees_db;

INSERT INTO employees (first_name, last_name,role_id,manager_id ) values ('John', 'Doe', 10);

INSERT INTO department (name) values ('Engineering');

INSERT INTO role (title, salary) values ('Engineer', 90.000);
INSERT INTO role (title, salary) values ('Intern', 0.000);
INSERT INTO role (title, salary) values ('Manager', 150.000);