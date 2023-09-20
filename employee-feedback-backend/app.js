require("dotenv").config();
require('./config/database').connect();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminRoutes = require('./Routes/AdminRoutes');
const employeeRoutes = require('./Routes/EmployeeRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/admin', adminRoutes);
app.use('/employee', employeeRoutes);

//get method
app.get("/", (req, res) => {
    let data = "Employee Feedback System";
    res.send(data);
})

module.exports = app;