import { Link } from "react-router-dom";
import fbIcon from "../assets/images/aspire-doc/fb.svg";
import linkedinIcon from "../assets/images/aspire-doc/linkedin.svg";
import instaIcon from "../assets/images/aspire-doc/insta.svg";
import ytIcon from "../assets/images/aspire-doc/yt.svg";
import mailIcon from "../assets/images/aspire-doc/mail.svg";
import callIcon from "../assets/images/aspire-doc/call.svg";
import addressIcon from "../assets/images/aspire-doc/address.svg";
import aspireWhiteLogo from "../assets/images/aspire-white logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#3b2412] text-white rounded-t-[32px] mt-10">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <div className="mb-4">
            <img
              src={aspireWhiteLogo}
              alt="Aspire Logo"
              className="h-16 w-auto"
            />
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Empowering the next generation with future-ready skills and
            opportunities through strategic partnerships and innovative
            education.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-[#4a2e18] hover:bg-orange-500 transition cursor-pointer">
              <img src={fbIcon} alt="Facebook" className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-[#4a2e18] hover:bg-orange-500 transition cursor-pointer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-[#4a2e18] hover:bg-orange-500 transition cursor-pointer">
              <img src={instaIcon} alt="Instagram" className="w-4 h-4" />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-[#4a2e18] hover:bg-orange-500 transition cursor-pointer">
              <img src={ytIcon} alt="YouTube" className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:text-orange-500 cursor-pointer transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-orange-500 cursor-pointer transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/impact-reach" className="hover:text-orange-500 cursor-pointer transition-colors">
                Impact & Reach
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-orange-500 cursor-pointer transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-orange-500 cursor-pointer transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* OUR PROGRAMS */}
        <div>
          <h4 className="font-semibold mb-4">Our Programs</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/programs/guaranteed-internship" className="hover:text-orange-500 cursor-pointer transition-colors">
                Guaranteed Internship
              </Link>
            </li>
            <li>
              <Link to="/programs/campus-to-corporate" className="hover:text-orange-500 cursor-pointer transition-colors">
                Campus to Corporate
              </Link>
            </li>
            <li>
              <Link to="/programs/cloud-technology" className="hover:text-orange-500 cursor-pointer transition-colors">
                Cloud Technology
              </Link>
            </li>
            <li>
              <Link to="/programs/uiux-developer" className="hover:text-orange-500 cursor-pointer transition-colors">
                UI/UX Developer
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <img src={mailIcon} alt="Email" className="w-4 h-4" />
              <a href="mailto:info@aspireks.com" className="hover:text-orange-500 transition-colors">
                info@aspireks.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src={callIcon} alt="Phone" className="w-4 h-4" />
              <a href="tel:+912025530291" className="hover:text-orange-500 transition-colors">
                020-25530291
              </a>
            </div>

            <div className="flex items-start gap-3">
              <img src={addressIcon} alt="Address" className="w-4 h-4 mt-1" />
              <span>
                Office No. 301–305, Kamla Arcade, 1204, J.M. Road,<br />
                Opp. Bal Gandharva Rang Mandir, Deccan,<br />
                Pune – 411004, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-300">
          <p>© 2025 Aspire Knowledge & Skills. All rights reserved.</p>

          <div className="flex gap-6 mt-2 md:mt-0">
            <span className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>

      {/* ORANGE STRIP */}
      <div className="h-1 bg-orange-500 rounded-b-[32px]" />
    </footer>
  );
};

export default Footer;
