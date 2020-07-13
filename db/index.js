/*
 * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

  LOOK UP SQL SYNTAX AND BUILD OUT THESE FUNCTIONS BELOW

  GET WORKBENCH INSERT TO WORK PROPERLY, MAKE THE SEEDS GO INTO THE WORKENCH

  most important: figure out why your sql connection is coming back undefined


*/
var mysql=require("mysql")

module.exports={
    connection: mysql.createConnection({
        host: "localhost",
        port: 3306,
        user:"root",
        password: "Flyguys90$",
        database: "employees_db"
    }),
    createEmployee:function(employeeName){
        return this.connection.query("INSERT INTO employees_db.employees SET ?", employeeName)
    },
    addEmployee:function(employee){
        
    },
    updateEmployee:function(employee, role){
        return this.connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [role, employee]
        );
    },
    viewAllEmployees:function()  {
        return this.connection.query(
        `SELECT employee.id, employee.first_Name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) as manager FROM employee LEFT JOIN role on employee.role_id = role_id LEFT JOIN department on role department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
        // this.connection.query(query, (err, res) => {
        //     if (err) throw err;
        //     console.table(res);
        );
     



    //    return this.connection.query("SELECT * FROM employees_db.employees", function (err, result, fields) {
    //           if (err) throw err;
    //           return result
    //         });
          
    },
    addRole:function(role){
        return this.connection.query("INSERT INTO role SET ?", role);
    },
    viewRole:function(){
        return this.connection.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
    },
    addDepartment: function(department){
        return this.connection.query("INSERT INTO department SET ?", department);
    },
    viewDepartment:function(department){
        return this.connection.query("SELECT * FROM department");
    },
}


