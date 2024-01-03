import React from "react";

const IntroComponent = () => {
  return (
    <div className="bg-[#EDEBF2]  flex py-20 md:py-40  ">
      <div className="bg-[#e5def2] w-full flex flex-col lg:flex-row m-4 p-10 xl:p-16 gap-5 rounded-xl ">
        <div className="lg:w-1/2">
          <h3 className="font-semibold text-[#2f327d] text-center text-2xl">
            Introducing
          </h3>
          <h1 className="text-5xl md:text-[150px] font-bold text-[#773fc6] text-center">
            RetPro
          </h1>
          <h3 className="font-semibold text-center text-2xl">
            For Retired Professionals
          </h3>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <button className="bg-[#773fc6] text-white py-2 px-4 md:py-5 md:px-10 rounded-lg font-semibold text-lg md:text-2xl ">
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
