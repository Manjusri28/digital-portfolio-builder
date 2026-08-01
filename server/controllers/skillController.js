const Skill = require("../models/Skill");

// Add Skill
exports.addSkill = async(req,res)=>{
    try{

        console.log("USER:", req.user);
        console.log("BODY:", req.body);

        const skill = await Skill.create({
            user:req.user.id,
            skillName:req.body.skillName
        });

        res.status(201).json(skill);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:error.message
        });
    }
};

// Get Skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({
      user: req.user.id,
    });

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Skill
exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Update skill
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        skillName: req.body.skillName,
      },
      {
        new: true,
      }
    );

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    res.status(200).json(skill);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Delete skill
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    res.json({
      message: "Skill deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};