"use client";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import PopUp from "@/app/components/PopUp";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  const router = useRouter();
  console.log(oldPassword);
  console.log(password);
  const handleModal = () => {
    setShowModal(true);
    showModal && router.push("/profile-setup");
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
      <div className="bg-[#ECEAF0] flex mt-20">
        <div className=" w-1/2 ">
          <Image
            src="/assets/Group-26113.png"
            alt="reset-password"
            width={400}
            height={500}
            className="mx-32 mt-20 "
          />
        </div>
        <div className="w-1/2 bg-white ml-20 mb-24 mr-10 mt-10">
          <div className="ml-5 mr-10 my-10">
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
