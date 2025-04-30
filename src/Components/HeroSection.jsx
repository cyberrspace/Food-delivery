import { useState } from "react";

const HeroSection = () => {

  const [isFilled, setIsFilled] = useState(false);
  return (
    <section className="w-full  pt-32 pb-16 px-4 sm:px-6 lg:px-8 mx-auto">
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
  )
}

export default HeroSection