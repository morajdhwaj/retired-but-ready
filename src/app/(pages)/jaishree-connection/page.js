"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
 // import ConnectionOne from "@/app/components/jaishreeConnectionComponent/ConnectionOne"; 
// import ConnectionTwo from "@/app/components/jaishreeConnectionComponent/ConnectionTwo";
 // import ConnectionThree from "@/app/components/jaishreeConnectionComponent/ConnectionThree";
 // import ConnectionSix from "@/app/components/jaishreeConnectionComponent/ConnectionSix";
import Main from "@/app/components/jaishreeConnectionComponent/Main";

// import Network from "@/app/components/jaishreeConnectionComponent/Network";
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
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  <Image alt="" src="/assets/110.png" height={50} width={50} />
                  <div className="font-semibold">
                    <h2>Steve Jacob</h2>
                    <p className="text-gray-500">CEO & Co-founder</p>
                  </div>
                </div>
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5">
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
              <p className="text-sm font-normal mt-5 hidden md:flex">
                Previewing as a visitor
              </p>
            </div>
          </div>
          <div className="  mt-44 sm:mt-32 md:mt-20 mx-5 ">
            
            {tab === 1 && (
              <div>
               
                  {/* <Network/>  */}
                 {/* <ConnectionOne/>  */}
                  {/* <ConnectionTwo/> */}
                  {/* <ConnectionThree/> */}
                 {/* <ConnectionSix/> */}
                  <Main/>  

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
