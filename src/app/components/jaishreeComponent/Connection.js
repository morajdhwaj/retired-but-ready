import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaGlobeEurope } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { FaUsersGear } from "react-icons/fa6";
import { TbMessageCircleOff } from "react-icons/tb";

const Connection = () => {
  return (
    <div className="mx-4 h-[100vh]">
      <div className="bg-[#FFFFFF] flex justify-between p-4 shadow-md  mt-40 sm:mt-20 md:mt-10">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">
            Who can comment on your post?
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#773FC6]">x</h1>
        </div>
      </div>
      {/* ------------------- */}
      <div className="bg-[#FFFFFF] mt-1 pl-5 pt-5 pb-5 pr-4 rounded-t-lg">
        <div className="flex  justify-between">
          <div className="flex  gap-2 ">
            <FaGlobeEurope className="text-[#666666] text-xl mt-1" />
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Anyone can comment
            </h1>
          </div>
          <div>
            <input type="radio" name="radio" className="size-4 " />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <IoPersonCircle className="text-[#666666] text-xl mt-1" />
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Only Ret Pro Connetcions
            </h1>
          </div>

          <div>
            <input type="radio" name="radio" className="size-4 " />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <ImUsers className="text-[#666666] text-xl mt-1" />
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Only Jun Pro Connetcion
            </h1>
          </div>

          <div>
            <input type="radio" name="radio" className="size-4 " />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <FaUsersGear className="text-[#666666] text-xl mt-1" />
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Only from my Connetcions
            </h1>
          </div>

          <div>
            <input type="radio" name="radio" className="size-4 " />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <TbMessageCircleOff className="text-[#666666] text-xl mt-1" />
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              No one can comment
            </h1>
          </div>
          <div>
            <input type="radio" name="radio" className="size-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
