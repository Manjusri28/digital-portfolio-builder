import "../styles/publicPortfolio.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;