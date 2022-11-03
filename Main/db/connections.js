const mysql = required("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    // MySQL user
    user: "root",

    // MySQL password
    password: "rootroot",
    

    // MySQL Database
    database: "employee"
});