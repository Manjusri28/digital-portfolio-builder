import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/skills.css";

function Skills() {

  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");


  // Load Skills
  const fetchSkills = async () => {

    try {

      const res = await API.get("/skills", {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setSkills(res.data);

    } catch(err){

      console.log(err);

    }

  };


  useEffect(()=>{

    fetchSkills();

  },[]);



  // Add / Update Skill
  const handleSubmit = async(e)=>{

    e.preventDefault();


    if(!skillName.trim()) return;


    try{


      if(editId){


        await API.put(
          `/skills/${editId}`,
          {
            skillName
          },
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        );


        setEditId(null);



      }
      else{


        await API.post(
          "/skills",
          {
            skillName
          },
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        );


      }



      setSkillName("");

      fetchSkills();



    }catch(err){

      console.log(err);

    }

  };




  // Edit
  const handleEdit=(skill)=>{

    setSkillName(skill.skillName);

    setEditId(skill._id);

  };




  // Delete
  const handleDelete=async(id)=>{


    if(!window.confirm("Delete this skill?"))
      return;



    try{


      await API.delete(
        `/skills/${id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      fetchSkills();



    }catch(err){

      console.log(err);

    }

  };





return (

<div className="skills-page">


    <div className="skills-header">


      <h1>
        🛠 My Skills
      </h1>


      <p>
        Add and manage your technical skills
      </p>


    </div>





    <form
      className="skill-form"
      onSubmit={handleSubmit}
    >


      <input

        type="text"

        placeholder="Enter skill name"

        value={skillName}

        onChange={(e)=>setSkillName(e.target.value)}

      />



      <button type="submit">

        {
          editId
          ? "Update Skill"
          : "+ Add Skill"
        }

      </button>



    </form>





    <div className="skills-grid">


    {
      skills.length === 0 ?


      (

        <div className="empty-state">

          <h2>
            No skills added yet 🚀
          </h2>

          <p>
            Start adding your technical skills
          </p>

        </div>


      )


      :

      skills.map((skill)=>(


      <div
        className="skill-card"
        key={skill._id}
      >



        <div className="skill-name">


          <span>
            ⚡
          </span>


          <h2>
            {skill.skillName}
          </h2>


        </div>



        <p>
          Technical Skill
        </p>




        <div className="skill-actions">


          <button

            className="edit-btn"

            type="button"

            onClick={()=>handleEdit(skill)}

          >

            ✏ Edit

          </button>





          <button

            className="delete-btn"

            type="button"

            onClick={()=>handleDelete(skill._id)}

          >

            🗑 Delete

          </button>



        </div>




      </div>


      ))

    }



    </div>



</div>


);


}


export default Skills;