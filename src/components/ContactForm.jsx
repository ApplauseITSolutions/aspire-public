import { useState } from "react";
import enquiryImg from "../assets/images/aspire-doc/enquiry.png";
import { submitContactForm } from "../utils/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
    captcha: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple captcha validation
    if (formData.captcha !== '1718') {
      setSubmitMessage('Incorrect captcha. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: 'Contact Form Enquiry',
        message: formData.enquiry
      };

      const response = await submitContactForm(submissionData);
      
      if (response.status) {
        setSubmitMessage('Thank you! Your enquiry has been submitted successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          enquiry: '',
          captcha: ''
        });
      } else {
        setSubmitMessage('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#fffaf4] pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">

        <div className="bg-white shadow-lg overflow-hidden w-full max-w-6xl rounded-2xl sm:rounded-3xl lg:rounded-[30px] relative -top-6 sm:-top-8 lg:-top-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[500px] lg:h-[548px]">

            {/* LEFT SIDE - Content & Illustration */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1717] mb-3 sm:mb-4 text-center lg:text-centre">
                Have a Query?<br />
                We're Here to Help.
              </h2>

              <p className="text-[#3D1717] opacity-70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-centre">
                Our support team is ready to answer your questions about programs,
                admissions, and partnerships.
              </p>

              {/* ILLUSTRATION */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs sm:max-w-sm lg:w-80 h-48 sm:h-56 lg:h-64 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <img
                    src={enquiryImg}
                    alt="Enquiry Support Illustration"
                    className="w-full h-full object-cover rounded-xl lg:rounded-2xl opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="bg-gray-50 flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-2">
              <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                  {/* NAME & EMAIL ROW - Stack on mobile, side by side on larger screens */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#3D1717] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF7F2C] focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#3D1717] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF7F2C] focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* PHONE NUMBER */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#3D1717] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF7F2C] focus:border-transparent outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  {/* ENQUIRY */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#3D1717] mb-1">
                      Enquiry *
                    </label>
                    <textarea
                      name="enquiry"
                      value={formData.enquiry}
                      onChange={handleInputChange}
                      placeholder="Tell us about your enquiry"
                      rows="3"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF7F2C] focus:border-transparent outline-none transition-all resize-none text-sm"
                      required
                    ></textarea>
                  </div>

                  {/* CAPTCHA */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleInputChange}
                        placeholder="Enter captcha"
                        className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF7F2C] focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>

                    <div className="bg-gray-200 px-2 sm:px-3 py-2 sm:py-2 rounded-lg border border-gray-300 font-mono text-sm sm:text-base font-bold text-[#3D1717]">
                      1718
                    </div>

                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                    >
                      <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4V10H7M23 20V14H17M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#EF7F2C] text-white py-3 sm:py-3 px-4 rounded-lg font-medium hover:bg-[#d6691f] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
                    {!isSubmitting && (
                      <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>

                  {/* SUBMIT MESSAGE */}
                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-sm ${submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}

                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;