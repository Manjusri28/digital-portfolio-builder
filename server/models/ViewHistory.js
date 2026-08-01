const mongoose = require("mongoose");


const viewHistorySchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    date:{
        type:Date,
        default:Date.now
    },


    views:{
        type:Number,
        default:1
    }


});


module.exports = mongoose.model(
    "ViewHistory",
    viewHistorySchema
);