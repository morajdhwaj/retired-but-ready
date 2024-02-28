"use client";
import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Recommendation = () => {
  const Data = [
    {
      information: "Lorem ipsum dolor sit glitch!",
      member: "201 Members",
      paragraph: "Lorem ipsum dolor sit glitch!",
    },
    {
      information: "Lorem ipsum dolor sit glitch!",
      member: "202 Members",
      paragraph: "Lorem ipsum dolor sit glitch!",
    },
    {
      information: "Lorem ipsum dolor sit glitch!",
      member: "203 Members",
      paragraph: "Lorem ipsum dolor sit glitch!",
    },
    {
      information: "Lorem ipsum dolor sit glitch!",
      member: "204 Members",
      paragraph: "Lorem ipsum dolor sit glitch!",
    },
    {
      information: "Lorem ipsum dolor sit glitch!",
      member: "205 Members",
      paragraph: "Lorem ipsum dolor sit glitch!",
    },
  ];
  return (
    <div>
      {Data.map((curelem, key) => (
        <div>
          <div className="mt-5 flex justify-between" key={key}>
            <div className="flex">
              <div className="mt-3">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={50}
                  height={50}
                  alt="pic"
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
              </div>
              <div className="mx-2 mt-1">
                <p className="text-base font-medium lg:text-lg lg:font-semibold">
                  {curelem.information}
                </p>
                <p className=" text-sm md:text-sm ">{curelem.member}</p>
                <p className=" text-sm md:text-sm ">{curelem.paragraph}</p>
              </div>
            </div>
            <div>
              <button className="border-2 border-[#A8359C] p-1 w-14 lg:w-20 text-center font-bold rounded-lg mt-5 mx-2 lg:mx-0">
                Join
              </button>
            </div>
          </div>
          <div className="border border-gray-200 mt-2 mx-2" />
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
