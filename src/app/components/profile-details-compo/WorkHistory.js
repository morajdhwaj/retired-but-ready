import React from "react";
import { FaEdit } from "react-icons/fa";

const WorkHistory = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-end ">
        <button>
          <FaEdit size={30} />
        </button>
      </div>
      <div>
        <h2 className="text-[#808184] font-medium">Company Name*</h2>
        <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
      </div>
      <div className="mt-5">
        <h2 className="text-[#808184] font-medium">Title/Role</h2>
        <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
      </div>
      <div className="flex gap-6 mt-5">
        <div className="w-1/2">
          <h2 className="text-[#808184] font-medium">From</h2>
          <input
            className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
            type="date"
          ></input>
        </div>
        <div className="w-1/2">
          <h2 className="text-[#808184] font-medium">To</h2>
          <input
            className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
            type="date"
          ></input>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-[#808184] font-medium">Certifications</h2>
        <div className="flex flex-col gap-1">
          <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
          <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-[#808184] font-medium">Your URL</h2>
        <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
      </div>
    </div>
  );
};

export default WorkHistory;
