import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import guaranteedInternshipImg from "../assets/images/Hero section-aspire/Guarenteed Internship.png";
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

const GuaranteedInternshipDetails = () => {
  const { isLoading, setLoading } = useLoading(true, 800);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: '', college: '', contact: '', email: '' });
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollSubmitted(true);
    setTimeout(() => {
      setShowEnrollModal(false);
      setEnrollSubmitted(false);
      setEnrollForm({ name: '', college: '', contact: '', email: '' });
    }, 2000);
  };

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
                  src={guaranteedInternshipImg}
                  alt="Guaranteed Internship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 lg:ml-8 w-full">
              <h1 className="text-2xl font-bold text-[#EF7F2C] mb-3">
                Guaranteed Internship
              </h1>
              
              <p className="text-gray-600 text-16px leading-normal mb-8">
                Our Guaranteed Internship program is designed to bridge the gap between academic learning and real corporate expectations. Learners work on industry-aligned tasks, receive continuous mentor guidance, and are evaluated using real-world performance metrics.
              </p>

              <p className="text-gray-600 text-16px leading-normal mb-6">
                This ensures participants graduate with practical exposure, verified experience, and employer-ready skills, not just theoretical knowledge.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4">
                <button onClick={() => setShowEnrollModal(true)} className="bg-[#EF7F2C] text-white font-medium hover:bg-[#d6691f] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2" style={{ width: '164px', height: '36px', borderRadius: '8px' }}>
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

      {/* WHAT'S INCLUDED SECTION */}
      <section className="bg-[#FFF1E4] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3D1717] mb-12 text-left-align">
            What's Included in the Program?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Virtual Internship */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <img
                  src={virtualInternship}
                  alt="Virtual Internship"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Virtual Internship</h3>
            </div>

            {/* Instant Offer Letters */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <img
                  src={instantOfferLetters}
                  alt="Instant Offer Letters"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Instant Offer Letters</h3>
            </div>

            {/* Live Task & Evaluations */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <img
                  src={liveTaskEvaluations}
                  alt="Live Task & Evaluations"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Live Task & Evaluations</h3>
            </div>

            {/* Official Company Certificate */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <img
                  src={officialCompanyCertificate}
                  alt="Official Company Certificate"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Official Company Certificate</h3>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNER JOURNEY TIMELINE SECTION */}
      <section className="bg-[#f8f6f3] py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-orange-500 text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
              Program Timeline
            </span>
            <h2 className="text-heading text-3xl lg:text-4xl xl:text-3xl text-[#3D1717] mb-4">
              Guaranteed Internship - Learner Journey
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
              A structured 12-week journey from onboarding to certification
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="timeline-vertical-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>

            {/* Timeline Items */}
            <div className="timeline-items-container space-y-8">
              {/* Week 1 - Right Side */}
              <div className="relative flex items-center">
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                  <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '180px' }}>
                    <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
                    
                    <div className="timeline-card-content flex items-center gap-6 h-full">
                      <div className="timeline-text-content flex-1">
                        <div className="timeline-year text-xl font-bold text-orange-500 mb-1">Week 1</div>
                        <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Onboarding & Work Plan</h3>
                        <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Program orientation, structured project roadmap, and setting expectations.</p>
                      </div>
                      <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                        <img src={week1Img} alt="Week 1" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 2-6 - Left Side */}
              <div className="relative flex items-center">
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                  <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '180px' }}>
                    <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
                    
                    <div className="timeline-card-content flex items-center gap-6 h-full">
                      <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                        <img src={week26Img} alt="Week 2-6" className="w-full h-full object-contain" />
                      </div>
                      <div className="timeline-text-content flex-1">
                        <div className="timeline-year text-xl font-bold text-orange-500 mb-1">Week 2-6</div>
                        <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Project Initiation</h3>
                        <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Understanding problem statements and familiarization with tools & tech stack.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 4-7 - Right Side */}
              <div className="relative flex items-center">
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                  <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '180px' }}>
                    <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
                    
                    <div className="timeline-card-content flex items-center gap-6 h-full">
                      <div className="timeline-text-content flex-1">
                        <div className="timeline-year text-xl font-bold text-orange-500 mb-1">Week 4-7</div>
                        <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Draft Submission & Feedback</h3>
                        <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Iterative project submissions with one-on-one mentor feedback cycles.</p>
                      </div>
                      <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                        <img src={week47Img} alt="Week 4-7" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 8-10 - Left Side */}
              <div className="relative flex items-center">
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                  <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '180px' }}>
                    <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
                    
                    <div className="timeline-card-content flex items-center gap-6 h-full">
                      <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                        <img src={week810Img} alt="Week 8-10" className="w-full h-full object-contain" />
                      </div>
                      <div className="timeline-text-content flex-1">
                        <div className="timeline-year text-xl font-bold text-orange-500 mb-1">Week 8-10</div>
                        <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Advanced Execution</h3>
                        <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Refinement, optimization, and meeting corporate-level coding standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 11 - Right Side */}
              <div className="relative flex items-center">
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                  <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '180px' }}>
                    <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
                    
                    <div className="timeline-card-content flex items-center gap-6 h-full">
                      <div className="timeline-text-content flex-1">
                        <div className="timeline-year text-xl font-bold text-orange-500 mb-1">Week 11</div>
                        <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Final Submission</h3>
                        <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Performance-based assessment and comprehensive mentor review.</p>
                      </div>
                      <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                        <img src={week11Img} alt="Week 11" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 12 - Left Side */}
              <div className="relative flex items-center">
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                  <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '180px' }}>
                    <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
                    
                    <div className="timeline-card-content flex items-center gap-6 h-full">
                      <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                        <img src={week12Img} alt="Week 12" className="w-full h-full object-contain" />
                      </div>
                      <div className="timeline-text-content flex-1">
                        <div className="timeline-year text-xl font-bold text-orange-500 mb-1">Week 12</div>
                        <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Completion & Certification</h3>
                        <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Internship completion certificate and formal recognition by Aspire.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE SECTION */}
      <section className="bg-gradient-to-r from-[#3D1717] to-[#5a2a2a] py-8 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">Official Recognition</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Earn Your <span className="text-orange-400">Certificate of Internship</span>
              </h2>

              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Upon successful completion, you will receive a verifiable certificate from Aspire Knowledge & Skills. 
                This isn't just paper - it's proof of your ability to deliver in a corporate environment.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Performance Based */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Performance Based</h3>
                    <p className="text-white/70 text-sm">Evaluated on real project outcomes</p>
                  </div>
                </div>

                {/* Industry Standard */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Industry Standard</h3>
                    <p className="text-white/70 text-sm">Recognized by top employers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Certificate Preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Certificate Image */}
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={certificateImg}
                    alt="Certificate of Internship"
                    style={{ width: '317.75px', height: '386.27px' }}
                    className="object-contain"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ENROLLMENT MODAL */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="bg-[#f0f4f8] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-[#EF7F2C] px-6 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-white text-lg">🎓</span>
                <h2 className="text-white font-bold text-base">Enrollment for Virtual Internship</h2>
              </div>
              <button onClick={() => setShowEnrollModal(false)} className="text-white text-2xl font-bold hover:opacity-80 leading-none">×</button>
            </div>
            <div className="overflow-y-auto flex-1">
              <form onSubmit={handleEnrollSubmit} className="p-5 space-y-3">
                {enrollSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-5xl mb-3">✓</div>
                    <p className="text-gray-700 font-semibold text-lg">Enrollment Submitted!</p>
                    <p className="text-gray-500 text-sm mt-1">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name of Student *</label>
                      <input type="text" required value={enrollForm.name} onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF7F2C] shadow-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">College Name *</label>
                      <input type="text" required value={enrollForm.college} onChange={(e) => setEnrollForm({ ...enrollForm, college: e.target.value })} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF7F2C] shadow-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact No *</label>
                      <input type="tel" required value={enrollForm.contact} onChange={(e) => setEnrollForm({ ...enrollForm, contact: e.target.value })} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF7F2C] shadow-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" required value={enrollForm.email} onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF7F2C] shadow-sm" />
                    </div>
                    <div className="bg-white rounded-xl border-l-4 border-[#EF7F2C] px-4 py-3 text-sm space-y-1">
                      <div className="flex justify-between text-gray-700"><span>Base Amount:</span><span>₹1500.00</span></div>
                      <div className="flex justify-between text-gray-700"><span>CGST (9%):</span><span>₹135.00</span></div>
                      <div className="flex justify-between text-gray-700"><span>SGST (9%):</span><span>₹135.00</span></div>
                      <div className="flex justify-between text-gray-700"><span>Payment Gateway Charges (2%):</span><span>₹35.40</span></div>
                      <div className="flex justify-between font-bold text-[#EF7F2C] pt-1 border-t border-gray-100"><span>Total Amount:</span><span>₹1805.40</span></div>
                    </div>
                    <button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-colors duration-200 text-sm">
                      Submit Enrollment
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GuaranteedInternshipDetails;
