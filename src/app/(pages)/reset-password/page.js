"use client";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import PopUp from "@/app/components/PopUp";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
 import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
   const { userIdFromContext } = useContext(UserIdContext);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserId(userIdFromContext);
  }, []);

  const router = useRouter();
  console.log(oldPassword);
  console.log(password);

  const handleModal = () => {
    setShowModal(true);
    showModal && router.push("/call-me-back");
  };

  const handlePassword = () => {
    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/user/reset-password-old",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: { old_password: oldPassword, new_password: password },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        handleModal();
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Something wrong");
      });
  };

  console.log(userId);
  return (
    <div>
      <Navbar />
      <div className="md:flex  bg-[#ECEAF0]  mt-20">
        <div className="md:w-full lg:w-1/2  flex justify-center items-center ">
          <Image
            src="/assets/Group-26113.png"
            alt="reset-password"
            width={400}
            height={500}
          />
        </div>
        <div className="lg:w-1/2 bg-white lg:mr-20 p-10 mb-10">
          <h1 className="text-3xl font-medium ">Reset Password</h1>
          <h6 className="text-sm mt-3  ">
            Do ensure your new password is atleast 6 character long
          </h6>
          <h1 className="mt-8 text-gray-500 ">Old Password</h1>
          <input
            type="text"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className=" w-full h-14 rounded border border-gray-200 "
          />

          <h1 className="mt-4 text-gray-500">New Password</h1>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 rounded w-full border border-gray-200"
          />
          <h1 className="mt-4 text-gray-500">Confirm Password</h1>
          <input className="h-14 rounded w-full border border-gray-200"></input>
          <button
            onClick={handlePassword}
            className="bg-[#773FC6] mt-6 w-full h-12 rounded text-white font-thin"
          >
            Reset Password
          </button>
        </div>
        {showModal && (
          <PopUp
            onClick={handleModal}
            title="Password Reset Successfully"
            action="Log in"
            message=" Congratulation"
          />
        )}
      </div>
    </div>
  );
};

export default page;
