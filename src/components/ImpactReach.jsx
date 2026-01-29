import { useState, useEffect } from "react";
import impactBg from "../assets/images/our impact-bg.png";
import mapImg from "../assets/images/aspire-doc/map.png";

// Import new impact reach icons
import yearsLegacyIcon from "../assets/images/impact reach/28 yrs legacy.svg";
import trainedStudentsIcon from "../assets/images/impact reach/10k students trained.svg";
import careerWorkshopsIcon from "../assets/images/impact reach/5k career.svg";
import studentsPlacedIcon from "../assets/images/impact reach/50k  students.svg";
import statesPresenceIcon from "../assets/images/impact reach/12 states.svg";
import trainingCentersIcon from "../assets/images/impact reach/100k tarining.svg";
import startupsIncubatedIcon from "../assets/images/impact reach/100+ startup.svg";
import mouTieUpsIcon from "../assets/images/impact reach/200+ mou.svg";

const allStats = [
  {
    icon: yearsLegacyIcon,
    value: "28",
    label: "Years Legacy"
  },
  {
    icon: trainedStudentsIcon,
    value: "100K+",
    label: "Students Trained"
  },
  {
    icon: careerWorkshopsIcon,
    value: "500K+",
    label: "Career Workshops"
  },
  {
    icon: studentsPlacedIcon,
    value: "50K+",
    label: "Students Placed"
  },
  {
    icon: statesPresenceIcon,
    value: "12",
    label: "States Presence in India"
  },
  {
    icon: trainingCentersIcon,
    value: "100+",
    label: "Training Centers across India"
  },
  {
    icon: startupsIncubatedIcon,
    value: "100+",
    label: "Startups Incubated"
  },
  {
    icon: mouTieUpsIcon,
    value: "200+",
    label: "MOUs with Industry Partnerships"
  }
];

const ImpactReach = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % 2); // Toggle between 0 and 1
        setFade(true);
      }, 500); // Wait for fade out before changing content
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get current 4 cards to display
  const currentStats = currentSet === 0 
    ? allStats.slice(0, 4) 
    : allStats.slice(4, 8);

  return (
    <section
      className="py-12 sm:py-16 lg:py-10 bg-cover bg-center mt-0 bg-no-repeat"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-4 text-white">
          <span className="inline-block bg-white/20 text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full mb-3 sm:mb-4 font-medium">
            Our Impact & Reach
          </span>

          <h2 className="text-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4">
            Transforming Careers Across India
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 text-sm sm:text-base lg:text-lg px-4">
            Empowering 10K+ students through 100+ colleges,
            corporate partnerships, and PAN-India initiatives.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT STATS */}
          <div className="flex flex-col gap-0">

            {/* MOBILE: Single Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              {currentStats.map((stat, index) => (
                <StatCard
                  key={index}
                  iconSrc={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  fade={fade}
                />
              ))}
            </div>

            {/* DESKTOP: Staggered Layout */}
            <div className="hidden lg:block">
              {/* FIRST ROW */}
              <div className="flex gap-8">
                <StatCard
                  iconSrc={currentStats[0].icon}
                  value={currentStats[0].value}
                  label={currentStats[0].label}
                  fade={fade}
                />

                <div className="mt-12">
                  <StatCard
                    iconSrc={currentStats[1].icon}
                    value={currentStats[1].value}
                    label={currentStats[1].label}
                    fade={fade}
                  />
                </div>
              </div>

              {/* SECOND ROW */}
              <div className="flex gap-8">
                <StatCard
                  iconSrc={currentStats[2].icon}
                  value={currentStats[2].value}
                  label={currentStats[2].label}
                  fade={fade}
                />

                <div className="mt-12">
                  <StatCard
                    iconSrc={currentStats[3].icon}
                    value={currentStats[3].value}
                    label={currentStats[3].label}
                    fade={fade}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT MAP IMAGE */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <img
                src={mapImg}
                alt="India Map - Aspire Reach"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:w-[600px] h-auto lg:h-[640px] object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatCard = ({ iconSrc, value, label, fade }) => {
  return (
    <div className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[269px] h-auto sm:h-[142px] cursor-pointer border border-transparent hover:border-orange-200 relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      <div className={`relative z-10 flex items-start justify-between transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#EF7F2C] mt-1 sm:mt-2 mb-1 group-hover:scale-110 transition-transform duration-300">{value}</h3>
          <p className="text-xs sm:text-sm text-[#6D4C2E] font-bold group-hover:text-orange-600 transition-colors duration-300">{label}</p>
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center ml-3 sm:ml-4 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
          <img src={iconSrc} alt={label} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ImpactReach;

