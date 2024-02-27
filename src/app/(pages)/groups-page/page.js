import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Join from "@/app/components/groupComponent/Join";
import JoinNewGroup from "@/app/components/groupComponent/JoinNewGroup";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#A6A7A6]">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex mt-[130px] ml-[260px] ">
          <Join />
          <JoinNewGroup />
        </div>
      </div>
    </div>
  );
};

export default page;
