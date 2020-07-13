const mysql = require("mysql");
const express = require("express");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const path = require("path");
const app = express();

var db = require("./db/index")

require("dotenv").config();


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
                viewEmployeesDept();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Employee Roles":
                viewEmployeeRoles();
                break;
            case "Update Employee role":
                updateEmployeesRole();
                break;
            case "Quit":
                connection.end();
                break;

        }
    })
}
function addDepartment() {
    inquirer.prompt([

    ])
};

function viewEmployeesDept() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeesByDept",
            message: "Which department would you like to see employees for?",
            choices: ["Sales", "Engineering", "Finance", "Legal"]
        }
    ])
};

function viewAllEmployees() {
    console.table(db.viewAllEmployees());
};

function viewEmployeesDept() {
    inquirer.prompt([

    ])
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
        db.createEmployee([employee.addEmployeeFirst])
        connection.query("INSERT INTO employees VALUES(?)",[employee.addEmployeeFirst, employee.addEmployeeLast])

    })
};

function viewEmployeeRoles() {
    inquirer.prompt([

    ])
};

function updateEmployeesRole() {
    inquirer.prompt([
        {
            type: "list",
            name: "updateEmployeeRole",
            message: "Which Employee role do you want to update?",
            // choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
        }
    ])
};

init();