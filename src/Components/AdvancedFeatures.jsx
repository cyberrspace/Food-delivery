import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ForCustomers from './ForCustomers';

const AdvancedFeatures = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      borderColor: "#fb5b29",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section
      className='bg-[#f4f4f4] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-8 sm:mb-12 md:mb-16'>
          <motion.div
            className='inline-block mb-4 sm:mb-6'
            whileHover={{ scale: 1.05 }}
          >
            <button className='h-6 sm:h-8 px-4 sm:px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-xs sm:text-sm md:text-base font-medium'>
              Advanced Features
            </button>
          </motion.div>

          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
            Win-win for restaurants & users
          </h1>

          <p className='text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy.
          </p>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16' ref={ref}>
          {/* Image Section */}
          <motion.div
            className='w-full lg:w-1/2'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/for_restaurant.webp"
              alt="Restaurant management"
              className='w-full h-auto object-contain'
            />
          </motion.div>

          {/* Text Content */}
          <div className='w-full lg:w-1/2'>
            <div className='space-y-4 sm:space-y-6 md:space-y-8'>
              <div>
                <button className='h-6 sm:h-8 px-4 sm:px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-xs sm:text-sm md:text-base font-medium'>
                  For restaurants
                </button>
              </div>

              <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
                Effortless management of restaurant operations.
              </h2>

              <p className='text-sm sm:text-base md:text-lg text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytext.
              </p>

              <div className='space-y-6 sm:space-y-8 md:space-y-10'>
                <motion.div
                  className='p-4 sm:p-6 border border-gray-200 rounded-lg bg-white shadow-sm'
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  animate={controls}
                  variants={cardVariants}
                >
                  <div className='flex items-start gap-4'>
                    <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#fb5b29] mt-1">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 9L11 1" stroke="#f4f4f4" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2'>Handling of orders</h3>
                      <p className='text-sm sm:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='p-4 sm:p-6 border border-gray-200 rounded-lg bg-white shadow-sm'
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  animate={controls}
                  variants={cardVariants}
                >
                  <div className='flex items-start gap-4'>
                    <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#fb5b29] mt-1">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 9L11 1" stroke="#f4f4f4" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2'>Sale system connectivity</h3>
                      <p className='text-sm sm:text-base text-gray-600'>Dummy text of the printing and typesetting industr lorem Ipsum is simply.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Button */}
            <div className='mt-8 sm:mt-12 md:mt-16'>
              <a href="#">
                <button className="relative overflow-hidden text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 text-white rounded-md z-10
                  border-2 border-transparent
                  transition-all duration-500 ease-in-out
                  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                  before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 
                  before:ease-in-out before:z-[-1] 
                  hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]
                  w-full sm:w-auto">
                  Register Your Restaurant
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ForCustomers />
    </motion.section>
  );
};

export default AdvancedFeatures;