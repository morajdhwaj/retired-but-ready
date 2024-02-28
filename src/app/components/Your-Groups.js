"use client";
import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
const Page = () => {
  const information = [
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "240 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "241 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "242 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "243 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "244 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "245 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "246 member",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      Member: "247 member",
    },
  ];

  return (
    <div>
      <div className=" flex flex-col   lg:w-[40vh] xl:w-[60vh]  border-white bg-white rounded-lg">
        {information.map((curelem, key) => (
          <div>
            <div className="flex justify-between" key={key}>
              {/* Map over the information array */}
              <div className="flex mt-2 mx-1 ">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={40}
                  height={40}
                  alt="pic"
                  className="w-14 h-14 rounded-full border-2 border-gray-200 mt-3"
                />
                <div className="mt-5 mx-2 text-base font-medium lg:text-sm">
                  <p>{curelem.Data}</p>
                  <p className="mt-1">{curelem.Member}</p>
                </div>
              </div>
              <div>
                <button className=" mt-10 md:mt-10 mx-2">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
            <div className="mt-2 border border-gray-200 mx-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
