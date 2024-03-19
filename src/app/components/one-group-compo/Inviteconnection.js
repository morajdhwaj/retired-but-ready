import React from "react";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Inviteconnection = () => {
  return (
    <div className="bg-white mt-2">
      <div className=" flex flex-col p-5 border border-b-gray-300">
        <h1>1 member</h1>
        <Image src="/assets/Ellipse-39.png" width={60} height={60} alt="pic" />
        <button className="border px-2 py-1 text-xs mt-2 rounded border-[#A8359C]">
          Invite Connection
        </button>
      </div>
      <div className="flex items-center justify-center gap-1 p-2">
        <h1 className="text-sm">Show all</h1>
        <FaRegArrowAltCircleRight className="text-sm" />
      </div>
    </div>
  );
};

export default Inviteconnection;
