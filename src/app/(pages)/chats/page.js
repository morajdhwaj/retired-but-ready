"use client";

const axios = require("axios");
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
// import { GrGallery } from "react-icons/gr";
// import { GrAttachment } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
// import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const page = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [userAllData, setUserAllData] = useState([]);
  const [showOption, setShowOption] = useState("");
  const [showOptionButton, setShowOptionButton] = useState("");
  const [patchMessage, setPatchMessage] = useState("");
  // const [deleteMessage, setDeleteMessage] = useState("");
  const userIdFromStorage =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const userIdRef = useRef(userIdFromStorage);
  const [userId, setUserId] = useState(userIdRef.current);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of chat container when chats change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chats]);

  // useEffect(() => {
  //   // Update userId state if localStorage changes
  //   const handleStorageChange = () => {
  //     setUserId(localStorage.getItem("userId"));
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  useEffect(() => {
    userData();
    getData();
  }, []);

  // useEffect(() => {
  //   deleteMessageApi();
  // }, [deleteMessage]);

  const userData = async () => {
    // console.log(userId, "this is second user id ");
    const user_id = userId;
    const option = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${user_id}`,
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await axios(option);
      setUserAllData(response.data);

      // console.log(response, "this is user data");
    } catch (error) {
      console.log(error, "error on get user data");
    }
  };

  // DELETE MESSAGE ------------------------------

  const deleteMessageApi = async (messageId) => {
    const option = {
      method: "DELETE",
      url: `https://retpro.catax.me/delete-message?message_id=${messageId}`,
      headers: {
        accept: "application/json",
      },
    };
    try {
      const response = await axios(option);
      getData();
      console.log(response, "this is delete success message");
    } catch (error) {
      console.log(error, "this is error from delete api message");
    }
  };

  // GET MESSAGE-------------------------------
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        getData();
        // console.log("this is interval");
      }, 6000);

      // console.log("this is timeout");
      return () => clearInterval(intervalId);
    }, 600);

    return () => clearTimeout(timeOutId);
  }, [chats]);

  const getData = async () => {
    const user_id_1 = userId;
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
      // console.log(response, "this is response for get all chats");
    } catch (error) {
      console.log(error, "getMessageData Error");
    }
  };

  // SEND MESSAGE ---------------------------
  const sendMessage = async () => {
    const senderId = userId;
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

      getData();
      setMessage("");
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  console.log(chats, "this is all chats");
  console.log("this is user all data", userAllData);
  console.log(userId, "this is user id");
  return (
    <div className="bg-[#EDEBF2]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="  bg-[#f2f1f3]  p-5 lg:mx-60 pt-24 w-full  lg:w-[80vw] h-[110vh">
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
                <div className="overflow-y-scroll h-[62vh]">
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
                  <h1 className="px-3 ">{userAllData.user_display_name}</h1>
                  <div className="">
                    <button className="px-3">
                      <BsThreeDots />
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="px-5 py-3 flex">
                    <a href="#" className="">
                      <div className="rounded-full overflow-hidden h-[60px] w-[60px]">
                        <Image
                          className="h-[60px] w-[60px]"
                          src={userAllData.user_image}
                          height={100}
                          width={50}
                          alt="profile image"
                        ></Image>
                        {/* <FaUserCircle size={70} /> */}
                      </div>
                    </a>
                    <div className="ml-5 mt-2">
                      <h1 className="text-xl">
                        {userAllData.user_display_name}
                      </h1>
                      <p className="text-sm">{userAllData.last_designation}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className=" w-full border border-[#773FC6] "></div>
                    <span className="absolute top-[-10px] left-[47%] bg-[#f2f1f3] px-2">
                      22 Feb
                    </span>
                  </div>
                </div>
                <div
                  className="h-[200px w-full flex flex-col border-b-2 border-[#773FC6] overflow-y-scroll h-[50vh]"
                  ref={chatContainerRef}
                >
                  {chats.map((chat) => (
                    <div className="p-2 " key={chat.message_id}>
                      <p
                        onMouseEnter={() =>
                          setShowOptionButton(chat.message_id)
                        }
                        onMouseLeave={() => setShowOptionButton("")}
                        className={`${
                          chat.sender_id === userId
                            ? "float-right pl-8"
                            : "float-left pr-8"
                        } bg-[#E4E7EB bg-[#773FC6] text-[#8f4dea text-white rounded-xl px-3 py-1 max-w-[60%] text-wrap relative flex items-center`}
                      >
                        {chat.message}
                        {showOptionButton === chat.message_id && (
                          <button
                            className={`absolute  ${
                              chat.sender_id === userId ? "left-1" : "right-1"
                            }  px-1`}
                            key={chat.message_id}
                            onClick={() => setShowOption(chat.message_id)}
                          >
                            <BsThreeDots size={20} />
                          </button>
                        )}
                        {showOption === chat.message_id && (
                          <div
                            className={`flex flex-col absolute bg-[#773FC6] p-2 rounded-xl top-1 ${
                              chat.sender_id === userId
                                ? "left-[-100px]"
                                : "right-[-100px]"
                            }`}
                            onMouseLeave={() => setShowOptionButton("")}
                            key={chat.message_id}
                          >
                            <button
                              className="flex gap-1"
                              onClick={
                                () => deleteMessageApi(chat.message_id)

                                // setShowOption("")
                              }
                            >
                              <RiDeleteBin6Line />
                              <span className="">Delete</span>
                            </button>
                            <button
                              className="flex gap-1"
                              onClick={() => setPatchMessage(chat.message_id)}
                            >
                              <FiEdit />
                              <span className="">Edit</span>
                            </button>
                          </div>
                        )}
                      </p>

                      <br />
                    </div>
                  ))}
                </div>
                <div className="p-4  flex">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onInput={autoResize}
                    className="h-[50px]  w-full rounded-lg p-2 outline-none"
                    placeholder="Write a message"
                  />
                  {/* <div className=""> */}
                  <button
                    className=" p-2 text-2xl text-white rounded-xl bg-[#773FC6] h-[40px] w-[40px] "
                    onClick={() => sendMessage()}
                  >
                    <VscSend />
                  </button>
                  {/* </div> */}
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
