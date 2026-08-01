import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/experience.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Experience() {


  const [experiences, setExperiences] = useState([]);


  const [formData, setFormData] = useState({

    company:"",
    role:"",
    duration:"",
    description:""

  });


  const [editId,setEditId] = useState(null);



  // =========================
  // Fetch Experiences
  // =========================

  const fetchExperiences = async()=>{


    try{


      const token = localStorage.getItem("token");


      const res = await API.get(
        "/experience",
        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }
      );


      setExperiences(res.data);


    }
    catch(error){

      console.log(error);

    }


  };



  useEffect(()=>{

    fetchExperiences();

  },[]);





  // =========================
  // Input Change
  // =========================

  const handleChange=(e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };





  // =========================
  // Add / Update Experience
  // =========================

  const handleSubmit = async (e) => {

  e.preventDefault();

  console.log("BUTTON CLICKED");

  console.log("FORM DATA:", formData);


  try {

    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);


    const res = await API.post(
      "/experience",
      formData,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );


    console.log("RESPONSE:", res.data);


    alert("Experience Added");


    setFormData({
      company:"",
      role:"",
      duration:"",
      description:""
    });


    fetchExperiences();


  }
  catch(error){

    console.log(
      "ERROR:",
      error.response?.data || error.message
    );

  }

};
  
  // =========================
  // Edit Experience
  // =========================


  const handleEdit=(exp)=>{


    setEditId(exp._id);


    setFormData({

      company:exp.company,

      role:exp.role,

      duration:exp.duration,

      description:exp.description


    });


  };






  // =========================
  // Delete Experience
  // =========================


  const handleDelete=async(id)=>{


    try{


      const token = localStorage.getItem("token");


      await API.delete(

        `/experience/${id}`,

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );


      fetchExperiences();


    }
    catch(error){

      console.log(error);

    }


  };






  return (
  <>
    <Navbar />

    <div className="experience-page">

      <Sidebar />

      <main className="content">

        <div className="experience-container">

      <h2>
        Experience
      </h2>




      <form

      className="experience-form"

      onSubmit={handleSubmit}

      >




        <input

        type="text"

        name="company"

        placeholder="Company Name"

        value={formData.company}

        onChange={handleChange}

        required

        />





        <input

        type="text"

        name="role"

        placeholder="Job Role"

        value={formData.role}

        onChange={handleChange}

        required

        />





        <input

        type="text"

        name="duration"

        placeholder="Duration (eg: Jan 2025 - June 2025)"

        value={formData.duration}

        onChange={handleChange}

        required

        />





        <textarea

        name="description"

        placeholder="Experience Description"

        value={formData.description}

        onChange={handleChange}

        rows="5"

        />






        <button type="submit">


          {editId 
          ? 
          "Update Experience"
          :
          "Add Experience"
          }


        </button>




        {
          editId && (

          <button

          type="button"

          className="cancel-btn"

          onClick={()=>{


            setEditId(null);


            setFormData({

              company:"",
              role:"",
              duration:"",
              description:""

            });


          }}

          >

            Cancel

          </button>

          )
        }





      </form>







      <div className="experience-list">



      {
        experiences.length===0

        ?

        (

          <p>
            No Experience Added
          </p>

        )

        :

        (

          experiences.map((exp)=>(



            <div

            className="experience-card"

            key={exp._id}

            >



              <h3>

                {exp.role}

              </h3>




              <h4>

                {exp.company}

              </h4>




              <p className="duration">

                {exp.duration}

              </p>




              <p>

                {exp.description}

              </p>





              <div className="experience-actions">



                <button

                className="edit-btn"

                onClick={()=>handleEdit(exp)}

                >

                  Edit

                </button>





                <button

                className="delete-btn"

                onClick={()=>handleDelete(exp._id)}

                >

                  Delete

                </button>




              </div>



            </div>


          ))

        )

      }
      </div>



              </div>

      </main>

    </div>

  </>
);

}


export default Experience;