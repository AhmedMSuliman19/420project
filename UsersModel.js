const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        ausId: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        mobileNo: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const UsersModel = mongoose.model('users', UsersSchema);

// Exposes an object (UsersModel) which mean export
// something (const, var, function)
module.exports = UsersModel;