import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import TimelineLoader from "../components/TimelineLoader";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import n8Img from "../assets/images/n8.jpg";
import mrAbhayJereImg from "../assets/images/MrAbhayJere.jfif";
import aspireTriangleImg from "../assets/images/aspire traingle.png";
import directorImg from "../assets/images/dir.png";
import samidhaImg from "../assets/images/samidha.png";
import aspire2Img from "../assets/images/aspire-2.jpg";
import { Briefcase, GraduationCap, Users, BookOpen, User, Award, Quote } from "lucide-react";

// Import advisory board images
import colInderImg from "../assets/images/advisory board/Col. Inder S Gahlaut.png";
import ltGenKochharImg from "../assets/images/advisory board/Lt. Gen. Dr SP Kochhar.jpg";
import minalMamImg from "../assets/images/advisory board/minal mam.jpg";
import mohanRajuImg from "../assets/images/advisory board/Mr. Mohan Raju.png";
import nehaGuptaImg from "../assets/images/advisory board/neha gupta.jpg";
import pradeepJaswaniImg from "../assets/images/advisory board/Mr. Pradeep Jaswani.jfif";
import pravinMohiteImg from "../assets/images/advisory board/Mr. Pravin Mohite.png";
import shiviKaliaImg from "../assets/images/advisory board/Ms. Shivi Kalia.png";
import sushmaBhayaniImg from "../assets/images/advisory board/Ms. Sushma Bhayani.png";
import girishKhilariImg from "../assets/images/advisory board/Girish_khilari.jpg";

// Import organizational network resources images
import vivekVelankarImg from "../assets/images/advisory board/Vivek Velankar.png";
import udayakumarImg from "../assets/images/advisory board/Udayakumar.png";
import sachinItkarImg from "../assets/images/advisory board/Sachin Itkar.png";
import rusenKumarImg from "../assets/images/advisory board/Rusen Kumar.png";
import milindKambleImg from "../assets/images/advisory board/Milind Kamble.png";
import manojJoshiImg from "../assets/images/advisory board/Manoj Joshi.png";
import deepakShikarpurImg from "../assets/images/advisory board/Deepak Shikarpur.png";
import bhikuRamjiIdateImg from "../assets/images/advisory board/Bhiku Ramji Idate.png";
import rajivMitraImg from "../assets/images/advisory board/Rajiv-Mitra-1.jpg.jpeg";
import aniruddhaShahapureImg from "../assets/images/advisory board/Aniruddha-Shahapure.jpg.jpeg";

// Import academic advisory board images
import mukulSutaoneImg from "../assets/images/Academic Advisory Board/Mukul Sutaone.png";
import karbhariKaleImg from "../assets/images/Academic Advisory Board/Karbhari Vishwanath Kale.png";
import sunilBhirudImg from "../assets/images/Academic Advisory Board/Sunil Bhirud.png";
import shailendraShuklaImg from "../assets/images/Academic Advisory Board/Shailendra Shukla.png";

// Import team member images
import prashantPundImg from "../assets/images/advisory board/prashant pund.jpg";

// Import government agencies images
import aatmanirbharImg from "../assets/images/government agencies/Aatmanirbhar.png";
import aicteImg from "../assets/images/government agencies/AICTE.png";
import bwsscImg from "../assets/images/government agencies/BWSSC.png";
import cgscImg from "../assets/images/government agencies/cgsc.png";
import cmegpImg from "../assets/images/government agencies/CMEGP.png";
import dduImg from "../assets/images/government agencies/DDU.png";
import digitalIndiaImg from "../assets/images/government agencies/digitalindia_logo.png";
import essiImg from "../assets/images/government agencies/essi_logo.png";
import ficsiImg from "../assets/images/government agencies/FICSI.png";
import gemImg from "../assets/images/government agencies/GeM.png";
import healthcareImg from "../assets/images/government agencies/healthcare.png";
import kaushalyaImg from "../assets/images/government agencies/Kaushalya.png";
import moeaitImg from "../assets/images/government agencies/MOEAIT.png";
import mordImg from "../assets/images/government agencies/MORD.png";
import mosdaeImg from "../assets/images/government agencies/MOSDAE.png";
import moudImg from "../assets/images/government agencies/MOUD.png";
import msmeNsicImg from "../assets/images/government agencies/MSME-NSIC.png";
import mssdsImg from "../assets/images/government agencies/MSSDS.png";
import nsdcImg from "../assets/images/government agencies/nsdc_logo.png";
import nulmSigaramImg from "../assets/images/government agencies/NULM-Sigaram-Trust.png";
import pmkvyImg from "../assets/images/government agencies/pmkvy-logo.png";
import pvgImg from "../assets/images/government agencies/PVGLogoColour.png";
import rasciImg from "../assets/images/government agencies/RASCI.png";
import researchParkImg from "../assets/images/government agencies/Research Park.png";
import sdcImg from "../assets/images/government agencies/SDC.png";
import skillIndiaImg from "../assets/images/government agencies/skillindia_logo.png";
import smartCityImg from "../assets/images/government agencies/Smart-City.png";
import startupIndiaImg from "../assets/images/government agencies/startup india.png";
import tsscImg from "../assets/images/government agencies/TSSC.png";

const About = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("profile");
  const { isLoading, setLoading } = useLoading(true, 800);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'profile', 'vision', 'founder', 'advisors', 'strategic', 'aiexpert', 'team'
  ]);

  // Set active tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['profile', 'vision', 'founder', 'advisors', 'strategic', 'aiexpert', 'team'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Start section loading after page loads
    const sectionTimer = setTimeout(() => {
      simulateSectionLoading(activeTab, 1200);
    }, 1200);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(sectionTimer);
    };
  }, []); // Empty dependency array - only run once

  if (isLoading) {
    return <PageLoader />;
  }

  const tabs = [
    { id: "profile", label: "About Aspire", active: true },
    { id: "vision", label: "Vision & Mission", active: false },
    { id: "founder", label: "Founder's Message", active: false },
    { id: "advisors", label: "Advisory Councils", active: false },
    { id: "strategic", label: "Strategic Committee Council", active: false },
    { id: "aiexpert", label: "AI Expert Committee", active: false },
    { id: "team", label: "Team Members", active: false }
  ];

  // Get current tab label
  const getCurrentTabLabel = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return currentTab ? currentTab.label : "About Aspire";
  };

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
          margin: '34px auto'
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-display text-3xl sm:text-4xl lg:text-3xl text-[#3D1717] transition-all duration-500">
            {getCurrentTabLabel()}
          </h1>
        </div>
      </section>

      {/* NAVIGATION TABS */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex overflow-x-auto scrollbar-hide justify-start lg:justify-center gap-0 whitespace-nowrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 sm:px-5 py-4 font-medium transition-colors border-b-2 ${activeTab === tab.id
                  ? "text-[#EF7F2C] border-[#EF7F2C]"
                  : "text-gray-600 border-transparent hover:text-[#EF7F2C]"
                  }`}
                style={{ fontSize: '13px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="bg-white mt-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ASPIRE PROFILE */}
          {activeTab === "profile" && (
            <div className="max-w-7xl mx-auto">
              {/* WHAT DEFINES US SECTION - FULL WIDTH */}
              <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#f8f6f3] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <h2 className="text-center text-2xl font-bold text-[#3D1717] mb-12">
                    What Defines Us
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {/* Enablement of Employment and Entrepreneurship */}
                    <div className="group bg-white p-4 sm:p-6 rounded-2xl border border-[#EF7F2C] border-l-4 border-l-[#EF7F2C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[250px] sm:min-h-[275px]">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      <div className="relative z-10">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#EF7F2C] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-[#EF7F2C] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          Enablement of Employment and Entrepreneurship
                        </h3>
                        <p className="text-body text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          We enable employability through our industry centric portal and industry association network.
                        </p>
                      </div>
                    </div>

                    {/* NEP Alignment */}
                    <div className="group bg-white p-4 sm:p-6 rounded-2xl border border-[#EF7F2C] border-l-4 border-l-[#EF7F2C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[250px] sm:min-h-[275px]">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      <div className="relative z-10">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#EF7F2C] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-[#EF7F2C] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          NEP Alignment
                        </h3>
                        <p className="text-body text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          We implement mentorship-based self-learning models aligned with the National Education Policy.
                        </p>
                      </div>
                    </div>

                    {/* Demand-Driven Skill Development */}
                    <div className="group bg-white p-4 sm:p-6 rounded-2xl border border-[#EF7F2C] border-l-4 border-l-[#EF7F2C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[250px] sm:min-h-[275px]">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      <div className="relative z-10">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#EF7F2C] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-[#EF7F2C] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          Demand-Driven Skill Development
                        </h3>
                        <p className="text-body text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          We seamlessly integrate industry relevant credit sanctioned courses into formal education using strategic alliance of our 250+ companies, ensuring students are job-ready.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* RECOGNIZED & AFFILIATED WITH SECTION */}
              <div className="mt-12">
                <h2 className="text-center text-2xl font-bold text-[#3D1717] mb-8">
                  Our Affiliations & Recognizations
                </h2>
                {/* Auto-scrolling logos container */}
                <div className="overflow-hidden relative">
                  <div className="flex animate-scroll gap-8" style={{ width: 'max-content' }}>
                    {/* Government Agencies Logos */}
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={aatmanirbharImg} alt="Aatmanirbhar" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={aicteImg} alt="AICTE" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={bwsscImg} alt="BWSSC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={cgscImg} alt="CGSC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={cmegpImg} alt="CMEGP" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={dduImg} alt="DDU" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={digitalIndiaImg} alt="Digital India" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={essiImg} alt="ESSI" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={ficsiImg} alt="FICSI" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={gemImg} alt="GeM" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={healthcareImg} alt="Healthcare" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={kaushalyaImg} alt="Kaushalya" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={moeaitImg} alt="MOEAIT" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={mordImg} alt="MORD" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={mosdaeImg} alt="MOSDAE" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={moudImg} alt="MOUD" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={msmeNsicImg} alt="MSME-NSIC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={mssdsImg} alt="MSSDS" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={nsdcImg} alt="NSDC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={nulmSigaramImg} alt="NULM Sigaram Trust" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={pmkvyImg} alt="PMKVY" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={pvgImg} alt="PVG" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={rasciImg} alt="RASCI" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={researchParkImg} alt="Research Park" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={sdcImg} alt="SDC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={skillIndiaImg} alt="Skill India" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={smartCityImg} alt="Smart City" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={startupIndiaImg} alt="Startup India" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={tsscImg} alt="TSSC" className="max-w-full max-h-full object-contain" />
                    </div>

                    {/* Duplicate set for seamless scrolling - First 29 logos repeated */}
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={aatmanirbharImg} alt="Aatmanirbhar" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={aicteImg} alt="AICTE" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={bwsscImg} alt="BWSSC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={cgscImg} alt="CGSC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={cmegpImg} alt="CMEGP" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={dduImg} alt="DDU" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={digitalIndiaImg} alt="Digital India" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={essiImg} alt="ESSI" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={ficsiImg} alt="FICSI" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={gemImg} alt="GeM" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={healthcareImg} alt="Healthcare" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={kaushalyaImg} alt="Kaushalya" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={moeaitImg} alt="MOEAIT" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={mordImg} alt="MORD" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={mosdaeImg} alt="MOSDAE" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={moudImg} alt="MOUD" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={msmeNsicImg} alt="MSME-NSIC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={mssdsImg} alt="MSSDS" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={nsdcImg} alt="NSDC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={nulmSigaramImg} alt="NULM Sigaram Trust" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={pmkvyImg} alt="PMKVY" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={pvgImg} alt="PVG" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={rasciImg} alt="RASCI" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={researchParkImg} alt="Research Park" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={sdcImg} alt="SDC" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={skillIndiaImg} alt="Skill India" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={smartCityImg} alt="Smart City" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={startupIndiaImg} alt="Startup India" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow">
                      <img src={tsscImg} alt="TSSC" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VISION & MISSION */}
          {activeTab === "vision" && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Our Vision Card */}
                <div className="bg-white p-8 rounded-2xl border-2 border-[#EF7F2C] shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#EF7F2C] rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3D1717] font-dm-sans">Our Vision</h3>
                  </div>
                  <p className="text-gray-800 font-dm-sans font-normal leading-relaxed" style={{ fontSize: '16px' }}>
                    "To become economic engine for betterment of youth and women empowerment."
                  </p>
                </div>

                {/* Our Mission Card */}
                <div className="bg-white p-8 rounded-2xl border-2 border-[#3D1717] shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#3D1717] rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3D1717] font-dm-sans">Our Mission</h3>
                  </div>
                  <p className="text-gray-800 font-dm-sans font-normal leading-relaxed" style={{ fontSize: '16px' }}>
                    "To develop Day 1 job ready Professional and Micro Entrepreneurs through model skill center and franchisee Network to become most admired skill development company."
                  </p>
                </div>
              </div>
            </div>
          )}



        </div>
      </section>

      {/* FOUNDER'S MESSAGE - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[339px_1fr] gap-8 items-start">
              {/* Left - Director Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={directorImg}
                    alt="Dr. Sanjay Gandhi"
                    className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    style={{ width: '339px', height: '348px', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="inline-block bg-[#EF7F2C] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Chairman & Managing Director
                  </div>
                  <h3 className="text-3xl font-bold text-[#EF7F2C] mb-4">Dr.Sanjay Gandhi</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    A visionary leader dedicated to transforming the skill development ecosystem in India. With 28 years of
                    experience, Dr. Gandhi has empowered more than 100K+ youth through technical training, mentoring, and
                    entrepreneurship development. His mission is to bridge the gap between academic learning and real-world
                    industry requirements.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 28+ Years - Briefcase Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">28 Years</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Professional Experience</div>
                    </div>
                  </div>

                  {/* 1,00,000+ Students - Graduation Cap Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">100K+ Students</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Trained</div>
                    </div>
                  </div>

                  {/* 5000+ Workshops - Users Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Users className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">500K+ Workshops</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Delivered Globally</div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  {/* Incubated 100+ Startups - Book Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Incubated 100+ Startups</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Through training & mentorship</div>
                    </div>
                  </div>

                  {/* Vice President - User Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <User className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Vice President</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Governing Council</div>
                    </div>
                  </div>

                  {/* 100+ MOUs - Award Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">200+ MOUs</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">With Universities & Industries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECOND FOUNDER - MRS. SAMIDHA GANDHI - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_309px] gap-8 items-start">
              {/* Left - Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="inline-block bg-[#EF7F2C] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Director
                  </div>
                  <h3 className="text-3xl font-bold text-[#EF7F2C] mb-4">Mrs. Samidha Gandhi</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    A driving force behind the operational excellence of Aspire Knowledge & Skills India Pvt. Ltd, Mrs. Samidha Gandhi brings
                    compassion and strategic insight, focusing on women empowerment and fostering an inclusive learning
                    environment for all students.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Champion of Women Empowerment Initiatives */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <User className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Champion of Women Empowerment Initiatives</div>
                    </div>
                  </div>

                  {/* Community Building & Social Outreach */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Users className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Community Building & Social Outreach</div>
                    </div>
                  </div>

                  {/* Entrepreneurship Development Mentor */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Entrepreneurship Development Mentor</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Director Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={samidhaImg}
                    alt="Mrs. Samidha Gandhi"
                    className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    style={{ width: '309px', height: '321px', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LEGACY & IMPACT SECTION - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Title */}
            <h2 className="text-center text-2xl font-bold text-[#3D1717] mb-8">
              Legacy & Impact
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* JetKing Learning Legacy */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">JetKing Learning Legacy</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">Est. 1997</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Originating from the JetKing ecosystem, pioneering technical education for youth.
                </p>
              </div>

              {/* Skill Development Leadership */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Award className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">Skill Development Leadership</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">Industry Focus</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Bridging the gap between academia and corporate needs.
                </p>
              </div>

              {/* Academic & Industry Collaborations */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">Academic & Industry Collaborations</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">National & International</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Partnering with world-class institutions for better curriculum.
                </p>
              </div>

              {/* Entrepreneurship Support */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">Entrepreneurship Support</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">Incubation Support</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Guiding the next generation of entrepreneurs to success.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EMPOWERING YOUTH SECTION - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-white py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[531px_1fr] gap-8 items-start">
              {/* Left - University Image */}
              <div className="relative">
                <img
                  src={aspire2Img}
                  alt="Empowering Youth"
                  className="rounded-2xl"
                  style={{ width: '531px', height: '459px', objectFit: 'cover' }}
                />
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Empowering Youth</h3>
                  <p className="text-sm opacity-90">Building the future through knowledge and skills</p>
                </div>
              </div>

              {/* Right - Message Content */}
              <div className="space-y-0">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-[#EF7F2C]" />
                </div>

                {/* Quote Text */}
                <p className="text-lg text-gray-800 mb-6">
                  "Transforming youth through knowledge, mentorship & opportunity."
                </p>

                {/* Message Section with Orange Left Border */}
                <div className="border-l-4 border-[#EF7F2C] pl-6 space-y-4">
                  <h4 className="text-lg font-bold text-[#3D1717]">A Message from the Chairman & Managing Director</h4>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      At Aspire Knowledge & Skills, we believe that <span className="text-[#EF7F2C] font-medium">education is the most powerful weapon</span> which
                      you can use to change the world.
                    </p>

                    <p>
                      Our mission goes beyond just curriculum; we aim to ignite a passion for lifelong learning.
                    </p>

                    <p>
                      In today's rapidly evolving digital landscape, technical skills are crucial, but so are soft skills,
                      leadership qualities, and ethical values. We are committed to nurturing <span className="text-[#EF7F2C] font-medium">holistic professionals</span> who
                      are ready to take on global challenges.
                    </p>

                    <p>
                      I invite you to join us on this journey of growth, innovation, and excellence. Together, let's build
                      a skilled and capable nation.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-0 pt-2">
                    <p className="text-[#3D1717] font-medium">- Dr. Sanjay Gandhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RECOGNITION & ACHIEVEMENTS SECTION - Subtle Design */}
      {activeTab === "founder" && (
        <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 w-full border-t border-orange-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Recognized by Government of India */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Recognized by</p>
                    <h3 className="text-gray-900 font-bold text-lg">Government of India</h3>
                  </div>
                </div>
              </div>

              {/* Collaborations - 100+ MOUs Signed */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Collaborations</p>
                    <h3 className="text-gray-900 font-bold text-lg">200+ MOUs</h3>
                  </div>
                </div>
              </div>

              {/* Featured In National Skill Initiatives */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Featured In</p>
                    <h3 className="text-gray-900 font-bold text-lg">National Skill Initiatives</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ADVISORS SECTION - DIFFERENT UI */}
      {activeTab === "advisors" && (
        <section className="bg-white py-2 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
                Our Leadership
              </span>
              <h2 className="text-4xl lg:text-4xl font-bold text-[#3D1717] mb-6">
                Industry Advisory Board
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Distinguished industry leaders and experts who guide our strategic vision and ensure
                our programs remain aligned with evolving market demands and technological advancements.
              </p>
            </div>

            {/* Advisors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {/* Col. Inder S Gahlaut */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={colInderImg}
                        alt="Col. Inder S Gahlaut"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Col. Inder S Gahlaut
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Skill Development PwC</p>
                      <p className="text-xs text-orange-600 font-medium">CEO CGSE Specialist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ms. Shivi Kalia */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={shiviKaliaImg}
                        alt="Ms. Shivi Kalia"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Ms. Shivi Kalia
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Former Head BHR, Tech</p>
                      <p className="text-xs text-gray-600 mb-1">Mahindra</p>
                      <a
                        href="https://www.linkedin.com/in/shivi-kalia-7686881/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Pravin Mohite */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={pravinMohiteImg}
                        alt="Mr. Pravin Mohite"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Pravin Mohite
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">CEO Olive Data Centre Pvt.</p>
                      <p className="text-xs text-gray-600 mb-1">Based in California</p>
                      <a
                        href="https://www.linkedin.com/in/pravinpmohite?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Mohan Raju */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={mohanRajuImg}
                        alt="Mr. Mohan Raju"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Mohan Raju
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">VP & Vertical Head IoT</p>
                      <p className="text-xs text-gray-600 mb-1">Reliance Jio</p>
                      <a
                        href="https://www.linkedin.com/in/rajumohan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lt. Gen. Dr SP Kochhar */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={ltGenKochharImg}
                        alt="Lt. Gen. Dr SP Kochhar"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Lt. Gen. Dr SP Kochhar
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Director General COAI</p>
                      <p className="text-xs text-gray-600 mb-1">Cellular Operators Association</p>
                      <a
                        href="https://www.linkedin.com/in/spkochhar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ms. Sushma Bhayani */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={sushmaBhayaniImg}
                        alt="Ms. Sushma Bhayani"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Ms. Sushma Bhayani
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Former Senior Solution</p>
                      <p className="text-xs text-gray-600 mb-1">Manager, IBM</p>
                      <a
                        href="https://www.linkedin.com/in/sushma-bhayani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Pradeep Jaswani */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={pradeepJaswaniImg}
                        alt="Mr. Pradeep Jaswani"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Pradeep Jaswani
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">CEO JP Research India</p>
                      <p className="text-xs text-gray-600 mb-1">Pvt. Ltd. (USA Based)</p>
                      <a
                        href="https://www.linkedin.com/in/pkjaswani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Girish Khilari */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={girishKhilariImg}
                        alt="Mr. Girish Khilari"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Girish Khilari
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">MD & CTO</p>
                      <p className="text-xs text-gray-600 mb-1">Elliot Systems</p>
                      <a
                        href="https://www.linkedin.com/in/girish-khilari-16aa421?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>





            </div>

            {/* Academic Advisory Board Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
                  Academic Excellence
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#3D1717] mb-6">
                  Academic Advisory Board
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Renowned academicians and educational leaders who ensure our curriculum remains academically rigorous,
                  research-oriented, and aligned with the highest educational standards.
                </p>
              </div>

              {/* Academic Advisors Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Dr. Mukul Sutaone */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={mukulSutaoneImg}
                          alt="Dr. Mukul Sutaone"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Dr. Mukul Sutaone
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Director</p>
                        <p className="text-xs text-orange-600 font-medium">Indian Institute of Information Technology, Allahabad</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonel Professor Karbhari Vishwanath Kale */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={karbhariKaleImg}
                          alt="Colonel Professor Karbhari Vishwanath Kale"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Col. Prof. Karbhari Vishwanath Kale
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Vice-Chancellor</p>
                        <p className="text-xs text-orange-600 font-medium">Dr. Babasaheb Ambedkar Technological University (DBATU)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prof. Sunil Bhirud */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={sunilBhirudImg}
                          alt="Prof. Sunil Bhirud"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Prof. Sunil Bhirud
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Vice Chancellor - COEP</p>
                        <p className="text-xs text-orange-600 font-medium">Technological University (COEP Tech)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Shailendra K. Shukla */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={shailendraShuklaImg}
                          alt="Dr. Shailendra K. Shukla"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Dr. Shailendra K. Shukla
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Professor</p>
                        <p className="text-xs text-orange-600 font-medium">Indian Institute of Technology BHU, Varanasi</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Organizational Network Resources Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
                  Strategic Network
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#3D1717] mb-6">
                  Organizational Network Resources
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Distinguished leaders and industry experts who contribute to our organizational network and strategic initiatives,
                  bringing diverse perspectives and valuable connections to enhance our mission.
                </p>
              </div>

              {/* Network Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Padmashri Manoj Joshi */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={manojJoshiImg}
                          alt="Padmashri Manoj Joshi"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Padmashri Manoj Joshi
                      </h3>
                      <div className="min-h-[36px] flex items-center justify-center">
                        <p className="text-xs text-orange-600 font-medium">Actor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Padmashri Dr. Milind Kamble */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={milindKambleImg}
                          alt="Padmashri Dr. Milind Kamble"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Padmashri Dr. Milind Kamble
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Chairman of the Dalit Indian</p>
                        <p className="text-xs text-gray-600 mb-1">Chamber of Commerce and Industry (DICCI)</p>
                        <a
                          href="https://www.linkedin.com/in/milind-kamble-686814278/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Deepak Shikarpur */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={deepakShikarpurImg}
                          alt="Dr. Deepak Shikarpur"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Dr. Deepak Shikarpur
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Director Kinetic Engineering</p>
                        <p className="text-xs text-gray-600 mb-1">Member AICTE Board</p>
                        <a
                          href="https://www.linkedin.com/in/deepak-shikarpur-5b047b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Padmashri Shri Bhiku Ramji Idate */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={bhikuRamjiIdateImg}
                          alt="Padmashri Shri Bhiku Ramji Idate"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Padmashri Shri Bhiku Ramji Idate
                      </h3>
                      <div className="min-h-[36px] flex items-center justify-center">
                        <p className="text-xs text-orange-600 font-medium">Dada Idate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mr. Sachin Itkar */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={sachinItkarImg}
                          alt="Mr. Sachin Itkar"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Mr. Sachin Itkar
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Vice President, Maharashtra Economic Development Council</p>
                        <a
                          href="https://www.linkedin.com/in/sachinitkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mr. Vivek Velankar */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={vivekVelankarImg}
                          alt="Mr. Vivek Velankar"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Mr. Vivek Velankar
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">President Sajag Nagrik Manch</p>
                        <p className="text-xs text-orange-600 font-medium">RTI Activist</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mr. P. Udayakumar */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={udayakumarImg}
                          alt="Mr. P. Udayakumar"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Mr. P. Udayakumar
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Former Chairman &</p>
                        <p className="text-xs text-orange-600 font-medium">Managing Director NSIC</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mr. Rusen Kumar */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={rusenKumarImg}
                          alt="Mr. Rusen Kumar"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Mr. Rusen Kumar
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Founder and Managing</p>
                        <p className="text-xs text-gray-600 mb-1">Editor India CSR Network</p>
                        <a
                          href="https://www.linkedin.com/in/rusen-kumar-2a514629b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mr. Rajiv Mitra */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={rajivMitraImg}
                          alt="Mr. Rajiv Mitra"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Mr. Rajiv Mitra
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">CEO</p>
                        <p className="text-xs text-orange-600">Dairy and Food Industry,Scaling Growth, Sustainability Innovation</p>
                        <a
                          href="https://www.linkedin.com/in/rajiv-mitra-0189296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#EF7F2C] hover:underline mt-1"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mr. Aniruddha Shahapure */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                        <img
                          src={aniruddhaShahapureImg}
                          alt="Mr. Aniruddha Shahapure"
                          className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                        Mr. Aniruddh Vaidya Shahapure
                      </h3>
                      <div className="min-h-[36px] flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-600 mb-1">Global Leader</p>
                        <p className="text-xs text-orange-600">Digital Transformation Expert, ESG & Renewable Energy</p>
                        <a
                          href="https://www.linkedin.com/in/aniruddhashahapure-independentdirector-esg-ai-ml-cybersecurity?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#EF7F2C] hover:underline mt-1"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-[#3D1717] mb-4">
                  Dual Advisory Excellence
                </h3>
                <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Our comprehensive advisory structure combines industry expertise with academic excellence and organizational network resources.
                  The Industry Advisory Board ensures market relevance and practical application, while the
                  Academic Advisory Board maintains educational rigor and research-based learning approaches,
                  creating a perfect balance for holistic skill development.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* STRATEGIC COMMITTEE COUNCIL SECTION */}
      {activeTab === "strategic" && (
        <section className="bg-white py-2 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
                Strategic Committee Council
              </span>
              <h2 className="text-4xl lg:text-4xl font-bold text-[#3D1717] mb-6">
                Strategic Committee Council
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Key members guiding the strategic direction and operations of our councils.
              </p>
            </div>

            {/* Committee Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {/* Mr. Prashant Pund */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={prashantPundImg}
                        alt="Mr. Prashant Pund"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Prashant Pund
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Vikrant Vartak */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Vikrant Vartak
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <a
                        href="https://www.linkedin.com/in/vikrant-vartak-9127321a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EF7F2C] hover:underline mt-1"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Balveer Chawla */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Balveer Chawla
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <a
                        href="https://www.linkedin.com/in/balvirchawla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EF7F2C] hover:underline mt-1"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Abhijeet Khurpe */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Abhijeet Khurpe
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <a
                        href="https://www.linkedin.com/in/abhijit-khurape-950a9440?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EF7F2C] hover:underline mt-1"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* AI EXPERT COMMITTEE SECTION */}
      {activeTab === "aiexpert" && (
        <section className="bg-white py-2 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
                AI Expert Committee
              </span>
              <h2 className="text-4xl lg:text-4xl font-bold text-[#3D1717] mb-6">
                AI Expert Committee
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Leading experts guiding our vision and integration of Artificial Intelligence technologies.
              </p>
            </div>

            {/* Committee Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {/* Mr. Kedar Deo */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Kedar Deo
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">CTO</p>
                      <p className="text-xs text-orange-600 font-medium">Tech Mahindra, Accenture, Geometric</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Girish Khilari */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={girishKhilariImg}
                        alt="Mr. Girish Khilari"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Girish Khilari
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">CTO</p>
                      <p className="text-xs text-orange-600 font-medium">Elliot Systems</p>
                      <a
                        href="https://www.linkedin.com/in/girish-khilari-16aa421?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EF7F2C] hover:underline mt-1"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Ravindra Pal Singh */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Ravindra Pal Singh
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Director Software Engineering</p>
                      <p className="text-xs text-orange-600 font-medium">Amdocs Ltd</p>
                      <a
                        href="https://www.linkedin.com/in/ravinder-pal-singh-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EF7F2C] hover:underline mt-1"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Mandar Halbhavi */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Mandar Halbhavi
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Deputy General Manager</p>
                      <p className="text-xs text-orange-600 font-medium">Jio Platforms Ltd</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Manoj Deshmukh */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center bg-white rounded-2xl relative shadow-inner">
                      <User className="w-16 h-16 text-orange-300 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Manoj Deshmukh
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">CTO</p>
                      <p className="text-xs text-orange-600 font-medium">iConnect Info Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* TEAM MEMBERS SECTION */}
      {activeTab === "team" && (
        <section className="bg-white py-4 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
                Our Team
              </span>
              <h2 className="text-4xl lg:text-4xl font-bold text-[#3D1717] mb-6">
                Team Members
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Meet our dedicated team of professionals who drive innovation, excellence, and success
                in skill development and industry partnerships.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {/* Mr. Prashant Pund */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={prashantPundImg}
                        alt="Mr. Prashant Pund"
                        className="w-full h-full object-fit rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Prashant Pund
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Core Business Strategist</p>
                      <a
                        href="https://www.linkedin.com/in/prashant-pund-65b7b51b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mrs. Minal Gujarathi */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={minalMamImg}
                        alt="Mrs. Minal Gujarathi"
                        className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mrs. Minal Gujarathi
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Education Delivery Specialist</p>
                      <a
                        href="https://www.linkedin.com/in/minal-saraf-2737501b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mr. Amit Gandhi */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      {/* Placeholder for image */}
                      <div className="w-full h-full bg-gray-200 rounded-2xl shadow-md flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">AG</span>
                          </div>
                          <p className="text-gray-500 text-xs">Photo Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mr. Amit Gandhi
                    </h3>
                    <div className="min-h-[36px] flex flex-col items-center justify-center">
                      <p className="text-xs text-gray-600 mb-1">Partner Engagement</p>
                      <a
                        href="https://www.linkedin.com/in/dr-sanjay-gandhi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 font-medium hover:text-orange-800 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mrs. Neha Gupta */}
              <div className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 h-[360px] flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 p-6 flex items-center justify-center">
                      <img
                        src={nehaGuptaImg}
                        alt="Mrs. Neha Gupta"
                        className="w-full h-full object-fit rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-[#3D1717] mb-2 min-h-[48px] flex items-center justify-center">
                      Mrs. Neha Gupta
                    </h3>
                    <div className="min-h-[36px] flex items-center justify-center">
                      <p className="text-xs text-orange-600 font-medium">Business Operations</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Bottom Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-[#3D1717] mb-4">
                  Collaborative Excellence
                </h3>
                <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Our diverse team brings together expertise in business strategy, education delivery,
                  industry partnerships, and operational excellence. Each member contributes unique skills
                  and perspectives to drive our mission of bridging the gap between education and industry requirements.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      <Footer />

      {/* CSS Animation for scrolling logos */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default About;