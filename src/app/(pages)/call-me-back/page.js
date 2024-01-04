import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" bg-[#EDEBF2] lg:flex mt-20 lg:mt-0 ">
      <div className=" mx-5 flex justify-center items-center bg-[#EDEBF2]  lg:w-[50%]">
        <Image
          src="/assets/image-144.png"
          alt="Call-me-back"
          srcset=""
          width={500}
          height={500}
          className="  "
        />
      </div>
      {/* call me back */}
      <div className="flex justify-center items-center mx-5    ">
        <div className=" border-2 mt-16 md:mt-16 lg:mt-40 w-[500px] bg-white p-5  lg:mb-44  ">
          <h1 className="font-bold text-2xl">Call me back!</h1>
          <div className="mt-10 mb-10">
            <h1 className="text-lg mt-5 text-[#808184] font-semibold">Name</h1>
            <input
              type="text"
              className="bg-white border border-gray-300 h-10   rounded w-full"
            />
            <h1 className="text-lg mt-5  text-[#808184] font-semibold ">
              Mobile Number
            </h1>
            <input
              type="Number"
              className="bg-white border border-gray-300 h-10   rounded w-full overscroll-none 
            "
            />

            <button className="bg-[#773FC6] text-white border border-gray-300 h-10   rounded w-full mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
