import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import campusToCorporateImg from "../assets/images/Hero section-aspire/Campus to Corporate.png";

const CampusToCorporateDetails = () => {
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
                  src={campusToCorporateImg}
                  alt="Campus to Corporate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 lg:ml-8 w-full">
              <h1 className="text-2xl font-bold text-[#EF7F2C] mb-3">
                Campus to Corporate
              </h1>
              
              <p className="text-gray-600 text-16px leading-normal mb-8">
                All-in-One AI powered solution designed to drive successful placements which leverages advanced technology and is built upon the well established RIASEC Model.
              </p>

              <p className="text-gray-600 text-16px leading-normal mb-6">
                Our comprehensive platform bridges the gap between campus learning and corporate expectations through AI-powered assessments, personalized training, and extensive placement opportunities.
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

      {/* PROGRAM OVERVIEW SECTION */}
      <section className="bg-[#f8f6f3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D1717] mb-4">
              Program Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to transform students into industry-ready professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aptitude Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3D1717] mb-3">Aptitude Training</h3>
              <p className="text-gray-600 text-sm">Comprehensive training to enhance logical reasoning and problem-solving skills</p>
            </div>

            {/* Domain Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3D1717] mb-3">Domain Training</h3>
              <p className="text-gray-600 text-sm">Industry-specific technical skills and knowledge development</p>
            </div>

            {/* Placement Portal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3D1717] mb-3">Placement Portal</h3>
              <p className="text-gray-600 text-sm">Direct access to job opportunities and placement drives</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART SECTION */}
      <section className="bg-[#FFF1E4] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D1717] mb-4">
              What Sets Us Apart
            </h2>
            <div className="inline-block bg-[#EF7F2C] text-white px-6 py-2 rounded-lg font-bold text-xl shadow-md">
              Campus to Corporate
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - RIASEC Model */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#3D1717] mb-4">RIASEC Model Foundation</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EF7F2C] rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">R - Realistic:</span> Practical, hands-on skills</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EF7F2C] rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">I - Investigative:</span> Analytical thinking</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EF7F2C] rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">A- Artistic:</span> Creative problem-solving</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EF7F2C] rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">S- Social:</span> Interpersonal skills</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EF7F2C] rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">E- Enterprising:</span> Leadership abilities</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#EF7F2C] rounded-full"></div>
                  <p className="text-gray-700"><span className="font-bold">C- Conventional:</span> Organizational skills</p>
                </div>
              </div>
            </div>

            {/* Right - Key Features */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Mock Interviews</h4>
                    <p className="text-sm text-gray-600">Practice with AI-powered interview simulations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Advanced AI Resume Builder</h4>
                    <p className="text-sm text-gray-600">ATS scoring and optimization</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Full Career Skill Gap Dashboard</h4>
                    <p className="text-sm text-gray-600">Detailed analytics for TPOs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE FEATURES SECTION */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3D1717] mb-12 text-center">
            Comprehensive Training & Assessment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Unlimited AI Practice Sessions</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Detailed Analytics for TPOs</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Placement Matching for colleges and extensive job opportunities</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Platform for Application of Jobs</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Soft Skill by Wadhwani Foundation</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Skill Assessment Test</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Aptitude Test</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">Psychometric Test</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusToCorporateDetails;
