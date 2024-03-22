"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { BsThreeDots } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { VscSend } from "react-icons/vsc";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { debounce } from "lodash";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { UserIdContext } from "@/context/UserIdContext";
import Link from "next/link";

const Page = () => {
  const { userIdFromContext, setChatIdContext, chatIdFromContext } =
    useContext(UserIdContext);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [userAllData, setUserAllData] = useState([]);
  const [showOption, setShowOption] = useState(false);
  const [showOptionId, setShowOptionId] = useState("");
  const [showThreeDought, setShowThreeDought] = useState(false);
  const [showOptionButton, setShowOptionButton] = useState("");
  const [editButton, setEditButton] = useState("");
  const [receiverId, setReceiverId] = useState("65c4944bff9f155e520bc0f0");
  const [allChats, setAllChats] = useState([]);
  const [userId, setUserId] = useState(null);
  // const [chatId, setChatId] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (userIdFromContext) {
      setUserId(userIdFromContext);
    }
  }, [userIdFromContext]);

  useEffect(() => {
    if (userId) {
      getAllChats();
    }
  }, [userId]);

  useEffect(() => {
    if (chatIdFromContext) {
      getChats();
      userData();
    }
  }, [chatIdFromContext]);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chats]);

  useEffect(() => {
    console.log(
      chats,
      "this is chat for checking CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
    );
  }, [chats]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     getChats();
  //   }, 6000);

  //   const timeoutId = setTimeout(() => {
  //     clearInterval(intervalId);
  //   }, 600);

  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(timeoutId);
  //   };
  // }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      getChats();
    }, 5000);

    return clearInterval(intervalId);
  }, [chats]);

  const userData = async () => {
    console.log(
      userIdFromContext,
      "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"
    );
    try {
      const response = await axios.get(
        `https://retpro.catax.me/user/profile/${chatIdFromContext}`
      );
      setUserAllData(response.data);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const getChats = async () => {
    try {
      console.log(
        userIdFromContext,
        chatIdFromContext,
        "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
      );
      const response = await axios.get(
        `https://retpro.catax.me/view-chat-messages?user_id_1=${userIdFromContext}&user_id_2=${chatIdFromContext}&viewer=${userIdFromContext}`
      );
      if (Array.isArray(response?.data)) {
        setChats(response.data);
      } else {
        setChats([]);
      }
      console.log(
        response.data,
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      );
    } catch (error) {
      console.log("Error fetching chats:", error);
    }
  };

  // const debouncedSearch = debounce((term) => {
  //   console.log("Searching for:", term);
  // }, 1000);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMessage(value);
    // debouncedSearch(value);
  };

  const deleteMessageApi = async (messageId) => {
    try {
      await axios.delete(
        `https://retpro.catax.me/delete-message?message_id=${messageId}`
      );
      getChats();
    } catch (error) {
      console.log("Error deleting message:", error);
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post(
        `https://retpro.catax.me/send-message?sender_id=${userIdFromContext}&receiver_id=${chatIdFromContext}&message=${encodeURIComponent(
          message
        )}`
      );
      console.log(
        "message sent successfully PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP"
      );
      getChats();
      getAllChats();
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const changeMessage = async (messageId) => {
    try {
      await axios.patch(
        `https://retpro.catax.me/patch-message?message_id=${messageId}&new_content=${message}`
      );
      getChats();
      setMessage("");
      setEditButton("");
    } catch (error) {
      console.log("Error changing message:", error);
    }
  };

  const getAllChats = async () => {
    try {
      console.log(userIdFromContext, "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
      const response = await axios.get(
        `https://retpro.catax.me/all-my-chats?user_id=${userId}`
      );
      setAllChats(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching chats:", error);
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // Group chats by date
  const groupedChats = chats?.reduce((acc, chat) => {
    const date = dayjs(new Date(chat.timestamp + "Z")).format("YYYY-MM-DD");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(chat);
    return acc;
  }, {});

  const setIdForChat = (id) => {
    setChatIdContext(id);
    console.log(id, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  };

  console.log(
    allChats,
    // userId,
    userIdFromContext,
    chatIdFromContext,
    "this is a group chat all channels   zzzzzzzzzzz"
  );

  return (
    <div className="bg-[#EDEBF2] min-h-[100vh]  px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full">
          {/* Main Content */}
          <div className="bg-[#f2f1f3]  p-5 pb-3 lg:mx-60 pt-24 w-full  lg:w-[80vw] min-h-[100vh]">
            <div className="w-full h-full border-2 rounded-xl flex justify-between  ">
              {/* Left Section */}
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
                {/* <div className="flex w-full">
                  <button className="w-[50%] text-[#773FC6] font-semibold p-2 border-b-2 border-[#773FC6]">
                    Focused
                  </button>
                  <button className="w-[50%] text-[#773FC6] font-semibold p-2">
                    Other
                  </button>
                </div> */}
                <div className="border-b-2 border-[#773FC6]"></div>
                <div className="overflow-y-scroll h-[65vh]">
                  {allChats.map((data) => (
                    <div className="p-3 " key={data?._id}>
                      <button
                        className="flex  "
                        onClick={() => {
                          data?.participants[0] == userIdFromContext
                            ? setIdForChat(data.participants[1])
                            : setIdForChat(data.participants[0]);
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {data?.sender_image ? (
                            <Image
                              alt="rtr-pic"
                              src={data?.sender_image}
                              height={50}
                              width={50}
                              className="w-20 h-[60px] rounded-full "
                            />
                          ) : (
                            <FaUserCircle color="gray" size={60} />
                          )}
                        </div>
                        <div className="py-2 px-4 w-full ">
                          <div className="flex justify-between">
                            <h2 className="capitalize">{data?.sender_name}</h2>
                            {/* <span className="">Feb 22</span> */}
                          </div>
                          <div className="">
                            <p className="text-sm">
                              {data?.latest_message?.message.slice(0, 30)}
                              {data?.latest_message?.message.length > 30 &&
                                "...."}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Section */}
              <div className="w-[70%] h-full  ">
                <div className={` ${chatIdFromContext ? "" : "hidden"} `}>
                  <div className={`px-5 py-3 flex `}>
                    <Link href={`/profile/${userAllData?._id}`}>
                      <div className="flex items-center justify-center gap-2">
                        {userAllData?.user_image ? (
                          <Image
                            alt="rtr-pic"
                            src={userAllData?.user_image}
                            height={50}
                            width={50}
                            className="w-20 h-20 rounded-full border-2 border-gray-200"
                          />
                        ) : (
                          <FaUserCircle color="gray" size={60} />
                        )}
                      </div>
                    </Link>

                    <div className="ml-5 mt-2">
                      <h1 className="text-xl capitalize">
                        {userAllData.user_display_name}
                      </h1>
                      <p className="text-sm">{userAllData.last_designation}</p>
                    </div>
                  </div>

                  <div className=" w-full border border-[#773FC6] "></div>
                </div>
                <div
                  className={`h-[200px w-full flex flex-col border-b-2 border-[#773FC6] overflow-y-scroll  h-[58vh]  ${
                    chatIdFromContext ? "flex" : "hidden"
                  }`}
                  ref={chatContainerRef}
                >
                  {/* Render chat messages with separation by date */}
                  {Object.entries(groupedChats).map(([date, chatsForDate]) => (
                    <div key={date} className="flex flex-col">
                      {console.log(date, chatsForDate, "this is aman aman")}
                      <div className="relative flex justify-center my-5">
                        <div className=" w-full border border-[#773FC6] "></div>
                        <span className="absolute top-[-10px]  bg-[#f2f1f3] px-2">
                          {dayjs(date).format("MMMM DD, YYYY")}
                        </span>
                      </div>
                      {chatsForDate.map((chat) => (
                        <div className="p-2 " key={chat.message_id}>
                          <p
                            // onMouseEnter={() => {
                            //   setShowOptionButton(chat.message_id),
                            //     setShowThreeDought(!showThreeDought);
                            // }}
                            // onMouseLeave={() => {
                            //   setShowOptionButton(""),
                            //     setShowThreeDought(false);
                            // }}
                            className={`${
                              chat.sender_id === userIdFromContext
                                ? "float-right pl-3 pr-12 bg-[#773FC6]"
                                : "float-left pl-3 pr-12 bg-[#ab7cee]"
                            } bg-[#E4E7EB  text-[#8f4dea text-white rounded-xl  py-1 max-w-[60%] text-wrap relative flex items-center pb-5`}
                          >
                            {chat.message}
                            {/* {showOptionButton === chat.message_id &&
                              showThreeDought && (
                                <button
                                  className={`absolute  ${
                                    chat.sender_id === chatIdFromContext
                                      ? "right-1"
                                      : "left-1 "
                                  }  px-1 mt-2`}
                                  key={chat.message_id}
                                  onClick={() => {
                                    setShowOptionId(chat.message_id),
                                      setShowOption(!showOption);
                                    setShowThreeDought(false);
                                  }}
                                >
                                  <BsThreeDots size={20} />
                                </button>
                              )} */}

                            <p className="text-xs absolute right-2 bottom-1">
                              {dayjs(new Date(chat.timestamp + "Z")).format(
                                " hh:mm A"
                              )}
                            </p>

                            {/* {showOptionId === chat.message_id && showOption && (
                              <div
                                className={`flex flex-col absolute bg-[#773FC6] p-2 rounded-xl top-1 ${
                                  chat.sender_id === chatIdFromContext
                                    ? "left-[-100px]"
                                    : "right-[-100px]"
                                }`}
                                onMouseLeave={() => {
                                  setShowOption(false),
                                    setShowThreeDought(false);
                                }}
                                key={chat.message_id}
                              >
                                <button
                                  className="flex gap-1"
                                  onClick={() => {
                                    deleteMessageApi(chat.message_id);
                                    setShowOption("");

                                    setShowOptionButton("");
                                    setShowThreeDought(false);
                                  }}
                                >
                                  <RiDeleteBin6Line />
                                  <span className="">Delete</span>
                                </button>

                                <button
                                  className="flex gap-1"
                                  onClick={() => {
                                    setShowOption("");
                                    setMessage(chat.message);
                                    setEditButton(chat.message_id);
                                    setShowOptionButton("");
                                    setShowThreeDought(false);
                                  }}
                                >
                                  <FiEdit />
                                  <span className="">Edit</span>
                                </button>
                              </div>
                            )} */}
                          </p>

                          <br />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {/* Message Input */}
                <div
                  className={`p-4 relative items-center ${
                    chatIdFromContext ? "flex" : "hidden"
                  } `}
                >
                  <textarea
                    value={message}
                    onChange={handleInputChange}
                    onInput={autoResize}
                    className="h-[40px] max-h-[75px]    w-full rounded-lg p-2 pr-10 outline-none"
                    placeholder="Write a message"
                  />
                  {/* Send Button */}
                  {/* {editButton ? (
                    <div className="flex absolute right-4 bottom-4 p-1  text-white rounded-lg bg-[#773FC6]">
                      <button
                        className=" h-[30px] w-[30px] flex justify-center items-center border-r-2 "
                        onClick={() => {
                          setEditButton(""), setMessage("");
                        }}
                        disabled={message.length === 0}
                      >
                        <RxCross2 />
                      </button>

                      <button
                        className=" h-[30px] w-[30px] flex justify-center items-center "
                        onClick={() => changeMessage(editButton)}
                        disabled={message.length === 0}
                      >
                        <IoCheckmark />
                      </button>
                    </div>
                  ) : ( */}
                  <button
                    className="absolute right-3  p-2 mr-2  text-xl text-white rounded-xl bg-[#773FC6] h-[36px w-[36px "
                    onClick={() => sendMessage()}
                    disabled={message.length === 0}
                  >
                    <VscSend />
                  </button>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
