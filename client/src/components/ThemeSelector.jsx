import { useState } from "react";
import API from "../services/api";

import "../styles/themeSelector.css";

function ThemeSelector({ currentTheme }) {

  const [theme, setTheme] = useState(
    currentTheme || "modern"
  );


  const saveTheme = async () => {

    try {

      const token = localStorage.getItem("token");


      await API.put(
        "/profile/template",
        {
          template: theme
        },
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      alert("Theme updated successfully");


    } catch(error){

      console.log(error);

    }

  };


  return (

    <div className="theme-selector">


      <h2>
        Choose Portfolio Theme
      </h2>


      <div className="theme-buttons">


        <button
          onClick={() => setTheme("modern")}
          className={theme==="modern" ? "active" : ""}
        >
          🌐 Modern
        </button>



        <button
          onClick={() => setTheme("dark")}
          className={theme==="dark" ? "active" : ""}
        >
          🌙 Dark
        </button>



        <button
          onClick={() => setTheme("minimal")}
          className={theme==="minimal" ? "active" : ""}
        >
          📄 Minimal
        </button>

        <button
           onClick={() => setTheme("creative")}
           className={theme==="creative" ? "active" : ""}
        >
        🎨 Creative
        </button>


      </div>



      <button
        onClick={saveTheme}
        className="save-theme"
      >
        Save Theme
      </button>


    </div>

  );

}


export default ThemeSelector;