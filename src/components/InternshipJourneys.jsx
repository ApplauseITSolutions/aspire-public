import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

// Import videos
import shivaniVideo from "../assets/videos/shivani prakash shinde.mp4";
import asmitaVideo from "../assets/videos/Asmita Intern.mp4";
import balajiVideo from "../assets/videos/Balaji Karpe Intern.mp4";
import siddharthVideo from "../assets/videos/Siddharth Intern.mp4";
import yashVideo from "../assets/videos/Yash Sahasrabudhe Intern.mp4";
import unknownVideo from "../assets/videos/unknown.mp4";

const journeys = [
    {
        tag: "Journey",
        title: "Shivani Prakash Shinde - Internship Journey",
        video: shivaniVideo,
    },
    {
        tag: "Success",
        title: "Asmita - Internship Success",
        video: asmitaVideo,
    },
    {
        tag: "Journey",
        title: "Balaji Karpe - Internship Experience",
        video: balajiVideo,
    },
    {
        tag: "Success",
        title: "Siddharth - Internship Journey",
        video: siddharthVideo,
    },
    {
        tag: "Journey",
        title: "Yash Sahasrabudhe - Internship Story",
        video: yashVideo,
    },
];

const InternshipJourneys = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);

    const itemsPerView = 3;
    const maxIndex = Math.max(0, journeys.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handlePlayVideo = (index) => {
        setPlayingVideo(index);
    };

    return (
        <section className="bg-[#fffaf4] py-12 pb-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative">

                {/* SECTION TITLE */}
                <h3 className="text-center text-[20px] font-bold text-[#3b2a1a] mb-12">
                    Success Stories & Internship Journeys
                </h3>

                {/* NAVIGATION CONTAINER */}
                <div className="relative flex items-center">

                    {/* LEFT ARROW */}
                    <button 
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-[-80px] top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white w-10 h-10 rounded-full shadow-lg hover:bg-[#d6691f] transition-all z-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronLeft size={18} />
                    </button>

                    {/* CARDS CONTAINER */}
                    <div className="overflow-x-auto overflow-y-hidden w-full">
                        <div 
                            className="flex gap-2 sm:gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (280 + 8)}px)` }}
                        >
                            {journeys.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-[16px] shadow-md overflow-hidden w-[280px] sm:w-[320px] lg:w-[346px] h-[200px] sm:h-[220px] lg:h-[242px] flex-shrink-0"
                                >
                                    {/* VIDEO */}
                                    <div className="relative">
                                        {playingVideo === index ? (
                                            <video
                                                controls
                                                autoPlay
                                                className="w-full h-[180px] object-cover"
                                                onEnded={() => setPlayingVideo(null)}
                                                onError={(e) => console.error('Video error:', e)}
                                            >
                                                <source src={item.video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <>
                                                <video
                                                    className="w-full h-[180px] object-cover"
                                                    preload="metadata"
                                                    muted
                                                >
                                                    <source src={item.video} type="video/mp4" />
                                                </video>

                                                {/* PLAY BUTTON */}
                                                <div 
                                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                                    onClick={() => handlePlayVideo(index)}
                                                >
                                                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                                                        <Play className="text-[#EF7F2C] ml-1" size={16} fill="#EF7F2C" />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* TITLE */}
                                    <div className="p-4">
                                        <h4 className="font-medium text-[#3b2a1a] text-sm">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT ARROW */}
                    <button 
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className="absolute right-[-80px] top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white w-10 h-10 rounded-full shadow-lg hover:bg-[#d6691f] transition-all z-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronRight size={18} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default InternshipJourneys;
