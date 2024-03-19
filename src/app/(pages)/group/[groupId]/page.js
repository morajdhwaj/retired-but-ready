"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import Inputpost from "@/app/components/one-group-compo/Inputpost";
import Postadd from "@/app/components/one-group-compo/Postadd";
import Groupowner from "@/app/components/one-group-compo/Groupowner";
import Groupsuggestion from "@/app/components/one-group-compo/Groupsuggestion";
import Inviteconnection from "@/app/components/one-group-compo/Inviteconnection";
const page = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="mt-20 bg-[#949494] flex justify-between">
        <div className="w-1/5 hidden lg:flex lg:justify-center lg:items-center">
          <Sidebar />
        </div>
        <div className="w-3/5">
          <div className="bg-white min-h-[100vh] mt-10">
            <h1 className="text-black bg-black h-20">jaya</h1>
            <div className="flex justify-between pl-5 pr-5 pb-5 border border-b-gray-300">
              <div>
                <Image
                  src="/assets/Ellipse-39.png"
                  width={60}
                  height={60}
                  alt="pic"
                  className="-mt-8"
                />
                <h1>Yaseen group name</h1>
                <div className="flex  gap-2">
                  <FaUsers className="fill-gray-500 text-xl" />
                  <p className="text-xs">Private Unlisted</p>
                </div>
              </div>
              <div className="flex mt-2">
                <MdEdit className="fill-gray-500 text-2xl" />
                <FaEllipsisVertical className="fill-gray-500 text-2xl" />
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Inputpost />
              <Postadd />
            </div>
          </div>
        </div>
        <div className="w-1/5 p-8 ">
          <Groupowner />
          <Groupsuggestion />
          <Inviteconnection />
        </div>
      </div>
    </div>
  );
};

export default page;
