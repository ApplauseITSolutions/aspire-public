import mailIcon from "../assets/images/aspire-doc/mail.svg";
import callIcon from "../assets/images/aspire-doc/call.svg";
import fbIcon from "../assets/images/aspire-doc/fb.svg";
import linkedinIcon from "../assets/images/aspire-doc/linkedin.svg";
import instaIcon from "../assets/images/aspire-doc/insta.svg";
import ytIcon from "../assets/images/aspire-doc/yt.svg";

const TopHeader = () => {
  return (
    <div className="bg-[#EF7F2C] text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 sm:h-10 flex items-center justify-between">

        {/* LEFT - Contact Info */}
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden sm:flex items-center gap-2 navbar-nav-menu">
            <img src={mailIcon} alt="Email" className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden md:inline">info@aspireks.com</span>
          </span>
          <span className="flex items-center gap-2 navbar-nav-menu">
            <img src={callIcon} alt="Phone" className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>020-25530291</span>
          </span>
        </div>

        {/* RIGHT - Social Icons & Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="https://www.facebook.com/share/17ZaQxt6xD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition">
              <img src={fbIcon} alt="Facebook" className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2270%) hue-rotate(13deg) brightness(98%) contrast(89%)' }} />
            </a>
            <a href="https://www.linkedin.com/company/aspire-knowledge-and-skills-india-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition">
              <img src={linkedinIcon} alt="LinkedIn" className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2270%) hue-rotate(13deg) brightness(98%) contrast(89%)' }} />
            </a>
            <a href="https://www.instagram.com/aspire_india_official_?igsh=MTc4N292a3o1aTQzdA==" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition">
              <img src={instaIcon} alt="Instagram" className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2270%) hue-rotate(13deg) brightness(98%) contrast(89%)' }} />
            </a>
            <a href="https://youtube.com/@aspireknowledgeskillsindia?si=XvCiV7-3dLlgjFE5" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition">
              <img src={ytIcon} alt="YouTube" className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2270%) hue-rotate(13deg) brightness(98%) contrast(89%)' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;