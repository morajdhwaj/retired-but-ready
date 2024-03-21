"use client";

import React, { useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

import { UserIdContext } from "@/context/UserIdContext";
import { IoReturnUpBackSharp } from "react-icons/io5";

const EmailVerificationOtp = ({ optionFunction }) => {
  const { userIdFromContext } = useContext(UserIdContext);
  const length = 4;

  return (
    <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg">
      <button className="flex gap-2 items-center ">
        <IoReturnUpBackSharp size={25} />
        <span className="text-sm">Back</span>
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium">
          We have sent to OTP to your email
        </h1>
        <div className="flex gap-10 my-7">
          <input
            type="number"
            className=" h-16 w-16 rounded-lg border-2 border-gray-500"
          />
          <input
            type="number"
            className=" h-16 w-16 rounded-lg border-2 border-gray-500"
          />
          <input
            type="number"
            className=" h-16 w-16 rounded-lg border-2 border-gray-500"
          />
          <input
            type="number"
            className=" h-16 w-16 rounded-lg border-2 border-gray-500"
          />
        </div>
        <button
          className="  border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-2 px-20 mt-5 font-semibold"
          onClick={() => optionFunction("addNewEmail")}
        >
          verify
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationOtp;
