"use client";

import React, { useContext, useEffect, useState } from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";

import toast from "react-hot-toast";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";

const ChangePassword = ({ optionFunction }) => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  useEffect(() => {
    if (userIdFromContext) {
      setUserId(userIdFromContext);
    }
  }, [userIdFromContext]);

  const changePassword = async () => {
    if (newPassword === conformPassword && oldPassword > 0 && newPassword > 0) {
      const payload = {
        // method: "PATCH",
        // url: `https://retpro.catax.me/user/reset-password-old?user_id=${userId}`,
        old_password: oldPassword,
        new_password: newPassword,
        // headers: {
        //   "Content-Type": "application/json",
        // },
      };

      try {
        const response = await axios.patch(
          `https://retpro.catax.me/user/reset-password-old?user_id=${userId}`,
          payload
        );
        console.log(response.data);
        setOldPassword("");
        setNewPassword("");
        setConformPassword("");
        toast.success(response?.data?.message);
        optionFunction("security");
      } catch (error) {
        console.log(error, "this is error from change password");
        toast.error(error?.response?.data?.detail);
      }
    } else {
      toast.error("New password and conform password are not equal");
    }
  };

  console.log(
    oldPassword,
    newPassword,
    conformPassword,
    userId,
    "this is console log message"
  );

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
            <h1 className="text-lg font-semibold">Change Password</h1>
            <p className="text-md">Create a new password</p>
          </div>

          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="">
              Type your current password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className={`rounded-lg w-72 p-1 border-2 mt-2 `}
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="">
              Type your new password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`rounded-lg w-72 p-1 border-2 mt-2 `}
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="">
              Conform new password
            </label>
            <input
              type="password"
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
              className={`rounded-lg w-72 p-1 border-2 mt-2 `}
            />
          </div>
          <button
            className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-7 `}
            onClick={() => changePassword()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
