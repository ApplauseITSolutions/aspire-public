import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import ready4industryImg from "../assets/images/ready4industry-img.png";
import internshipImg from "../assets/images/internship-img.png";

const CampusToCorporateDetails = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, setLoading } = useLoading(true, 800);
  const [activeTab, setActiveTab] = useState("ready4industry");

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['ready4industry', 'edp-cell', 'internship'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const pageTimer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(pageTimer);
  }, []);

  if (isLoading) return <PageLoader />;

  const tabs = [
    { id: "ready4industry", label: "Campus to Corporate" },
    { id: "edp-cell", label: "EDP Cell" },
    { id: "internship", label: "Internship" }
  ];

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
          <h1 className="text-display text-3xl sm:text-4xl lg:text-3xl text-[#3D1717] transition-all duration-500">
            Campus to Corporate
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
      <section className="bg-white mt-6 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* CAMPUS TO CORPORATE (Ready4Industry) */}
          {activeTab === "ready4industry" && (
            <div className="max-w-7xl mx-auto">
              <div className="py-4">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-2">
                    Empowering the Next Generation of <span className="text-[#EF7F2C] font-bold">Innovators</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_537px] gap-6 lg:gap-8 items-start">
                  <div className="space-y-6 pr-4">
                    <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                      At <span className="font-bold text-[#3D1717]">Ready4Industry</span>, we're dedicated to helping college students, fresh graduates,
                      and young professionals navigate the competitive world of placements and
                      internships. Our platform combines cutting-edge AI technology with
                      comprehensive learning tools to ensure you're fully prepared for every
                      challenge.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-[#3D1717] mb-1">College Students</h4>
                        <p className="text-gray-600 text-sm">Prepare for your future career</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-[#3D1717] mb-1">Fresh Graduates</h4>
                        <p className="text-gray-600 text-sm">Launch your professional journey</p>
                        <div className="mt-4">
                          <button
                            onClick={() => window.open("https://ready4industry.com/", "_blank")}
                            className="px-6 py-2 bg-[#EF7F2C] text-white font-semibold rounded-lg hover:bg-[#d66d24] transition-colors duration-300 shadow-lg text-sm"
                          >
                            Know More
                          </button>
                        </div>
                      </div>

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

                  <div className="flex justify-center lg:justify-start">
                    <img
                      src={ready4industryImg}
                      alt="Ready4Industry - Empowering Next Generation"
                      className="rounded-lg shadow-lg"
                      style={{ width: '537px', height: '315px', objectFit: 'fit' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EDP CELL */}
          {activeTab === "edp-cell" && (
            <div className="max-w-7xl mx-auto">
              <div className="py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-4">EDP Cell</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Entrepreneurship Development Program to foster innovation and business acumen.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Content for EDP Cell will be added here.</p>
                </div>
              </div>
            </div>
          )}

          {/* INTERNSHIP */}
          {activeTab === "internship" && (
            <div className="max-w-7xl mx-auto">
              <div className="py-4">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-2">
                    Your Internship. Your Choice. Your Future.
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#EF7F2C] mb-4 uppercase">Internship Domains Available:</h3>
                      <div className="space-y-3">
                        {[
                          { color: "text-[#EF7F2C]", text: "Data Science & Machine Learning" },
                          { color: "text-[#3D1717]", text: "Software Development (Python, Java, SQL, C++)" },
                          { color: "text-[#EF7F2C]", text: "Business Analytics (Power BI, Tableau, Excel)" },
                          { color: "text-[#3D1717]", text: "Marketing & Digital Analytics" },
                          { color: "text-[#EF7F2C]", text: "Finance & Accounting (Tally, Financial Modeling)" },
                          { color: "text-[#3D1717]", text: "Cloud Computing (AWS, Google Cloud)" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center">
                            <span className={`w-5 h-5 mr-3 ${item.color} font-bold`}>✓</span>
                            <span className="text-gray-700 text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src={internshipImg}
                      alt="Internship Program"
                      className="rounded-lg"
                      style={{ width: '240px', height: '240px', objectFit: 'cover' }}
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#3D1717] mb-4 uppercase">Why Choose This Internship?</h3>
                      <div className="space-y-2">
                        {[
                          "Mentorship-Driven Learning",
                          "No Interviews, No Barriers",
                          "Work on Real-World Challenges",
                          "Choose Your Learning Level",
                          "Flexibility & Skill Selection",
                          "Industry Recognition",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-[#EF7F2C] mr-3 mt-1">•</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#EF7F2C] text-white p-4 rounded-lg text-center">
                    <div className="space-y-3">
                      <div className="font-bold">FOR MORE DETAILS</div>
                      <div className="flex items-center justify-center gap-4">
                        <a href="https://www.aspireks.com/internship" target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-sm">
                          www.aspireks.com/internship
                        </a>
                        <a href="tel:020-25530291" className="text-white hover:underline text-sm">020-25530291</a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#3D1717] text-white p-4 rounded-lg text-center">
                    <div className="space-y-2">
                      <span className="font-bold">Internship Enrollment fees 1500/- Per Student</span>
                      <div className="text-sm opacity-90">(GST 18% + Gateway Charges Extra)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.open("https://aspireks.mentormind.in/", "_blank")}
                    className="px-8 py-3 bg-[#EF7F2C] text-white font-semibold rounded-lg hover:bg-[#d66d24] transition-colors duration-300 shadow-lg"
                  >
                    Know More
                  </button>
                  <button className="px-8 py-3 bg-[#3D1717] text-white font-semibold rounded-lg hover:bg-[#2a1010] transition-colors duration-300 shadow-lg">
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

export default CampusToCorporateDetails;
