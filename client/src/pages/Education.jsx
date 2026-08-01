import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/education.css";

function Education() {
  const [education, setEducation] = useState([]);

  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    startYear: "",
    endYear: "",
    grade: "",
  });

  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch Education
  const fetchEducation = async () => {
    try {
      const res = await API.get("/education", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Education Response:", res.data);

      setEducation(res.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Add / Update Education
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    try {
      if (editId) {
        await API.put(`/education/${editId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await API.post("/education", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setFormData({
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
        grade: "",
      });

      setEditId(null);

      fetchEducation();

    } catch (error) {
      console.log("Education Error:", error);
      console.log(error.response);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setFormData({
      degree: item.degree,
      institution: item.institution,
      startYear: item.startYear,
      endYear: item.endYear,
      grade: item.grade,
    });

    setEditId(item._id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this education?")) return;

    try {
      await API.delete(`/education/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchEducation();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="education-page">
        <Sidebar />

        <div className="education-content">
          <h1>My Education</h1>

          <form className="education-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={formData.institution}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="startYear"
              placeholder="Start Year"
              value={formData.startYear}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="endYear"
              placeholder="End Year"
              value={formData.endYear}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="grade"
              placeholder="Grade / CGPA"
              value={formData.grade}
              onChange={handleChange}
            />

            <button type="submit">
              {editId ? "Update Education" : "Add Education"}
            </button>
          </form>

          <div className="education-list">
            {education.length === 0 ? (
              <p>No education added yet.</p>
            ) : (
              education.map((item) => (
                <div className="education-card" key={item._id}>
                  <h2>{item.degree}</h2>

                  <p>{item.institution}</p>

                  <p>
                    {item.startYear} - {item.endYear}
                  </p>

                  <p>Grade: {item.grade}</p>

                  <div className="education-actions">
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => handleEdit(item)}
                    >
                      ✏ Edit
                    </button>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;