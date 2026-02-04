import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import eedpImg from "../assets/images/Hero section-aspire/EEDP.png";
import virtualInternship from "../assets/images/Virtual Internship.png";
import instantOfferLetters from "../assets/images/Instant Offer Letters.png";
import liveTaskEvaluations from "../assets/images/Live Task & Evaluations.png";
import officialCompanyCertificate from "../assets/images/Official Company Certificate.png";
import week1Img from "../assets/images/Week 1.png";
import week26Img from "../assets/images/Week 2-6.png";
import week47Img from "../assets/images/Week 4-7.png";
import week810Img from "../assets/images/Week 8-10.png";
import week11Img from "../assets/images/Week 11.png";
import week12Img from "../assets/images/Week 12.png";
import certificateImg from "../assets/images/program detail page icons/certificate.png";
import "../styles/timeline-mobile.css";

const EEDPDetails = () => {
  const { isLoading, setLoading } = useLoading(true, 800);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(pageTimer);
    };
  }, []);

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
          margin: '34px auto'
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Programs
          </h1>
        </div>
      </section>

      {/* PROGRAM DETAILS SECTION */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back to Programs Link */}
          <div className="mb-4">
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              ← Back to Programs
            </Link>
          </div>

          {/* Program Content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 items-start max-w-7xl">
            {/* Left - Image */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="rounded-xl overflow-hidden shadow-xl w-full max-w-full lg:max-w-none" style={{ maxWidth: '669px', height: '291px' }}>
                <img
                  src={eedpImg}
                  alt="Employability Enhancement Development Program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 lg:ml-8 w-full">
              <h1 className="text-2xl font-bold text-[#EF7F2C] mb-3">
                Employability Enhancement Development Program (EEDP)
              </h1>
              
              <p className="text-gray-600 text-16px leading-normal mb-8">
                The Employability Enhancement Development Program (EEDP) is designed to bridge the gap between academic knowledge and industry requirements. Our flagship course, Advanced Business Intelligence Analyst, equips students with domain-specific skills through real-time industry projects.
              </p>

              <p className="text-gray-600 text-16px leading-normal mb-6">
                This comprehensive program includes internship opportunities, campus-to-corporate transition support, and industry-relevant curriculum aligned with current market demands.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4">
                <button className="bg-[#EF7F2C] text-white font-medium hover:bg-[#d6691f] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2" style={{ width: '164px', height: '36px', borderRadius: '8px' }}>
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="border border-[#EF7F2C] text-[#EF7F2C] bg-white font-medium hover:bg-[#fff1e4] transition-colors duration-300 flex items-center justify-center gap-2" style={{ width: '164px', height: '36px', borderRadius: '8px' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Program Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS SECTION */}
      <section className="bg-[#FFF1E4] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3D1717] mb-12 text-left-align">
            Program Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Domain Specific Skills */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="w-36 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-center">Domain Specific Skills</h3>
            </div>

            {/* Internship Opportunities */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="w-36 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-center">Internship Opportunities</h3>
            </div>

            {/* Campus Pro */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="w-36 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-center">Campus Pro</h3>
            </div>

            {/* Real time Industry Projects */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="w-36 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-center">Real time Industry Projects</h3>
            </div>

            {/* Industry Relevant Curriculum */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div className="w-36 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-center">Industry Relevant and Aligned Curriculum</h3>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE DETAILS TABLE SECTION */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3D1717] mb-8 text-center">
            Course Details - Advanced Business Intelligence Analyst
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">Course Name</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-bold">Duration (in Hours)</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-bold">Eligibility</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-bold">Mode of Academic Delivery (Online / Offline / Hybrid)</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-bold">Internship (Yes/No)</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    Advanced Business Intelligence Analyst
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center font-bold text-blue-600">
                    60 Hrs
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-sm">
                    Appearing 3<sup>rd</sup> yr diploma after 12th or 2<sup>nd</sup> yr UG Degree Program
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    Offline/Online /Hybrid
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Yes
                    </span>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center font-bold text-orange-600 text-lg">
                    4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default EEDPDetails;