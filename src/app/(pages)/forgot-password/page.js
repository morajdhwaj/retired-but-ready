import Navbar from "@/app/components/Navbar";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 flex h-auto">
        <div className="w-2/5 mt-28">
          <Image
            src="/assets/Group-26113.png"
            width={700}
            height={200}
            className=" pt-10 pl-32 mt-10 ml-10"
          />
        </div>
        <div className="w-3/5 mt-24  ">
          <div className="bg-white  pb-20 p-10 mr-20 ml-64 mt-10 mb-20">
            <h1 className="font-bold text-2xl">Forgot Password</h1>
            <h6 className="text-sm pt-2">
              Please enter your email address to reset your password
            </h6>
            <input
              placeholder="Johnraymonds@gmail.com"
              className="border border-gray-200 rounded-lg py-4 mt-10 w-full p-3 "
            />
            <button className="bg-[#773FC6] text-white px-28 py-2 rounded-lg mt-8 w-full">
              Send Verification Code
            </button>
            <div className="flex items-center justify-center mt-10 ">
              <div className="bg-gray-300 h-[1px] w-[200px]" />
              <h1 className="text-xl font-bold ml-3 mr-3">or</h1>
              <div className="bg-gray-300 h-[1px] w-[200px] " />
            </div>
            <div className=" mt-3">
              <h1 className="text-xl">Enter your mobile no.</h1>
              <div className=" flex  ">
                <input
                  placeholder="+91 9080590666"
                  className="border border-gray-200 rounded-lg px-55 py-3 mt-2 text-xl"
                />
                <button className="bg-[#773FC6] rounded-lg  text-white mt-2 ml-3 w-full">
                  Send OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
