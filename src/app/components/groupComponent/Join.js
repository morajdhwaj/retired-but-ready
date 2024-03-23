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
                ? "text-black text-lg "
                : "text-[#773fc6]  font-semibold text-lg "
            }
            onClick={() => setTab(false)}
          >
            Your Group
          </button>
          <button
            className={
              tab
                ? "text-[#773fc6]  font-semibold text-lg"
                : "text-black  text-lg"
            }
            onClick={() => setTab(true)}
          >
            Recommendation
          </button>
        </div>

        <div className=" sm:ml-5 lg:ml-0 xl:ml-24 ">
          <Link
            href="/create-group"
            className="border text-sm sm:text-base  bg-[#773fc6] text-white p-2 mb-1 rounded-lg "
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
