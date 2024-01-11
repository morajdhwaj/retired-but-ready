import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";

import { IoVideocam } from "react-icons/io5";

import { IoSave } from "react-icons/io5";

const Postpage = () => {
  return (
    <div className="mx-4">
      <div className="bg-[#FFFFFF] flex justify-between p-4 shadow-md mt-10">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">Share a Post</h1>
        </div>
      </div>
      {/* ------------------- */}
      <div className="bg-[#FFFFFF] mt-1 p-16 pt-5 pb-5 rounded-t-lg">
        <div className="flex gap-2">
          <MdAddPhotoAlternate className="text-[#666666] text-xl mt-1" />
          <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
            Add a Photo
          </h1>
        </div>
        <div className="flex gap-2 mt-4">
          <IoVideocam className="text-[#666666] text-xl mt-1" />
          <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
            Take a Video
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Postpage;
