const Features = () => {
  return (
    <section id="features" className="h-[258.81px] w-full  bg-gradient-to-r from-[#000000] via-red-950 to-[#000000] mt-24">
      
      
       
        <div className=" flex flex-row justify-center  items-center gap-6 ">

        <div className="p-6 bg-white   h-[148.81px] w-[260px] mt-16 rounded-3xl backdrop-blur bg-white/20 shadow-lg border border-white/60 relative ">

          <img className="absolute right-0" src="/images/happy.png" alt="happy" />
           
           <div className="pt-6 ml-0 pb-6">
            <p className="font-sans font-bold text-white text-[45px]">5000+</p>
            <p className="font-sans text-white font-medium mt-0">Happy users</p>
           </div>

            
            </div>
          
        <div className="p-6 h-[148.81px] w-[260px] mt-16 rounded-3xl backdrop-blur bg-white/20 shadow-lg border border-white/60 relative ">
          <img className="absolute right-0" src="/images/review.png" alt="" />

          <div className="pt-6 ml-0 pb-6">
            <p className="font-sans font-bold text-white text-[45px] ">1879+</p>
            <p className="font-sans text-white font-medium">Positive Reviews</p>
          </div>
         

        </div>
        <div className="p-6 bg-white   h-[148.81px] w-[260px] mt-16 rounded-3xl backdrop-blur bg-white/20 shadow-lg border border-white/60 relative">
          <img className="absolute right-0" src="/images/restaurant.png" alt="" />

          <div className="pt-6 ml-0 pb-6">
            <p className="font-sans font-bold text-white text-[45px]">3855+</p>
            <p className="font-medium text-white font-sans">Restaurant listing</p>
          </div>
          


        </div>

        <div className="p-6 bg-white  h-[148.81px] w-[260px] mt-16 rounded-3xl  backdrop-blur-sm bg-white/20 shadow-lg border border-white/60 relative ">
          <img className="absolute right-0" src="/images/delivery.png" alt="" />

          <div className="pt-6 ml-0 pb-6">
            <p className="font-sans font-bold text-white text-[45px]">985M+</p>
            <p className="text-white font-medium font-sans">Successful deliveries</p>
          </div>
          


        </div>
          </div>
       
       
     
     
    </section>
  );
};

export default Features;
