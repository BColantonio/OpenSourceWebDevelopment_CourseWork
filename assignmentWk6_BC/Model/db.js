const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Employee', { useNewUrlParser: true }, (err) => {
    (!err) ? console.log('MongoDB Connection Succeeded.') : console.log('Error in DB connection : ' + err)
});

require('./employee.model');