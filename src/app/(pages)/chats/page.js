"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { GrAttachment } from "react-icons/gr";

const page = () => {
  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div>
          <div className="  bg-[#f2f1f3]  p-5 lg:mx-60 pt-24   w-[80vw] h-[110vh]">
            <div className="w-full h-full border-2 rounded-xl flex justify-between  ">
              <div className="bg-blue- w-[30%] h-full border-r-2">
                <div className="flex justify-between py-4 border-b-2 text-xl">
                  <h1 className="px-3 ">message</h1>
                  <div className="">
                    <button className="px-3">
                      <BsThreeDots />
                    </button>
                  </div>
                </div>
                <div className="p-2 relative">
                  <input
                    type="search"
                    className="w-full bg-[#E4E7EB] px-9 py-2 rounded-lg outline-none "
                    placeholder="Search messages"
                  />
                  <span className="left-5  top-5 absolute ">
                    <ImSearch />
                  </span>
                </div>
                <div className="flex w-full">
                  <button className="w-[50%] text-[#773FC6] font-semibold p-2 border-b-2 border-[#773FC6]">
                    Focused
                  </button>
                  <button className="w-[50%] text-[#773FC6] font-semibold p-2">
                    Other
                  </button>
                </div>
                <div className="overflow-y-scroll h-[57vh]">
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="" className="flex h-20 ">
                      <div className="flex items-center">
                        <FaUserCircle size={50} />
                      </div>
                      <div className="py-2 px-4 w-full border-b-2">
                        <div className="flex justify-between">
                          <h2 className="">Aman Patel</h2>
                          <span className="">Feb 22</span>
                        </div>
                        <div className="">
                          <p className="text-sm">Hello i am aman</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" w-[70%] h-full  ">
                <div className="flex justify-between py-4 border-b-2 text-xl">
                  <h1 className="px-3 ">Aman Patel</h1>
                  <div className="">
                    <button className="px-3">
                      <BsThreeDots />
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="px-5 py-5">
                    <a href="#" className="bg-blue-400">
                      <div className="">
                        <FaUserCircle size={70} />
                      </div>
                    </a>
                    <div className="ml-5 mt-2">
                      <h1 className="text-xl">Aman Patel</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium totam, quibusdam ipsa at voluptatibus
                        deleniti.
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className=" w-full border border-[#773FC6] "></div>
                    <span className="absolute top-[-10px] left-[47%] bg-[#f2f1f3] px-2">
                      22 Feb
                    </span>
                  </div>
                </div>
                <div className="h-[200px] w-full border-b-4 border-[#773FC6] "></div>
                <div className="p-4 border-b-2">
                  <textarea
                    // type="text"
                    onInput={autoResize}
                    className="h-[70px]  w-full rounded-lg p-2 outline-none"
                    placeholder="Write a message"
                  />
                </div>
                <div className="flex justify-between p-5">
                  <div className=" flex gap-4">
                    <button className="">
                      <GrGallery size={25} />
                    </button>
                    <button className="">
                      <GrAttachment size={25} />
                    </button>
                    {/* <button className=""></button>
                    <button className=""></button> */}
                  </div>
                  <div className="">
                    <button className="px-4 py-1 text-white rounded-xl bg-[#773FC6]">
                      send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
