import { useState } from "react";
import API from "../services/api";

function PortfolioSettings(){

const [template,setTemplate]=useState("modern");


const saveTemplate=async()=>{

const token=localStorage.getItem("token");


await API.put(
"/profile/template",
{
 template
},
{
headers:{
Authorization:`Bearer ${token}`
}
}
);


alert("Template updated");

};


return(

<div>

<h1>
Choose Portfolio Theme
</h1>


<button onClick={()=>setTemplate("modern")}>
Modern
</button>


<button onClick={()=>setTemplate("dark")}>
Dark
</button>


<button onClick={()=>setTemplate("minimal")}>
Minimal
</button>


<br/>


<button onClick={saveTemplate}>
Save Theme
</button>


</div>

)

}


export default PortfolioSettings;