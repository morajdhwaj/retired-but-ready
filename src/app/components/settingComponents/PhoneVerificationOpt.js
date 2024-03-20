"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoReturnUpBackSharp } from "react-icons/io5";

const PhoneVerificationOpt = ({
  optionFunction,
  changeUserPhoneNumber,
  userData,
  setNewMobileNumber,
  getUserData,
}) => {
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const finalOtp = otp.join("");

  const handleInputChange = (index, value) => {
    // Only update the state if the entered value is a number
    if (/^\d+$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;

      if (value && index < length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }

      setOtp(newOtp);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.patch(
        `https://retpro.catax.me/user/verify-mobile-change?user_id=${userData?._id}&otp=${finalOtp}`
      );
      console.log(
        response.data,
        "this is response from verify-mobile-change otp"
      );
      toast.success(response.data.message);
      optionFunction("changePhone");
      setNewMobileNumber("");
      getUserData();
    } catch (error) {
      console.log(error, "this is error from verify-mobile-change otp");
      toast.error(error.response.data.detail);
    }
  };

  const reSendOtp = () => {
    setTimeout(() => {
      changeUserPhoneNumber();
    }, 60000);
  };

  return (
    <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg">
      <button
        className="flex gap-2 items-center "
        onClick={() => optionFunction("changePhone")}
      >
        <IoReturnUpBackSharp size={25} />
        <span className="text-sm">Back</span>
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium">
          We have sent to OTP to your email
        </h1>
        <div className="flex gap-10 mt-5 ">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              className=" border border-[##773FC6] w-20 h-16 rounded text-center no-scrollbar"
              type="text"
              maxLength="1"
              value={digit}
              placeholder="-"
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <button className="" onClick={reSendOtp}>
          resend otp
        </button>
        <button
          className="  border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-2 px-20 mt-5 font-semibold"
          onClick={() => verifyOtp()}
        >
          verify
        </button>
      </div>
    </div>
  );
};

export default PhoneVerificationOpt;
