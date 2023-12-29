"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { FaCircleUser } from "react-icons/fa6";
import PersonalInfo from "@/app/components/profile-setup-compo/PersonalInfo";
import SocialInfo from "@/app/components/profile-setup-compo/SocialInfo";
import SkillsComponent from "@/app/components/profile-setup-compo/SkillsComponent";
import Experiences from "@/app/components/profile-setup-compo/Experiences";
import Certification from "@/app/components/profile-setup-compo/Certification";

const page = () => {
  const [step, setStep] = useState(0);

  const handleStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#f2f1f3]  p-5 ml-36 pt-24">
          <div className="flex w-full ">
            <div className="w-1/2 flex items-center justify-end">
              <h1 className="text-4xl font-medium"> Profile</h1>
            </div>
            <div className="w-1/2 flex items-center justify-center flex-col gap-5">
              <FaCircleUser size={100} />
              <button className="border border-[#773fc6] text-[#773fc6] p-1 text-xs rounded">
                Add a profile picture
              </button>
            </div>
          </div>
          <div className="mx-40 mt-5 flex flex-col gap-5">
            <p className="text-gray-500 text-center">
              A photo that shows your face clearly is ideal. You know what else
              make fo a great profile picture? your smile
            </p>
            <div className="flex items-center justify-center">
              <h1 className="border-2 border-[#773fc6] self-start px-5 py-2.5 rounded-full text-2xl ">
                1
              </h1>
              <p className="text-gray-300">- - - - - -</p>
              <h1 className="border-2 self-start px-5 py-2.5 rounded-full text-2xl ">
                2
              </h1>
              <p className="text-gray-300">- - - - - -</p>

              <h1 className="border-2  self-start px-5 py-2.5 rounded-full text-2xl ">
                3
              </h1>
              <p className="text-gray-300">- - - - - -</p>

              <h1 className="border-2  self-start px-5 py-2.5 rounded-full text-2xl ">
                4
              </h1>
              <p className="text-gray-300">- - - - - -</p>

              <h1 className="border-2  self-start px-5 py-2.5 rounded-full text-2xl ">
                5
              </h1>
            </div>
            <p className="text-[#ba0001] text-center">
              All fields marked "*" are mandatory
            </p>
            {/* <PersonalInfo /> */}
            {/* <SocialInfo onclick={handleStep} /> */}
            {/* <SkillsComponent /> */}
            {/* <Experiences /> */}
            <Certification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
