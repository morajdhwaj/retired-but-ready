import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";

const Report = () => {
  return (
    <div className="mx-4 h-[100vh] ">
      <div className="bg-[#FFFFFF] flex justify-between p-4 shadow-md mt-32 sm:mt-20 md:mt-10">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">Report</h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#773FC6]">x</h1>
        </div>
      </div>
      {/* ------------------- */}
      <div className="bg-[#FFFFFF] mt-1 pl-5 pt-5 pb-5 pr-4 rounded-t-lg  ">
        <div className="flex  justify-between">
          <div className="flex  gap-2 ">
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">Spam</h1>
          </div>
          <div>
            <GrFormNext className="text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Violence
            </h1>
          </div>

          <div>
            <GrFormNext className="text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              False Information
            </h1>
          </div>

          <div>
            <GrFormNext className="text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Not relevnt to me
            </h1>
          </div>

          <div>
            <GrFormNext className="text-gray-500 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
