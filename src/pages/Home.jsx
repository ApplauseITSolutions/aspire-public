import Hero from "../components/Hero";
import AboutAspire from "../components/AboutAspire";
import SocialMedia from "../components/SocialMedia";
import Programs from "../components/Programs";
import ImpactReach from "../components/ImpactReach";
import Testimonials from "../components/Testimonials";
import InternshipJourneys from "../components/InternshipJourneys";
import LifeAtAspire from "../components/LifeAtAspire";
import Partners from "../components/Partners";
import AdvisoryBoard from "../components/AdvisoryBoard";
import UniversityPartners from "../components/UniversityPartners";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import EnquiryModal from "../components/EnquiryModal";
import Header from "../components/Header";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import { useEffect, useState } from "react";

const Home = () => {
  const { isLoading, setLoading } = useLoading(true, 1000);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'hero', 'about', 'programs', 'impact', 'testimonials', 
    'internships', 'life', 'partners', 'advisors', 'universities', 'contact'
  ]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Show modal after page loads
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    // Start section loading after page loads
    const startSectionLoading = () => {
      simulateSectionLoading('hero', 800);
      setTimeout(() => simulateSectionLoading('about', 1000), 200);
      setTimeout(() => simulateSectionLoading('programs', 1200), 400);
      setTimeout(() => simulateSectionLoading('impact', 1000), 600);
      setTimeout(() => simulateSectionLoading('testimonials', 1400), 800);
      setTimeout(() => simulateSectionLoading('internships', 1200), 1000);
      setTimeout(() => simulateSectionLoading('life', 1000), 1200);
      setTimeout(() => simulateSectionLoading('partners', 800), 1400);
      setTimeout(() => simulateSectionLoading('advisors', 1000), 1600);
      setTimeout(() => simulateSectionLoading('universities', 800), 1800);
      setTimeout(() => simulateSectionLoading('contact', 1000), 2000);
    };

    const sectionTimer = setTimeout(startSectionLoading, 1600);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(modalTimer);
      clearTimeout(sectionTimer);
    };
  }, []); // Empty dependency array - only run once

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-dm-sans">
      {/* Enquiry Modal */}
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      {/* Sticky Header with TopBar and Navbar */}
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-[104px]"></div>
      
      {/* Hero Section */}
      {loadingStates.hero ? (
        <SectionLoader message="Loading Hero..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <Hero />
        </div>
      )}

      {/* About Section */}
      {loadingStates.about ? (
        <SectionLoader message="Loading About Us..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up animation-delay-200">
          <AboutAspire />
        </div>
      )}

      {/* Programs Section */}
      {loadingStates.programs ? (
        <SectionLoader message="Loading Programs..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up animation-delay-400">
          <Programs />
        </div>
      )}

      {/* Impact Section */}
      {loadingStates.impact ? (
        <SectionLoader message="Loading Impact & Reach..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up animation-delay-600">
          <ImpactReach />
        </div>
      )}

      {/* Social Media Section */}
      <SocialMedia />

      {/* Testimonials Section */}
      {loadingStates.testimonials ? (
        <SectionLoader message="Loading Testimonials..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <Testimonials />
        </div>
      )}

      {/* Internships Section */}
      {loadingStates.internships ? (
        <SectionLoader message="Loading Internship Journeys..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <InternshipJourneys />
        </div>
      )}

      {/* Life at Aspire Section */}
      {loadingStates.life ? (
        <SectionLoader message="Loading Life at Aspire..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <LifeAtAspire />
        </div>
      )}

      {/* Partners Section */}
      {loadingStates.partners ? (
        <SectionLoader message="Loading Partners..." height="h-64" />
      ) : (
        <div className="animate-fade-in-up">
          <Partners />
        </div>
      )}

      {/* Advisory Board Section */}
      {loadingStates.advisors ? (
        <SectionLoader message="Loading Advisory Board..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <AdvisoryBoard />
        </div>
      )}

      {/* University Partners Section */}
      {loadingStates.universities ? (
        <SectionLoader message="Loading University Partners..." height="h-64" />
      ) : (
        <div className="animate-fade-in-up">
          <UniversityPartners />
        </div>
      )}

      {/* Contact Section */}
      {loadingStates.contact ? (
        <SectionLoader message="Loading Contact..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <ContactForm />
          <ContactInfo />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
