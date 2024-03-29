import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#EDEBF2]  min-h-[100vh] px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24  min-h-[100vh]  ">
          basic-page
        </div>
      </div>
    </div>
  );
};

export default page;
