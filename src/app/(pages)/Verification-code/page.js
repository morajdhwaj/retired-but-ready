"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";

const page = ({ length = 4 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

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

  console.log(otp.join());
  return (
    <div className="bg-[#ECEAF0]">
      <Navbar />
      <div className="pt-20 flex">
        <div className="w-1/2  flex justify-center items-center ">
          <img src="\assets\Group-26113.png" width={450} height={450} />
        </div>
        <div className="w-1/2 p-5 ">
          <div className="bg-white m-6 p-10 ">
            <h1 className="text-2xl font-bold">Verification Code</h1>
            <p className="mt-5 text-sm font-medium ">
              Please type the verification code sent to{" "}
              <span className="text-[#773FC6] text-sm">
                johnrahmands@mail.com
              </span>
              <br />
              or OTP sent to your mobile number.
            </p>
            <div className="flex justify-evenly mt-10">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  className=" border border-[##773FC6] w-14 h-14 rounded text-center no-scrollbar"
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>

           
            <h1 className="mt-12 flex justify-center text-sm font-medium gap-2">
              {" "}
              I didn't receive a code!{" "}
              <span className="text-[#773FC6] ">Please resend</span>
            </h1>
            <div className="bg-reg-500">
              <button className="w-full mt-12 h-10 rounded  text-white bg-[#773FC6]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;