const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }

});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = { Customer, CustomerSchema };
