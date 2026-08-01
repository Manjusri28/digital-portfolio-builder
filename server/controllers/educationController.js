const Education = require("../models/Education");

// Add Education
exports.addEducation = async (req, res) => {
  console.log("Education Body:", req.body);
  console.log("User:", req.user);

  try {
    const education = await Education.create({
      user: req.user.id,
      degree: req.body.degree,
      institution: req.body.institution,
      startYear: req.body.startYear,
      endYear: req.body.endYear,
      grade: req.body.grade,
    });

    res.status(201).json({
      message: "Education added successfully",
      education,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//fetch education
const fetchEducation = async () => {
  try {
    const res = await API.get("/education", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Education Response:", res.data);

    setEducation(res.data);

  } catch (error) {
    console.log(error);
  }
};


// Get Education
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find({
      user: req.user.id,
    });

    res.status(200).json(education);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Education
exports.deleteEducation = async (req, res) => {
  try {

    await Education.findOneAndDelete({
  _id: req.params.id,
  user: req.user.id,
});

    res.status(200).json({
      message: "Education deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Update Education
exports.updateEducation = async (req, res) => {
  try {

    const education = await Education.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        degree: req.body.degree,
        institution: req.body.institution,
        startYear: req.body.startYear,
        endYear: req.body.endYear,
        grade: req.body.grade,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!education) {
      return res.status(404).json({
        message: "Education not found",
      });
    }

    res.status(200).json({
      message: "Education updated successfully",
      education,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};