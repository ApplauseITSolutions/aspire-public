import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import aspireBgImg from "../assets/images/aspire-bg-.png";

const Contact = () => {
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
          margin: ' 34px auto'
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Contact Us
          </h1>
        </div>
      </section>
      
      {/* CONTACT PAGE CONTENT */}
      <section className="bg-white py-12 sm:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* CONTACT INFORMATION COMPONENT */}
          <ContactInfo />

          {/* ENQUIRY FORM COMPONENT */}
          <div className="mt-16">
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;