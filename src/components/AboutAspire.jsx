import aboutImg from "../assets/images/MrAbhayJere.jfif";
import { FaBriefcase, FaUserGraduate, FaCogs } from 'react-icons/fa';

const AboutAspire = () => {
    return (
        <section className="bg-white pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP HEADING */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-6 py-2 rounded-full mb-4 font-medium">
                        About Aspire
                    </span>

                    <h2 className="text-heading text-3xl lg:text-4xl xl:text-3xl text-[#3b2a1a]">
                        About Aspire Knowledge & Skills India Pvt. Ltd
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT TEXT */}
                    <div className="text-gray-700 leading-relaxed space-y-6 text-[15px] lg:text-base">
                        <div className="group">
                            <p className="text-body group-hover:text-gray-800 transition-colors duration-300 hover:scale-[1.02] transform transition-transform text-justify">
                                We represent network of the industry and this journey of networking started with the networking company Jetking since 1997 and now we are a prestigious AICTE Partner, NSDC funded & BOAT partner and hold affiliations across more than seven distinct sector skill councils.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-[#3D1717] text-lg mb-6">Our Core Strengths:</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Card 1 - Employment & Entrepreneurship */}
                                <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-xl hover:scale-[1.05] transition-all duration-300 group aspect-square flex flex-col items-center justify-center text-center">
                                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <FaBriefcase className="w-10 h-10 text-orange-500" />
                                    </div>
                                    <h4 className="font-bold text-[#3D1717] text-sm leading-tight group-hover:text-orange-600 transition-colors">
                                        Enablement of Employment and Entrepreneurship
                                    </h4>
                                </div>

                                {/* Card 2 - Mentorship */}
                                <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-xl hover:scale-[1.05] transition-all duration-300 group aspect-square flex flex-col items-center justify-center text-center">
                                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <FaUserGraduate className="w-10 h-10 text-orange-500" />
                                    </div>
                                    <h4 className="font-bold text-[#3D1717] text-sm leading-tight group-hover:text-orange-600 transition-colors">
                                        Mentorship based self learning model
                                    </h4>
                                </div>

                                {/* Card 3 - Skills Integration */}
                                <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-xl hover:scale-[1.05] transition-all duration-300 group aspect-square flex flex-col items-center justify-center text-center">
                                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <FaCogs className="w-12 h-12 text-orange-500" />
                                    </div>
                                    <h4 className="font-bold text-[#3D1717] text-sm leading-tight group-hover:text-orange-600 transition-colors">
                                        Seamlessly integrating demand driven skills into formal education
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative group">
                        <div className="overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                            <img
                                src={aboutImg}
                                alt="Mr. Abhay Jere - Aspire Leadership"
                                className="w-full group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* SUPPORT CARD */}
                        <div className="absolute -bottom-10 right-6 bg-white rounded-xl shadow-xl px-8 py-6 max-w-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-orange-100">
                            <p className="text-caption text-xs text-gray-500 mb-1 font-medium">
                                Supported By
                            </p>
                            <p className="font-bold text-[#3b2a1a] text-sm">
                                Government of India Initiative
                            </p>
                            <p className="text-orange-500 text-sm font-bold mt-1 flex items-center">
                                Skill India Mission
                                <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutAspire;
