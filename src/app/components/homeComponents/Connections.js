import Image from "next/image";
import React from "react";

const Connections = () => {
  return (
    <div>
      <div className="relative ">
        <div className=" absolute w-4/5 h-[63vh] bg-transparent  flex items-end justify-end">
          <div className=" text-center bg-white px-4 py-2 rounded-lg flex items-center justify-center ">
            <div className="bg-[#F9AE34] p-1 rounded-full">
              <Image src="/assets/Vector.png" height={15} width={15} />
            </div>
            <div className="ml-2">
              <h1 className="font-semibold">100,000+</h1>
              <p className="text-xs">connections</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-20 bg-gray-100 flex justify-end pt-20">
        <div className="flex flex-col gap-5 items-center justify-center ">
          <h1 className="font-semibold text-5xl text-center ">
            The world's only exclusive platform and
          </h1>
          <h1 className="font-semibold text-5xl text-center">
            community for retired professional
          </h1>
        </div>
        <div className="flex justify-end items-end ">
          <Image src="/assets/13.png" height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Connections;
