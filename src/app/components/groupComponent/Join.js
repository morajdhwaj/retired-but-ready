"use client";
import React, { useState } from "react";

import Recommendation from "../Recommendation";
import YourGroups from "../Your-Groups";

const Join = () => {
  const [tab, setTab] = useState(true);
  return (
    <div className="bg-white p-3 rounded-lg mb-28">
      <div className="flex">
        <div className=" flex gap-5 mx-2 mt-2">
          <button
            className={tab ? "text-black" : "text-[#A8359C]   "}
            onClick={() => setTab(false)}
          >
            Your Group
          </button>
          <button
            className={tab ? "text-[#A8359C]  " : "text-black"}
            onClick={() => setTab(true)}
          >
            Recommendation
          </button>
          <div>
            <div className=" ml-24">
              <button className="border  bg-[#A8359C] text-white p-2 mb-1 rounded-lg ">
                Create Group
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-200" />
      <div>{tab ? <Recommendation /> : <YourGroups />}</div>
    </div>
  );
};

export default Join;
