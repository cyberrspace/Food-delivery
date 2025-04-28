import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const WhyChoose = () => {
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
    }),
    hover: {
      borderColor: "#fb5b29",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section
      className='bg-[#f4f4f4] px-4 py-10 md:px-6'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className='bg-white rounded-3xl md:rounded-[50px] border-2 max-w-7xl mx-auto p-6 md:p-10'>
        <div className='flex justify-center items-center'>
          <button className='px-4 py-1 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm md:text-base'>
            WHY USE APPIQ
          </button>
        </div>

        <div className='text-center mt-4'>
          <h1 className='text-2xl md:text-4xl font-bold'>Why Choose Us</h1>
          <p className='mt-2 max-w-xl mx-auto text-sm md:text-base font-medium text-gray-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text.
          </p>
        </div>

        <div
          className='mt-10 flex flex-col lg:flex-row gap-10 items-center justify-between'
          ref={ref}
        >
          {/* Cards */}
          <div className='flex flex-col gap-6 w-full max-w-xl'>
            {[{
              icon: "/images/whyicon1.png",
              title: "Delivery in 30 min",
              text: "Get your favorite meals delivered fresh and fast to your door in just 30 minutes! Enjoy the convenience!"
            },
            {
              icon: "/images/whyicon2.png",
              title: "Quality Food",
              text: "Enjoy premium meals from top local restaurants, expertly crafted to satisfy your taste and elevate your dining experience!"
            },
            {
              icon: "/images/whyicon3.png",
              title: "Track Live Map",
              text: "Easily track your order in real-time with our live map feature, keeping you updated every step of the way!"
            }].map((card, i) => (
              <motion.div
                key={i}
                className='bg-[#faf9f5] p-5 md:p-6 rounded-2xl border-2 flex gap-4 items-start'
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                animate={controls}
                variants={cardVariants}
              >
                <img src={card.icon} alt="" className='w-14 h-14 md:w-[65px] md:h-[67px]' />
                <div>
                  <h3 className='font-semibold text-base md:text-lg'>{card.title}</h3>
                  <p className='text-sm md:text-base text-gray-700'>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <div className='w-full max-w-md px-4'>
            <img src="/images/featuresframe.png" alt="Features" className='w-full h-auto object-contain' />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;
