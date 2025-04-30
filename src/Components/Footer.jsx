import React from 'react'
import EndFooter from './EndFooter'

const Footer = () => {
  return (
    <section className=''>
      <div className='bg-orange-700 w-[85%] mx-auto rounded-3xl flex flex-col  md:flex-row items-center justify-between p-6 md:p-10 relative z-10 top-32 min-h-[234px] '>
        <img src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/element_white_3.webp" alt="" className='absolute bottom-3 ' />

        <div className='flex flex-col sm:flex-row  justify-center items-center gap-4 mb-6 md:mb-0 md:ml-4'>
          <img src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/customer-icon.webp" alt="" className='h-[62px] w-[62px] ' />

          <div className='text-center md:text-left'>
            <h1 className='font-bold text-2xl md:text-[38px] text-white'>Need support?</h1>
            <p className='text-white font-sans text-base md:text-[20px]'>
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
          <a href="">
            <button className="relative overflow-hidden text-center text-[16px] py-[15px] px-[35px] text-white rounded-md z-10
              border-2 border-transparent w-[178.58px] h-[56px]
              transition-all duration-500 ease-in-out
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
              before:bg-black before:rounded-md before:transition-all before:duration-500 
              before:ease-in-out before:z-[-1] 
              hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]">
              Call us now
            </button>
          </a>

          <a href="">
            <button className="relative overflow-hidden text-[16px] py-[15px] px-[35px] text-black rounded-md z-10
              border-2 border-transparent w-[155.02px] h-[56px]
              transition-all duration-500 ease-in-out
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
              before:bg-white before:rounded-md before:transition-all before:duration-500 
              before:ease-in-out before:z-[-1] 
              hover:text-white hover:before:translate-x-full hover:bg-black hover:border-[#fb5b29]">
              Email Us
            </button>
          </a>
        </div>

        <img src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/element_white_3.webp" alt="" className='absolute top-4 right-10' />
      </div>

      <div className=" min-h-screen bg-gradient-to-r from-[#000000] py-4 via-red-950 to-[#000000]  m-4 relative">
        <div>
          <EndFooter />
        </div>
      </div>
    </section>
  )
}

export default Footer