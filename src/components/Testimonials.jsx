import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import successStory1 from "../assets/images/Sucess Stories/Sucess Stories 1-img.jpg";
import successStory2 from "../assets/images/Sucess Stories/Sucess Stories 2-img.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I'm thrilled to share my enriching journey as a Project Associate at Aspire Knowledge & Skills India Pvt. Ltd. During this live project, I had the opportunity to contribute to enhancing the brand's digital presence while gaining hands-on experience in marketing, graphic design, customer analysis, strategic planning, and idea generation. This exposure introduced me to an entirely new domain and significantly broadened my understanding of marketing. I'm especially grateful to Dr. Sanjay Gandhi for his constant guidance and encouragement throughout the project.",
      name: "Priya Sharma",
      role: "Student",
      image: successStory1,
      hasImage: true
    },
    {
      quote: "Excited to share my enriching journey as a Project Associate with Aspire Knowledge & Skills India Pvt. Ltd. I worked on enhancing the brand's digital presence, gaining hands-on experience in marketing, graphic design, customer analysis, and data-driven strategy. The supportive team and real-world exposure made this internship truly special. A heartfelt thanks to Dr. Sanjay Gandhi for his constant guidance. The collaborative culture made learning fun and impactful. Grateful for this valuable experience and sincere thanks to the entire Aspire team for their trust and support.",
      name: "MR. ADITYA CHAUDHARI",
      role: "Project Associate",
      image: successStory2,
      hasImage: true
    },
    {
      quote: "My internship experience so far at Aspire Knowledge and Skills India Private Limited has been very positive and enriching. Over the past one month as a Business Analyst Intern, I have had the opportunity to gain practical exposure to real-world business processes and analytical tasks, which has helped me better understand how concepts learned in college are applied in a professional environment. The team has been extremely supportive, approachable, and willing to guide me whenever I have questions, creating a comfortable learning atmosphere.",
      name: "Khushi Kapadia",
      role: "Business Analyst Intern",
      hasImage: false
    },
    {
      quote: "I had a valuable learning experience during my internship at Aspire Knowledge and Skills as a Business Analyst Intern. The organization provided me with practical exposure to real-time projects, especially related to skill development programs, stakeholder coordination, and documentation processes. The team at Aspire Knowledge and Skills was supportive and approachable. Seniors and coordinators were always willing to guide and clarify doubts, which created a positive learning environment.",
      name: "Pratik Kishor Bhosale",
      role: "Business Analyst Intern",
      hasImage: false
    },
    {
      quote: "My name is Sakshi Bankar, and I am currently working as a Business Analyst Intern at Aspire Knowledge and Skills Pvt. Ltd., JM Road, Pune. I have been working here for the past one month, and my experience so far has been good. The work environment is very good, and the team, especially the seniors, is supportive and helpful. Working here is very easy to adapt to and comfortable, and I am getting practical exposure to real business problems.",
      name: "Sakshi Bankar",
      role: "Business Analyst Intern",
      hasImage: false
    },
    {
      quote: "Reflecting on my first month as a Business Analyst at Aspire Knowledge and Skills India Pvt. Ltd., I feel a genuine sense of progress. A significant part of my experience has been centered on the AMRUT project, which has been a turning point in my professional development. This role has given me the opportunity to build confidence by coordinating directly with a wide range of stakeholders, including NGOs, Incubators, and Training Partners.",
      name: "Akash Jadhav",
      role: "Business Analyst",
      hasImage: false
    },
    {
      quote: "During my first month at Aspire Knowledge and Skills India Pvt. Ltd., my experience has been both insightful and motivating. I had the opportunity to work on tasks related to business analysis such as understanding requirements, helping with documentation, organizing project information, and supporting report preparation. Alongside this, I was also involved in marketing-related activities including basic research, content support, and data handling.",
      name: "Alam Ajim Tamboli",
      role: "Business Analyst & Marketing Intern",
      hasImage: false
    },
    {
      quote: "I'm thankful for the chance to intern with you as a Back Office Executive. I've learned office skills, file management, and basic Excel and Word tasks. I've worked on Excel data cleaning and Word file creation. These tasks have helped me understand the importance of accuracy and attention to detail in administrative work. The team has been helpful in teaching me new skills and explaining concepts clearly.",
      name: "Sakshi Nikam",
      role: "Back Office Executive",
      hasImage: false
    }
  ];

  const mentors = [
    {
      initial: "M",
      message: "\"Guiding students toward industry-ready skills and seeing them succeed in the real world is what motivates me every day at Aspire.\"",
      name: "Prof. Meera Joshi",
      title: "Lead Training Mentor",
      experience: "12+ Years Experience"
    },
    {
      initial: "S",
      message: "\"At Aspire, every batch reminds me that the right mentorship can unlock extraordinary potential in learners.\"",
      name: "Mr. Sandeep Verma",
      title: "Skill Development Mentor",
      experience: "18+ Years Experience"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-5 py-2 rounded-full mb-4">
            Success Stories & Testimonials
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#3b2a1a] mb-3">
            Voices of Learners
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from learners who built successful careers
            with Aspire.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

          {/* LEFT TESTIMONIAL CARD */}
          <div className="relative bg-[#fffaf4] rounded-2xl p-8 shadow-md">

            {/* QUOTE */}
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              {testimonials[currentIndex].quote}
            </p>

            {/* USER */}
            <div className="flex items-center gap-4 mt-6">
              {testimonials[currentIndex].hasImage ? (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EF7F2C] to-[#d6691f] flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
              )}
              <div>
                <p className="font-semibold text-[#3b2a1a]">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-orange-500 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* LEFT ARROW - DESKTOP ONLY */}
            <button 
              onClick={prevSlide}
              className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white p-2 rounded-full shadow hover:bg-orange-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* RIGHT MENTOR CARD */}
          <div className="relative bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#3b2a1a]">

            <h4 className="text-lg font-semibold text-[#3b2a1a] mb-6">
              Mentor's Message
            </h4>

            {/* AVATAR */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3b2a1a] to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                {mentors[currentIndex % mentors.length].initial}
              </div>
            </div>

            {/* MESSAGE */}
            <p className="text-gray-700 text-center leading-relaxed mb-6 text-justify">
              {mentors[currentIndex % mentors.length].message}
            </p>

            {/* NAME */}
            <div className="text-center">
              <p className="font-semibold text-[#3b2a1a]">
                {mentors[currentIndex % mentors.length].name}
              </p>
              <p className="text-sm text-gray-500">
                {mentors[currentIndex % mentors.length].title}
              </p>
              <p className="text-sm text-orange-500 font-medium mt-1">
                {mentors[currentIndex % mentors.length].experience}
              </p>
            </div>

            {/* RIGHT ARROW - DESKTOP ONLY */}
            <button 
              onClick={nextSlide}
              className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white p-2 rounded-full shadow hover:bg-orange-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* BOTTOM NAVIGATION BUTTONS - MOBILE ONLY */}
        <div className="lg:hidden flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={prevSlide}
            className="bg-[#EF7F2C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d6691f] transition-all flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-[#EF7F2C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d6691f] transition-all flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* TESTIMONIAL INDICATORS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#EF7F2C] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
