"use client";
import React from "react";
import Image from "next/image";
import { GoFileMedia } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

const Inputpost = () => {
  return (
    <div className=" w-3/4 mt-5">
      <div className="rounded-md border border-gray-400  p-5">
        <div className="flex gap-2">
          <Image
            src="/assets/Ellipse-39.png"
            width={60}
            height={60}
            alt="pic"
          />
          <input
            placeholder="  Start a group in this group"
            type="text"
            className="rounded-full w-full border border-gray-300 bg-slate-200 "
          />
        </div>
        <div className="flex justify-between items-center mt-3 ">
          <div className="flex gap-2 items-center pl-28">
            <GoFileMedia />
            <p>Media</p>
          </div>
          <div className="flex gap-2 items-center pr-28">
            <FiEdit />
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputpost;
