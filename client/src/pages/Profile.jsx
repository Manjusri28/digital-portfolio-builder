import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/profile.css";


function Profile() {


  const [profile, setProfile] = useState({

    fullName:"",
    bio:"",
    phone:"",
    location:"",
    github:"",
    linkedin:"",
    resume:"",
    profileImage:"",
    template:"modern"

  });


  const [image,setImage] = useState(null);

  const [resume,setResume] = useState(null);

  const [previewImage,setPreviewImage] = useState(null);

  const [imageName,setImageName] = useState("");

  const [resumeName,setResumeName] = useState("");

  const [imageUpdated,setImageUpdated] = useState(false);



  // ============================
  // LOAD PROFILE
  // ============================

  useEffect(()=>{


    const fetchProfile = async()=>{


      try{


        const token = localStorage.getItem("token");


        const res = await API.get("/profile",{

          headers:{

            Authorization:`Bearer ${token}`

          }

        });



        if(res.data){


          setProfile({

            fullName:res.data.fullName || "",

            bio:res.data.bio || "",

            phone:res.data.phone || "",

            location:res.data.location || "",

            github:res.data.github || "",

            linkedin:res.data.linkedin || "",

            resume:res.data.resume || "",

            profileImage:res.data.profileImage || "",

            template:res.data.template || "modern"

          });



          if(res.data.profileImage){

            setImageName(
              res.data.profileImage.split("/").pop()
            );

          }



          if(res.data.resume){

            setResumeName(
              res.data.resume.split("/").pop()
            );

          }


        }


      }
      catch(error){

        console.log(error);

      }


    };


    fetchProfile();


  },[]);




  // ============================
  // INPUT CHANGE
  // ============================


  const handleChange=(e)=>{


    setProfile({

      ...profile,

      [e.target.name]:e.target.value

    });


  };




  // ============================
  // SAVE PROFILE
  // ============================


  const handleSubmit=async(e)=>{


    e.preventDefault();


    try{


      const token = localStorage.getItem("token");


      const formData = new FormData();



      formData.append(
        "fullName",
        profile.fullName
      );


      formData.append(
        "bio",
        profile.bio
      );


      formData.append(
        "phone",
        profile.phone
      );


      formData.append(
        "location",
        profile.location
      );


      formData.append(
        "github",
        profile.github
      );


      formData.append(
        "linkedin",
        profile.linkedin
      );


      formData.append(
        "template",
        profile.template
      );



      if(image){

        formData.append(
          "profileImage",
          image
        );

      }



      if(resume){

        formData.append(
          "resume",
          resume
        );

      }



      const res = await API.post(
        "/profile",
        formData,
        {

          headers:{

            Authorization:`Bearer ${token}`,

            "Content-Type":
            "multipart/form-data"

          }

        }

      );


      alert(res.data.message);
      const updated = await API.get(
        "/profile",
        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );



      setProfile({

        fullName:updated.data.fullName || "",

        bio:updated.data.bio || "",

        phone:updated.data.phone || "",

        location:updated.data.location || "",

        github:updated.data.github || "",

        linkedin:updated.data.linkedin || "",

        resume:updated.data.resume || "",

        profileImage:updated.data.profileImage || "",

        template:updated.data.template || "modern"

      });



      if(updated.data.profileImage){

        setImageName(
          updated.data.profileImage.split("/").pop()
        );

      }



      if(updated.data.resume){

        setResumeName(
          updated.data.resume.split("/").pop()
        );

      }



      setImage(null);

      setResume(null);

      setPreviewImage(null);



      setImageUpdated(true);



      setTimeout(()=>{

        setImageUpdated(false);

      },3000);



    }


    catch(error){


      console.log(error);


      alert(
        error.response?.data?.message ||
        "Profile update failed"
      );


    }


  };




  return (

    <div className="profile-page">

      <div className="profile-card">


        <h1>
          Edit Profile
        </h1>



        <form onSubmit={handleSubmit}>


          {/* PROFILE IMAGE */}

          <div className="profile-preview">


            <img

              src={

                previewImage

                ?

                previewImage

                :

                profile.profileImage

                ?

                `http://localhost:5000${profile.profileImage}`

                :

                "/default-profile.png"

              }

              alt="profile"

              className="profile-preview-img"

            />


          </div>




          <label>
            Profile Image
          </label>


          <input

            type="file"

            accept="image/*"

            onChange={(e)=>{


              const file=e.target.files[0];


              setImage(file);



              if(file){


                setPreviewImage(
                  URL.createObjectURL(file)
                );


                setImageName(
                  file.name
                );


              }


            }}

          />



          {
            imageName &&

            <p className="file-status">

              📷 {imageName}

            </p>

          }




          {/* RESUME */}


          <label>
            Upload Resume (PDF)
          </label>


          <input

            type="file"

            accept=".pdf"

            onChange={(e)=>{


              const file=e.target.files[0];


              setResume(file);



              if(file){

                setResumeName(
                  file.name
                );

              }


            }}

          />



          {
            resumeName &&

            <p className="file-status">

              📄 {resumeName}

            </p>

          }




          {
            imageUpdated &&

            <p className="image-status">

              ✅ Profile Image Updated

            </p>

          }




          <input

            type="text"

            name="fullName"

            placeholder="Full Name"

            value={profile.fullName}

            onChange={handleChange}

          />




          <textarea

            name="bio"

            placeholder="About Yourself"

            value={profile.bio}

            onChange={handleChange}

          />





          <input

            type="text"

            name="phone"

            placeholder="Phone Number"

            value={profile.phone}

            onChange={handleChange}

          />




          <input

            type="text"

            name="location"

            placeholder="Location"

            value={profile.location}

            onChange={handleChange}

          />




          <input

            type="text"

            name="github"

            placeholder="GitHub Profile"

            value={profile.github}

            onChange={handleChange}

          />




          <input

            type="text"

            name="linkedin"

            placeholder="LinkedIn Profile"

            value={profile.linkedin}

            onChange={handleChange}

          />




          {/* PORTFOLIO THEME */}

          <div className="mb-3">


            <label>
              Portfolio Theme
            </label>


            <select

              className="form-control"

              name="template"

              value={profile.template || "modern"}

              onChange={handleChange}

            >

              <option value="modern">
                Modern
              </option>


              <option value="dark">
                Dark
              </option>


              <option value="blue">
                Blue
              </option>


              <option value="green">
                Green
              </option>


            </select>


          </div>




          <button type="submit">

            Save Profile

          </button>



        </form>


      </div>


    </div>

  );


}


export default Profile;