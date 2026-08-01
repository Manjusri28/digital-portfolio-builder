import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    github: "",
    liveDemo: "",
  });

  const token = localStorage.getItem("token");

  // Fetch Projects
  const fetchProjects = async () => {

    try {

      const res = await API.get("/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProjects();

  }, []);

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Edit
  const handleEdit = (project) => {

    setEditId(project._id);

    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      github: project.github,
      liveDemo: project.liveDemo,
    });

  };

  // Add Project
  const addProject = async (e) => {

    e.preventDefault();

    try {

      await API.post("/projects", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Project Added Successfully");

      setFormData({
        title: "",
        description: "",
        technologies: "",
        github: "",
        liveDemo: "",
      });

      fetchProjects();

    } catch (error) {

      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Project could not be added."
      );

    }

  };

  // Delete Project
  const deleteProject = async (id) => {

    try {

      await API.delete(`/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <>
      <Navbar />

      <div className="projects-page">

        <Sidebar />

        <div className="projects-content">

          <h1>My Projects</h1>

          <form
            className="projects-form"
            onSubmit={addProject}
          >

            <input
              name="title"
              placeholder="Project Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Project Description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <input
              name="technologies"
              placeholder="Technologies Used"
              value={formData.technologies}
              onChange={handleChange}
              required
            />

            <input
              name="github"
              placeholder="GitHub Link"
              value={formData.github}
              onChange={handleChange}
            />

            <input
              name="liveDemo"
              placeholder="Live Demo Link"
              value={formData.liveDemo}
              onChange={handleChange}
            />

            <button type="submit">
              {editId ? "Update Project" : "Add Project"}
            </button>

          </form>

          <div className="projects-list">

            {projects.length === 0 ? (

              <p>No Projects Added</p>

            ) : (

              projects.map((project) => (

                <div
                  className="projects-card"
                  key={project._id}
                >

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <p>

                    <strong>Technologies:</strong>{" "}

                    {project.technologies}

                  </p>

                  {project.github && (

                    <p>

                      <strong>GitHub:</strong>{" "}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Repository
                      </a>

                    </p>

                  )}

                  {project.liveDemo && (

                    <p>

                      <strong>Live Demo:</strong>{" "}

                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Project
                      </a>

                    </p>

                  )}

                  <div className="project-actions">

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(project)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteProject(project._id)}
                    >
                      Delete
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

export default Projects;