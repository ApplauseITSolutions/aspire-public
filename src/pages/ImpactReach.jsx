import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImpactReach from "../components/ImpactReach";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import TimelineLoader from "../components/TimelineLoader";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import { useEffect } from 'react';
import aspireBgImg from "../assets/images/aspire-bg-.png";
import journey1997Img from "../assets/images/Our Journey of Growth/1997.png";
import journey2001Img from "../assets/images/aspire impact reach/2001.png";
import journey2005Img from "../assets/images/aspire impact reach/2005.png";
import journey2006Img from "../assets/images/aspire impact reach/2006.png";
import journey2014Img from "../assets/images/aspire impact reach/2014.png";
import journey2015Img from "../assets/images/aspire impact reach/2015.png";
import journey2017Img from "../assets/images/aspire impact reach/2017.png";
import journey2018Img from "../assets/images/aspire impact reach/2018.png";
import journey2023Img from "../assets/images/aspire impact reach/2023.png";
import journey2024Img from "../assets/images/aspire impact reach/2024.png";
import journey2025Img from "../assets/images/aspire impact reach/2025.png";
import "../styles/timeline-mobile.css";

const ImpactReachPage = () => {
  const { isLoading, setLoading } = useLoading(true, 800);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'impact', 'timeline'
  ]);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    // Start section loading after page loads
    const startSectionLoading = () => {
      simulateSectionLoading('impact', 1000);
      setTimeout(() => simulateSectionLoading('timeline', 1500), 200);
    };

    const sectionTimer = setTimeout(startSectionLoading, 1400);

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
          margin: '34px auto'
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Impact & Reach
          </h1>
        </div>
      </section>

      {/* IMPACT & REACH COMPONENT - FULL WIDTH */}
      {loadingStates.impact ? (
        <SectionLoader message="Loading Impact & Reach..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <ImpactReach />
        </div>
      )}

      {/* OUR JOURNEY OF GROWTH TIMELINE SECTION */}
      <section className="bg-[#f8f6f3] py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-orange-500 text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
              Our Story
            </span>
            <h2 className="text-heading text-3xl lg:text-4xl xl:text-4xl text-[#3D1717] mb-4">
              Our Journey of Growth
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
              From humble beginnings to industry leadership - discover the milestones that shaped our success
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="timeline-vertical-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>

            {/* Timeline Items */}
            {loadingStates.timeline ? (
              <TimelineLoader count={11} />
            ) : (
              <div className="timeline-items-container space-y-8 animate-fade-in-up">
                {/* 1997 - Beginning */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">1997</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Beginning</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Started with JetKing Learning Vision roots.</p>
                        </div>
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                          <img src={journey1997Img} alt="1997 - Beginning" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2001 - Kerox Deccan Launch */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2001Img} alt="2001 - Kerox Deccan" className="w-full h-full object-contain" />
                        </div>
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2001</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Kerox Deccan Launch</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Launched Kerox Deccan for advanced software and technology programs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2005 - Animation Gaming Studio */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2005</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Animation Gaming Studio</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Launched Animation Gaming Studio EPIC.</p>
                        </div>
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2005Img} alt="2005 - Animation Gaming Studio" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2006 - Jetking Acquisition */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2006Img} alt="2006 - Jetking Acquisition" className="w-full h-full object-contain" />
                        </div>
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2006</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Jetking Acquisition</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Acquired Jetking in Ahilyanagar.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2014 - Maharashtra Partnership */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2014</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Maharashtra Partnership</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">State Engagement Partner with Maharashtra Govt.</p>
                        </div>
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2014Img} alt="2014 - Maharashtra Partnership" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2015 - PPP Model & Karnataka */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2015Img} alt="2015 - PPP Model & Karnataka" className="w-full h-full object-contain" />
                        </div>
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2015</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">PPP Model & Karnataka</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Launched PPP model centres in GIDC & Karnataka Govt partnership.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2017 - NSDC Partnership */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2017</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">NSDC Partnership</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Become NSDC Funded Partner.</p>
                        </div>
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2017Img} alt="2017 - NSDC Partnership" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2018 - 100+ Centres */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2018Img} alt="2018 - 100+ Centres" className="w-full h-full object-contain" />
                        </div>
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2018</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">100+ Centres</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Launched 100+ centres across India.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2023 - Digital Leap */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2023</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Digital Leap</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Digital transformation and technology advancement.</p>
                        </div>
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2023Img} alt="2023 - Digital Leap" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2024 - AICTE Partnership */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="timeline-item-wrapper w-1/2 pr-8 flex justify-end">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '120px' }}>
                          <img src={journey2024Img} alt="2024 - AICTE Partnership" className="w-full h-full object-contain" />
                        </div>
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2024</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">AICTE Partnership</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">Become AICTE Partner.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2025 - Multi University Programs */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="timeline-item-wrapper w-1/2 ml-auto pl-8">
                    <div className="timeline-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '165px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="timeline-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="timeline-card-content flex items-center gap-6 h-full">
                        <div className="timeline-text-content flex-1">
                          <div className="timeline-year text-2xl font-bold text-orange-500 mb-1">2025</div>
                          <h3 className="timeline-title text-lg font-bold text-[#3D1717] mb-2">Multi University Programs</h3>
                          <p className="timeline-description text-body text-gray-600 text-sm leading-relaxed">UG and PG Program with industry engagement (IIT-BHU, IIIT Allahabad, Dr Babasaheb Ambedkar Technological University).</p>
                        </div>
                        <div className="timeline-image-wrapper flex-shrink-0" style={{ width: '200px', height: '140px' }}>
                          <img src={journey2025Img} alt="2025 - Multi University Programs" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactReachPage;