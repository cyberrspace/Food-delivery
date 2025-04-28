import React from 'react';

const ImageSlider = ({ images, currentSlide }) => {
  // Calculate slide width based on viewport
  const getSlideWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 50; // Mobile: show 2 slides (50% each)
      if (window.innerWidth < 1024) return 33.33; // Tablet: show 3 slides
      return 20; // Desktop: show 5 slides (20% each)
    }
    return 20; // Default fallback
  };

  const slideWidth = getSlideWidth();

  return (
    <div className="relative overflow-hidden w-full py-4 sm:py-6 md:py-8">
      <div className="transition-all duration-1000 ease-in-out">
        <div
          className="flex items-center"
          style={{
            transform: `translateX(-${currentSlide * slideWidth}%)`,
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform'
          }}
        >
          {images.map((src, index) => (
            <div
              key={`slide-${index}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${slideWidth}%` }}
            >
              <img
                src={src}
                alt={`partner-${index}`}
                className="w-full h-auto object-contain max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;