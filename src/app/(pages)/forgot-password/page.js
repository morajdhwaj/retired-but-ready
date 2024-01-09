"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handlePassword = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/user/forgot-password",
      params: { user_email: email },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          router.push("/verification-code");
        } else {
          console.error("Unexpected status code:", response.status);
        }
      })
      .catch(function (error) {
        console.error("Request failed:", error.message);
        // Display an error message to the user if needed
      });
  };

  return (
    <div>
      <Navbar />
      <div className="md:flex mt-20 bg-gray-200 h-auto ">
        <div className="md:w-full lg:w-1/2  justify-center items-center flex ">
          <Image
            src="/assets/Group-26113.png"
            width={500}
            alt="forgot-image"
            height={500}
            
            
          />
        </div>
        <div className="md:w-full  justify-center flex items-center lg:w-1/2 ">
          <div className="bg-white  w-[80%] p-10">
            <h1 className="font-bold text-2xl">Forgot Password</h1>
            <h6 className="text-sm pt-2">
              Please enter your email address to reset your password
            </h6>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Johnraymonds@gmail.com"
              className="border border-gray-200 rounded-lg py-4 mt-10 p-3 w-full"
            />
            <button
              onClick={handlePassword}
              className="bg-[#773FC6]  text-white py-3 rounded-lg mt-8 w-full"
            >
              Send Verification Code
            </button>
            <div className="flex items-center justify-center mt-10 ">
              <div className="bg-gray-300 h-[1px] w-[200px]" />
              <h1 className="text-xl font-bold ml-3 mr-3">or</h1>
              <div className="bg-gray-300 h-[1px] w-[200px] " />
            </div>
            <div className=" mt-3 ">
              <h1 className="text-xl">Enter your mobile no.</h1>
             <div className="   h-full flex justify-between gap-4 ">
                <input
                  placeholder="+91 90805 90666"
                  className="border border-gray-200 rounded-lg w-1/2 p-3 "
                />
                <button className="bg-[#773FC6] rounded-lg  text-white w-1/2 p-3 ">
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
