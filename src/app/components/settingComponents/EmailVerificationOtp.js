"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { IoReturnUpBackSharp } from "react-icons/io5";

const EmailVerificationOtp = ({
  optionFunction,
  userData,
  setEmail,
  getEmail,
  changeUserEmail,
  getUserData,
}) => {
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const finalOtp = otp.join("");

  const verifyOtp = async () => {
    try {
      const res = await axios.patch(
        `https://retpro.catax.me/user/verify-email-change?user_id=${userData?._id}&otp=${finalOtp}`
      );
      console.log(res.data);
      toast.success("OTP verified successfully");
      optionFunction("changeEmail");
      setEmail("");
      getUserData();
    } catch (error) {
      console.log(error, "this is an error from verify-email-change otp");
      toast.error(error.response.data.detail);
    }
  };

  const resendOtp = async () => {
    // setTimeout(() => {
    changeUserEmail();
    // }, 60000);
  };
  // -----------------------------------------------------------------------

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

  // -----------------------------------------------------------------------

  console.log(getEmail, "WWWWWWWWWWWWWWWWWWWWWWWWWW");
  return (
    <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg">
      <button
        className="flex gap-2 items-center "
        onClick={() => optionFunction("changeEmail")}
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
        <button className="text-blue-800 mt-1" onClick={resendOtp}>
          Resend OTP
        </button>
        <button
          className="  border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-2 px-20 mt-5 font-semibold"
          onClick={() => verifyOtp()}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationOtp;
