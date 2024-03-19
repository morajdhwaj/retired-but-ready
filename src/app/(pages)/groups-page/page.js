import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Join from "@/app/components/groupComponent/Join";
import JoinNewGroup from "@/app/components/groupComponent/JoinNewGroup";

import React from "react";

const page = () => {
  return (
    <div className="bg-[#EDEBF2]  lg:px-10 min-h-[100vh] ">
      <Navbar />
      <div className=" h-[220vh sm:h-[210vh pt-10 sm:pt-20 lg:pt-10 lg:mt-0">
        <div className="hidden lg:flex ">
          <div className="">
            <Sidebar />
          </div>
        </div>
        <div className="flex gap-5 md:flex md:mx-8 pb-6 mt-[60px] lg:mt-[92px]  mx-5 sm:mx-14 lg:ml-[260px]   ">
          <Join />
          <JoinNewGroup />
        </div>
      </div>
    </div>
  );
};

export default page;
