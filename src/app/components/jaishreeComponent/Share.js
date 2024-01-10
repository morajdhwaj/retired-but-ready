import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { IoSave } from "react-icons/io5";


const Reaction = () => {
  return (
    <div>
    <div className=" h-[100vh]">
       <div className="flex justify-between mt-40 sm:mt-20 md:mt-10  bg-white p-2 border-b-2 border-gray-300 ">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">Share</h1>
        </div>
        
          <h1 className="text-2xl font-semibold text-[#773FC6]">x</h1>
        
      </div> 
      {/* ------------------- */}
      <div className="bg-[#FFFFFF] mt-1 pl-16 pt-5 pb-5 pr-4 rounded-t-lg">
        <div className="flex  justify-between">
          <div className="flex  gap-2 ">
          <IoSave className='text-[#666666] text-xl mt-1'/>
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">Repost</h1>
          </div>
          
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex  gap-2 ">
          <IoMdShare  className='text-[#666666] text-xl mt-1' />
            <h1 className="font-semibold text-sm mt-1 text-[#1F2937]">
              Share with your thoughts
            </h1>
          </div>

          
        </div>
        
        
      </div>
    </div>
    </div>
  );
};

export default Reaction;
