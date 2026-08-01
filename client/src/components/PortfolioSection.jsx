import "../styles/publicPortfolio.css";

function PortfolioSection({ title, children }) {
  return (
    <div className="portfolio-section">

      <h2>{title}</h2>

      {children}

    </div>
  );
}

export default PortfolioSection;