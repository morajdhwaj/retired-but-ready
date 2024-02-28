import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Join from "@/app/components/groupComponent/Join";
import JoinNewGroup from "@/app/components/groupComponent/JoinNewGroup";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#A6A7A6] h-[220vh] sm:h-[210vh] pt-10 sm:pt-20 lg:pt-10 lg:mt-0">
        <div className="hidden lg:flex ">
          <div className="">
            <Sidebar />
          </div>
        </div>
        <div className=" md:flex md:mx-8 mb-10  mt-20 lg:mt-[130px] mx-5 sm:mx-14 lg:ml-[260px]  md:w-[44vw] lg:w-[38vw] ">
          <Join />
          <JoinNewGroup />
        </div>
      </div>
    </div>
  );
};

export default page;
