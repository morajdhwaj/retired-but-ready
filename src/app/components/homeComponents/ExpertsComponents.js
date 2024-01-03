import Image from "next/image";
import React from "react";

const ExpertsComponents = () => {
  return (
    <div className="mx-10 py-5 sm:py-10 md:py-20 lg:py-40">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#2f327d]">
          Meet the{" "}
          <span className=" text-5xl md:text-7xl text-[#773fc6]">RetPro</span>{" "}
          area experts
        </h1>
      </div>
      <div className="flex mt-16 flex-wrap gap-10 items-center justify-center">
        <div className="border border-[#773fc6] self-start px-14 py-8 rounded-2xl bg-gray-100">
          <Image src="/assets/Business-1.png" height={150} width={150} />
          <h2 className="text-center font-medium text-2xl mt-5">Engineers</h2>
        </div>
        <div className="border border-[#773fc6] self-start px-14 py-8 rounded-2xl bg-gray-100">
          <Image src="/assets/Entertainment-1.png" height={150} width={150} />
          <h2 className="text-center font-medium text-2xl mt-5">Professors</h2>
        </div>
        <div className="border border-[#773fc6] self-start px-14 py-8 rounded-2xl bg-gray-100">
          <Image src="/assets/Law-&-Order-1.png" height={150} width={150} />
          <h2 className="text-center font-medium text-2xl mt-5">Mentors</h2>
        </div>
        <div className="border border-[#773fc6] self-start px-14 py-8 rounded-2xl bg-gray-100">
          <Image src="/assets/110.png" height={150} width={150} />
          <h2 className="text-center font-medium text-2xl mt-5">Consultants</h2>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <button className="border border-[#773fc6] text-[#773fc6] px-16 py-5 rounded-full text-2xl font-light ">
          Explore all
        </button>
      </div>
    </div>
  );
};

export default ExpertsComponents;
