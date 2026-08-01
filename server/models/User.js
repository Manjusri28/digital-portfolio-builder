const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            reqyired: true,
        },

        role: {
            type: String,
            enum: ["user"],
            default: "user"
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("User", userSchema);