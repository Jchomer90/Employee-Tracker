const mysql = require("mysql");
const express = require("express");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const app = express();

var db = require("./db/index")

require("dotenv").config();

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password: process.env.DB_PASS,
    database: "employees_db"
});

connection.connect(function(err, data) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    init();
});

function init() {
inquirer
    .prompt([
        {
            type: "list",
            name: "initialPrompt",
            message: "What would you like to do?",
            choices: ["Add Department", "View all employees", "View all employees by department", "Add Employee", "View Employee Roles", "Update Employee role", "Quit"]
        }
    ])
    .then(function(res) {
        switch (res.initialPrompt) {
            case "Add Department":
                addDepartment();
                break;
            case "View all employees":
                viewAllEmployees();
                break;
            case "View all employees by department":
                viewEmployeeDept();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Employee Roles":
                viewEmployeeRoles();
                break;
            case "Update Employee role":
                addEmployeeRole();
                break;
            case "Quit":
                connection.end();
                break;

        }
    })
}
function addDepartment() {
    inquirer.prompt(
        {
            type: "input",
            message: "What is the new department?",
            name: "newDepartment"
        }
    )
    .then(function(res) {
        
        
        init();
    });
};


function viewEmployeeDept() {
    inquirer.prompt(
        {
            type: "list",
            name: "employeesByDept",
            message: "Which department would you like to see employees for?",
            choices: ["Sales", "Engineering", "Finance", "Legal"]
        }
    )
    .then(function(res) {

        connection.query("SELECT * FROM department");
        init();
    });
};

function viewAllEmployees() {
    connection.query(
        `SELECT employee.id, employee.first_Name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role_id LEFT JOIN department on role department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`)

    init();
};

function viewEmployeesDept() {
    inquirer.prompt([

    ])
    .then(function(res) {


        init();
    });
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "addEmployeeFirst",
            message: "What is your employee's first name?"
        },
        {
            type: "input",
            name: "addEmployeeLast",
            message: "What is your employee's last name?"
        },
        {
            type: "list",
            name: "addEmployeeRole",
            message: "What is your employee's role?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
        },
        {
            type: "list",
            name: "addEmployeeManager",
            message: "What is your employee's role?",
            // choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
        }
    ]).then(function(employee){


        // db.createEmployee([employee.addEmployeeFirst])
        // connection.query("INSERT INTO employees VALUES(?)",[employee.addEmployeeFirst, employee.addEmployeeLast]);


        init();
    });
};

function viewEmployeeRoles() {
    connection.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");

    init();
};

function addEmployeeRole() {
    inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which Employee's role do you want to update?",
            // choices: 
        },
        {
            type: "list",
            name: "role",
            message: "Choose a new role for your employee",
            // choices: 
        }
    ])
    .then(function(res) {
        connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [role, employee]);

        init();
    });
};

