import { motion, useAnimation } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const Testimonials = () => {
  const [rating, setRating] = useState(4); // Default rating
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Sample testimonial data
  const testimonials = [
    {
      name: "Sandra Luna",
      image: "https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/story2.webp",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has."
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Excellent service! The food was delivered quickly and tasted amazing."
    },
    {
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I've been using this service for months and it never disappoints."
    },
    {
      name: "Robert Johnson",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "The variety of options is incredible. Highly recommended!"
    }
  ];

  // Duplicate items for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Continuous animation
  useEffect(() => {
    const containerWidth = containerRef.current?.scrollWidth / 2;
    const duration = testimonials.length * 3;

    if (!isPaused) {
      controls.start({
        x: [-containerWidth, 0],
        transition: {
          x: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [controls, isPaused, testimonials.length]);

  const handlePrev = () => {
    setIsPaused(true);
    const cardWidth = 350; // Approximate card width with margin
    controls.start({
      x: [containerRef.current.scrollLeft - cardWidth, 0],
      transition: { duration: 0.5 }
    });
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleNext = () => {
    setIsPaused(true);
    const cardWidth = 350; // Approximate card width with margin
    controls.start({
      x: [containerRef.current.scrollLeft + cardWidth, 0],
      transition: { duration: 0.5 }
    });
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-12 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className='max-w-7xl mx-auto space-y-6'>
        <div className='text-center'>
          <button className='inline-block h-8 sm:h-10 px-6 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm sm:text-base font-medium hover:bg-[#fb5b29] hover:text-white transition-colors duration-300 mb-4'>
            Testimonials
          </button>

          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Our happy clients
          </h1>

          <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto'>
            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.
          </p>
        </div>

        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className='absolute top-0 left-0 z-10 hidden sm:block'>
            <img
              src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/thumbup.webp"
              alt="Thumbs up"
              className='h-16 w-16 sm:h-20 sm:w-20'
            />
          </div>

          <motion.div
            ref={containerRef}
            className="flex"
            animate={controls}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="mx-2 sm:mx-4 flex-shrink-0 w-[280px] sm:w-[300px] md:w-[330px]"
              >
                <div className="p-6 bg-white h-full border-2 border-transparent hover:border-[#fb5b29] rounded-3xl shadow-lg relative transition-all duration-300">
                  <div className='flex flex-col items-center'>
                    <img
                      className='w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4'
                      src={testimonial.image}
                      alt={testimonial.name}
                    />

                    <h2 className='font-semibold text-lg sm:text-xl mb-2'>
                      {testimonial.name}
                    </h2>

                    <div className='flex justify-center gap-1 mb-4'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className='text-gray-600 text-center px-2 sm:px-4'>
                      {testimonial.text}
                    </p>
                  </div>

                  <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                    <div className='bg-[#e0a592] h-12 w-14 rounded-tl-full rounded-tr-full flex items-center justify-center'>
                      <p className='text-[#fb5b29] font-bold text-lg'>,,</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 focus:outline-none focus:ring-2 focus:ring-[#fb5b29]"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 focus:outline-none focus:ring-2 focus:ring-[#fb5b29]"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className='flex justify-center mt-12'>
          <button className="relative overflow-hidden text-sm sm:text-base py-3 px-6 text-white rounded-md z-10
                  border-2 border-transparent
                  transition-all duration-500 ease-in-out
                  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                  before:bg-[#fb5b29] before:rounded-md before:transition-all before:duration-500 
                  before:ease-in-out before:z-[-1] 
                  hover:text-black hover:before:translate-x-full hover:bg-white hover:border-[#fb5b29]
                  focus:outline-none focus:ring-2 focus:ring-[#fb5b29]">
            Read More Success Stories
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;