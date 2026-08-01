const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const profileRoutes = require("./routes/profileRoutes");

const skillRoutes = require("./routes/skillRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const educationRoutes = require("./routes/educationRoutes");

const experienceRoutes = require("./routes/experienceRoutes");

const projectRoutes = require("./routes/projectRoutes");

const publicPortfolioRoutes = require("./routes/publicPortfolioRoutes");

const contactRoutes = require("./routes/contactRoutes");

const pdfRoutes = require("./routes/pdfRoutes");

const analyticsRoutes = require("./routes/analyticsRoutes");

const testimonialRoutes = require("./routes/testimonialRoutes");

dotenv.config();

const app = express();

//Connect Database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/skills", skillRoutes);

app.use("/api/education", educationRoutes);

app.use("/api/experience", experienceRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/portfolio", publicPortfolioRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/pdf", pdfRoutes );

app.use("/api/analytics", analyticsRoutes);

app.use("/api/testimonials", testimonialRoutes);

app.get("/", (req, res) => {
  res.send("Digital Portfolio Builder API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});