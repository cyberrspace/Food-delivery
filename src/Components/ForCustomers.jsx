import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ForCustomers = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      borderColor: "#fb5b29",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section
      className='bg-[#f4f4f4] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16' ref={ref}>
          {/* Text Content */}
          <div className='w-full lg:w-1/2'>
            <div className='space-y-6 sm:space-y-8 md:space-y-10'>
              <button className='h-8 sm:h-10 px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm sm:text-base font-medium hover:bg-[#fb5b29] hover:text-white transition-colors duration-300'>
                For customers
              </button>

              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                Seamless ordering process from app
              </h1>

              <p className='text-lg sm:text-xl text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytext.
              </p>

              <div className='space-y-6 sm:space-y-8'>
                {[
                  {
                    title: "Delivery within 3 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting."
                  },
                  {
                    title: "Live map tracking",
                    description: "Dummy text of the printing and typesetting industr lorem Ipsum is simply."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className='p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-sm'
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    animate={controls}
                    variants={cardVariants}
                  >
                    <div className='flex items-start gap-4'>
                      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#fb5b29] mt-1">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L4.5 9L11 1" stroke="#f4f4f4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <h2 className='font-bold text-lg sm:text-xl mb-1 sm:mb-2'>
                          {feature.title}
                        </h2>
                        <p className='font-medium text-gray-600 text-sm sm:text-base'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className='mt-8 sm:mt-12'>
                <a href="#">
                  <button className="relative overflow-hidden text-sm sm:text-base py-3 px-6 text-white rounded-md z-10
                    border-2 border-transparent
                    transition-all duration-500 ease-in-out
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                    before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 
                    before:ease-in-out before:z-[-1] 
                    hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]">
                    Download App
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            className='w-full lg:w-1/2 flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/for_customer.webp"
              alt="Customer app interface"
              className='w-full max-w-md lg:max-w-none object-contain'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ForCustomers;