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
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
