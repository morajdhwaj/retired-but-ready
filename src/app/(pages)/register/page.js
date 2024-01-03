"use client";
import Navbar from "@/app/components/Navbar";
import PopUp from "@/app/components/PopUp";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleModal = () => {
    setShowModal(true);
    showModal && router.push("/login");
  };

  const handleRegister = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/user/register",
      headers: { "Content-Type": "application/json" },
      data: {
        user_mobile: mobile,
        user_email: email,
        user_fullname: userName,
        user_display_name: displayName,
        user_password: password,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response.data.message);
        handleModal();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error.response.data.detail);
      });
  };

  console.log(mobile);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 flex pt-16 h-[100vh] ">
        <div className="w-[54%]  flex flex-col  items-center mt-16">
          <h1 className="text-2xl font-bold hover:border-b-2 hover:border-blue-500 ">
            Create an account
          </h1>
          <br />
          <div className="border-2 border-gray-300 w-[80%] rounded-md  hover:border-blue-500 hover:shadow-sm p-4 ">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="full name*"
              className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 hover:border-blue-500"
            />
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="display name"
              className="mb-4 bg-gray-200  border-gray-300 border-2  text-md rounded-lg block w-full h-10 p-1.5 hover:border-blue-500 "
            />
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="mobile number"
              className="mb-4 bg-gray-200 border-gray-300 border-2  text-md rounded-lg block w-full  h-10 p-1.5 hover:border-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="mb-4 bg-gray-200  border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 hover:border-blue-500"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5  hover:border-blue-500 hover:rounded-none "
            />
            <button
              onClick={handleRegister}
              className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-lg border hover:border-blue-500 hover:rounded-lg text-white  text-xl"
            >
              Create account
            </button>
          </div>
        </div>

        <div className=" w-[46%]  flex flex-col  ">
          <div className="mt-1 p-2">
         
          <Image src="/assets/Group-626217.png" width={500} height={500} /> 
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[100px] bg-gray-400 " />
            <h3 className="ml-2 mr-2">or login through</h3>
            <div className="h-[1px] w-[100px] bg-gray-400" />
          </div>
          <div className=" w-75% flex justify-center items-center mb-5 mt-2 ">
            <div className="flex flex-col gap-5  ">
              <button className="w-28 flex justify-evenly text-xs font-semibold items-center border rounded-lg border-[#773FC6] h-10">
                <Image
            src="/assets/GOOGLE.png"
                  alt="google"
                  width={20}
                  height={20}
                />
                GOOGLE
              </button>
              <button className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10">
                <Image
                  src="/assets/mobile-phone-svgrepo-com-1.png "
                  alt="mobile"
                  width={20}
                  height={20}
                />
                MOBILE
              </button>
            </div>
            <div className="flex flex-col gap-5 mx-4">
              <button className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10">
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                FACEBOOK
              </button>

              <button className="w-28 flex font-semibold text-xs justify-evenly items-center border rounded-lg border-[#773FC6]  h-10 ">
                <Image
                  src="/assets/EMAIL.png"
                  alt="email"
                  width={20}
                  height={20}
                />
                EMAIL
              </button>
            </div> 
          </div>
        </div>
        {showModal && (
          <PopUp
            onClick={handleModal}
            title="Account created successfully"
            action="Login"
            message=" You have just begun your journey to greatness"
          />
        )}
      </div>
    </div>
  );
};

export default page;
