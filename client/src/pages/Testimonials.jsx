import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/testimonial.css";

function Testimonials() {

  const [testimonials, setTestimonials] = useState([]);

  const token = localStorage.getItem("token");


  const fetchTestimonials = async () => {

    try {

      const res = await API.get("/testimonials", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTestimonials(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchTestimonials();

  }, []);



  const approve = async (id) => {

    try {

      await API.put(
        `/testimonials/${id}`,
        {},
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      fetchTestimonials();


    } catch(error){

      console.log(error);

    }

  };



  const remove = async (id) => {

    try {

      await API.delete(`/testimonials/${id}`, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });


      fetchTestimonials();


    } catch(error){

      console.log(error);

    }

  };



  return (

    <div className="testimonials-page">


      <h1 className="testimonial-title">
        Testimonials
      </h1>



      <div className="testimonial-container">


      {testimonials.length === 0 ? (

        <p className="no-testimonials">
          No testimonials available
        </p>

      ) : (


        testimonials.map((item)=>(


          <div 
            key={item._id}
            className="testimonial-card"
          >


            <h3 className="testimonial-name">
              {item.visitorName}
            </h3>


            <p className="testimonial-email">
              {item.visitorEmail}
            </p>



            <p className="testimonial-rating">

              {"⭐".repeat(item.rating)}

            </p>



            <p className="testimonial-message">

              {item.review}

            </p>



            <p>

              Status:
              {item.approved 
              ? " ✅ Approved"
              : " ⏳ Pending"}

            </p>



            <div className="testimonial-actions">


            {!item.approved && (

              <button
                className="approve-btn"
                onClick={()=>approve(item._id)}
              >
                Approve
              </button>

            )}



            <button
              className="delete-btn"
              onClick={()=>remove(item._id)}
            >
              Delete
            </button>


            </div>


          </div>


        ))

      )}


      </div>


    </div>

  );

}


export default Testimonials;