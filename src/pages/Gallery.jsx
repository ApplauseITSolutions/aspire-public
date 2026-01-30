import React, { useState, useEffect, useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import { galleryData } from "../data/galleryData";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Academic Collaboration');
  const [selectedImage, setSelectedImage] = useState(null);
  const tabsContainerRef = useRef(null);

  // All categories
  const categories = Object.keys(galleryData);

  const currentImages = galleryData[activeTab] || [];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll functions for category tabs
  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Navigation functions for modal
  const goToNextImage = () => {
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % currentImages.length;
    setSelectedImage(currentImages[nextIndex]);
  };

  const goToPreviousImage = () => {
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
    setSelectedImage(currentImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImages]);

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
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Gallery
          </h1>
        </div>
      </section>

      {/* GALLERY CONTENT SECTION */}
      <section className="bg-white py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Gallery Tabs with Scroll Buttons */}
          <div className="relative mb-12">
            {/* Left Gradient Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-[#EF7F2C] text-[#EF7F2C] w-12 h-12 rounded-full shadow-md hover:bg-[#EF7F2C] hover:text-white transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Tabs Container */}
            <div 
              ref={tabsContainerRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide px-20"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Right Gradient Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-[#EF7F2C] text-[#EF7F2C] w-12 h-12 rounded-full shadow-md hover:bg-[#EF7F2C] hover:text-white transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {currentImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-zoom-in"
                style={{
                  width: '301.32px',
                  height: '185.16px',
                  backgroundColor: '#f3f4f6'
                }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '301.32px',
                    height: '185.16px',
                    objectFit: 'cover',
                    display: 'block',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '1'
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center z-10">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="bg-white text-orange-600 px-4 py-2 rounded-full font-medium hover:bg-orange-50 transition-colors text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Image
                    </button>
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                  <h3 className="text-white font-medium text-sm line-clamp-2">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {currentImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/60 rounded-full p-3 hover:bg-black/80 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{selectedImage.alt}</h3>
                  <p className="text-white/80 text-sm">{selectedImage.category}</p>
                </div>
                {currentImages.length > 1 && (
                  <div className="text-white/80 text-sm">
                    {currentImages.findIndex(img => img.id === selectedImage.id) + 1} / {currentImages.length}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            {currentImages.length > 1 && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPreviousImage();
                    }}
                    className="text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextImage();
                    }}
                    className="text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
      
      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
