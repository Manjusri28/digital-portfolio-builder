const Profile = require("../models/Profile");
const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Contact = require("../models/Contact");
const ViewHistory = require("../models/ViewHistory");
const mongoose = require("mongoose");



// Dashboard Analytics

exports.getAnalytics = async(req,res)=>{

    try{

        const userId = req.user.id;


        const profile = await Profile.findOne({
            user:userId
        });


        const skills = await Skill.countDocuments({
            user:userId
        });


        const projects = await Project.countDocuments({
            user:userId
        });


        const education = await Education.countDocuments({
            user:userId
        });


        const experience = await Experience.countDocuments({
            user:userId
        });


        const messages = await Contact.countDocuments({
            portfolioOwner:userId
        });



        res.json({

            views: profile?.views || 0,

            skills,

            projects,

            education,

            experience,

            messages

        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Portfolio Views Chart Data

exports.getViewAnalytics = async(req,res)=>{

    try{

        const userId = req.user.id;


        const views = await ViewHistory.aggregate([

            {
                $match:{
                    user:new mongoose.Types.ObjectId(userId)
                }
            },


            {
                $group:{

                    _id:{
                        $dateToString:{
                            format:"%Y-%m-%d",
                            date:"$date"
                        }
                    },


                    totalViews:{
                        $sum:"$views"
                    }

                }

            },


            {
                $sort:{
                    _id:1
                }
            }


        ]);


        res.json(views);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};