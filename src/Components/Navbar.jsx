import { useState } from "react";
import HeroSection from "./HeroSection";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const home = [
    { id: 1, list: "Default 1" },
    { id: 2, list: "Default 2 Slider hero" },
    { id: 3, list: "Default 3 center hero" },
    { id: 4, list: "Food delivery 1" },
    { id: 5, list: "Food delivery 2" },
    { id: 6, list: "Meditation 1" },
    { id: 7, list: "Meditation 1" },
    { id: 8, list: "Diet Nutrtion 1" },
    { id: 9, list: "Diet Nutrtion 2" },
    { id: 10, list: "Diet Nutrtion 3" }
  ];

  const page = [
    { id: 11, item: "Blog list" },
    { id: 12, item: "Single Blog" },
    { id: 13, item: "Sign in" },
    { id: 14, item: "Sign Out" }
  ];

  return (
    <div className="bg-cover bg-no-repeat bg-right-top min-h-screen relative sm:flex-col z-30" style={{
      backgroundImage: "url('images/hero.png')",
      backgroundSize: 'clamp(300px, 50vw, 580px)',
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="z-50">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/logo.webp"
                alt="food-logo"
                className="h-8 sm:h-10 w-auto"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {/* Home Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
                onMouseLeave={() => setIsHomeDropdownOpen(false)}
              >
                <button className="flex items-center hover:text-red-500 transition-colors">
                  Home
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isHomeDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    {home.map(homes => (
                      <a
                        key={homes.id}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {homes.list}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#features" className="hover:text-red-500 transition-colors">About us</a>

              {/* Pages Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsPagesDropdownOpen(true)}
                onMouseLeave={() => setIsPagesDropdownOpen(false)}
              >
                <button className="flex items-center hover:text-red-500 transition-colors">
                  Pages
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isPagesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {page.map(pages => (
                      <a
                        key={pages.id}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {pages.item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#testimonials" className="hover:text-red-500 transition-colors">Reviews</a>
              <a href="#blog" className="hover:text-red-500 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>

              <a href="#trial">
                <button className="relative overflow-hidden text-sm sm:text-base py-2 px-4 sm:py-2 sm:px-6 text-white rounded-md z-10 border-2 border-transparent transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]">
                  7 Days Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed top-0 left-0   bg-white border-r border-gray-200 shadow-lg z-40 pt-20 px-6">
              <div className="flex flex-col space-y-4">
                {/* Mobile Home Dropdown */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full text-left py-2 text-gray-800 hover:text-red-500 flex justify-between items-center"
                    onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                  >
                    <span>Home</span>
                    <svg className={`w-4 h-4 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isHomeDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {home.map(homes => (
                        <a
                          key={homes.id}
                          href="#"
                          className="block py-1.5 px-3 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded"
                        >
                          {homes.list}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#features" className="py-2 text-gray-800 hover:text-red-500 border-b border-gray-200">About us</a>

                {/* Mobile Pages Dropdown */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full text-left py-2 text-gray-800 hover:text-red-500 flex justify-between items-center"
                    onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                  >
                    <span>Pages</span>
                    <svg className={`w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isPagesDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {page.map(pages => (
                        <a
                          key={pages.id}
                          href="#"
                          className="block py-1.5 px-3 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded"
                        >
                          {pages.item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#testimonials" className="py-2 text-gray-800 hover:text-red-500 border-b border-gray-200">Reviews</a>
                <a href="#blog" className="py-2 text-gray-800 hover:text-red-500 border-b border-gray-200">Blog</a>
                <a href="#contact" className="py-2 text-gray-800 hover:text-red-500 border-b border-gray-200">Contact</a>

                <div className="pt-4">
                  <a href="#trial">
                    <button className="w-full relative overflow-hidden text-base py-3 px-6 rounded-md z-10 border-2 border-[#fb5b29] transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:text-white hover:before:translate-x-0 hover:before:opacity-100">
                      7 Days Free Trial
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <HeroSection />
    </div>
  );
};

export default Navbar;