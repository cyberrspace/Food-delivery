import { useState } from "react";

const Navbar = () => {
  const [homeList, setHomeList] = useState("");
  const [pageList, setPageList] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="bg-cover bg-no-repeat bg-right-top min-h-screen relative z-10" style={{
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
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/logo_white.webp"
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
              <select
                className="bg-transparent border border-gray-300 rounded px-3 py-1  hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                value={homeList}
                onChange={(e) => setHomeList(e.target.value)}
              >
                <option value="" className="text-gray-800">Home</option>
                {home.map(homes => (
                  <option key={homes.id} value={homes.id} className="text-gray-800">{homes.list}</option>
                ))}
              </select>

              <a href="#features" className=" hover:text-red-500 transition-colors">About us</a>

              <select
                className="bg-transparent border border-gray-300 rounded px-3 py-1  hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                value={pageList}
                onChange={(e) => setPageList(e.target.value)}
              >
                <option value="" className="text-gray-800">Pages</option>
                {page.map(pages => (
                  <option key={pages.id} value={pages.id} className="text-gray-800">{pages.item}</option>
                ))}
              </select>

              <a href="#testimonials" className="text-white hover:text-red-500 transition-colors">Reviews</a>
              <a href="#blog" className="text-white hover:text-red-500 transition-colors">Blog</a>
              <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>

              <a href="#trial">
                <button className="relative overflow-hidden text-sm sm:text-base py-2 px-4 sm:py-2 sm:px-6 text-white rounded-md z-10 border-2 border-transparent transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]">
                  7 Days Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 pt-20">
              <select
                className="w-3/4 bg-transparent border border-gray-300 rounded px-3 py-2 "
                value={homeList}
                onChange={(e) => setHomeList(e.target.value)}
              >
                <option value="">Home</option>
                {home.map(homes => (
                  <option key={homes.id} value={homes.id}>{homes.list}</option>
                ))}
              </select>

              <a href="#features" className=" hover:text-red-500 text-xl">About us</a>

              <select
                className="w-3/4 bg-transparent border border-gray-300 rounded px-3 py-2"
                value={pageList}
                onChange={(e) => setPageList(e.target.value)}
              >
                <option value="">Pages</option>
                {page.map(pages => (
                  <option key={pages.id} value={pages.id}>{pages.item}</option>
                ))}
              </select>

              <a href="#testimonials" className=" hover:text-red-500 text-xl">Reviews</a>
              <a href="#blog" className=" hover:text-red-500 text-xl">Blog</a>
              <a href="#contact" className=" hover:text-red-500 text-xl">Contact</a>

              <a href="#trial" className="mt-4">
                <button className="relative overflow-hidden text-base py-3 px-6  rounded-md z-10 border-2 border-transparent transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]">
                  7 Days Free Trial
                </button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h3 className="text-lg sm:text-xl text-orange-500 mb-2">Fastest delivery</h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  leading-tight mb-6">
              Fast & best <span className="text-orange-600">food delivery</span> services in your town
            </h1>

            <p className="text-lg sm:text-xl  mb-8 max-w-2xl mx-auto lg:mx-0">
              We commit to delivering your food to you within 30 minutes. If we would fail, we will give the food free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`/images/banavt${item}.png`}
                    alt={`Avatar ${item}`}
                    className="w-12 h-12 rounded-full border-2 border-white hover:-translate-x-1 transition-transform"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-lg ">25k+ Active Users</p>
                <div className="flex items-center space-x-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    onMouseEnter={() => setIsFilled(true)}
                    onMouseLeave={() => setIsFilled(false)}
                    className="cursor-pointer transition-colors"
                  >
                    <path
                      fill={isFilled ? '#fb5b29' : '#ffd700'}
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                  <span className="-200">4.5/5.0 (20k+ Reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#" className="bg-[#fb5b29] hover:bg-black transition-colors duration-300 rounded-2xl p-3 flex justify-center items-center max-w-xs mx-auto lg:mx-0">
                <img
                  src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/googleplay.webp"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="bg-[#fb5b29] hover:bg-black transition-colors duration-300 rounded-2xl p-3 flex justify-center items-center max-w-xs mx-auto lg:mx-0">
                <img
                  src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/appstorebtn.webp"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/heros.png"
              alt="Food delivery"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;