const Skill = require("../models/Skill");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const Profile = require("../models/Profile");


exports.getDashboardStats = async (req, res) => {

  try {

    const userId = req.user.id;


    const skills = await Skill.countDocuments({
      user: userId,
    });


    const education = await Education.countDocuments({
      user: userId,
    });


    const experience = await Experience.countDocuments({
      user: userId,
    });


    const projects = await Project.countDocuments({
      user: userId,
    });


    const profile = await Profile.findOne({
      user: userId
    });



    res.status(200).json({

      skills,

      education,

      experience,

      projects,

      views: profile?.views || 0

    });


  } catch(error){

    console.log(error);

    res.status(500).json({

      message:error.message

    });

  }

};