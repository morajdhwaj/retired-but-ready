import React from "react";
import { FaEdit } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div className="flex  flex-col gap-5  ">
      <div className="flex justify-end mt-5">
        <button>
          <FaEdit size={30} />
        </button>
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Country</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Total work experience</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Professional field</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Professional Expertise</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Personal Skills</h2>
        <div className="flex gap-1 flex-col">
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-gray-500">English Proficiency</h2>
        <select className=" h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full">
          <option>Good</option>
          <option>Not Good</option>
          <option>Bad</option>
        </select>
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Other language</h2>
        <div className="flex gap-1 flex-col">
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
