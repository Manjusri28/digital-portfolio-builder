import { useState } from "react";
import API from "../services/api";


function ContactForm({ ownerId }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const submitForm = async (e) => {

    e.preventDefault();

    try {

      await API.post("/contact", {
        ...form,
        portfolioOwner: ownerId
      });


      alert("Message sent successfully");


      setForm({
        name:"",
        email:"",
        message:""
      });


    } catch(error){

      console.log(error);

    }

  };


  return (

<section className="contact-section">

<h2>
Contact Me
</h2>


<form onSubmit={submitForm}>


<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
/>


<input
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
/>


<textarea
name="message"
placeholder="Message"
value={form.message}
onChange={handleChange}
/>


<button>
Send Message
</button>


</form>

</section>

);
} 
export default ContactForm;