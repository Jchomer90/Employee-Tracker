const mysql = require("mysql");
const express = require("express");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const app = express();

// var db = require("./db/index");
const { title } = require("process");

require("dotenv").config();

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "employees_db"
});

connection.connect(function (err, data) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    init();
});

// let employees = [];
// let departments = [];
// let jobRoles = [];

class employees {
    constructor(first_name, last_name, role_id, manager_id){
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    getFirstName() {
        return this.first_name;
    }
    getLastName() {
        return this.last_name;
    }
    getRoleId() {
        return this.role_id;
    }
    getManagerId() {
        return this.manager_id;
    }
};
class departments {
    constructor(name) {
        this.name = name;
    }
    getDeptName() {
        return this.name;
    }
};
class jobRoles {
    constructor(title, salary, department_id) {
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }
    getJobTitle() {
        return this.title;
    }
    getSalary() {
        return this.salary;
    }
    getDeptId() {
        return this.department_id;
    }
};

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
        .then(function (res) {
            switch (res.initialPrompt) {
                case "Add Department":
                    addDepartment();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "View all employees by department":
                    viewDepts();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "View Employee Roles":
                    viewEmployeeRoles();
                    break;
                case "Update Employee role":
                    updateEmployeeRole();
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
        .then(function (res) {
            connection.query("SELECT name FROM employees_db.department WHERE name = ?", [res.newDepartment], function (err, res) {
                if (err) throw err;
            })

            init();
        });
};


function viewDepts() {

    connection.query("SELECT * from employees_db.department"), function (err, res) {
        if (err) throw err;
        consoleTable(res);
        init();
    }
};



function viewAllEmployees() {
    connection.query("SELECT * FROM employees_db.employees"), function (err, res) {
        if (err) throw err;
        init();
    };
    


    // `SELECT employee.id, employee.first_Name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role_id LEFT JOIN department on role department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`)

    
};

// function viewDepts() {
//     connection.query("SELECT * from employees_db.department"), function(err, res) {
//         if (err) throw err;
//         consoleTable.table(res);
//     }
//         init();
//     };


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
    ]).then(function (employee) {


        // db.createEmployee([employee.addEmployeeFirst])
        // connection.query("INSERT INTO employees VALUES(?)",[employee.addEmployeeFirst, employee.addEmployeeLast]);


        init();
    });
};

function viewEmployeeRoles() {
    connection.query("SELECT jobRole.id, jobRole.title, department.name AS department, jobRole.salary FROM role LEFT JOIN department on jobRole.department_id = department.id;");

    init();
};

function updateEmployeeRole() {
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
        .then(function (res) {
            connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [jobRole, employee]);

            init();
        });
};

