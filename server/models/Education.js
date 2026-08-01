const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    institution: {
      type: String,
      required: true,
    },

    startYear: {
      type: String,
      required: true,
    },

    endYear: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Education",
  educationSchema
);