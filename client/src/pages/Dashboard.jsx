import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ThemeSelector from "../components/ThemeSelector";
import ViewChart from "../components/ViewChart";

import "../styles/dashboard.css";

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [copied, setCopied] = useState(false);

  const [stats, setStats] = useState({
    skills: 0,
    education: 0,
    experience: 0,
    projects: 0,
    views: 0,
  });

  const [viewData, setViewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };
        console.log("TOKEN:", token);

        // Profile
        const profileRes = await API.get("/profile", { headers });
        console.log("PROFILE:", profileRes.data);
        setProfile(profileRes.data);



        // Dashboard Stats
        const statsRes = await API.get("/dashboard/stats", {
          headers,
        });

        setStats({
          skills: statsRes.data.skills || 0,
          education: statsRes.data.education || 0,
          experience: statsRes.data.experience || 0,
          projects: statsRes.data.projects || 0,
          views: statsRes.data.views || 0,
        });

        // Analytics
        try {
          const viewsRes = await API.get("/analytics/views", {
            headers,
          });

          setViewData(viewsRes.data || []);
        } catch (err) {
          console.log("Analytics not available");
          setViewData([]);
        }
      } catch (error) {
        console.log("DASHBOARD ERROR:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  const portfolioLink = profile
    ? `http://localhost:5173/portfolio/${profile.user}`
    : "";

  const copyPortfolioLink = () => {
    navigator.clipboard.writeText(portfolioLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <Sidebar />

        <main className="content">

          {profile && (
            <section className="welcome-card">
              <div className="profile-info">

                <img
                  src={
                    profile.profileImage
                      ? `http://localhost:5000${profile.profileImage}`
                      : "/default-profile.png"
                  }
                  alt="profile"
                  className="profile-photo"
                />

                <div>
                  <h1>
                    Welcome, {profile.fullName || "User"} 👋
                  </h1>

                  <p>
                    {profile.bio || "Welcome to your Digital Portfolio"}
                  </p>

                  <span>
                    Build your portfolio. Showcase your skills. Get hired 🚀
                  </span>
                </div>

              </div>
            </section>
          )}

          {profile && (
            <section className="portfolio-actions">

              <h2>🌍 Your Public Portfolio</h2>

              <div className="portfolio-link">

                <input
                  value={portfolioLink}
                  readOnly
                />

                <button
                  onClick={() =>
                    window.open(portfolioLink, "_blank")
                  }
                >
                  View
                </button>

                <button
                  onClick={copyPortfolioLink}
                >
                  Copy
                </button>

              </div>

              {copied && (
                <p className="copy-message">
                  ✅ Link copied successfully
                </p>
              )}

            </section>
          )}

          {profile && (
            <ThemeSelector
              currentTheme={profile.template}
            />
          )}

          <h1 className="dashboard-title">
            Dashboard Overview
          </h1>

          <div className="cards">

            <DashboardCard
              title="Projects"
              value={stats.projects}
              icon="🚀"
            />

            <DashboardCard
              title="Skills"
              value={stats.skills}
              icon="🛠"
            />

            <DashboardCard
              title="Education"
              value={stats.education}
              icon="🎓"
            />

            <DashboardCard
              title="Experience"
              value={stats.experience}
              icon="💼"
            />

            <DashboardCard
              title="Portfolio Views"
              value={stats.views}
              icon="👀"
            />

          </div>

          <section className="analytics-card">

            <h2>
              📊 Portfolio Analytics
            </h2>

            <ViewChart data={viewData} />

          </section>

        </main>
      </div>
    </>
  );
}

export default Dashboard;