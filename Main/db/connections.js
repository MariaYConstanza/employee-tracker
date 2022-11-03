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

// exporting connection for MySQL
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = conection;