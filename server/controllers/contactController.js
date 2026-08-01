const Contact = require("../models/Contact");


// ===============================
// Send Contact Message
// ===============================

exports.sendMessage = async (req, res) => {

    try {

        const {
            portfolioOwner,
            name,
            email,
            message
        } = req.body;


        const contact = await Contact.create({

            portfolioOwner,
            name,
            email,
            message

        });


        res.status(201).json({

            message: "Message sent successfully",
            contact

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};



// ===============================
// Get Messages for Portfolio Owner
// ===============================

exports.getMessages = async(req,res)=>{

    try{

        console.log("USER DATA:", req.user);


        const messages = await Contact.find({

            portfolioOwner: req.user.id

        });


        res.status(200).json(messages);


    }catch(error){

        console.log("ERROR:", error);


        res.status(500).json({

            message:error.message

        });

    }

};