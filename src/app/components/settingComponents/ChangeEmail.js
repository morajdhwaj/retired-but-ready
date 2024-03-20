"use Client";

import React, { useContext, useEffect, useState } from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { UserIdContext } from "@/context/UserIdContext";

const ChangeEmail = ({ optionFunction, showOption }) => {
  const { userIdFromContext } = useContext(UserIdContext);

  // const [userId, setUserId] = useState("");
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   setUserId(userIdFromContext);
  // }, [userIdFromContext]);

  // useEffect(() => {
  //   if (userId) {
  //     console.log(userId, "this is user id ");
  //     getUserData();
  //   }
  // }, [userId]);

  // const getUserData = async () => {
  //   console.log(userId, "this is user id ");
  //   try {
  //     const response = await axios.get(
  //       `https://retpro.catax.me/user/profile/${userId}`
  //     );
  //     console.log(response.data, "this is response data");
  //     setUserData(response.data);
  //   } catch (error) {
  //     console.log(error, "this is error from get user data");
  //   }
  // };

  // const handleEmail = () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://retpro.catax.me/user/forgot-password",
  //     params: { user_email: userData?.user_email },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       toast.success(response?.data?.message);
  //       optionFunction("emailOtp");
  //       // router.push(`/forgot-password-otp/${response?.data?.user_id}`);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  // const userShowData = () => {
  //   console.log(userData, "this is user data from email");
  // };

  return (
    <>
      <div className="shadow-xl p-4 pb-10 min-h-[30vh] bg-white rounded-lg ">
        <button className="flex gap-2 items-center ">
          <IoReturnUpBackSharp size={25} />
          <span className="text-sm">Back</span>
        </button>
        <div className="pl-8 mt-5">
          <div className="">
            <h1 className="text-lg font-semibold">Email Address</h1>
            <p className="text-md">Email you have added</p>
          </div>
          <div className="mt-3">
            <p className="text-md">Primary Email</p>
            <p className="text-sm">xyz@gmail.com</p>
            <button
              className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-5 ${
                showOption == "addNewEmail" ? "hidden" : "block"
              }`}
              onClick={() => optionFunction("emailOtp")}
            >
              Add Email Address
            </button>
          </div>
          <div className="mt-10">
            <input
              type="text"
              className={`rounded-lg w-64 p-2 border-2 ${
                showOption == "addNewEmail" ? "block" : "hidden"
              } `}
            />
            <button
              className={`border-2 hover:border-[#db9cd9] border-[#b54eb1] rounded-lg py-1 px-5 mt-3 ${
                showOption == "addNewEmail" ? "block" : "hidden"
              }`}
              onClick={() => optionFunction("security")}
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
