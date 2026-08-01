import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

import PortfolioSection from "../components/PortfolioSection";
import SkillBadge from "../components/SkillBadge";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import TestimonialForm from "../components/TestimonialForm";

import "../styles/publicPortfolio.css";

function PublicPortfolio() {
  const { id } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await API.get(`/portfolio/${id}`);
        console.log(res.data);
        console.log("Profile:", res.data.profile);
        console.log("Resume:", res.data.profile?.resume);
        setPortfolio(res.data);
        console.log("PUBLIC PORTFOLIO DATA:", res.data);
        console.log("TEMPLATE:", res.data.profile?.template);
        
        const testimonialRes = await API.get(
  `/testimonials/${id}`
);

setTestimonials(testimonialRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPortfolio();
  }, [id]);

  if (!portfolio) {
    return <h2>Loading Portfolio...</h2>;
  }

    return(

<div 
className={`portfolio-container ${portfolio.profile?.template}`}
>

      {/* Hero */}
      <div className="hero">
        <img
          src={`http://localhost:5000${portfolio.profile.profileImage}`}
          alt="profile"
          className="profile-image"
        />

        <h1>{portfolio.user.name}</h1>

        <h3>{portfolio.profile?.bio || "MERN Stack Developer"}</h3>

        {portfolio.profile?.location && (
  <p>📍 {portfolio.profile.location}</p>
)}

{portfolio.profile?.phone && (
  <p>📞 {portfolio.profile.phone}</p>
)}
<div className="social-links">

  {portfolio.profile.github && (
    <a
      href={portfolio.profile.github}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  )}

  {portfolio.profile.linkedin && (
    <a
      href={portfolio.profile.linkedin}
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
  )}

</div>
      </div>

      {portfolio.profile.resume && (
  <a
    href={`http://localhost:5000${portfolio.profile.resume}`}
    target="_blank"
    rel="noreferrer"
    className="resume-btn"
  >
    📄 Download Resume
  </a>
)}

<a
 href={`http://localhost:5000/api/pdf/${portfolio.user._id}`}
 target="_blank"
 className="resume-btn"
>
 📄 Download Portfolio PDF
</a>

      {/* Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <h2>{portfolio.skills.length}</h2>
          <p>Skills</p>
        </div>

        <div className="stat-card">
          <h2>{portfolio.education.length}</h2>
          <p>Education</p>
        </div>

        <div className="stat-card">
          <h2>{portfolio.experience.length}</h2>
          <p>Experience</p>
        </div>

        <div className="stat-card">
          <h2>{portfolio.projects.length}</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">

<h2>
  {portfolio.profile.views || 0}
</h2>

<p>
 👁 Views
</p>

</div>
      </div>

      {/* About */}
      <PortfolioSection title="About Me">
        <p className="about-text">{portfolio.profile.bio}</p>
      </PortfolioSection>

      {/* Skills */}
      <PortfolioSection title="Skills">
        <div className="skills-container">
          {portfolio.skills.map((skill) => (
            <SkillBadge
              key={skill._id}
              skill={skill.skillName}
            />
          ))}
        </div>
      </PortfolioSection>

      {/* Education */}
      <PortfolioSection title="Education">
        {portfolio.education.map((edu) => (
          <div
            key={edu._id}
            className="card"
          >
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>
              {edu.startYear} - {edu.endYear}
            </p>
            <p>{edu.grade}</p>
          </div>
        ))}
      </PortfolioSection>

      {/* Experience */}
      <PortfolioSection title="Experience">
        {portfolio.experience.map((exp) => (
          <div
            key={exp._id}
            className="card"
          >
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <p>
              {exp.startYear} - {exp.endYear}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </PortfolioSection>

      {/* Projects */}

<PortfolioSection title="Projects">

  <div className="projects-grid">

    {portfolio.projects.map((project) => (

      <ProjectCard
        key={project._id}
        project={project}
      />

    ))}

  </div>

</PortfolioSection>

<PortfolioSection title="Testimonials">

  {testimonials.length === 0 ? (

    <p>No testimonials yet.</p>

  ) : (

    testimonials.map((item) => (

      <div
        key={item._id}
        className="card"
      >

        <h3>{item.visitorName}</h3>

        <p>{"⭐".repeat(item.rating)}</p>

        <p>{item.review}</p>

      </div>

    ))

  )}

</PortfolioSection>


{/* Contact */}

<ContactForm ownerId={portfolio.user._id}/>

<TestimonialForm ownerId={portfolio.user._id} />

{/* Footer */}

<footer className="footer">

  © {new Date().getFullYear()} {portfolio.user.name} | MERN Stack Developer

</footer>
    </div>
  );
}

export default PublicPortfolio;