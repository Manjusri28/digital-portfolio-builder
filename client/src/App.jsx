import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

import PublicPortfolio from "./pages/PublicPortfolio";
import Templates from "./pages/Templates";

import Messages from "./pages/Messages";
import Testimonials from "./pages/Testimonials";
import Analytics from "./pages/Analytics";



function App() {

  return (

    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/portfolio/:id" element={<PublicPortfolio />} />
      <Route path="/templates" element={<Templates />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/analytics" element={<Analytics />} />

    </Routes>

  );

}


export default App;