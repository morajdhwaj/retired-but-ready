"use client";

import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";

import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UserIdContext } from "@/context/UserIdContext";

const page = ({ length = 4 }) => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [otp, setOtp] = useState(Array(length).fill(""));
  const finalOtp = otp.join("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserId(userIdFromContext);
    getUserData();
  }, [userId]);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data, "hello im sachin");
        setUserData(response?.data);
        // setCompanyName(response?.data?.work_history[0].company_name);
        // setTitle(response?.data?.work_history[0].title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const router = useRouter();
  const handleVerification = () => {
    if (finalOtp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }

    const options = {
      method: "POST",
      url: "https://retpro.catax.me/user/verify-otp",
      params: { user_id: userId, otp: +finalOtp },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response.data.message);
        router.push("/profile-setup");
      })
      .catch(function (error) {
        console.log(error.data);
        toast.error("Incorrect OTP");
        setOtp(Array(length).fill(""));
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

  const handleResendOtp = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/user/resend-email-otp",
      params: { user_email: userData?.user_email },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  return (
    <div className="bg-[#ECEAF0] h-[100vh]">
      <Navbar />
      <div className="pt-20 md:flex lg:flex">
        <div className="md:w-[100%] lg:w-1/2  flex justify-center items-center ">
          <Image src="/assets/Group-26113.png" width={450} height={450} />
        </div>
        <div className="md:w-[100%] lg:w-1/2 p-5 ">
          <div className="bg-white m-6 p-10 ">
            <h1 className="text-2xl font-bold">Verification Code</h1>
            <p className="mt-5 text-sm font-medium ">
              Please type the verification code sent to{" "}
              <span className="text-[#773FC6] text-sm">
                {userData?.user_email}
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
                  maxLength="1"
                  placeholder="-"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>

            <h1 className="mt-12 flex justify-center text-sm font-medium gap-2">
              I did not receive a code!
              <button onClick={handleResendOtp} className="text-[#773FC6] ">
                Please resend
              </button>
            </h1>
            <div className="bg-reg-500">
              <button
                className="w-full mt-12 h-10 rounded  text-white bg-[#773FC6]"
                onClick={handleVerification}
              >
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
