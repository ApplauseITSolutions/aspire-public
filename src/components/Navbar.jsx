import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import aspireLogo from "../assets/images/logo-aspire.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const aboutTabs = [
    { id: "profile", label: "About Aspire" },
    { id: "vision", label: "Vision & Mission" },
    { id: "founder", label: "Founder's Message" },
    { id: "advisors", label: "Advisory Councils" },
    { id: "team", label: "Team Members" }
  ];

  const handleAboutTabClick = (tabId) => {
    navigate(`/about?tab=${tabId}`);
    setIsAboutDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-[#EF7F2C] shadow-sm min-w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center -ml-2">
          <img
            src={aspireLogo}
            alt="Aspire Logo"
            className="h-16 sm:h-18 w-40 sm:w-44 object-fit"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-[#3D1717]">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'hover:text-[#EF7F2C]'}`
            }
          >
            Home
          </NavLink>
          
          {/* About Us Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `navbar-nav-menu transition flex items-center gap-1 ${isActive ? 'text-[#EF7F2C]' : 'hover:text-[#EF7F2C]'}`
              }
            >
              About Us
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </NavLink>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-orange-100 transition-all duration-300 ${
              isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}>
              <div className="py-2">
                {aboutTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleAboutTabClick(tab.id)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#EF7F2C] hover:bg-orange-50 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-60"></span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <NavLink 
            to="/programs"
            end
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'hover:text-[#EF7F2C]'}`
            }
          >
            Programs
          </NavLink>
          <NavLink 
            to="/programs/campus-to-corporate"
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'hover:text-[#EF7F2C]'}`
            }
          >
            Campus to Corporate
          </NavLink>
          <NavLink 
            to="/impact-reach" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'hover:text-[#EF7F2C]'}`
            }
          >
            Impact & Reach
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'hover:text-[#EF7F2C]'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#3D1717] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#3D1717] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#3D1717] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden bg-white border-t border-[#EF7F2C] transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'text-[#3D1717] hover:text-[#EF7F2C]'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          
          {/* Mobile About Us with Sub-items */}
          <div>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'text-[#3D1717] hover:text-[#EF7F2C]'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <div className="ml-4 mt-2 space-y-2">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    handleAboutTabClick(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-medium text-gray-600 hover:text-[#EF7F2C] transition-colors duration-200 py-1"
                >
                  • {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <NavLink 
            to="/programs"
            end
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'text-[#3D1717] hover:text-[#EF7F2C]'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Programs
          </NavLink>
          <NavLink 
            to="/programs/campus-to-corporate" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'text-[#3D1717] hover:text-[#EF7F2C]'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Campus to Corporate
          </NavLink>
          <NavLink 
            to="/impact-reach" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'text-[#3D1717] hover:text-[#EF7F2C]'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Impact & Reach
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `navbar-nav-menu transition ${isActive ? 'text-[#EF7F2C]' : 'text-[#3D1717] hover:text-[#EF7F2C]'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;