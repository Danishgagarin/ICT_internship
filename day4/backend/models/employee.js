const mongoose = require("mongoose");

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Salary: Number
});

var EmplyeeModel = mongoose.model("emp", schema);
module.exports = EmplyeeModel;
