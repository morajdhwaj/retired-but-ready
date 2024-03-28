"use Client";

import React, { useState } from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const ChangeEmail = ({
  optionFunction,
  showOption,
  userData,
  setEmail,
  getEmail,
  changeUserEmail,
}) => {
  // const changeUserEmail = async () => {
  //   if (getEmail) {
  //     try {
  //       const response = await axios.patch(
  //         `https://retpro.catax.me/user/change-email?user_id=${userData?._id}&new_email=${getEmail}`
  //       );
  //       console.log(response.data, "this is response form change email");
  //       toast.success("OTP sent successfully");
  //       optionFunction("emailOtp");
  //     } catch (error) {
  //       console.log(error, "this is error form change email");
  //     }
  //   }
  // };

  console.log(userData, "this is user data BBBBBBBBBBBBBBBB");

  return (
    <>
      <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg ">
        <button
          className="flex gap-2 items-center "
          onClick={() => optionFunction("security")}
        >
          <IoReturnUpBackSharp size={25} />
          <span className="text-sm">Back</span>
        </button>
        <div className="pl-8 mt-5">
          <div className="">
            <h1 className="text-lg font-semibold">Email Address</h1>
            {/* <p className="text-md text-gray-400">Email you have added</p> */}
          </div>
          <div className="mt-3">
            <p className="text-md text-gray-400">Primary Email</p>
            <p className="text-sm text-blue-600 ">{userData?.user_email}</p>
            <button
              className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-5 `}
              onClick={() => optionFunction("addNewEmail")}
            >
              Change Email
            </button>
          </div>
          <div className="mt-10">
            <input
              type="email"
              placeholder="Enter new email"
              value={getEmail}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-lg w-64 p-2 border-2 ${
                showOption == "addNewEmail" ? "block" : "hidden"
              } `}
            />
            <button
              className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-3 ${
                showOption == "addNewEmail" ? "block" : "hidden"
              }`}
              onClick={() => changeUserEmail()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeEmail;
