// Import and the require of MySQL 
const express = require('express');

const mysql = require('mysql');

// PORT request for database
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extened: false}));
app.use(express.json());

// Connection for database
const db = mysql.createConnection(
    {
        // host connection
        host: 'localhost',

        // MySQL user
        user: 'root',

        // MySQL password
        password: 'rootroot',

        // database connection
        database: 'company_db'
    },
    console.log(`You're now connected to company_db databases.`)
);

// View all employees in the comapny
app.get('/api/employee', (req, res) => {
    const sql = `SELECT employee.first_name AS employee first name`;
    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'Employee have been selected',
            data: rows
        });
    });
});



// Create new employees in the company

// Update employee information

// Delete employee from database id