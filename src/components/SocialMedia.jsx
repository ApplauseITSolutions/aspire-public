import { FaYoutube, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3D1717] mb-3">Social Media</h2>
          <div className="w-16 h-1 bg-[#EF7F2C] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-sm">Stay connected with us across platforms</p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* YouTube Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaYoutube className="text-white text-lg" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Aspire Knowledge & Skills</p>
                <p className="text-xs text-gray-400">YouTube Channel</p>
              </div>
              <a
                href="https://www.youtube.com/@AspireKnowledgeSkills"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-medium text-red-600 hover:text-red-700 border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-full transition-colors"
              >
                Subscribe
              </a>
            </div>
            {/* Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/-SgsjGMYL-0?si=rq65MPzEbnU8fz2z"
                title="Aspire YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Facebook Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50">
              <div className="w-9 h-9 bg-[#1877F2] rounded-lg flex items-center justify-center flex-shrink-0">
                <FaFacebook className="text-white text-lg" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Aspire Knowledge & Skills</p>
                <p className="text-xs text-gray-400">Facebook Page</p>
              </div>
              <a
                href="https://www.facebook.com/Aspirekspune/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-medium text-[#1877F2] hover:text-blue-700 border border-blue-200 hover:border-blue-400 px-3 py-1.5 rounded-full transition-colors"
              >
                Follow
              </a>
            </div>
            {/* Embed */}
            <div className="w-full flex justify-center bg-white py-2">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAspirekspune%2F&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="100%"
                height="400"
                style={{ border: 'none', overflow: 'hidden', minHeight: '400px' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Aspire Facebook"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
