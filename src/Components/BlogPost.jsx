import React from 'react'

const BlogPost = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12'>
      {/* Header Section */}
      <div className='text-center mb-8 sm:mb-12 md:mb-16'>
        <div className='inline-block mb-4 sm:mb-6'>
          <button className='h-8 sm:h-10 px-6 sm:px-8 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm sm:text-base font-medium hover:bg-[#fb5b29] hover:text-white transition-colors duration-300'>
            Blog Post
          </button>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
          Insights & Inspirations
        </h1>
      </div>

      {/* Blog Posts Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto'>
        {/* Blog Post 1 */}
        <div className='border-2 rounded-3xl bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
          <img
            src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/blog1.webp"
            alt="Blog post about food delivery apps"
            className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl'
          />

          <div className='p-6 sm:p-8 space-y-4 sm:space-y-6'>
            <p className='text-gray-500 text-sm sm:text-base flex flex-wrap items-center gap-2'>
              <span>Admin</span>
              <span>|</span>
              <span>Oct 13, 2025</span>
              <span>|</span>
              <span>25 comments</span>
            </p>

            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 hover:text-[#fb5b29] transition-colors duration-200'>
              <a href="#">
                Top Tips for Choosing the Best Food Delivery App for Your Needs
              </a>
            </h2>

            <hr className="border-t border-gray-200" />

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
              <div className='bg-pink-100 px-4 py-2 rounded-full text-sm sm:text-base text-center text-pink-800'>
                Food at home
              </div>
              <a href="#" className='text-[#fb5b29] font-medium hover:text-black transition-colors duration-200 flex items-center gap-1'>
                Read more <span className='text-xl font-bold'>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className='border-2 rounded-3xl bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
          <img
            src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/blog2.webp"
            alt="Blog post about supporting local businesses"
            className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-3xl'
          />

          <div className='p-6 sm:p-8 space-y-4 sm:space-y-6'>
            <p className='text-gray-500 text-sm sm:text-base flex flex-wrap items-center gap-2'>
              <span>Cyrus</span>
              <span>|</span>
              <span>Oct 15, 2025</span>
              <span>|</span>
              <span>19 comments</span>
            </p>

            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 hover:text-[#fb5b29] transition-colors duration-200'>
              <a href="#">
                How Our App Supports Local Restaurants and Small Businesses
              </a>
            </h2>

            <hr className="border-t border-gray-200" />

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
              <div className='bg-pink-100 px-4 py-2 rounded-full text-sm sm:text-base text-center text-pink-800'>
                Free delivery
              </div>
              <a href="#" className='text-[#fb5b29] font-medium hover:text-black transition-colors duration-200 flex items-center gap-1'>
                Read more <span className='text-xl font-bold'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost