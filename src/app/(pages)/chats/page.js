"use client";

const axios = require("axios");
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
// import { GrGallery } from "react-icons/gr";
// import { GrAttachment } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";

const page = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  // GET MESSAGE-------------------------------

  useEffect(() => {
    getData();
  }, [chats]);

  const getData = async () => {
    const user_id_1 = "65cdeba872b6e0c0b88edbce";
    const user_id_2 = "65c4944bff9f155e520bc0f0";
    const option = {
      method: "GET",
      url: `https://retpro.catax.me/view-chat-messages?user_id_1=${user_id_1}&user_id_2=${user_id_2}`,
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await axios(option);
      setChats(response.data);
      console.log(response, "this is response for get all chats");
    } catch (error) {
      console.log(error, "getMessageData Error");
    }
  };

  // SEND MESSAGE ---------------------------
  const sendMessage = async () => {
    const senderId = "65cdeba872b6e0c0b88edbce";
    const receiverId = "65c4944bff9f155e520bc0f0";
    const option = {
      method: "POST",
      url: `https://retpro.catax.me/send-message?sender_id=${senderId}&receiver_id=${receiverId}&message=${encodeURIComponent(
        message
      )}`,
      headers: {
        accept: "application/json",
      },
    };
    try {
      const response = await axios(option);

      setMessage("");
      getData();
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  console.log(chats, "this is all chats");

  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="  bg-[#f2f1f3]  p-5 lg:mx-60 pt-24 w-full  lg:w-[80vw] h-[110vh]">
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
                  <div className="px-5 py-3 flex">
                    <a href="#" className="">
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
                <div className="h-[200px w-full border-b-2 border-[#773FC6] overflow-y-scroll h-[40vh]">
                  {chats.map((chat) => (
                    <div className="p-2 " key={chat.message_id}>
                      <p
                        className={`${
                          chat.sender_id === "65cdeba872b6e0c0b88edbce"
                            ? "float-right"
                            : "float-left"
                        } bg-[#E4E7EB bg-[#773FC6] text-[#8f4dea text-white rounded-xl px-2 py-1`}
                      >
                        {chat.message}
                      </p>
                      <br />
                    </div>
                  ))}
                </div>
                <div className="p-4 border-b-2 flex">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onInput={autoResize}
                    className="h-[50px]  w-full rounded-lg p-2 outline-none"
                    placeholder="Write a message"
                  />
                  <div className="">
                    <button
                      className=" p-1 text-3  xl text-white rounded-xl bg-[#773FC6] "
                      onClick={sendMessage}
                    >
                      <VscSend />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between p-5">
                  {/* <div className=" flex gap-4">
                    <button className="">
                      <GrGallery size={25} />
                    </button>
                    <button className="">
                      <GrAttachment size={25} />
                    </button>
                  </div> */}
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
