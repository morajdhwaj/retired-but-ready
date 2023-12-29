import React from "react";
import { FaEdit } from "react-icons/fa";

const ProfileDetails = () => {
  return (
    <div className="flex  flex-col gap-5  ">
      <div className="flex justify-end mt-5">
        <button>
          <FaEdit size={30} />
        </button>
      </div>

      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Fist Name</h2>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded" />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-gray-500">Last Name</h2>
          <input className="bg-[#f2f1f3] border border-gray-300 h-10  w-full rounded" />
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Profile display name</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Mobile Number</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Country</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">City</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
    </div>
  );
};

export default ProfileDetails;
