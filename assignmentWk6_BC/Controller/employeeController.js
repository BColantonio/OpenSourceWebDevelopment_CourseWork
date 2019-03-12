const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee')

router.get('/', (req, res) => {
    res.render("employee/add_Edit",{
        
        viewTitle: "Insert Employee"

    });
});

router.post('/', (req, res) => {

    req.body._id == '' ? insertRecord(req, res) : updateRecord(req, res);

})

function insertRecord(req, res) {
    var employee = new Employee();
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.department = req.body.department;
    employee.startDate = req.body.startDate;
    employee.jobTitle = req.body.jobTitle;
    employee.salary = req.body.salary;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('employee/list');
        else {
            if (err.type == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/add_Edit", {
                    viewTitle: "Insert Employee",
                    employee: req.body
                });
            }
            else
                console.log("Insertion error : " + err);
        }
    })
}

function updateRecord(req, res) {
    Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if (!err) {res.redirect('employee/list');}
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/add_Edit", {
                    viewTitle: "Update Employee",
                    employee: req.body
                });
            }
            else
                console.log('Update error: ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        (!err) ? res.render('employee/list', {list: docs}) : console.log("Retrieval Error: " + err);
    });
});
        //     if (!err) {
    //         res.render('emp/list', {
    //             list: docs
    //         });
    //     }else{
    //         console.log("Retrieval Error: " + err)
    //     }
    // });

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/add_Edit", {
                viewTitle: 'Update Employee', 
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRomove(req.params.id, (err, doc) => {
        (!err) ? res.redirect('/employee/list') : console.log('Error upon delete : ' + err)
    });
});

module.exports = router;