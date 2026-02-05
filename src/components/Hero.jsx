import bannerImg from "../assets/images/AKANKSHANAVYAYUGACHI.jfif";
import universityImg from "../assets/images/university.png";

// Import Hero section banners
import eedpImg from "../assets/images/Hero section-aspire/EEDP.png";
import cyberSecurityImg from "../assets/images/Hero section-aspire/Cyber Security.png";
import cloudTechnologyImg from "../assets/images/Hero section-aspire/Cloud Technology.png";
import creditLinkedImg from "../assets/images/Hero section-aspire/Credit Linked Courses.png";
import quantumComputingImg from "../assets/images/Hero section-aspire/Quantum Computing.png";
import aedpImg from "../assets/images/Hero section-aspire/AEDP.png";
import guaranteedInternshipImg from "../assets/images/Hero section-aspire/Guarenteed Internship.png";
import uiuxDeveloperImg from "../assets/images/Hero section-aspire/UIUX Developer.png";
import campusToCorporateImg from "../assets/images/Hero section-aspire/Campus to Corporate.png";

import { ChevronLeft, ChevronRight, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null); // For mobile touch overlay
  const navigate = useNavigate();

  const slides = [
    // Programs with detail pages first
    {
      image: guaranteedInternshipImg,
      badge: "Guaranteed Internship",
      title: "Guaranteed Internship",
      description: "Guaranteed internship programs provide students with hands-on industry experience, bridging the gap between academic learning and professional work. They enhance employability by offering real-world exposure, skill development, and networking opportunities, ensuring career readiness.",
      buttonText: "Know More",
      link: "/programs/guaranteed-internship"
    },
    {
      image: campusToCorporateImg,
      badge: "Campus to Corporate",
      title: "Campus to Corporate",
      description: "Mock Interviews, Advanced AI Resume Builder, Unlimited AI Practice Sessions, Full Career Skill Gap Dashboard, Detailed Analytics for TPOs, Placement Matching for colleges and extensive job opportunities, Soft Skill by Wadhwani Foundation, Skill Assessment Test, Aptitude Test, Psychometric Test, Platform for Application of Jobs",
      buttonText: "Know More",
      link: "/programs/campus-to-corporate"
    },
    {
      image: uiuxDeveloperImg,
      badge: "UI/UX Developer",
      title: "UI/UX Developer",
      description: "UI/UX developer courses equip students with design thinking, user research, prototyping, and interface development skills. They enhance employability by preparing learners for roles in digital product design, improving user experiences, and supporting career growth in tech and creative industries.",
      buttonText: "Know More",
      link: "/programs/uiux-developer"
    },
    {
      image: cloudTechnologyImg,
      badge: "Cloud Technology",
      title: "Cloud Technology",
      description: "Cloud technology courses equip students with practical skills in cloud computing, including deployment, management, and security of cloud platforms. They enhance employability by preparing learners for roles in IT, DevOps, and cloud architecture, and support career growth in a rapidly evolving digital landscape.",
      buttonText: "Know More",
      link: "/programs/cloud-technology"
    },
    // Other programs after
    {
      image: eedpImg,
      badge: "EEDP",
      title: "EEDP",
      description: "The Employability Enhancement Development Programme (EEDP) equips participants with industry-relevant skills, professional competencies, and workplace readiness, enabling them to secure meaningful employment. It enhances confidence, practical knowledge, and adaptability...",
      buttonText: "Know More",
      link: "/programs" // No specific detail page yet
    },
    {
      image: cyberSecurityImg,
      badge: "Cyber Security",
      title: "Cyber Security",
      description: "Cybersecurity courses equip students with the skills to protect digital systems, networks, and data from threats and attacks. They enhance employability in IT security roles and prepare learners to implement robust security measures, ensuring organizational and personal digital safety.",
      buttonText: "Know More",
      link: "/programs" // No specific detail page yet
    },
    {
      image: creditLinkedImg,
      badge: "Credit Linked Courses",
      title: "Credit Linked Courses",
      description: "Credit-linked courses equip students with industry-relevant skills and validated competencies, enhancing employability and job readiness. They also contribute to academic progression, supporting further education and career growth.",
      buttonText: "Know More",
      link: "/programs" // No specific detail page yet
    },
    {
      image: quantumComputingImg,
      badge: "Quantum Computing",
      title: "Quantum Computing",
      description: "Quantum computing allows students to understand and work with next-generation technology that solves complex problems much faster than traditional computers. It opens opportunities in areas like AI, cryptography, simulations, and scientific research, preparing them for future-ready careers.",
      buttonText: "Know More",
      link: "/programs" // No specific detail page yet
    },
    {
      image: aedpImg,
      badge: "AEDP",
      title: "AEDP",
      description: "The AEDP is an innovative academic initiative developed in partnership with academia, industry, and sector skill councils (SSC). This program commensurate with the New Education Policy (NEP) and UGC guidelines, which offers students not only an opportunity for academic learning but also guaranteed apprenticeships...",
      buttonText: "Know More",
      link: "/programs" // No specific detail page yet
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];
  return (
    <section className="bg-[#fffaf4] pt-8 sm:pt-8 md:pt-10 lg:pt-20 pb-8 sm:pb-8 min-w-full overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-2 xl:px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-start min-w-0">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left flex flex-col justify-start">
          <h1 className="text-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl text-[#3D1717] leading-tight mb-4 sm:mb-5 mt-0">
            Aspire Knowledge &amp; Skills India Pvt. Ltd
          </h1>
          <p className="text-body text-justify text-[#3D1717] leading-relaxed mb-6 sm:mb-7 max-w-xl mx-auto lg:mx-0 opacity-80 text-sm sm:text-base lg:text-l">
           Aspire Knowledge and Skills India Pvt. Ltd. commonly known as ASPIRE represent network of the industry and this journey of networking started with the networking company Jetking since 1997. We are a prestigious <span className="font-bold text-[#EF7F2C]">AICTE</span> partner, <span className="font-bold text-[#EF7F2C]">NSDC</span> funded and <span className="font-bold text-[#EF7F2C]">BOAT</span> partner and hold affiliations across more than seven distinct sector skill councils.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => navigate('/programs')}
              className="group bg-gradient-to-r from-[#EF7F2C] to-[#d6691f] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-bold hover:from-[#d6691f] hover:to-[#c55a1a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Explore Programs 
              <BookOpen className="w-5 h-5 ml-2 inline-block" />
            </button>
            <button 
              onClick={() => setIsEnquiryModalOpen(true)}
              className="group border border-[#3D1717] text-[#3D1717] px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-bold hover:bg-[#3D1717] hover:text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Enquiry Now
              <Mail className="w-5 h-5 ml-2 inline-block" />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE / CAROUSEL */}
        <div className="relative flex items-center justify-center max-w-3xl mx-auto">

          {/* LEFT ARROW - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden lg:block absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 bg-[#fff1e4] p-2 xl:p-3 rounded-full shadow hover:text-white transition z-20"
          >
            <ChevronLeft size={18} className="xl:w-6 xl:h-6 text-[#EF7F2C]" />
          </button>

          {/* SCROLLABLE CONTAINER - Mobile only */}
          <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth w-full overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-4">
              {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className="relative snap-center flex-shrink-0 w-full cursor-pointer"
                  onClick={() => setActiveSlide(activeSlide === index ? null : index)}
                >
                  <div className="w-full h-48 sm:h-56 md:h-64 rounded-2xl shadow-xl overflow-hidden mx-auto transition-all duration-500">
                    <img
                      src={slide.image}
                      alt={`${slide.title} Banner`}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>

                  {/* BADGE */}
                  <div className={`absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 transition-opacity duration-500 ${activeSlide === index ? 'opacity-0' : 'opacity-100'}`}>
                    <button className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg text-xs sm:text-sm font-semibold border border-orange-200 pointer-events-none">
                      {slide.badge.split(' ')[0]} <span className="hidden sm:inline">{slide.badge.split(' ').slice(1).join(' ')}</span>
                    </button>
                  </div>

                  {/* INFO HINT - Mobile only */}
                  <div className={`absolute top-3 right-3 z-10 transition-opacity duration-500 ${activeSlide === index ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                      <svg className="w-3 h-3 text-[#EF7F2C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] font-medium text-[#3D1717]">See details</span>
                    </div>
                  </div>

                  {/* TOUCH OVERLAY */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95 rounded-2xl p-4 
                                  transition-all duration-500 transform backdrop-blur-sm
                                  ${activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-[#EF7F2C] text-xs px-3 py-1 rounded-full mb-2 font-semibold">
                      {slide.title}
                    </span>
                    <p className="text-xs text-[#3D1717] mb-3 leading-relaxed opacity-80 line-clamp-6">
                      {slide.description}
                    </p>
                    <button 
                      onClick={() => navigate(slide.link)}
                      className="bg-gradient-to-r from-[#EF7F2C] to-[#d6691f] text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg hover:from-[#d6691f] hover:to-[#c55a1a] transform hover:scale-105 transition-all duration-300">
                      {slide.buttonText} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP SINGLE IMAGE */}
          <div className="hidden lg:block relative group w-full max-w-md sm:max-w-lg lg:max-w-[510px]">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 max-w-[480px] rounded-2xl shadow-xl overflow-hidden mx-auto group-hover:shadow-2xl transition-all duration-500 active:shadow-2xl">
              <img
                src={currentSlideData.image}
                alt={`Aspire Banner ${currentSlide + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 active:scale-110"
              />
            </div>

            {/* DEFAULT BADGE (VISIBLE BY DEFAULT, HIDDEN ON HOVER/TOUCH) */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-500 pointer-events-none">
              <button className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg text-xs sm:text-sm font-semibold border border-orange-200">
                {currentSlideData.badge.split(' ')[0]} <span className="hidden sm:inline">{currentSlideData.badge.split(' ').slice(1).join(' ')}</span>
              </button>
            </div>

            {/* INFO HINT - Desktop only */}
            <div className="absolute top-3 right-3 z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 animate-pulse">
                <svg className="w-4 h-4 text-[#EF7F2C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium text-[#3D1717]">See details</span>
              </div>
            </div>

            {/* OVERLAY - Shows on hover (desktop) and touch (mobile) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/95 rounded-2xl p-4 xl:p-6 
                            opacity-0 group-hover:opacity-100 group-active:opacity-100
                            transition-all duration-500 transform scale-95 group-hover:scale-100 group-active:scale-100
                            pointer-events-none group-hover:pointer-events-auto group-active:pointer-events-auto backdrop-blur-sm">

              <span className="inline-block bg-gradient-to-r from-orange-100 to-orange-50 text-[#EF7F2C] text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                {currentSlideData.title}
              </span>

              <p className="text-sm text-[#3D1717] mb-4 leading-relaxed opacity-80">
                {currentSlideData.description}
              </p>

              <button 
                onClick={() => navigate(currentSlideData.link)}
                className="group bg-gradient-to-r from-[#EF7F2C] to-[#d6691f] text-white px-4 xl:px-5 py-2 rounded-xl text-sm font-semibold hover:from-[#d6691f] hover:to-[#c55a1a] transform hover:scale-105 transition-all duration-300 shadow-lg">
                {currentSlideData.buttonText}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* SLIDE INDICATORS */}
            {/* <div className="absolute bottom-3 left-3 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#EF7F2C] scale-125' : 'bg-white/70 hover:bg-white/90'
                    }`}
                />
              ))}
            </div> */}
          </div>

          {/* RIGHT ARROW - Hidden on mobile */}
          <button
            onClick={nextSlide}
            className="hidden lg:block absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 bg-[#fff1e4] p-2 xl:p-3 rounded-full shadow hover:text-white transition z-20"
          >
            <ChevronRight size={18} className="xl:w-6 xl:h-6 text-[#EF7F2C]" />
          </button>

        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
