import React from "react";
import { CiCamera } from "react-icons/ci";

const Trending = () => {
  return (
    <div className="h-[100vh] flex  items-center flex-col gap-2 mt-20">
      <div className="border p-3 rounded-full border-black">
        <CiCamera size={40} />
      </div>
      <p>No Posts Yet</p>
      <h className="text-[#773fc6]">Create New</h>
    </div>
  );
};

export default Trending;
