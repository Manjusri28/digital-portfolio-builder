import { useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/templates.css";


function Templates(){

  const [selectedTemplate,setSelectedTemplate] = useState("modern");


  const saveTemplate = async()=>{

    try{

      const token = localStorage.getItem("token");


      await API.put(
        "/profile/template",
        {
          template:selectedTemplate
        },
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      alert("Template saved successfully");


    }catch(error){

      console.log(error);

    }

  };



  return(

    <>

    <Navbar />


    <div className="dashboard">

      <Sidebar />


      <div className="content">


        <h1>
          Choose Portfolio Template 🎨
        </h1>


        <div className="template-grid">



          <div 
          className={
            selectedTemplate==="modern"
            ?"template-card active"
            :"template-card"
          }
          onClick={()=>setSelectedTemplate("modern")}
          >

            <h2>
              🌐 Modern
            </h2>

            <p>
              Clean professional portfolio
            </p>

          </div>




          <div 
          className={
            selectedTemplate==="dark"
            ?"template-card active"
            :"template-card"
          }
          onClick={()=>setSelectedTemplate("dark")}
          >

            <h2>
              🌙 Dark
            </h2>

            <p>
              Developer style dark portfolio
            </p>

          </div>





          <div 
          className={
            selectedTemplate==="minimal"
            ?"template-card active"
            :"template-card"
          }
          onClick={()=>setSelectedTemplate("minimal")}
          >

            <h2>
              📄 Minimal
            </h2>

            <p>
              Simple elegant design
            </p>

          </div>



          <div 
          className={
            selectedTemplate==="creative"
            ?"template-card active"
            :"template-card"
          }
          onClick={()=>setSelectedTemplate("creative")}
          >

            <h2>
              ✨ Creative
            </h2>

            <p>
              Colorful modern design
            </p>

          </div>



        </div>



        <button
        className="save-template"
        onClick={saveTemplate}
        >
          Save Template
        </button>



      </div>


    </div>


    </>

  );

}


export default Templates;