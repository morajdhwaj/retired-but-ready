"use client";

import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import Image from "next/image";
import { MdOutlineComment } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
const Postadd = () => {
  const element = [
    {
      name: "AMAN",
    },
    {
      name: "MORAJ",
    },
    {
      name: "YASEEN",
    },
  ];

  return (
    <>
      {element.map((groupElem, index) => (
        <div
          className=" w-3/4 mt-5 rounded-md border border-gray-400 p-5"
          key={index}
        >
          <div className="w-full  flex justify-between ">
            <div className="flex">
              <Image
                src="/assets/Ellipse-39.png"
                width={60}
                height={60}
                alt="pic"
              />
              <div>
                <h1>{groupElem.name}</h1>
                <p className="text-xs text-gray-400">Software Developer</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
            <div>
              <FaEllipsisVertical className="fill-gray-500 text-2xl" />
            </div>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>
          <div>
            <h1>
              Yaseen group name private Unlisted Start a post in this group
              Media Text Yaseen Software Developer Admin Like Comment Yaseen
              Software.
            </h1>
            <div className="flex items-center justify-center">
              <Image src="/assets/13.jpg" width={400} height={650} alt="pic" />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center justify-center gap-2">
                <AiOutlineLike className="fill-yellow-600 " />
                <h1>Like</h1>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MdOutlineComment />
                <h1>Comment</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Postadd;
