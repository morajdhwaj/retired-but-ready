import React from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import { FaBox } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import { AiFillTool } from "react-icons/ai";
const page = () => {
  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#f2f1f3]  p-5 ml-36 pt-24 h-[100vh]">
          <div className="relative ">
            <div className="absolute w-[96%] pt-28 mx-5">
              <div className="w-full bg-gradient-to-b from-pink-100 to-white flex py-5 justify-between rounded-lg px-5">
                <div className="flex items-center justify-center gap-2">
                  <Image src="/assets/110.png" height={50} width={50} />
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
        </div>
      </div>
    </div>
  );
};

export default page;
