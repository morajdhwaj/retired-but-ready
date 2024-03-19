import React from "react";
import Image from "next/image";

const Groupowner = () => {
  return (
    <div className=" rounded-2xl rounded-b bg-white">
      <div className="bg-black h-14 ">
        <h1>heee</h1>
      </div>
      <div className="bg-white flex flex-col justify-center items-center">
        <Image
          src="/assets/Ellipse-39.png"
          width={60}
          height={60}
          alt="pic"
          className="-mt-7"
        />
        <h1 className="font-medium">Yaseen Owner</h1>
        <p className="text-xs p-1">Group Created:Feb 2024</p>
      </div>
      <div className="bg-white p-2">
        <div className="flex items-center justify-between">
          <h1>Pending Post</h1>
          <h1>0</h1>
        </div>
        <div className="flex items-center justify-between ">
          <h1>Request to Join</h1>
          <h1>1</h1>
        </div>
      </div>
      <div className=" p-2 mt-2 border bg-white border-t-gray-300 border-b-gray-300 flex items-center justify-center">
        <h1>Manage Group</h1>
      </div>
      <div className=" p-2 flex items-center justify-center">
        <h1>Edit Group</h1>
      </div>
    </div>
  );
};

export default Groupowner;
