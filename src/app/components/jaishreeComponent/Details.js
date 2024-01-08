import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { IoPersonRemove } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";

import { IoSave } from "react-icons/io5";

const Reaction = () => {
  return (
    <div className="mx-4">
      <div className="bg-[#FFFFFF] flex justify-between p-4 shadow-md mt-10">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">Details</h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#773FC6]">x</h1>
        </div>
      </div>
      {/* ------------------- */}
      <div className="bg-[#FFFFFF] mt-1 p-14 pt-5 ">
        <div className="flex gap-2">
          <IoSave className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1">Save</h1>
        </div>
        <div className="flex gap-2 mt-4">
          <IoMdShare className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1">Share via</h1>
        </div>
        <div className="flex gap-2 mt-4">
          <FaEyeSlash className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1">I don't want to see this</h1>
        </div>
        <div className="flex gap-2 mt-4">
          <CiCircleRemove className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1">Unfollow Devid</h1>
        </div>
        <div className="flex gap-2 mt-4">
          <IoPersonRemove className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1">
            Reove connection with David
          </h1>
        </div>
        <div className="flex gap-2 mt-4">
          <IoVolumeMute className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1">Mute Aristotle</h1>
        </div>
        <div className="flex gap-2 mt-4">
          <FaFlag className="text-[#666666] text-xl mt-1" />
          <h1 className="font-medium text-sm mt-1"> Report this Post</h1>
        </div>
      </div>
    </div>
  );
};

export default Reaction;
