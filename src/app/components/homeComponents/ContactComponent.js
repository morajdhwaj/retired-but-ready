import Image from "next/image";
import React from "react";

const ContactComponent = () => {
  return (
    <div className="bg-[#EDEBF2]  py-20  ">
      <div
        className="flex w-full"
        style={{
          backgroundImage: `url('/assets/Group193.png')`,
          height: "450px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="w-1/2 px-10">
          <h2 className="text-[#2f327d] font-semibold text-2xl">
            Ask us how we are transforming lives.
          </h2>
        </div>
        <div className="w-1/2 flex  items-center justify-center gap-5">
          <button className="border-2 border-[#2f327d] px-20 py-2 text-sm rounded-full">
            Let's chat
          </button>
          <button className="border-2 border-green-500 px-20 py-2 text-sm rounded-full">
            Request call back
          </button>
        </div>
      </div>
      <div className="flex px-20">
        <div className="w-1/2 flex items-center justify-center">
          <Image src="/assets/Group-114.png" height={400} width={300} />
        </div>
        <div className="w-1/2 flex flex-col items-center gap-10">
          <div>
            <h3 className="font-semibold text-[#2f327d] text-center text-2xl">
              So much you can do with
            </h3>
            <h1 className="text-[70px] font-bold text-[#773fc6] text-center">
              RetPro
            </h1>
            <h3 className=" text-center">
              (Your skills are all you need to being)
            </h3>
          </div>
          <div className="">
            <Image src="/assets/Group-626024.png" height={400} width={900} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
