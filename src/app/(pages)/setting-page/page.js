"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
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

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userAllData, setUserAllData] = useState([]);
  const [showSettingOption, setShowSettingOption] = useState("security");
  const [showSecurityOption, setShowSecurityOption] = useState("");
  console.log(showSettingOption, "AAAAAAAAAAAAAAAAAAAAAAAAAAAA");

  const setShowOptionValue = (value) => {
    setShowSettingOption(value);
  };

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex ">
        <div className="hidden lg:flex mt-96 ">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3  p-5 lg:ml-52 pt-24 h-[100vh]">
          <div className=" w-full  flex gap-6">
            <div className="flex flex-col gap-6 bg-white  rounded-lg shadow-xl p-4 pb-20 w-[15%] ">
              <div className="flex  gap-4 ">
                <div className="flex items-center justify-center gap-2">
                  {userAllData?.user_image ? (
                    <Image
                      alt="rtr-pic"
                      src={userAllData?.user_image}
                      height={40}
                      width={40}
                      className="w-20 h-20 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle color="gray" size={40} />
                  )}
                  <p className="text-lg font-medium">Setting</p>
                </div>
              </div>
              <div className="pl-2 flex flex-col gap-6 ">
                <button
                  className="flex gap-4 text-[#9A3D97]"
                  onClick={() => setShowOptionValue("profile")}
                >
                  <FaUserAlt size={20} />
                  <h2 className="">Profile</h2>
                </button>
                <button
                  className="flex gap-4 text-[#9A3D97]"
                  onClick={() => setShowOptionValue("security")}
                >
                  <IoIosLock size={20} />
                  <h2 className="">Security</h2>
                </button>
                <button
                  className="flex gap-4 text-[#9A3D97]"
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
                  <div className="flex justify-between">
                    <p className="w-[90%]">
                      <span></span>
                      <span></span>
                      <span></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, ullam quos. Sit nulla rerum in suscipit maxime totam
                      a eum.
                    </p>
                    <Link href={`/profile/${userIdFromContext}`}>
                      <FaArrowRight size={20} />
                    </Link>
                  </div>
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
                      <span className="">xyz@gmail.com</span>
                    </p>
                    <button onClick={() => setShowOptionValue("changeEmail")}>
                      <FaArrowRight size={20} />
                    </button>
                  </div>
                  <div className="flex justify-between py-4 border-b-2">
                    <p className="min-w-[90%]">Number</p>
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
                <div className="shadow-xl p-4 min-h-[30vh] bg-white rounded-lg  ">
                  <h1 className="text-2xl font-semibold text-[#773FC6] mb-2">
                    Data Privacy
                  </h1>
                </div>
              )}
              {(showSettingOption == "changeEmail" ||
                showSettingOption == "addNewEmail") && (
                <ChangeEmail
                  optionFunction={setShowOptionValue}
                  showOption={showSettingOption}
                />
              )}
              {(showSettingOption == "changePhone" ||
                showSettingOption == "addPhone") && (
                <ChangePhoneNumber
                  optionFunction={setShowOptionValue}
                  showOption={showSettingOption}
                />
              )}
              {showSettingOption == "changePassword" && (
                <ChangePassword optionFunction={setShowOptionValue} />
              )}
              {showSettingOption == "emailOtp" && (
                <EmailVerificationOtp optionFunction={setShowOptionValue} />
              )}
              {showSettingOption == "phoneOtp" && (
                <PhoneVerificationOpt optionFunction={setShowOptionValue} />
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
