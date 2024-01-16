import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

import { IoHeartCircle } from "react-icons/io5";
import { PiHandsClapping } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import Image from "next/image";

const Reaction = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const reactions = [
    {
      id: 1,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "All",
    },
    {
      id: 2,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "Like",
    },

    {
      id: 3,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "Love",
    },
    {
      id: 4,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "Celebrate",
    },
    {
      id: 5,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "light",
    },
    {
      id: 6,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "All",
    },
    {
      id: 7,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "Like",
    },
    {
      id: 8,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "Like",
    },
    {
      id: 9,
      name: "Munawar Raj Singh",
      role: "OPPO India Marketing Head,",
      company: "Teach Connection India Pvt.Ltd.",
      type: "Love",
    },
  ];

  return (
    <div className="mx-4">
      <div className="bg-[#FFFFFF] flex justify-between p-2 shadow-md mt-40 sm:mt-20 md:mt-10">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1" />
          <h1 className="text-[#773FC6]">Reactions</h1>
        </div>
        <h1 className="text-[#773FC6] font-medium text-lg">x</h1>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 p-2 w-full  border-gray-700 ">
          <button
            className={`text-[#773FC6] font-bold ${
              activeTab === "All" && "border-b-2 border-[#773FC6]"
            }`}
            onClick={() => handleTabClick("All")}
          >
            All 123445
          </button>
          <button
            className={`flex ${
              activeTab === "Like" && "border-b-2 border-[#773FC6]"
            }`}
            onClick={() => handleTabClick("Like")}
          >
            <AiFillLike className="mt-1 text-sm" />
            <p>456</p>
          </button>
          <button
            className={`flex ${
              activeTab === "Love" && "border-b-2 border-[#773FC6]"
            }`}
            onClick={() => handleTabClick("Love")}
          >
            <IoHeartCircle className="mt-1 text-sm" />
            <p>456</p>
          </button>
          <button
            className={`flex ${
              activeTab === "Celebrate" && "border-b-2 border-[#773FC6]"
            }`}
            onClick={() => handleTabClick("Celebrate")}
          >
            <PiHandsClapping className="mt-1 text-sm" />
            <p>456</p>
          </button>
          <button
            className={`flex ${
              activeTab === "light" && "border-b-2 border-[#773FC6]"
            }`}
            onClick={() => handleTabClick("light")}
          >
            <HiOutlineLightBulb className="mt-1 text-sm" />
            <p>456</p>
          </button>
        </div>
      </div>

      {reactions
        .filter(
          (reaction) => reaction.type === activeTab || activeTab === "All"
        )
        .map((reaction) => (
          <div
            key={reaction.id}
            className="bg-[#FFFFFF] shadow-md flex gap-2 p-6"
          >
            <div>
              <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
              />
            </div>
            <div>
              <h1 className="text-[#773FC6] font-bold">{reaction.name}</h1>
              <p className="text-sm">{reaction.role}</p>
              <p className="text-sm">{reaction.company}</p>
              {reaction.type === "Like" && <p>Like</p>}
              {reaction.type === "Love" && <p>Love</p>}
              {reaction.type === "Celebrate" && <p>Celebrate</p>}
              {reaction.type === "light" && <p>light</p>}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reaction;
