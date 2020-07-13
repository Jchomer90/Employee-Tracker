const mysql = require("mysql");
const express = require("express");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const app = express();

var db = require("./db/index")

require("dotenv").config();

let connection = mysql.createConnection({
    host: "localhost",
    port: 4400,
    user:"root",
    password: "Flyguys90$",
    database: "employees_db"
});

connection.connect(function(err, data) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    init();
});

// function init() {
// inquirer
//     .prompt([
//         {
//             type: "list",
//             name: "initialPrompt",
//             message: "What would you like to do?",
//             choices: ["Add Department", "View all employees", "View all employees by department", "Add Employee", "View Employee Roles", "Update Employee role", "Quit"]
//         }
//     ])
//     .then(function(res) {
//         switch (res.initialPrompt) {
//             case "Add Department":
//                 addDepartment();
//                 break;
//             case "View all employees":
//                 viewAllEmployees();
//                 break;
//             case "View all employees by department":
//                 viewEmployeesDept();
//                 break;
//             case "Add Employee":
//                 addEmployee();
//                 break;
//             case "View Employee Roles":
//                 viewEmployeeRoles();
//                 break;
//             case "Update Employee role":
//                 updateEmployeesRole();
//                 break;
//             case "Quit":
//                 connection.end();
//                 break;

//         }
//     })
// }
// function addDepartment() {
//     inquirer.prompt(
//         {
//             type: "input",
//             message: "What is the new department?",
//             name: "newDepartment"
//         }
//     )
//     .then(function(res) {
        
        
//         init();
//     });
// };


// function viewEmployeesDept() {
//     inquirer.prompt(
//         {
//             type: "list",
//             name: "employeesByDept",
//             message: "Which department would you like to see employees for?",
//             choices: ["Sales", "Engineering", "Finance", "Legal"]
//         }
//     )
//     .then(function(res) {


//         init();
//     });
// };

// function viewAllEmployees() {
//     console.table(db.viewAllEmployees());

//     init();
// };

// function viewEmployeesDept() {
//     inquirer.prompt([

//     ])
//     .then(function(res) {


//         init();
//     });
// };

// function addEmployee() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "addEmployeeFirst",
//             message: "What is your employee's first name?"
//         },
//         {
//             type: "input",
//             name: "addEmployeeLast",
//             message: "What is your employee's last name?"
//         },
//         {
//             type: "list",
//             name: "addEmployeeRole",
//             message: "What is your employee's role?",
//             choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
//         },
//         {
//             type: "list",
//             name: "addEmployeeManager",
//             message: "What is your employee's role?",
//             // choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
//         }
//     ]).then(function(employee){


//         // db.createEmployee([employee.addEmployeeFirst])
//         // connection.query("INSERT INTO employees VALUES(?)",[employee.addEmployeeFirst, employee.addEmployeeLast]);


//         init();
//     });
// };

// function viewEmployeeRoles() {


//     init();
// };

// function updateEmployeesRole() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "updateEmployeeRole",
//             message: "Which Employee role do you want to update?",
//             // choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
//         }
//     ])
//     .then(function(res) {


//         init();
//     });
// };

