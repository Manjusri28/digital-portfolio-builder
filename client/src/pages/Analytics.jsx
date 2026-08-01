import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const [analytics, setAnalytics] = useState({
    views: 0,
    skills: 0,
    projects: 0,
    education: 0,
    experience: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/analytics", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAnalytics(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAnalytics();
  }, []);

  const barData = {
    labels: [
      "Skills",
      "Projects",
      "Education",
      "Experience",
      "Messages",
    ],
    datasets: [
      {
        label: "Portfolio Statistics",
        data: [
          analytics.skills,
          analytics.projects,
          analytics.education,
          analytics.experience,
          analytics.messages,
        ],
      },
    ],
  };

  const lineData = {
    labels: ["Portfolio Views"],
    datasets: [
      {
        label: "Views",
        data: [analytics.views],
      },
    ],
  };

  return (
    <div className="analytics-page">

      <h1>Portfolio Analytics</h1>

      <div className="cards">

        <div className="card">
          <h2>Total Views</h2>
          <h1>{analytics.views}</h1>
        </div>

        <div className="card">
          <h2>Total Messages</h2>
          <h1>{analytics.messages}</h1>
        </div>

      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Bar data={barData} />
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Line data={lineData} />
      </div>

    </div>
  );
}

export default Analytics;