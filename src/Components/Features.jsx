const Features = () => {
  return (
    <section id="features" className=" bg-gradient-to-r from-[#000000] via-red-950 to-[#000000] mt-24 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Feature 1 */}
          <div className="p-6 h-[148.81px] w-full mt-4 rounded-3xl backdrop-blur bg-white/20 shadow-lg border border-white/60 relative">
            <img className="absolute right-0" src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/usp1.webp" alt="happy" />
            <div className="pt-6 ml-0 pb-6">
              <p className="font-sans font-bold text-white text-[45px]">5000+</p>
              <p className="font-sans text-white font-medium mt-0">Happy users</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 h-[148.81px] w-full mt-4 rounded-3xl backdrop-blur bg-white/20 shadow-lg border border-white/60 relative">
            <img className="absolute right-0" src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/usp2.webp" alt="review" />
            <div className="pt-6 ml-0 pb-6">
              <p className="font-sans font-bold text-white text-[45px]">1879+</p>
              <p className="font-sans text-white font-medium">Positive Reviews</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 h-[148.81px] w-full mt-4 rounded-3xl backdrop-blur bg-white/20 shadow-lg border border-white/60 relative">
            <img className="absolute right-0" src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/usp3.webp" alt="restaurant" />
            <div className="pt-6 ml-0 pb-6">
              <p className="font-sans font-bold text-white text-[45px]">3855+</p>
              <p className="font-medium text-white font-sans">Restaurant listing</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 h-[148.81px] w-full mt-4 rounded-3xl backdrop-blur-sm bg-white/20 shadow-lg border border-white/60 relative">
            <img className="absolute right-0" src="https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/01-food-delivery-static-hero/images/usp4.webp" alt="delivery" />
            <div className="pt-6 ml-0 pb-6">
              <p className="font-sans font-bold text-white text-[45px]">985M+</p>
              <p className="text-white font-medium font-sans">Successful deliveries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;