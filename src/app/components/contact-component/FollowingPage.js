import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";

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
        <div className="flex mt-5" key={index}>
          <div className="w-3/4  flex justify-between items-center">
            <div className="flex">
              <div className="">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={50}
                  height={50}
                  alt="pic"
                  // className="  sm:w-1/5 md:w-1/5 p-1 rounded-full  "
                />
              </div>
              <div className="">
                <h1 className="text-[#773FC6] font-medium">{contact.name}</h1>
                <p className="text-gray-400 font-medium text-sm">
                  {contact.role}
                </p>
                <p className="text-gray-400 font-medium text-sm">
                  {contact.company}
                </p>
                <p className="text-[#374151] font-medium text-sm mt-2">
                  {contact.lastConnected}
                </p>
              </div>
            </div>

            <button className="border-2 border-[#A8359C]  rounded-md p-2">
              Following
            </button>
          </div>
          <div className="w-1/4  flex items-center justify-center">
            <div>
              <button className="text-2xl text-gray-500">
                <BsThreeDotsVertical />
              </button>
              <button className="text-2xl text-gray-500">
                <PiShareFatLight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowingPage;
