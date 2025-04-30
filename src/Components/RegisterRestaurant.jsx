import React from 'react'

const RegisterRestaurant = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat  min-h-[400px] sm:min-h-[500px] md:min-h-[640px] my-12 sm:my-16 md:my-20 mx-4 sm:mx-6 md:mx-8 rounded-xl "
      style={{
        backgroundImage: 'url(https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/download_food3.webp)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-12 sm:pt-16 md:pt-20 pb-12 px-4 sm:px-6 md:px-8 text-center">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <button className="inline-block h-8 sm:h-10 px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm sm:text-base font-medium hover:bg-[#fb5b29] hover:text-white transition-colors duration-300">
            Register Restaurant
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-tight">
          Begin gaining more customers today.
        </h1>

        {/* Description */}
        <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-12 max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12">
          <a href="#">
            <button className="relative overflow-hidden text-sm sm:text-base py-3 px-8 text-white rounded-md z-10
                    border-2 border-transparent
                    transition-all duration-500 ease-in-out
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                    before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 
                    before:ease-in-out before:z-[-1] 
                    hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]">
              Register Restaurant
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default RegisterRestaurant