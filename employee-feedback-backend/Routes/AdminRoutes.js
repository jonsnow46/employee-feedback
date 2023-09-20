const express = require('express');
const Employee = require('../Models/Employee')
const router = express.Router();

const mongoType = require('mongoose').Types;
const employee = require('../Models/Employee');

//post employee api
router.post('/employee', async (req, res) => {
    let employeeObj = new Employee({
        employee_number: req.body.employee_number,
        employee_name: req.body.employee_name,
        joining_year: req.body.joining_year,
        performance_review: req.body.performance_review,
        feedback: req.body.feedback,
    });

    console.log('request ' + req);
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
router.put('/employee/:id',async (req,res) =>{
    let employeeObj = {
        employee_number: req.body.employee_number,
        employee_name: req.body.employee_name,
        joining_year: req.body.joining_year,
        performance_review: req.body.performance_review,
        feedback: req.body.feedback,
    };
    
        if(mongoType.ObjectId.isValid(req.params.id)){
            
            try {
                const employee = await Employee.findByIdAndUpdate(req.params.id, {$set : employeeObj},{new : this.true},({}));
                res.status(200).send(employee);
            } catch (err) {
                console.log("Error occured while fetching");
                res.status(400).send("Internal error " + err)
            }
        }
        else{
            res.status(400).send('Unable to find employee');
        }
    
})

//delete employee
router.delete('/employee/:id',async (req,res) =>{
        if(mongoType.ObjectId.isValid(req.params.id)){
            try {
                const employee = await Employee.findByIdAndRemove(req.params.id,({}));
                res.status(200).send(employee);
            } catch (err) {
                console.log("Error occured while fetching");
                res.status(400).send("Internal error " + err)
            }
        }
        else{
            res.status(400).send('Unable to find employee');
        }
    
})

module.exports = router;