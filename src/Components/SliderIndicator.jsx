import React from 'react';

const SlideIndicator = ({
  totalSlides,
  currentSlide,
  activeColor = "#FF7043",
  inactiveColor = "white",
  size = "md" // sm, md, lg
}) => {
  // Size configuration
  const sizeConfig = {
    sm: {
      circleSize: 6,
      containerSize: 20,
      spacing: 2
    },
    md: {
      circleSize: 8,
      containerSize: 24,
      spacing: 3
    },
    lg: {
      circleSize: 10,
      containerSize: 30,
      spacing: 4
    }
  };

  const { circleSize, containerSize, spacing } = sizeConfig[size] || sizeConfig.md;

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
      role="tablist"
      aria-label="Slide navigation"
    >
      {[...Array(totalSlides)].map((_, index) => (
        <button
          key={index}
          aria-label={`Go to slide ${index + 1}`}
          aria-selected={currentSlide === index}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 rounded-full transition-all"
          style={{
            width: `${containerSize}px`,
            height: `${containerSize}px`,
            padding: `${spacing}px`
          }}
        >
          <svg
            width={containerSize}
            height={containerSize}
            viewBox={`0 0 ${containerSize} ${containerSize}`}
            className="transition-all"
          >
            <circle
              cx={containerSize / 2}
              cy={containerSize / 2}
              r={circleSize}
              stroke={activeColor}
              strokeWidth="1.5"
              fill={currentSlide === index ? activeColor : inactiveColor}
              className="transition-all duration-300 ease-in-out"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default SlideIndicator;