import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import event1Img from "../assets/images/event1.png";

const Careers = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("life-at-aspire");

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
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_537px] gap-6 lg:gap-8 items-start">
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
              <div className="py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-4">
                    Ready4Industry
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Prepare yourself for industry challenges with our comprehensive training programs.
                  </p>
                </div>
                
                {/* Placeholder content */}
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Content for Ready4Industry will be added here.</p>
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
              <div className="py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#3D1717] mb-4">
                    Internship
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Gain hands-on experience through our structured internship programs.
                  </p>
                </div>
                
                {/* Placeholder content */}
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Content for Internship will be added here.</p>
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