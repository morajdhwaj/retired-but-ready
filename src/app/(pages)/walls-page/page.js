"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import All from "@/app/components/wallsComponents/All";
import Trending from "@/app/components/wallsComponents/Trending";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillTool } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";

const page = () => {
  const [tab, setTab] = useState(1);

  console.log(tab);

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#f2f1f3]  p-5 ml-52 pt-24 ">
          <div className="relative ">
            <div className="absolute w-[96%] pt-24 mx-5">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex py-5 justify-between rounded-xl px-5">
                <div className="flex items-center justify-center gap-2">
                  <Image alt="" src="/assets/110.png" height={50} width={50} />
                  <div className="font-semibold">
                    <h2>Steve Jacob</h2>
                    <p className="text-gray-500">CEO & Co-founder</p>
                  </div>
                </div>
                <div className="text-xs flex items-center justify-center gap-5">
                  <button className="flex items-center gap-1 p-2 bg-white rounded-lg">
                    <FaBox size={10} />
                    OVERVIEW
                  </button>
                  <button className="flex items-center gap-1 ">
                    <PiFilesFill size={15} /> TEAMS
                  </button>
                  <button className="flex items-center gap-1 ">
                    <AiFillTool size={15} />
                    PROJECTS
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('/assets/Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%", // full screen width
                height: "20vh", // full screen height
                borderRadius: 10,
              }}
              className="text-white p-5 flex  justify-between"
            >
              <h2 className="font-semibold text-2xl">
                My Tabs{" "}
                <span className="text-sm font-normal">/ profile Overview</span>
              </h2>
              <p className="text-sm font-normal mt-5">
                Previewing as a visitor
              </p>
            </div>
          </div>
          <div className="mt-20 mx-5">
            <div className="flex justify-between w-full text-gray-500">
              <button
                onClick={() => setTab(1)}
                className={`border-b-4 w-1/3 text-xl font-medium p-2 ${
                  tab === 1
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "border-gray-200"
                } `}
              >
                All
              </button>
              <button
                onClick={() => setTab(2)}
                className={`border-b-4 text-xl font-medium w-1/3 p-2 ${
                  tab === 2
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "border-gray-200"
                } `}
              >
                <span className="text-red-500">Trending</span> News
              </button>
              <button
                onClick={() => setTab(3)}
                className={`border-b-4 text-xl font-medium w-1/3 p-2 ${
                  tab === 3
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "border-gray-200"
                } `}
              >
                Surprise Me!
              </button>
            </div>
            {tab === 1 && (
              <div>
                <All /> <All />
              </div>
            )}
            {tab === 2 && <Trending />}
            {tab === 3 && <div>Tab3</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
