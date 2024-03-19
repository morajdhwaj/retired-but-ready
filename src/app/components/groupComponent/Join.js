"use client";
import React, { useState } from "react";

import Recommendation from "../Recommendation";
import YourGroups from "../Your-Groups";
import Link from "next/link";

const Join = () => {
  const [tab, setTab] = useState(false);

  return (
    <div className="bg-white lg:p-3 rounded-lg mb- lg:mb w-full md:w-[50vw]  lg:w-[40vw] xl:w-[45vw]">
      <div className=" flex justify-between items-center lg:flex  gap-3 sm:gap-5 mx-2 mt-5 lg:mt-2">
        <div className="flex gap-3 sm:gap-5 lg:gap-5">
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

        <div className=" sm:ml-5 lg:ml-0 xl:ml-24 ">
          <Link
            href="/create-group"
            className="border text-sm sm:text-base  bg-[#A8359C] text-white p-2 mb-1 rounded-lg "
          >
            Create Group
          </Link>
        </div>
      </div>

      <div className="border-2 border-gray-200 mt-4" />
      <div>{tab ? <Recommendation /> : <YourGroups />}</div>
    </div>
  );
};

export default Join;
