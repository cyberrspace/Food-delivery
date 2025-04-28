import React from 'react'

const EasySteps = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#000000] via-red-950 to-[#000000] rounded-3xl py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 mx-4 my-12 sm:my-16 md:my-20 lg:my-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
          <div>
            <button className="inline-block h-8 sm:h-10 px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm sm:text-base font-medium hover:bg-[#fb5b29] hover:text-white transition-colors duration-300">
              Easy steps
            </button>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            How it Works
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {/* Step 1 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm border-2 border-transparent hover:border-white rounded-3xl shadow-lg relative h-full flex flex-col items-center text-center transition-all duration-300">
            <div className="mb-6">
              <img
                className="w-16 h-16 object-contain"
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/how1.webp"
                alt="Download app"
              />
            </div>

            <h2 className="font-semibold text-white text-lg sm:text-xl mb-4">
              Download App & create a free account
            </h2>

            <p className="text-white text-sm sm:text-base mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.
            </p>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#fb5b29] h-12 w-14 rounded-tl-full rounded-tr-full flex items-center justify-center">
                <p className="text-white font-bold">01</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm border-2 border-transparent hover:border-white rounded-3xl shadow-lg relative h-full flex flex-col items-center text-center transition-all duration-300">
            <div className="mb-6">
              <img
                className="w-16 h-16 object-contain"
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/how2.webp"
                alt="Place order"
              />
            </div>

            <h2 className="font-semibold text-white text-lg sm:text-xl mb-4">
              Place orders at your preferred eatery
            </h2>

            <p className="text-white text-sm sm:text-base mb-12">
              Dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.
            </p>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#fb5b29] h-12 w-14 rounded-tl-full rounded-tr-full flex items-center justify-center">
                <p className="text-white font-bold">02</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm border-2 border-transparent hover:border-white rounded-3xl shadow-lg relative h-full flex flex-col items-center text-center transition-all duration-300">
            <div className="mb-6">
              <img
                className="w-16 h-16 object-contain"
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/how3.webp"
                alt="Delivery"
              />
            </div>

            <h2 className="font-semibold text-white text-lg sm:text-xl mb-4">
              Get it delivered directly to your home, effortlessly.
            </h2>

            <p className="text-white text-sm sm:text-base mb-12">
              Printing and typesetting industry lorem Ipsum has been the industrys standard dummy.
            </p>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#fb5b29] h-12 w-14 rounded-tl-full rounded-tr-full flex items-center justify-center">
                <p className="text-white font-bold">03</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            Get 50% off on your first order! Grab it now.
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <a href="#" className="bg-[#fb5b29] hover:bg-black transition-colors duration-300 rounded-2xl p-3 sm:p-4 flex justify-center w-full sm:w-auto max-w-xs">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/googleplay.webp"
                alt="Get on Google Play"
                className="h-10 sm:h-12"
              />
            </a>

            <a href="#" className="bg-[#fb5b29] hover:bg-black transition-colors duration-300 rounded-2xl p-3 sm:p-4 flex justify-center w-full sm:w-auto max-w-xs">
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/appstorebtn.webp"
                alt="Download on the App Store"
                className="h-10 sm:h-12"
              />
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/device.webp"
              alt="App preview"
              className="w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EasySteps