const Profile = require("../models/Profile");


// ===============================
// Create or Update Profile
// ===============================

exports.createProfile = async (req, res) => {

  try {


    const userId = req.user.id;



    const profileData = {


      fullName: req.body.fullName,


      bio: req.body.bio,


      phone: req.body.phone,


      location: req.body.location,


      github: req.body.github,


      linkedin: req.body.linkedin,


      template: req.body.template,


      user: userId


    };




    // Profile Image

    if(req.files && req.files.profileImage){


      profileData.profileImage =
      `/uploads/${req.files.profileImage[0].filename}`;


    }




    // Resume

    if(req.files && req.files.resume){


      profileData.resume =
      `/uploads/${req.files.resume[0].filename}`;


    }





    const profile = await Profile.findOneAndUpdate(


      {
        user:userId
      },


      profileData,


      {

        new:true,

        upsert:true,

        runValidators:true

      }


    );




    res.status(200).json({

      message:"Profile saved successfully",

      profile

    });



  }

  catch(error){


    console.log(error);


    res.status(500).json({

      message:error.message

    });


  }


};






// ===============================
// Get Logged-in User Profile
// ===============================


exports.getProfile = async(req,res)=>{


  try{


    const profile = await Profile.findOne({

      user:req.user.id

    });



    if(!profile){


      return res.status(404).json({

        message:"Profile not found"

      });


    }



    res.status(200).json(profile);



  }


  catch(error){


    console.log(error);


    res.status(500).json({

      message:error.message

    });


  }


};






// ===============================
// Update Portfolio Template
// ===============================


exports.updateTemplate = async(req,res)=>{


  try{


    const profile = await Profile.findOneAndUpdate(

      {

        user:req.user.id

      },


      {

        template:req.body.template

      },


      {

        new:true

      }

    );



    res.status(200).json({

      message:"Template updated successfully",

      profile

    });



  }


  catch(error){


    console.log(error);


    res.status(500).json({

      message:error.message

    });


  }


};