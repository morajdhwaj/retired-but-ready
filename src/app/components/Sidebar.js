"use client";

import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { PiFilesFill } from "react-icons/pi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FiOctagon } from "react-icons/fi";
import {
  MdAnnouncement,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  const [close, setClose] = useState(false);

  return (
    <div>
      <div className="mx-10 fixed py-10 top-80 left-0 bottom-0  h-10 z-50 flex flex-col  justify-center">
        <div className="flex justify-end my-2">
          <button onClick={() => setClose(!close)}>
            {close ? (
              <MdOutlineArrowForwardIos size={20} />
            ) : (
              <MdOutlineArrowBackIosNew size={20} />
            )}
          </button>
        </div>
        {close ? (
          <div className="border border-[#773fc6] bg-[#EDEBF2]  rounded-lg fixe flex flex-col items-center p-5 gap-5 self-start">
            <Link
              href="/"
              className="flex gap-5 items-center  bg-white p-2 rounded-xl hover:bg-gray-200"
            >
              <div className="bg-[#773fc6] p-2 rounded-lg">
                <IoIosHome color="white" />
              </div>
            </Link>

            <Link
              href="/walls-page"
              className="flex gap-5 items-center   bg-white  hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <FaFile color="#344767" />
              </div>
            </Link>

            <Link
              href="/contracts-page"
              className="flex gap-5 items-center   bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <AiFillTool color="#344767" />
              </div>
            </Link>
            <Link
              href="/wallet-page"
              className="flex gap-5   items-center bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <FaCartShopping color="#344767" />
              </div>
            </Link>

            <Link
              href="/connections-page"
              className="flex gap-5   items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <PiFilesFill color="#344767" />
              </div>
            </Link>
            <Link
              href="/basics-page"
              className="flex gap-5   items-center bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <BsFillRocketTakeoffFill color="#344767" />
              </div>
            </Link>
            <Link
              href="/setting-page"
              className="flex gap-5   items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <FiOctagon color="#344767" />
              </div>
            </Link>
            <Link
              href="/about-us-page"
              className="flex gap-5   items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <MdAnnouncement color="#344767" />
              </div>
            </Link>
          </div>
        ) : (
          <div className="border border-[#773fc6] bg-[#EDEBF2]  rounded-lg fixe flex flex-col items-center p-5 gap-5 self-start">
            <Link
              href="/"
              className="flex gap-5 items-center w-40 bg-white p-2 rounded-xl hover:bg-gray-200"
            >
              <div className="bg-[#773fc6] p-2 rounded-lg">
                <IoIosHome color="white" />
              </div>
              <h2 className="text-sm font-medium">Dashboard</h2>
            </Link>

            <Link
              href="/walls-page"
              className="flex gap-5 items-center  w-40 bg-white  hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <FaFile color="#344767" />
              </div>
              <h2 className="text-sm font-medium">My Wall</h2>
            </Link>

            <Link
              href="/contracts-page"
              className="flex gap-5 items-center  w-40 bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <AiFillTool color="#344767" />
              </div>
              <h2 className="text-sm font-medium">My Contracts</h2>
            </Link>
            <Link
              href="/wallet-page"
              className="flex gap-5  w-40 items-center bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <FaCartShopping color="#344767" />
              </div>
              <h2 className="text-sm font-medium">My Wallet</h2>
            </Link>

            <Link
              href="/connections-page"
              className="flex gap-5  w-40 items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <PiFilesFill color="#344767" />
              </div>
              <h2 className="text-sm font-medium">Connections</h2>
            </Link>
            <Link
              href="/basics-page"
              className="flex gap-5  w-40 items-center bg-white hover:bg-gray-200 p-2 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <BsFillRocketTakeoffFill color="#344767" />
              </div>
              <h2 className="text-sm font-medium">Basics</h2>
            </Link>
            <Link
              href="/setting-page"
              className="flex gap-5  w-40 items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <FiOctagon color="#344767" />
              </div>
              <h2 className="text-sm font-medium">Setting </h2>
            </Link>
            <Link
              href="/about-us-page"
              className="flex gap-5  w-40 items-center bg-white p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
                <MdAnnouncement color="#344767" />
              </div>
              <h2 className="text-sm font-medium">About Us </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
