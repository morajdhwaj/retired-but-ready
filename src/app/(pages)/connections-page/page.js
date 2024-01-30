"use client";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React from "react";
// import Main from "@/app/components/jaishreeConnectionComponent/Main";
import Network from "@/app/components/jaishreeConnectionComponent/Network";

const page = () => {
  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-gray-200  p-5 lg:ml-52 pt-24  h-[100vh]  ">
          {/* <Main/>     */}
          <Network />
        </div>
      </div>
    </div>
  );
};

export default page;
