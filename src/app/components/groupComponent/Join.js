"use client";
import React, { useState } from "react";

import Recommendation from "../Recommendation";
import YourGroups from "../Your-Groups";

const Join = () => {
  const [tab, setTab] = useState(false);

  return (
    <div className="bg-white lg:p-3 rounded-lg mb-10 lg:mb-28">
      <div className=" flex justify-between lg:flex  gap-5 mx-2 mt-2">
        <div className="flex gap-5 lg:gap-5">
          <button
            className={
              tab
                ? "text-black text-xs sm:text-sm lg:text-base "
                : "text-[#A8359C] text-xs sm:text-base md:text-sm lg:text-base "
            }
            onClick={() => setTab(false)}
          >
            Your Group
          </button>
          <button
            className={
              tab
                ? "text-[#A8359C]  text-sm sm:text-sm lg:text-base "
                : "text-black  text-sm sm:text-sm lg:text-base"
            }
            onClick={() => setTab(true)}
          >
            Recommendation
          </button>
        </div>

        <div className=" ">
          <button className="border  bg-[#A8359C] text-white p-2 mb-1 rounded-lg  mt-2 lg:mt-0 text-sm sm:text-sm lg:text-base ">
            Create Group
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-200 mt-2" />
      <div>{tab ? <Recommendation /> : <YourGroups />}</div>
    </div>
  );
};

export default Join;
