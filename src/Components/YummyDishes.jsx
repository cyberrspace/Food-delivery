import React from 'react';

const YummyDishes = () => {
  const ImageScroller = [
    "/images/dish1.png",
    "/images/dish2.png",
    "/images/dish3.png",
    "/images/dish4.png",
    "/images/dish5.png",
    "/images/dish6.png",
    "/images/dish7.png",
    "/images/dish8.png",
    "/images/dish9.png",
    "/images/dish10.png"
  ];

  const duplicatedImages = [...ImageScroller, ...ImageScroller];

  return (
    <section className="bg-[#f4f4f4] px-4 py-10 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-center items-center mt-10">
          <button className="px-5 py-1 bg-[#fee7df] text-[#fb5b29] rounded-full text-sm md:text-base">
            YUMMY DISHES
          </button>
        </div>

        <div className="text-center mt-6 px-2">
          <h1 className="text-2xl md:text-4xl font-bold">
            Access over 1000+ dishes with just a tap
          </h1>
          <p className="mt-4 text-sm md:text-base font-medium text-gray-700 max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <span className="block">Lorem Ipsum has been the standard dummy text.</span>
          </p>
        </div>

        {/* Image Scroller */}
        <div className="relative overflow-hidden mt-8 rounded-2xl border h-[200px] md:h-[300px] w-full">
          <div className="absolute flex h-full animate-marquee whitespace-nowrap">
            {duplicatedImages.map((src, index) => (
              <div key={`${index}-${src}`} className="mx-2 md:mx-3 flex-shrink-0">
                <img
                  src={src}
                  alt={`Dish ${index % ImageScroller.length + 1}`}
                  className="h-full w-[220px] md:w-[300px] lg:w-[340px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Promo Text */}
        <div className="text-center mt-8">
          <p className="font-bold text-base md:text-lg">
            Free food delivery for first 5 orders!
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7 mt-6">
          <a
            href=""
            className="bg-[#fb5b29] hover:bg-black py-3 px-8 rounded-2xl transition-colors duration-500"
          >
            <img
              src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/googleplay.webp"
              alt="Google Play"
              className="h-8 md:h-10"
            />
          </a>
          <a
            href=""
            className="bg-[#fb5b29] hover:bg-black py-3 px-8 rounded-2xl transition-colors duration-500"
          >
            <img
              src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/appstorebtn.webp"
              alt="App Store"
              className="h-8 md:h-10"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default YummyDishes;
