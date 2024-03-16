"use client";

import React, { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { PiFilesFill } from "react-icons/pi";
import { MdMessage } from "react-icons/md";
import { FiOctagon } from "react-icons/fi";
import {
  MdAnnouncement,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  const [close, setClose] = useState(false);
  const [filteredValue, setFilteredValue] = useState(window.location.href);

  useEffect(() => {
    setFilteredValue(window.location.href);
  }, []);

  return (
    <div className="">
      <div className="mx-5 fixed py-10 pt-16 mt-80 top-0 left-0 bottom-0  h-10 z-50 flex flex-col  justify-center  ">
        <div className={`flex justify-end my-2`}>
          <button onClick={() => setClose(!close)}>
            {close ? (
              <MdOutlineArrowForwardIos color="#773fc6" size={20} />
            ) : (
              <MdOutlineArrowBackIosNew color="#773fc6" size={20} />
            )}
          </button>
        </div>
        {close ? (
          <div className="border border-[#773fc6] bg-[#EDEBF2]  rounded-lg  flex flex-col items-center p-5 gap-2 self-start">
            <Link
              href="/"
              className="flex gap-5 items-center  bg-white p-2 rounded-xl hover:bg-gray-200"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("all-feeds-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <IoIosHome
                  color={
                    filteredValue.includes("all-feeds-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
            </Link>

            <Link
              href="/all-feeds-page"
              className="flex gap-5 items-center   bg-white  hover:bg-gray-200 p-2 rounded-xl"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("my-wall")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <FaFile
                  color={
                    filteredValue.includes("my-wall") ? "white" : "#344767"
                  }
                />
              </div>
            </Link>

            <Link
              href="/contacts-page"
              className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                filteredValue.includes("contacts-page")
                  ? "bg-[#773fc6]"
                  : "bg-white"
              }`}
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <AiFillTool
                  color={
                    filteredValue.includes("contacts-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
            </Link>
            <Link
              href="/groups-page"
              className="flex gap-5   items-center bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("groups-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <HiUserGroup
                  color={
                    filteredValue.includes("groups-page") ? "white" : "#344767"
                  }
                />
              </div>
            </Link>

            <Link
              href="/connections-page"
              className="flex gap-5   items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("connections-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <PiFilesFill
                  color={
                    filteredValue.includes("connections-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
            </Link>
            <Link
              href="/message-page"
              className="flex gap-5   items-center bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("message-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <MdMessage
                  color={
                    filteredValue.includes("message-page") ? "white" : "#344767"
                  }
                />
              </div>
            </Link>
            <Link
              href="/setting-page"
              className="flex gap-5   items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("draft-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <FiOctagon
                  color={
                    filteredValue.includes("draft-page") ? "white" : "#344767"
                  }
                />
              </div>
            </Link>
            <Link
              href="/about-us-page"
              className="flex gap-5   items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("about-us-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <MdAnnouncement
                  color={
                    filteredValue.includes("about-us-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
            </Link>
          </div>
        ) : (
          <div className="border border-[#773fc6] bg-[#EDEBF2]  rounded-lg fixe flex flex-col items-center p-5 gap-2 self-start">
            <Link
              href="/all-feeds-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("all-feeds-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("all-feeds-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <IoIosHome
                  color={
                    filteredValue.includes("all-feeds-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">All feeds</h2>
            </Link>

            <Link
              href="/my-wall"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("my-wall") ? "bg-gray-200" : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("my-wall")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <FaFile
                  color={
                    filteredValue.includes("my-wall") ? "white" : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">My Wall</h2>
            </Link>

            <Link
              href="/contacts-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("contacts-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("contacts-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <AiFillTool
                  color={
                    filteredValue.includes("contacts-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">My Contacts</h2>
            </Link>
            <Link
              href="/groups-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("groups-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("groups-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <HiUserGroup
                  color={
                    filteredValue.includes("groups-page") ? "white" : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">Groups</h2>
            </Link>

            <Link
              href="/connections-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("connections-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("connections-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <PiFilesFill
                  color={
                    filteredValue.includes("connections-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">Connections</h2>
            </Link>
            <Link
              href="/message-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("message-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("message-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <MdMessage
                  color={
                    filteredValue.includes("message-page") ? "white" : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">Messages</h2>
            </Link>
            <Link
              href="/draft-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("draft-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("draft-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <FiOctagon
                  color={
                    filteredValue.includes("draft-page") ? "white" : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">Drafts </h2>
            </Link>
            <Link
              href="/about-us-page"
              className={` flex gap-5  w-40 items-center  p-2 hover:bg-gray-200 rounded-xl  ${
                filteredValue.includes("about-us-page")
                  ? "bg-gray-200"
                  : "bg-white"
              }  `}
            >
              <div
                className={` p-2 rounded-lg hover:bg-[#773fc6] ${
                  filteredValue.includes("about-us-page")
                    ? "bg-[#773fc6]"
                    : "bg-white"
                }`}
              >
                <MdAnnouncement
                  color={
                    filteredValue.includes("about-us-page")
                      ? "white"
                      : "#344767"
                  }
                />
              </div>
              <h2 className="text-sm font-medium">About Us </h2>
            </Link>
          </div>
        )}
        <div className="border   bg-[#c5cad7]  rounded-lg  flex justify-center w-full items-center mt-5 p-2 gap-5 self-start">
          <div className="bg-[#c5cad7]">Download Now</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
