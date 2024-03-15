import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CheckBox = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-8 sm:mx-20 md:mx-36 lg:mx-60 xl:mx-80 mt-5 sm:mt-0 ">
      <div>
        <h1 className=" text-2xl sm:text-3xl md:text-5xl text-center md:leading-[55px] font-semibold mb-2  lg:leading-[60px]">
          Creating impact for retired and working professionals
        </h1>
      </div>
      <div className="bg-[#ededf6] md:w-[60vh] py-10">
        <div className="bg-[#773fc6] flex items-center justify-center text-white font-bold text-2xl py-5 rounded-t-2xl">
          <h2>Why RetPro</h2>
        </div>
        <div className="flex flex-col gap-5 font-light">
          <div className="flex items-center ml-5  mt-5 gap-3">
            <FaCircleCheck color="#773fc6" size={20} />
            <h2>work from the comfort of your home</h2>
          </div>
          <div className="flex items-center ml-5 gap-3">
            <FaCircleCheck color="#773fc6" size={20} />
            <h2>offer vertical/in-person mentoring & guidance</h2>
          </div>
          <div className="flex items-center ml-5 gap-3">
            <FaCircleCheck color="#773fc6" size={20} />
            <h2>connect & socialize with other RetPros & junPros</h2>
          </div>
          <div className="flex items-center ml-5 gap-3">
            <FaCircleCheck color="#773fc6" size={20} />
            <h2>enjoy superior quality of life post retirement</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
