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
    },
    first: {
        type: String,
        required: true,
        default: "Sarah",
    },
    last: {
        type: String,
        required: true,
        default: "Conor",

    },
    country: {
        type: String,
        required: true,
        default: "United States"
    },
    Region: {
        type: String,
        default: ""
    },
    Cats: {
        type: Number,
        default: 1
    }


});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = { Customer, CustomerSchema };
