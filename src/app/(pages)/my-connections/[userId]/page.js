"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const page = ({ params }) => {
  const profileId = params["userId"];
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    getAllConnection();
  }, [profileId]);

  const getAllConnection = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/my-network/${profileId}`
      );
      setConnections(response.data);
      console.log(response.data, "this is response from get all connection");
    } catch (error) {
      console.log(error, "this is error from get all connection");
    }
  };

  console.log(connections, "this is get my all connections ");

  return (
    <>
      <div className="bg-[#EDEBF2] px-5 sm:px-10 h-full min-h-[100vh] ">
        <Navbar />
        <div className=" h-[220vh  pt-20 lg:pt-10 lg:mt-0">
          <div className="hidden lg:flex ">
            <div className="">
              <Sidebar />
            </div>
          </div>
          <div className="bg-white lg:mt-[100px] max-w-[1000px] lg:mx-5  lg:ml-[260px]  m-auto rounded-lg px-5 md:px-20 py-10 mt-5 sm:mt-0">
            <div className="">
              <h1 className="ml-1 text-lg font-semibold">
                {connections.length} Connections
              </h1>
              <div className="flex justify-between border-b-2">
                <select name="" id="" className="text-md">
                  <option value="">Recently Added</option>
                  <option value="">First Name</option>
                  <option value="">Last Name</option>
                </select>

                <div className="p-2 relative">
                  <input
                    type="search"
                    className="w-full bg-[#E4E7EB border-2 pl-9 pr-3 py-2 rounded-lg outline-none "
                    placeholder="Search messages"
                  />
                  <span className="left-5  top-5 absolute ">
                    <ImSearch />
                  </span>
                </div>
              </div>
              <div className="">
                {connections.map((data) => (
                  <div
                    className="py-2 px-2 sm:flex justify-between items-center border-b "
                    key={data?._id}
                  >
                    <div className="flex items-center gap-3">
                      {data?.from_user_image ? (
                        <Image
                          alt=""
                          src={data?.from_user_image}
                          height={70}
                          width={70}
                          className="w-20 h-20 rounded-full border-2 border-gray-200"
                        />
                      ) : (
                        <FaUserCircle size={70} />
                      )}
                      <div className="">
                        <h2 className="text-md font-semibold">
                          {data?.from_user_full_name}
                        </h2>
                        <h3 className="font-medium">Developer</h3>
                        <p className="text-sm">Connected 3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3 sm:mt-0 justify-center pl-5">
                      <button className=" py-1 px-7 border-2 rounded-lg border-[#773FC6] h-10">
                        Message
                      </button>
                      <button className="">
                        <BsThreeDotsVertical size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
