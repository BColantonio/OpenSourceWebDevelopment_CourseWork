const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
     
    },
    lastName: {
        type: String,
     
    },
    deptartment: {
        type: String,
     
    },
    startDate: {
        type: Date
    },
    jobTitle: {
        type: String
    },
    salary: {
        type: Number
    }
});

mongoose.model('Employee', employeeSchema);