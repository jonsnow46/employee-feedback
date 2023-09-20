const express = require('express');
const Employee = require('../Models/Employee')
const router = express.Router();

const mongoType = require('mongoose').Types;
const PerformanceReview = require('../Models/Performance');

//get details
router.get('/employee/:name', async (req, res) => {
    try {
        const employee = await Employee.find({ employee_name: req.params.name });
        res.status(200).send(employee);
    } catch (err) {
        console.log("Error occured while fetching");
        res.status(400).send("Internal error " + err)
    }
})

//get all employee reviews
router.get('/performance/:employee_name', async (req, res) => {
    try {
        const performance = await PerformanceReview.find({ employee_name: req.params.employee_name });
        res.status(200).send(performance);
    } catch (err) {
        console.log("Error occured while fetching");
        res.status(400).send("Internal error " + err)
    }
})


//get pending reviews
router.get('/performance/pending/:name', async (req, res) => {
    try {
        const performance = await PerformanceReview.find({ reviewer_name: req.params.name, performance_review: 'pending' });
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


module.exports = router;