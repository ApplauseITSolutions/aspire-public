import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import event1Img from "../assets/images/event1.png";
import ready4industryImg from "../assets/images/ready for industry.png";

const Careers = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("life-at-aspire");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set active tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['life-at-aspire', 'ready4industry', 'edp-cell', 'internship'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const tabs = [
    { id: "life-at-aspire", label: "Life at Aspire" },
    { id: "ready4industry", label: "Ready4Industry" },
    { id: "edp-cell", label: "EDP Cell" },
    { id: "internship", label: "Internship" }
  ];

  // Get current tab label
  const getCurrentTabLabel = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return currentTab ? currentTab.label : "Life at Aspire";
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
          margin: '26px auto'
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-display text-3xl sm:text-4xl lg:text-3xl text-[#3D1717] transition-all duration-500">
            Careers
          </h1>
        </div>
      </section>

      {/* NAVIGATION TABS */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === "edp-cell") {
                    window.open("https://www.kaushalgurukulam.com/courses/aspire-entrepreneurship/", "_blank");
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={`px-6 sm:px-8 py-4 font-medium text-sm transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "text-[#EF7F2C] border-[#EF7F2C]"
                    : "text-gray-600 border-transparent hover:text-[#EF7F2C]"
                }`}
                style={{ fontSize: '14px' }}
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

          {/* LIFE AT ASPIRE */}
          {activeTab === "life-at-aspire" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_537px] gap-6 lg:gap-8 items-flex">
                {/* Left Content */}
                <div className="space-y-4 pr-4">
                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    Aspire Knowledge and Skills is a professional, value-based ethical organization with an open 
                    and friendly environment that fosters learning and encourages innovative thinking. By 
                    providing ample scope for growth and excellent growth opportunities, we fondly nurture the 
                    capabilities of our team members and associates.
                  </p>

                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    At Aspire Knowledge and Skills, talented people from diverse backgrounds work together in a 
                    dynamic environment that values individual perceptions. Collaboration, teamwork and individual 
                    growth all play equal significance in making our work culture so versatile and interesting to 
                    be a part of everyday.
                  </p>

                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    Aspire believes in 360° growth of its team. It has adapted a self-evaluation process 
                    using Human Capital Analysis, thereby considering every individual as "Human Assets" for 
                    the growth of the company. Every individual at Aspire is self-motivated, which has boosted the 
                    growth of the company and has enabled a commendable position on the map.
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-start">
                  <img
                    src={event1Img}
                    alt="Life at Aspire - Team Event"
                    className="rounded-lg shadow-lg"
                    style={{ width: '537px', height: '300px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* READY4INDUSTRY */}
          {activeTab === "ready4industry" && (
            <div className="max-w-7xl mx-auto">
              <div className="py-8">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-2">
                    Empowering the Next Generation of <span className="text-[#EF7F2C]">INNOVATORS</span>
                  </h2>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_537px] gap-6 lg:gap-8 items-start">
                  
                  {/* Left Content */}
                  <div className="space-y-6 pr-4">
                    <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                      At <span className="font-bold text-[#3D1717]">Ready4Industry</span>, we're dedicated to helping college students, fresh graduates, 
                      and young professionals navigate the competitive world of placements and 
                      internships. Our platform combines cutting-edge AI technology with 
                      comprehensive learning tools to ensure you're fully prepared for every 
                      challenge.
                    </p>

                    {/* Target Audience Icons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      
                      {/* College Students */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-[#3D1717] mb-1">College Students</h4>
                        <p className="text-gray-600 text-sm">Prepare for your future career</p>
                      </div>

                      {/* Fresh Graduates */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-[#3D1717] mb-1">Fresh Graduates</h4>
                        <p className="text-gray-600 text-sm">Launch your professional journey</p>
                      </div>

                      {/* Young Professionals */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-[#3D1717] mb-1">Young Professionals</h4>
                        <p className="text-gray-600 text-sm">Advance your career growth</p>
                      </div>

                    </div>

                  </div>

                  {/* Right Image */}
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src={ready4industryImg}
                      alt="Ready4Industry - Empowering Next Generation"
                      className="rounded-lg shadow-lg"
                      style={{ width: '537px', height: '300px', objectFit: 'fit' }}
                    />
                  </div>

                </div>

                {/* Know More Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => window.open("https://ready4industry.com/", "_blank")}
                    className="px-8 py-3 bg-[#EF7F2C] text-white font-semibold rounded-lg hover:bg-[#d66d24] transition-colors duration-300 shadow-lg"
                  >
                    Know More
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* EDP CELL */}
          {activeTab === "edp-cell" && (
            <div className="max-w-7xl mx-auto">
              <div className="py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-4">
                    EDP Cell
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Entrepreneurship Development Program to foster innovation and business acumen.
                  </p>
                </div>
                
                {/* Placeholder content */}
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Content for EDP Cell will be added here.</p>
                </div>
              </div>
            </div>
          )}

          {/* INTERNSHIP */}
          {activeTab === "internship" && (
            <div className="max-w-7xl mx-auto">
              <div className="py-8">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-2">
                    Your Internship. Your Choice. Your Future.
                  </h2>
                </div>

                {/* Main Content Grid - 3 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  
                  {/* Left Content - Internship Domains */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#EF7F2C] mb-4 uppercase">
                        Internship Domains Available:
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#EF7F2C]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">Data Science & Machine Learning</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#3D1717]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">Software Development (Python, Java, SQL, C++)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#EF7F2C]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">Business Analytics (Power BI, Tableau, Excel)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#3D1717]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">Marketing & Digital Analytics</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#EF7F2C]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">Finance & Accounting (Tally, Financial Modeling)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 mr-3 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#3D1717]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">Cloud Computing (AWS, Google Cloud)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Content - Certificate Badge */}
                  <div className="flex justify-center items-center">
                    <div className="relative">
                      <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-300">
                        <div className="text-center">
                          <div className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'cursive' }}>
                            Certified by
                          </div>
                          <div className="text-base font-bold text-black" style={{ fontFamily: 'cursive' }}>
                            Top Companies
                          </div>
                        </div>
                      </div>
                      {/* Red ribbons */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-1">
                          <div className="w-6 h-12 bg-red-500 transform rotate-12"></div>
                          <div className="w-6 h-12 bg-red-600 transform -rotate-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Why Choose This Internship */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#3D1717] mb-4 uppercase">
                        Why Choose This Internship?
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">Mentorship-Driven Learning</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">No Interviews, No Barriers</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">Work on Real-World Challenges</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">Choose Your Learning Level</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">Flexibility & Skill Selection</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">Industry Recognition</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Contact Info and Enrollment Fee - Two Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Contact Info Card */}
                  <div className="bg-[#EF7F2C] text-white p-6 rounded-lg text-center">
                    <div className="space-y-3">
                      <div className="font-bold">FOR MORE DETAILS</div>
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                          </svg>
                          <a 
                            href="https://www.aspireks.com/internship" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                          >
                            www.aspireks.com/internship
                          </a>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <a 
                            href="tel:020-25530291" 
                            className="text-white hover:underline"
                          >
                            020-25530291
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Fee Card */}
                  <div className="bg-[#3D1717] text-white p-6 rounded-lg text-center">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <svg className="w-6 h-6 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="font-bold">Internship Enrollment fees 1500/- Per Student</span>
                      </div>
                      <div className="text-sm opacity-90">
                        (GST 18% + Gateway Charges Extra)
                      </div>
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.open("https://aspireks.mentormind.in/", "_blank")}
                    className="px-8 py-3 bg-[#EF7F2C] text-white font-semibold rounded-lg hover:bg-[#d66d24] transition-colors duration-300 shadow-lg"
                  >
                    Know More
                  </button>
                  <button
                    className="px-8 py-3 bg-[#3D1717] text-white font-semibold rounded-lg hover:bg-[#2a1010] transition-colors duration-300 shadow-lg"
                  >
                    Enroll Now
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;