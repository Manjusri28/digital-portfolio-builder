import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/messages.css";


function Messages(){

    const [messages,setMessages] = useState([]);


    useEffect(()=>{

        const fetchMessages = async()=>{

            try{

                const token = localStorage.getItem("token");


                const res = await API.get(
                    "/contact/messages",
                    {
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    }
                );


                setMessages(res.data);


            }catch(error){

                console.log(error);

            }

        };


        fetchMessages();

    },[]);



    return(

        <>
        <Navbar />

        <div className="dashboard">

            <Sidebar />


            <div className="content">


                <h1>
                    Messages 📩
                </h1>



                {
                    messages.length === 0 ?

                    (
                        <p>
                            No messages received yet.
                        </p>
                    )

                    :

                    (

                    messages.map((msg)=>(

                        <div 
                        className="message-card"
                        key={msg._id}
                        >

                            <h3>
                                {msg.name}
                            </h3>


                            <p>
                                📧 {msg.email}
                            </p>


                            <p>
                                {msg.message}
                            </p>


                            <small>
                                {new Date(msg.createdAt).toLocaleDateString()}
                            </small>


                        </div>

                    ))

                    )
                }


            </div>


        </div>

        </>

    );

}


export default Messages;