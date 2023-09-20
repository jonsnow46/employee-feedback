const express = require('express');
const Employee = require('../Models/Employee')
const router = express.Router();

const mongoType = require('mongoose').Types;
const PerformanceReview = require('../Models/Performance');

//post employee api
router.post('/employee', async (req, res) => {
    let employeeObj = new Employee({
        employee_number: req.body.employee_number,
        employee_name: req.body.employee_name,
        joining_year: req.body.joining_year,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const employee = await employeeObj.save({});
        res.send(employee);
    } catch (err) {
        console.log('Error occurred while adding data to database');
        res.status(400).send('Internal Error ' + err);
    }
})

//get all employees
router.get('/employee', async (req, res) => {
    try {
        const employee = await Employee.find({});
        res.status(200).send(employee);
    } catch (err) {
        console.log("Error occured while fetching");
        res.status(400).send("Internal error " + err)
    }
})

//update employee
router.put('/employee/:id', async (req, res) => {
    let employeeObj = {
        employee_number: req.body.employee_number,
        employee_name: req.body.employee_name,
        joining_year: req.body.joining_year,
        email: req.body.email,
        password: req.body.password,
    };

    if (mongoType.ObjectId.isValid(req.params.id)) {

        try {
            const employee = await Employee.findByIdAndUpdate(req.params.id, { $set: employeeObj }, { new: this.true }, ({}));
            res.status(200).send(employee);
        } catch (err) {
            console.log("Error occured while fetching");
            res.status(400).send("Internal error " + err)
        }
    }
    else {
        res.status(400).send('Unable to find employee');
    }

})

//delete employee
router.delete('/employee/:id', async (req, res) => {
    if (mongoType.ObjectId.isValid(req.params.id)) {
        try {
            const employee = await Employee.findByIdAndRemove(req.params.id, ({}));
            res.status(200).send(employee);
        } catch (err) {
            console.log("Error occured while fetching");
            res.status(400).send("Internal error " + err)
        }
    }
    else {
        res.status(400).send('Unable to find employee');
    }

})

//get credentials
router.get('/employee/:email', async (req, res) => {
    try {
        const employee = await Employee.find({ email: req.params.email });
        console.log(employee, req.params.email)
        res.status(200).send(employee);
    } catch (err) {
        console.log("Error occured while fetching");
        res.status(400).send("Internal error " + err)
    }
})


//post performance api
router.post('/performance', async (req, res) => {
    let performanceObj = new PerformanceReview({
        employee_name: req.body.employee_name,
        reviewer_name: req.body.reviewer_name,
        performance_review: req.body.performance_review,
        feedback: req.body.feedback,
    });
    try {
        const performance = await performanceObj.save({});
        res.send(performance);
    } catch (err) {
        console.log('Error occurred while adding data to database');
        res.status(400).send('Internal Error ' + err);
    }
})

//get all employees
router.get('/performance', async (req, res) => {
    try {
        const performance = await PerformanceReview.find({});
        res.status(200).send(performance);
    } catch (err) {
        console.log("Error occured while fetching");
        res.status(400).send("Internal error " + err)
    }
})

//filter performance of specific employee
router.get('/performance/:employee_name', async (req, res) => {
    try {
        const performance = await PerformanceReview.find({ employee_name: req.params.employee_name });
        res.status(200).send(performance);
    } catch (err) {
        console.log("Error occured while fetching");
        res.status(400).send("Internal error " + err)
    }
})

//update performance
router.put('/performance/:id', async (req, res) => {
    let performanceObj = {
        employee_name: req.body.employee_name,
        reviewer_name: req.body.reviewer_name,
        performance_review: req.body.performance_review,
        feedback: req.body.feedback,
    };

    if (mongoType.ObjectId.isValid(req.params.id)) {

        try {
            const performance = await PerformanceReview.findByIdAndUpdate(req.params.id, { $set: performanceObj }, { new: this.true }, ({}));
            res.status(200).send(performance);
        } catch (err) {
            console.log("Error occured while fetching");
            res.status(400).send("Internal error " + err)
        }
    }
    else {
        res.status(400).send('Unable to find performance review');
    }

})

//delete performance
router.delete('/performance/:id', async (req, res) => {
    
    if (mongoType.ObjectId.isValid(req.params.id)) {
        try {
            const performance = await PerformanceReview.findByIdAndRemove(req.params.id, ({}));
            res.status(200).send(performance);
        } catch (err) {
            console.log("Error occured while fetching");
            res.status(400).send("Internal error " + err)
        }
    }
    else {
        res.status(400).send('Unable to find employee');
    }

})


module.exports = router;