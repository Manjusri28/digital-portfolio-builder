const Testimonial = require("../models/Testimonial");


// Add Testimonial
exports.addTestimonial = async (req, res) => {

  try {

    const {
      portfolioOwner,
      visitorName,
      visitorEmail,
      rating,
      review
    } = req.body;


    const testimonial = await Testimonial.create({

      portfolioOwner,
      visitorName,
      visitorEmail,
      rating,
      review

    });


    res.status(201).json({

      message: "Testimonial submitted successfully. Waiting for approval.",

      testimonial

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};



// Get Approved Testimonials
exports.getTestimonials = async (req, res) => {

  try {

    const testimonials = await Testimonial.find({

      portfolioOwner: req.params.portfolioOwner,

      approved: true

    }).sort({

      createdAt: -1

    });


    res.json(testimonials);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};



// Get Portfolio Owner Testimonials
exports.getOwnerTestimonials = async (req, res) => {

  try {

    const testimonials = await Testimonial.find({

      portfolioOwner: req.user.id

    }).sort({

      createdAt: -1

    });


    res.json(testimonials);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};



// Approve Testimonial
exports.approveTestimonial = async (req, res) => {

  try {

    const testimonial = await Testimonial.findByIdAndUpdate(

      req.params.id,

      {

        approved: true

      },

      {

        returnDocument: "after"

      }

    );


    res.json({

      message: "Testimonial approved",

      testimonial

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};



// Delete Testimonial
exports.deleteTestimonial = async (req, res) => {

  try {

    await Testimonial.findByIdAndDelete(

      req.params.id

    );


    res.json({

      message: "Testimonial deleted"

    });

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};