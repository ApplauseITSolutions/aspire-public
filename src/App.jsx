import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import ImpactReachPage from "./pages/ImpactReach";
import Gallery from "./pages/Gallery";
import GuaranteedInternshipDetails from "./pages/GuaranteedInternshipDetails";
import CampusToCorporateDetails from "./pages/CampusToCorporateDetails";
import UIUXDeveloperDetails from "./pages/UIUXDeveloperDetails";
import CloudTechnologyDetails from "./pages/CloudTechnologyDetails";
import CyberSecurityDetails from "./pages/CyberSecurityDetails";
import EEDPDetails from "./pages/EEDPDetails";
import Careers from "./pages/Careers";

function AdminRedirect() {
  useEffect(() => {
    const adminPath = window.location.pathname.replace(/^\/admin/, "") || "/";
    const normalizedPath = adminPath.startsWith('/') ? adminPath : `/${adminPath}`;
    const targetUrl = `${window.location.protocol}//${window.location.hostname}/admin/#${normalizedPath}${window.location.search}`;
    window.location.replace(targetUrl);
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRedirect />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact-reach" element={<ImpactReachPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/programs/guaranteed-internship" element={<GuaranteedInternshipDetails />} />
        <Route path="/programs/campus-to-corporate" element={<CampusToCorporateDetails />} />
        <Route path="/programs/uiux-developer" element={<UIUXDeveloperDetails />} />
        <Route path="/programs/cloud-technology" element={<CloudTechnologyDetails />} />
        <Route path="/programs/cyber-security" element={<CyberSecurityDetails />} />
        <Route path="/programs/eedp" element={<EEDPDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
