import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import advisory board images
import colInderImg from "../assets/images/advisory board/Col. Inder S Gahlaut.png";
import ltGenKochharImg from "../assets/images/advisory board/Lt. Gen. Dr SP Kochhar.jpg";
import milindKambleImg from "../assets/images/advisory board/Milind Kamble.png";
import mohanRajuImg from "../assets/images/advisory board/Mr. Mohan Raju.png";
import pradeepJaswaniImg from "../assets/images/advisory board/Mr. Pradeep Jaswani.jfif";
import pravinMohiteImg from "../assets/images/advisory board/Mr. Pravin Mohite.png";
import sachinItkarImg from "../assets/images/advisory board/Sachin Itkar.png";
import shiviKaliaImg from "../assets/images/advisory board/Ms. Shivi Kalia.png";
import sushmaBhayaniImg from "../assets/images/advisory board/Ms. Sushma Bhayani.png";

const advisors = [
  {
    name: "Col. Inder S Gahlaut",
    title: "Skill Development PwC,",
    subtitle: "CEO CGSE Specialist",
    image: colInderImg
  },
  {
    name: "Ms. Shivi Kalia",
    title: "Former Head BHR, Tech",
    subtitle: "Mahindra",
    image: shiviKaliaImg
  },
  {
    name: "Mr. Pravin Mohite",
    title: "CEO Olive Data Centre Pvt.",
    subtitle: "Based in California",
    image: pravinMohiteImg
  },
  {
    name: "Milind Kamble",
    title: "Chairman of the Dalit Indian",
    subtitle: "Chamber of Commerce and Industry",
    image: milindKambleImg
  },
  {
    name: "Sachin Itkar",
    title: "",
    subtitle: "Vice President - Maharashtra Economic Development Council",
    image: sachinItkarImg
  },
  {
    name: "Mr. Mohan Raju",
    title: "VP & Vertical Head IoT,",
    subtitle: "Reliance Jio",
    image: mohanRajuImg
  },
  {
    name: "Lt. Gen. Dr SP Kochhar",
    title: "Director GENERAL COAI,",
    subtitle: "Cellular Operators Association",
    image: ltGenKochharImg
  },
  {
    name: "Ms. Sushma Bhayani",
    title: "Former Senior Solution",
    subtitle: "Manager, IBM",
    image: sushmaBhayaniImg
  },
  {
    name: "Mr. Pradeep Jaswani",
    title: "CEO JP Research India",
    subtitle: "Pvt. Ltd. (USA Based)",
    image: pradeepJaswaniImg
  }
];

const AdvisoryBoard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, advisors.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-[#fffaf4] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="lg:col-span-4">
            <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
              Our Advisors
            </span>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#3D1717] mb-4">
              Industry Advisory Board
            </h2>
            
            <p className="text-[#3D1717] opacity-70 text-base leading-relaxed mb-8">
              Experienced leaders guiding AspireKS towards industry relevance and learner success.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="bg-white border-2 border-[#EF7F2C] text-[#EF7F2C] w-12 h-12 rounded-full shadow-md hover:bg-[#EF7F2C] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="bg-white border-2 border-[#EF7F2C] text-[#EF7F2C] w-12 h-12 rounded-full shadow-md hover:bg-[#EF7F2C] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - ADVISOR CARDS CAROUSEL */}
          <div className="lg:col-span-8 overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (240 + 24)}px)` }}
            >
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[240px]"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-100 h-[240px]">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 bg-white border-b-4 border-[#EF7F2C]">
                      <h3 className="text-base font-bold text-[#3D1717] mb-2 text-center">
                        {advisor.name}
                      </h3>
                      <p className="text-xs text-gray-600 text-center leading-relaxed">
                        {advisor.title}
                      </p>
                      <p className="text-xs text-gray-600 text-center leading-relaxed">
                        {advisor.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
