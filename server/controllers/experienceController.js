const Experience = require("../models/Experience");


// Add Experience

exports.addExperience = async (req,res)=>{

try{

const experience = await Experience.create({

user:req.user.id,

company:req.body.company,

role:req.body.role,

duration:req.body.duration,

description:req.body.description

});


res.status(201).json({

message:"Experience added successfully",

experience

});


}
catch(error){

res.status(500).json({

message:error.message

});

}

};

// Get Experience

exports.getExperience = async(req,res)=>{
    try{
        const experiences = await Experience.find({
            user:req.user.id
        });
        res.status(200).json(experiences);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

// Delete Experience

exports.deleteExperience = async(req,res)=>{
    try{
        await Experience.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json({
            message:"Experience deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};