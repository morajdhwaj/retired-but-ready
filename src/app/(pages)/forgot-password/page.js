"use client";
import Navbar from "@/app/components/Navbar";
import React, { useContext, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleEmail = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/user/forgot-password",
      params: { user_email: email },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        router.push(`/forgot-password-otp/${response?.data?.user_id}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(email);

  return (
    <div>
      <Navbar />
      <div className=" bg-gray-200 min-h-[100vh] md:flex">
        <div className=" w-full md:w-1/2  flex items-center justify-center">
          <Image
            src="/assets/Group-26113.png"
            width={400}
            alt="forgot-image"
            height={400}
            className="p-5 lg:p-0"
          />
        </div>
        <div className="w-full md:w-1/2  flex justify-center md:items-center">
          <div className="bg-white  rounded-xl w-[80%] h-[50%] p-10">
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
              autoComplete="email"
            />
            <button
              onClick={handleEmail}
              className="bg-[#773FC6]  text-white py-3 rounded-lg mt-8 w-full"
            >
              Send Verification Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
