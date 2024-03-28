"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import { IoIosLock } from "react-icons/io";
import { UserIdContext } from "@/context/UserIdContext";
import ChangeEmail from "@/app/components/settingComponents/ChangeEmail";
import ChangePhoneNumber from "@/app/components/settingComponents/ChangePhoneNumber";
import ChangePassword from "@/app/components/settingComponents/ChangePassword";
import EmailVerificationOtp from "@/app/components/settingComponents/EmailVerificationOtp";
import PhoneVerificationOpt from "@/app/components/settingComponents/PhoneVerificationOpt";
import axios from "axios";
import toast from "react-hot-toast";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [userAllData, setUserAllData] = useState([]);
  const [showSettingOption, setShowSettingOption] = useState("profile");
  const [newEmail, setNewEmail] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");

  const newEmailSet = (email) => {
    setNewEmail(email);
  };

  const setShowOptionValue = (value) => {
    setShowSettingOption(value);
  };

  useEffect(() => {
    if (userIdFromContext) {
      setUserId(userIdFromContext);
    }
  }, [userIdFromContext]);

  useEffect(() => {
    if (userId) {
      console.log(userId, "this is my user id");
      getUserData();
    }
  }, [userId]);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/user/profile/${userId}`
      );
      console.log(response.data, "this is response from get user data");
      setUserAllData(response.data);
    } catch (error) {
      console.log(error, "this is form get user data");
    }
  };

  // CHANGE EMAIL FUNCTION ----------------------------------------------------------------

  const changeUserEmail = async () => {
    if (newEmail) {
      try {
        const response = await axios.patch(
          `https://retpro.catax.me/user/change-email?user_id=${userId}&new_email=${newEmail}`
        );
        console.log(response.data, "this is response form change email");
        toast.success("OTP sent successfully");
        setShowSettingOption("emailOtp");
        // setNewEmail("");
      } catch (error) {
        console.log(error, "this is error form change email");
        toast.error(error.response.data.detail);
      }
    }
  };

  // CHANGE PHONE NUMBER FUNCTION ----------------------------------------------------------------

  const changeUserPhoneNumber = async () => {
    if (newMobileNumber) {
      try {
        const res = await axios.patch(
          `https://retpro.catax.me/user/change-mobile?user_id=${userId}&new_mobile=${newMobileNumber}`
        );
        console.log(res.data, "this is response from change mobile number");
        toast.success("OTP sent successfully");
        setShowSettingOption("phoneOtp");
        setNewMobileNumber("");
      } catch (error) {
        console.log(error, "this is error from change mobile number");
        toast.error(error.response.data.detail);
      }
    }
  };

  console.log(
    userId,

    "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  );

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex ">
        <div className="hidden lg:flex mt-96 ">
          <Sidebar />
        </div>
        <div className="w-full  p-5 lg:ml-52 pt-[120px] h-[100vh]">
          <div className=" w-full  flex gap-6">
            <div className="flex flex-col gap-6 bg-white  rounded-lg shadow-xl p-4 pb-20 w-60 ">
              <div className="flex  gap-4 ">
                <div className="flex items-center justify-center gap-2">
                  {userAllData?.user_image ? (
                    <Image
                      alt="rtr-pic"
                      src={userAllData?.user_image}
                      height={40}
                      width={40}
                      className="w-16 h-16 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle color="gray" size={40} />
                  )}
                  <p className="text-lg font-medium">Settings</p>
                </div>
              </div>
              <div className="pl-2 flex flex-col gap-6 ">
                <button
                  className={`flex gap-4 ${
                    showSettingOption == "profile" ? " text-[#9A3D97]" : ""
                  }`}
                  onClick={() => setShowOptionValue("profile")}
                >
                  <FaUserAlt size={20} />
                  <h2 className="">Profile</h2>
                </button>
                <button
                  className={`flex gap-4   ${
                    showSettingOption == "security" ? " text-[#9A3D97]" : ""
                  } `}
                  onClick={() => setShowOptionValue("security")}
                >
                  <IoIosLock size={20} />
                  <h2 className="">Security</h2>
                </button>
                <button
                  className={`flex gap-4  ${
                    showSettingOption == "dataPrivacy" ? " text-[#9A3D97]" : ""
                  }`}
                  onClick={() => setShowOptionValue("dataPrivacy")}
                >
                  <FiShield size={20} />
                  <h2 className="">Data Privacy</h2>
                </button>
              </div>
            </div>
            <div className="w-[75%]">
              {showSettingOption == "profile" && (
                <div className="shadow-xl p-4 h-[30vh] bg-white rounded-lg ">
                  <h1 className="text-2xl font-semibold text-[#773FC6] mb-2">
                    Profile Information
                  </h1>
                  <Link href={`/profile/${userIdFromContext}`}>
                    <div className="flex justify-between">
                      {/* <p className="w-[90%]">{userAllData?.profile_summary}</p> */}

                      <p className="w-[90%] text-sm font-medium ">
                        Name, Location, and Description.
                      </p>

                      <FaArrowRight size={20} />
                    </div>
                  </Link>
                </div>
              )}
              {showSettingOption == "security" && (
                <div className="shadow-xl p-4 min-h-[30vh] bg-white rounded-lg  ">
                  <h1 className="text-2xl font-semibold text-[#773FC6] mb-2">
                    Account Access
                  </h1>
                  <div className="flex justify-between py-4 border-b-2">
                    <p className="min-w-[90%] flex justify-between">
                      <span className="">Email Address</span>
                      <span className="">{userAllData?.user_email}</span>
                    </p>
                    <button onClick={() => setShowOptionValue("changeEmail")}>
                      <FaArrowRight size={20} />
                    </button>
                  </div>
                  <div className="flex justify-between py-4 border-b-2">
                    <p className="min-w-[90%]">Phone Number</p>
                    <button onClick={() => setShowOptionValue("changePhone")}>
                      <FaArrowRight size={20} />
                    </button>
                  </div>
                  <div className="flex justify-between py-4 ">
                    <p className="min-w-[90%]">Change Password</p>
                    <button
                      onClick={() => setShowOptionValue("changePassword")}
                    >
                      <FaArrowRight size={20} />
                    </button>
                  </div>
                </div>
              )}
              {showSettingOption == "dataPrivacy" && (
                <div className="shadow-xl p-4 min-h-[30vh] bg-white rounded-lg pb-10 ">
                  <h1 className="text-2xl font-semibold text-[#773FC6] mb-5">
                    Privacy Details
                  </h1>
                  <p className="text-sm font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem tempora dolorum repellendus eveniet provident
                    natus excepturi rem, reiciendis et atque ex expedita
                    doloremque, omnis quae fuga unde facilis eaque blanditiis,
                    commodi minima incidunt? Laudantium quasi soluta officiis ab
                    laborum consequatur non voluptatibus voluptatum, laboriosam
                    fugit. Facilis ducimus praesentium voluptas aspernatur?
                  </p>
                  <p className="mt-3 text-sm font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem tempora dolorum repellendus eveniet provident
                    natus excepturi rem, reiciendis et atque ex expedita
                    doloremque, omnis quae fuga unde facilis eaque blanditiis,
                    commodi minima incidunt? Laudantium quasi soluta officiis ab
                    laborum consequatur non voluptatibus voluptatum, laboriosam
                    fugit. Facilis ducimus praesentium voluptas aspernatur?
                  </p>
                  <p className="mt-3 text-sm font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem tempora dolorum repellendus eveniet provident
                    natus excepturi rem, reiciendis et atque ex expedita
                    doloremque, omnis quae fuga unde facilis eaque blanditiis,
                    commodi minima incidunt? Laudantium quasi soluta officiis ab
                    laborum consequatur non voluptatibus voluptatum, laboriosam
                    fugit. Facilis ducimus praesentium voluptas aspernatur?
                  </p>
                </div>
              )}
              {(showSettingOption == "changeEmail" ||
                showSettingOption == "addNewEmail") && (
                <ChangeEmail
                  optionFunction={setShowOptionValue}
                  setEmail={newEmailSet}
                  getEmail={newEmail}
                  showOption={showSettingOption}
                  userData={userAllData}
                  changeUserEmail={changeUserEmail}
                />
              )}
              {(showSettingOption == "changePhone" ||
                showSettingOption == "addPhone") && (
                <ChangePhoneNumber
                  optionFunction={setShowOptionValue}
                  showOption={showSettingOption}
                  newMobileNumber={newMobileNumber}
                  setNewMobileNumber={setNewMobileNumber}
                  changeUserPhoneNumber={changeUserPhoneNumber}
                  userData={userAllData}
                />
              )}
              {showSettingOption == "changePassword" && (
                <ChangePassword optionFunction={setShowOptionValue} />
              )}
              {showSettingOption == "emailOtp" && (
                <EmailVerificationOtp
                  optionFunction={setShowOptionValue}
                  userData={userAllData}
                  getEmail={newEmail}
                  setEmail={newEmailSet}
                  changeUserEmail={changeUserEmail}
                  getUserData={getUserData}
                />
              )}
              {showSettingOption == "phoneOtp" && (
                <PhoneVerificationOpt
                  optionFunction={setShowOptionValue}
                  changeUserPhoneNumber={changeUserPhoneNumber}
                  userData={userAllData}
                  setNewMobileNumber={setNewMobileNumber}
                  getUserData={getUserData}
                />
              )}
              {showSettingOption == "passwordOtp" && (
                <PasswordVerificationOtp optionFunction={setShowOptionValue} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
