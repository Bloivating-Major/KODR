const HeroSection = () => {
  return (
    <main className="max-w-screen-xl m-auto max-sm:h-full">
      <div className="hero flex h-[80vh] items-center max-sm:flex-col">
        <div className="heroContent w-1/2  flex flex-col gap-10 max-sm:h-1/2 max-sm:w-full max-sm:items-center">
          <h1 className="text-[7.5em] leading-[1em] font-bold max-sm:text-[3em] max-sm:text-center max-sm:font-black max-sm:w-4/5">YOUR FEET DESERVE THE BEST</h1>
          <p className="w-3/5 font-bold text-slate-500 max-sm:text-sm max-sm:w-10/12 capitalize">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="heroButtons flex gap-10 ">
            <button className="py-3 px-5 bg-red-600 font-medium text-white h-12 flex items-center rounded-sm text-2xl max-sm:text-xl max-sm:rounded-md">Shop Now</button>
            <button className="py-2 px-4  font-medium text-gray-500 border-[2px] border-gray-500 h-12 flex items-center rounded-sm text-2xl max-sm:text-xl max-sm:rounded-md">Category</button>
          </div>

          <div className="shopping flex flex-col gap-5 text-lg font-bold max-sm:hidden">
            <p>Also Available On</p>

            <div className="brandIcons flex gap-5">
              <img src="/HeroSectionAssets/flipkart.png" alt="" />
              <img src="/HeroSectionAssets/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="heroImage w-1/2 max-sm:h-1/2 max-sm:w-full">
          <img src="/HeroSectionAssets/showImage.png" alt="" className="w-full h-full"/>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
