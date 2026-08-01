import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/sidebar.css";

function Sidebar() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    const fetchMessages = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await API.get("/contact/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCount(res.data.length);

      } catch (error) {
        console.log(error);
      }

    };

    fetchMessages();

  }, []);

  return (

    <div className="sidebar">

      <Link to="/dashboard">
        🏠 Dashboard
      </Link>

      <Link to="/profile">
        👤 Profile
      </Link>

      <Link to="/skills">
        🛠 Skills
      </Link>

      <Link to="/education">
        🎓 Education
      </Link>

      <Link to="/experience">
        💼 Experience
      </Link>

      <Link to="/projects">
        🚀 Projects
      </Link>

      <Link to="/templates">
        🎨 Portfolio Theme
      </Link>

      <Link to="/testimonials">
        ⭐ Testimonials
      </Link>

      <Link to="/analytics">
        📊 Analytics
      </Link>

      <Link to="/messages">
        📩 Messages

        {count > 0 && (
          <span className="badge">
            {count}
          </span>
        )}

      </Link>

    </div>

  );

}

export default Sidebar;