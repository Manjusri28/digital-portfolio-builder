import "../styles/publicPortfolio.css";

function PortfolioHeader({ profile }) {
  return (
    <div className="portfolio-header">

      <img
        src={
          profile?.profileImage
            ? `http://localhost:5000${profile.profileImage}`
            : "https://via.placeholder.com/180"
        }
        alt="Profile"
        className="portfolio-image"
      />

      <h1>{profile?.fullName}</h1>

      <h3>{profile?.bio}</h3>

      <div className="portfolio-details">

        <p>
          📍 <strong>Location:</strong> {profile?.location}
        </p>

        <p>
          📞 <strong>Phone:</strong> {profile?.phone}
        </p>

      </div>

      <div className="portfolio-links">

        {profile?.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {profile?.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        )}

      </div>

    </div>
  );
}

export default PortfolioHeader;