import React from 'react'

const TestedButton = ({ children = "Register Your Restaurant" }) => {
  return (
    <div className="flex justify-center">
      <a href="#" className="block w-full max-w-xs sm:max-w-none sm:w-auto">
        <button className="
          relative 
          overflow-hidden 
          text-sm sm:text-base md:text-lg 
          py-2 sm:py-3 md:py-[14px] 
          px-6 sm:px-8 
          text-white 
          rounded-md 
          z-10
          border-2 
          border-transparent 
          w-full
          sm:w-[220px] md:w-[250px] lg:w-[280px]
          h-[44px] sm:h-[48px] md:h-[52px]
          transition-all 
          duration-500 
          ease-in-out
          before:content-[''] 
          before:absolute 
          before:top-0 
          before:left-0 
          before:w-full 
          before:h-full 
          before:bg-[#fb5b29] 
          before:rounded-md 
          before:transition-all 
          before:duration-500 
          before:ease-in-out 
          before:z-[-1] 
          hover:text-black 
          hover:before:translate-x-full 
          hover:bg-white 
          hover:border-[#fb5b29]
          focus:outline-none
          focus:ring-2
          focus:ring-[#fb5b29]
          focus:ring-opacity-50
        ">
          {children}
        </button>
      </a>
    </div>
  )
}

export default TestedButton