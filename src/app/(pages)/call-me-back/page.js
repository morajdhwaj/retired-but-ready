import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" bg-[#EDEBF2] flex gap-2 ">
      <div className="pt-20   bg-[#EDEBF2]  w-[50%]">
        <Image
          src="/assets/image-144.png"
          alt="Call-me-back"
          srcset=""
          width={500}
          height={400}
          className="mt-32 mx-40 w-[450px]"
        />
      </div>

      <div className=" border-2 mt-40 w-[500px] bg-white p-5 h-[400px] mb-44 ">
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

      <Navbar />
    </div>
  );
};

export default page;
