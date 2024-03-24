import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const FollowingPage = () => {
  const contacts = [
    {
      name: "Jaya",
    },
    {
      name: "Parul",
    },
    {
      name: "Kimjan",
    },
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <div
          className="w-full p-2 flex flex-col sm:flex-row lg:flex-row border-b border-[#E3CCE1] mt-5 "
          key={index}
        >
          <div className="w-full sm:w-[75%] lg:w-[75%] flex justify-between ">
            <div className="w-1/2  sm:w-[15%]  flex items-center justify-center">
              <Image
                src="/assets/Ellipse-39.png"
                width={50}
                height={50}
                alt="pic"
              />
            </div>
            <div className="w-1/2 sm:w-[85%]  ">
              <h1 className="text-[#2C2C2C] text-sm text-start font-medium mt-2">
                {contact.name}
              </h1>
            </div>
          </div>

          <div className="relative w-full sm:w-[25%] lg:w-[25%] flex justify-around items-center mt-2 sm:mt-0 lg:mt-0">
            <button className="border border-[#A8359C] text-black rounded-md p-2">
              Following
            </button>

            <button className="text-3xl sm:text-4xl text-gray-400">
              <IoChatbubbleEllipsesOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowingPage;
