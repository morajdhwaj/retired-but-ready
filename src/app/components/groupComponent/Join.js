"use client";
import React, { useState } from "react";

import Recommendation from "../Recommendation";
import YourGroups from "../Your-Groups";
import Link from "next/link";

const Join = () => {
  const [tab, setTab] = useState(false);
  return (
    <div className="bg-white p-3 rounded-lg mb-28  w-[40vw]">
      <div className=" flex justify-between  pt-3 px-">
        <div className="flex ">
          <div
            className={`
              ${
                tab
                  ? "text-black"
                  : "text-[#A8359C] border-b-4 border-b-[#A8359C] "
              } pb-3 mb-[-3px] px-4
            `}
          >
            <button onClick={() => setTab(false)}>Your Group</button>
          </div>
          <div
            className={`
              ${
                !tab
                  ? "text-black"
                  : "text-[#A8359C] border-b-4 border-b-[#A8359C] "
              } pb-3 mb-[-3px] px-4
            `}
          >
            <button
              className={tab ? "text-[#A8359C]  " : "text-black"}
              onClick={() => setTab(true)}
            >
              Recommendation
            </button>
          </div>
        </div>

        <div className=" ml-24 pb-3">
          <Link
            href="/create-group"
            className="border  bg-[#A8359C] text-white p-2 mb-1 rounded-lg "
          >
            Create Group
          </Link>
        </div>
      </div>

      <div className="border-2 border-gray-200" />
      <div>{tab ? <Recommendation /> : <YourGroups />}</div>
    </div>
  );
};

export default Join;
