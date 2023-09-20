const mongoose = require("mongoose");

const PerformanceReview = mongoose.model('Performance', {
    employee_name: { type: String },
    reviewer_name: { type: String },
    performance_review: { type: String },
    feedback: { type: String }
})

module.exports = PerformanceReview;