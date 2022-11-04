// Import and the require of MySQL 
const express = require('express');

const mysql = require('mysql');

// PORT request for database
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extened: false}));
app.use(express.json());
