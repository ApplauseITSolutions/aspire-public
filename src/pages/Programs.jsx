import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import CardLoader from "../components/CardLoader";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";

// Import Hero section images for programs
import guaranteedInternshipImg from "../assets/images/Hero section-aspire/Guarenteed Internship.png";
import eedpImg from "../assets/images/Hero section-aspire/EEDP.png";
import uiuxDeveloperImg from "../assets/images/Hero section-aspire/UIUX Developer.png";
import campusToCorporateImg from "../assets/images/Hero section-aspire/Campus to Corporate.png";
import aedpImg from "../assets/images/Hero section-aspire/AEDP.png";
import quantumComputingImg from "../assets/images/Hero section-aspire/Quantum Computing.png";
import creditLinkedImg from "../assets/images/Hero section-aspire/Credit Linked Courses.png";
import cloudTechnologyImg from "../assets/images/Hero section-aspire/Cloud Technology.png";
import cyberSecurityImg from "../assets/images/Hero section-aspire/Cyber Security.png";
import advancedBusinessIntelligenceImg from "../assets/images/Advanced Business Intelligence Analyst.png";

const Programs = () => {
  const { isLoading, setLoading } = useLoading(true, 800);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'programs'
  ]);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Start section loading after page loads
    const sectionTimer = setTimeout(() => {
      simulateSectionLoading('programs', 1200);
    }, 1200);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(sectionTimer);
    };
  }, []); // Empty dependency array - only run once

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="font-dm-sans">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-[104px]"></div>
      
      {/* BANNER SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aspireBgImg})`,
          height: '141px',
          maxWidth: '1440px',
          margin: '26px auto'
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Programs
          </h1>
        </div>
      </section>

      {/* INDUSTRY-ALIGNED SKILL PROGRAMS SECTION */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-5 py-2 rounded-full mb-4">
              Industry-Aligned Skill Programs
            </span>
            <p className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed">
              Choose from our diverse range of programs designed to bridge the gap between academic learning
              and industry requirements. Each program is crafted with input from industry experts.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center animate-fade-in-up">
            {/* Guaranteed Internship */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={guaranteedInternshipImg}
                    alt="Guaranteed Internship"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Guaranteed Internship
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Learners gain hands-on exposure through live projects,
                      regular evaluations, and mentorship, culminating in
                      industry-recognized certification and practical work...
                    </p>
                  </div>
                  <Link 
                    to="/programs/guaranteed-internship" 
                    className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* UI/UX Developer */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={uiuxDeveloperImg}
                    alt="UI/UX Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      UI/UX Developer
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      This program UI/UX Developer is designed to build a strong foundation in modern UI/UX development with comprehensive training...
                    </p>
                  </div>
                  <Link 
                    to="/programs/uiux-developer" 
                    className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Campus to Corporate */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ maxWidth: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={campusToCorporateImg}
                    alt="Campus to Corporate"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Campus to Corporate
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      All-in-One AI powered solution designed to drive successful placements which leverages advanced technology and is built upon the well established RIASEC...
                    </p>
                  </div>
                  <Link 
                    to="/programs/campus-to-corporate" 
                    className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* AEDP */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={aedpImg}
                    alt="AEDP"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      AEDP
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Quantum Computing */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={quantumComputingImg}
                    alt="Quantum Computing"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Quantum Computing
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Credit Linked Courses */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={creditLinkedImg}
                    alt="Credit Linked Courses"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Credit Linked Courses
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Cloud Technology */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={cloudTechnologyImg}
                    alt="Cloud Technology"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Cloud Technology
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      A corporate-ready cloud curriculum combining application development, infrastructure and business awareness for multiple career paths...
                    </p>
                  </div>
                  <Link 
                    to="/programs/cloud-technology" 
                    className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Cyber Security */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={cyberSecurityImg}
                    alt="Cyber Security"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Cyber Security
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* EEDP */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={eedpImg}
                    alt="EEDP"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      EEDP
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Advanced Business Intelligence Analyst */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={advancedBusinessIntelligenceImg}
                    alt="Advanced Business Intelligence Analyst"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Advanced Business Intelligence Analyst
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      60 Hours | 4 Credit Approved by NHEQF. Comprehensive training in business intelligence, data analysis, and strategic decision-making tools...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Financial Statement Analysis & Interpretation */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={creditLinkedImg}
                    alt="Financial Statement Analysis & Interpretation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Financial Statement Analysis & Interpretation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Master the art of analyzing and interpreting financial statements for strategic business...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Hedge Fund Accounting & Fund Operations */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={aedpImg}
                    alt="Hedge Fund Accounting & Fund Operations"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Hedge Fund Accounting & Fund Operations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Comprehensive training in hedge fund accounting principles and operational procedures...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Global Banking & Investment Banking Operations */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={campusToCorporateImg}
                    alt="Global Banking & Investment Banking Operations"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Global Banking & Investment Banking Operations
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Learn global banking operations and investment banking fundamentals for career...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Capital Markets & Equity Derivatives */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={quantumComputingImg}
                    alt="Capital Markets & Equity Derivatives"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Capital Markets & Equity Derivatives
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Understand capital markets dynamics and equity derivatives trading strategies...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Banking Operations, KYC & Anti–Money Laundering (AML) Compliance */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={cyberSecurityImg}
                    alt="Banking Operations, KYC & AML Compliance"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Banking Operations, KYC & AML Compliance
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Master banking operations with focus on KYC procedures and anti-money laundering compliance...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Mutual Fund Distribution and Investment Advisory */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={guaranteedInternshipImg}
                    alt="Mutual Fund Distribution and Investment Advisory"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Mutual Fund Distribution and Investment Advisory
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Learn mutual fund distribution strategies and investment advisory services...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Generative AI for Automation */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={cloudTechnologyImg}
                    alt="Generative AI for Automation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Generative AI for Automation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Explore generative AI technologies and their applications in business automation...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Python for Finance / Power BI for Finance */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={uiuxDeveloperImg}
                    alt="Python for Finance / Power BI for Finance"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Python for Finance / Power BI for Finance
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Master Python programming and Power BI for financial analysis and reporting...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Fundamental of Digital Manufacturing */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={eedpImg}
                    alt="Fundamental of Digital Manufacturing"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Fundamental of Digital Manufacturing
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      30 Hours | 1 Credit NSDC. Learn the fundamentals of digital manufacturing and Industry 4.0 technologies...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Fundamental of Industrial Communication Protocols */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={advancedBusinessIntelligenceImg}
                    alt="Fundamental of Industrial Communication Protocols"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Fundamental of Industrial Communication Protocols
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      45 Hours | 1 Credit NSDC. Understand industrial communication protocols and networking in...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Introduction to Industrial Robotics */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={creditLinkedImg}
                    alt="Introduction to Industrial Robotics"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Introduction to Industrial Robotics
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      60 Hours | 1.5 Credit NSDC. Get introduced to industrial robotics, automation systems, and robotic programming...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>



      <Footer />
    </div>
  );
};

export default Programs;
