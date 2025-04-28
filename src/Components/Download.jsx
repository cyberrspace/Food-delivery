import React from 'react'

const Download = () => {
  return (
    <section className='bg-gradient-to-r from-[#000000] via-red-950 to-[#000000] rounded-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-12 sm:my-16 md:my-20 lg:my-24 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden'>
      {/* Background food images - hidden on small screens */}
      <div className='hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4'>
        <img
          src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/download_food3.webp"
          alt="Decorative food"
          className='h-[300px] md:h-[400px] lg:h-[500px] w-auto object-contain transform -rotate-45 opacity-70'
        />
      </div>

      <div className='hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4'>
        <img
          src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/download_food3.webp"
          alt="Decorative food"
          className='h-[300px] md:h-[400px] lg:h-[500px] w-auto object-contain transform rotate-45 opacity-70'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        {/* Testimonials Button */}
        <div className='flex justify-center mb-6 sm:mb-8 md:mb-10'>
          <button className='h-8 sm:h-10 px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm sm:text-base font-medium hover:bg-[#fb5b29] hover:text-white transition-colors duration-300'>
            Testimonials
          </button>
        </div>

        {/* Main Content */}
        <div className='text-center'>
          <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4'>
            Download app to enjoy 4500+ foods from 1200+ restaurants.
          </h1>

          <p className='text-white text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-12'>
            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.
          </p>

          {/* Download Buttons */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8'>
            <a href="#" className='bg-[#fb5b29] hover:bg-black transition-colors duration-300 rounded-2xl p-3 sm:p-4 flex justify-center w-full sm:w-auto max-w-xs'>
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/googleplay.webp"
                alt="Get on Google Play"
                className='h-10 sm:h-12 md:h-14'
              />
            </a>

            <a href="#" className='bg-[#fb5b29] hover:bg-black transition-colors duration-300 rounded-2xl p-3 sm:p-4 flex justify-center w-full sm:w-auto max-w-xs'>
              <img
                src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/appstorebtn.webp"
                alt="Download on the App Store"
                className='h-10 sm:h-12 md:h-14'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download