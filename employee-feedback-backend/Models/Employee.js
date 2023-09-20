const mongoose = require("mongoose");

const Employee = mongoose.model('Employee', {
    employee_number: { type: Number },
    employee_name: { type: String },
    joining_year: { type: Number },
    email: { type: String },
    password: { type: String },
})

module.exports = Employee;