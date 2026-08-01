const User = require("../models/User");
const Profile = require("../models/Profile");
const Skill = require("../models/Skill");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const ViewHistory = require("../models/ViewHistory");


exports.getPublicPortfolio = async (req, res) => {

  try {

    const userId = req.params.id;


    // Save portfolio view history
    const view = await ViewHistory.create({

      user: userId,

      views: 1

    });


    console.log("VIEW HISTORY SAVED:", view);



    const user = await User.findById(userId)
      .select("-password");



    if (!user) {

      return res.status(404).json({

        message: "User not found"

      });

    }



    // Increase total profile views
    const profile = await Profile.findOneAndUpdate(

      {
        user: userId
      },

      {
        $inc: {
          views: 1
        }
      },

      {
        returnDocument: "after"
      }

    );



    const skills = await Skill.find({

      user: userId

    });



    const education = await Education.find({

      user: userId

    });



    const experience = await Experience.find({

      user: userId

    });



    const projects = await Project.find({

      user: userId

    });



    res.json({

      user,

      profile,

      skills,

      education,

      experience,

      projects

    });



  } catch(error) {


    console.log("PUBLIC PORTFOLIO ERROR:", error.message);


    res.status(500).json({

      message: error.message

    });


  }

};