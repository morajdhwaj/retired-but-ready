import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Join from "@/app/components/groupComponent/Join";
import JoinNewGroup from "@/app/components/groupComponent/JoinNewGroup";

import React from "react";

const page = () => {
  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex mt-[130px]  ml-[260px] ">
          <div className="">
            <Join />
          </div>
          <div className="">
            <JoinNewGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
