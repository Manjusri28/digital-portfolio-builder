const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resume: {
      type: String,
      default: "",
    },

    template: {
      type: String,
      default: "modern",
    },

    views:{
      type:Number,
      default:0
    },

    fullName: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },
    template: {
       type: String,
       default: "modern",
    },

    

  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Profile", profileSchema);