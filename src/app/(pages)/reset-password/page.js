import Navbar from "@/app/components/Navbar";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#ECEAF0] flex mt-20">
        <div className=" w-1/2">
          <Image
            src="/assets/Group-26113.png"
            width={400}
            height={500}
            className="mx-32 mt-20 "
            alt="reset-password"
          />
        </div>
        <div className="w-1/2 bg-white ml-20 mb-24 mr-10 mt-10">
          <div className="ml-5 mr-10 my-10">
            <h1 className="text-3xl font-medium ">Reset Password</h1>
            <h6 className="text-sm mt-3  ">
              Do ensure your new password is atleast 6 character long
            </h6>
            <h1 className="mt-8 text-gray-500 ">Old Password</h1>
            <input className=" w-full h-14 rounded border border-gray-200 "></input>
            <h1 className="mt-4 text-gray-500">New Password</h1>
            <input className="h-14 rounded w-full border border-gray-200"></input>
            <h1 className="mt-4 text-gray-500">Confirm Password</h1>
            <input className="h-14 rounded w-full border border-gray-200"></input>
            <button className="bg-[#773FC6] mt-6 w-full h-12 rounded text-white font-thin">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
