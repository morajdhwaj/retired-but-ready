import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const FollowingPage = () => {
  const contacts = [
    {
      name: "Jaya",
      role: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
      lastConnected: "Connected 2 days ago",
    },
    {
      name: "Parul",
      role: "Role for Parul",
      company: "Company for Parul",
      lastConnected: "Connected 2 days ago",
    },
    {
      name: "Kimjan",
      role: "Role for Kimjan",
      company: "Company for Kimjan",
      lastConnected: "Connected 2 days ago",
    },
  ];

  return (
    <div>
      {contacts.map((contact, index) => (
        <div className="flex" key={index}>
          <div className="w-3/4   flex-wrap lg:flex justify-between items-center  pb-5">
            <div className="w-[10%]">
              <Image
                src="/assets/Ellipse-39.png"
                width={50}
                height={50}
                alt="pic"
                // className="  sm:w-1/5 md:w-1/5 p-1 rounded-full  "
              />
            </div>
            <div className="flex justify-between items-center w-[90%]  border-[#E3CCE1] border-b  p-2">
              <div className="">
                <h1 className="text-[#2C2C2C] text-sm font-medium">
                  {contact.name}
                </h1>
                <p className="text-[#888888] font-medium text-xs">
                  {contact.role}
                </p>
                <p className="text-[#888888] font-medium text-xs">
                  {contact.company}
                </p>
                <p className="text-[#888888] font-medium text-xs">
                  {contact.lastConnected}
                </p>
              </div>

              <button className="border border-[#A8359C] text-black rounded-md p-2">
                Following
              </button>
            </div>
          </div>
          <div className="w-1/4  flex items-center justify-center">
            <div>
              <button className="text-2xl text-gray-500">
                <BsThreeDotsVertical />
              </button>
              <button className="text-2xl text-gray-500">
                <IoChatbubbleEllipsesOutline />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowingPage;
