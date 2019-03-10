const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
     
    },
    lastName: {
        type: String,
     
    },
    department: {
        type: String,
     
    },
    startDate: {
        type: Date
    },
    JobTitle: {
        type: String
    },
    salary: {
        type: Number
    }
});

mongoose.model('Employee', employeeSchema);