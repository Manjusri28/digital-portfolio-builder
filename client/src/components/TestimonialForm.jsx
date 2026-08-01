import { useState } from "react";
import API from "../services/api";
import "../styles/testimonial.css";


function TestimonialForm({ownerId}) {


const [form,setForm] = useState({

    visitorName:"",
    visitorEmail:"",
    rating:5,
    review:""

});



const handleChange=(e)=>{

    setForm({

        ...form,
        [e.target.name]:e.target.value

    });

};



const handleSubmit=async(e)=>{

    e.preventDefault();


    try{


        await API.post("/testimonials",{

            portfolioOwner:ownerId,
            ...form

        });


        alert("✅ Testimonial submitted! Waiting for approval.");



        setForm({

            visitorName:"",
            visitorEmail:"",
            rating:5,
            review:""

        });



    }catch(error){

        console.log(error);

        alert("Something went wrong.");

    }


};



return (

<div className="testimonial-form-card">


<h2>
Leave a Testimonial
</h2>



<form onSubmit={handleSubmit}>


<input

type="text"

name="visitorName"

placeholder="Your Name"

value={form.visitorName}

onChange={handleChange}

required

/>



<input

type="email"

name="visitorEmail"

placeholder="Your Email"

value={form.visitorEmail}

onChange={handleChange}

required

/>



<select

name="rating"

value={form.rating}

onChange={handleChange}

>


<option value="5">
⭐⭐⭐⭐⭐
</option>

<option value="4">
⭐⭐⭐⭐
</option>

<option value="3">
⭐⭐⭐
</option>

<option value="2">
⭐⭐
</option>

<option value="1">
⭐
</option>


</select>




<textarea

name="review"

placeholder="Write your review..."

value={form.review}

onChange={handleChange}

required

/>




<button type="submit">

Submit Testimonial

</button>



</form>


</div>

);


}


export default TestimonialForm;