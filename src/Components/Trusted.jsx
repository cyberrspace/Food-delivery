import React from 'react';
import TestedButton from './TestedButton';
import SlideIndicator from './SliderIndicator';

const Trusted = () => {
  const TrustedScroller = [
    '/images/coffee.png',
    '/images/foodies.png',
    '/images/goodfood.png',
    '/images/restaurantt.png',
    '/images/burgerss.png',
  ];

  const TrustedImages = [...TrustedScroller, ...TrustedScroller];

  return (
    <section className="bg-[#f4f4f4] px-4 py-10 md:px-6">
      <div className="space-y-6 md:space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Trusted by 2.5k+ restaurants
          </h1>
        </div>

        {/* Scrolling Images */}
        <div className="relative overflow-hidden h-[150px] md:h-[200px] w-full">
          <div className="absolute flex h-full animate-marquee whitespace-nowrap">
            {TrustedImages.map((src, index) => (
              <div key={`${index}-${src}`} className="mx-3 flex-shrink-0">
                <img
                  src={src}
                  alt={`Dish ${index % TrustedScroller.length + 1}`}
                  className="h-full w-32 md:w-40 lg:w-52 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicator and Button */}
        <div className="flex flex-col items-center space-y-4">
          <SlideIndicator />
          <TestedButton />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
