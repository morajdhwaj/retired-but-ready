"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";

import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = ({ length = 4 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [password, setPassword] = useState("");

  const finalOtp = otp.join("");

  const router = useRouter();

  const handleVerification = () => {
    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/user/reset-password-otp",
      params: { user_id: "6593af5ef4f7ce4f923051f3" },
      headers: { "Content-Type": "application/json" },
      data: { otp: finalOtp, new_password: password },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        router.push("/");
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error.response.data.detail);
      });
  };

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

  console.log(finalOtp);
  console.log(password);
  return (
    <div className="bg-[#ECEAF0]">
      <div className="pt-20 md:flex lg:flex justify-center items-center">
        <div className="bg-white m-6 p-10 ">
          <h1 className="text-2xl font-bold"> Email Verification Code</h1>
          <p className="mt-5 text-sm font-medium ">
            Please type the verification code sent to{" "}
            <span className="text-[#773FC6] text-sm">
              johnrahmands@mail.com
            </span>
          </p>

          <h1 className="mt-4 text-gray-500"> OTP</h1>

          <div className="flex justify-between ">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                className=" border border-[##773FC6] w-14 h-14 rounded text-center no-scrollbar"
                type="text"
                maxLength="1"
                value={digit}
                placeholder="-"
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <div className="bg-reg-500">
            <button
              className="w-full mt-12 h-10 rounded  text-white bg-[#773FC6]"
              // onClick={}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
