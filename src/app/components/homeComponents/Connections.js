import Image from "next/image";
import React from "react";

const Connections = () => {
  return (
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
      <div className="">
        <div className="bg-white">100,000+</div>
      </div>
    </div>
  );
};

export default Connections;
