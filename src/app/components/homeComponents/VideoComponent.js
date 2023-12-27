import React from "react";

const VideoComponent = () => {
  return (
    <div className="bg-[#EDEBF2] px-20 flex py-40  ">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className="font-semibold text-5xl leading-[65px] ">
          Where young minds meet industrious retires
        </h1>
        <p className="text-gray-500 text-xl font-light leading-8">
          Retired professional have a wealth of knowledge, wisdom and skill that
          can be beneficial to current employed professional.RBR is where this
          juncture is made possible.
        </p>
        <button className="bg-[#f77d53] p-3 text-white self-start font-semibold rounded-xl">
          Start your journey
        </button>
      </div>
      <div className="w-1/2 flex items-center justify-center ">
        <div className="bg-[#cab7e4] p-2 rounded-xl">
          <video height={400} width={500} className="rounded-xl" controls>
            <source src="/assets/RBRV4WhatsApp.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
