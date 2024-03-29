"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import axios from "axios";
import PopUp from "@/app/components/PopUp";

import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { UserIdContext } from "@/context/UserIdContext";
import { useRouter } from "next/navigation";

const FollowersPage = () => {
  const router = useRouter();
  const { userIdFromContext, setChatIdContext } = useContext(UserIdContext);
  const [followers, setFollowers] = useState([]);
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFollower, setSelectedFollower] = useState(null);
  const [showChat, setShowChat] = useState("");

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]);

  useEffect(() => {
    if (userId) {
      getFollowers();
    }
  }, [userId]);

  const getFollowers = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-followers/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(
          response.data,
          "this is followers data WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
        );
        setFollowers(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleShow = (index) => {
    setShow((prevShow) => ({
      ...prevShow,
      [index]: !prevShow[index],
    }));
  };

  const handleDeleteModal = (follower) => {
    setSelectedFollower(follower);
    setShowDeleteModal(true);
    setShow((prevShow) => ({
      ...prevShow,
      [followers.findIndex((f) => f._id === follower._id)]: false,
    }));
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const deleteFollowers = () => {
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/remove-follower/${userId}/${selectedFollower.from_user_id}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        getFollowers();
        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const setChatId = (chatId) => {
    setChatIdContext(chatId);
    router.push("/message-page");
  };

  return (
    <>
      {followers.length > 0 ? (
        <div className="min-h-[50vh]">
          {followers.length > 0 &&
            followers.map((follower, index) => (
              <div
                className="w-full p-2 pl-0 sm:flex sm:justify-between sm:items-center  border-b border-[#E3CCE1] mt-5"
                key={follower?._id}
              >
                <div className="w-full  flex flex-col sm:flex-row gap-2 sm:justify-start justify-center  items-center ">
                  <div className=" flex items-center ">
                    <Link href={`/profile/${follower.from_user_id}`}>
                      {follower?.from_user_image ? (
                        <Image
                          src={follower?.from_user_image}
                          width={30}
                          height={30}
                          alt="pic"
                          className=" w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-200"
                        />
                      ) : (
                        <FaUserCircle
                          color="gray"
                          className=" w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-200 "
                        />
                      )}
                    </Link>
                  </div>
                  <div className=" flex items-center ">
                    <Link href={`/profile/${follower.from_user_id}`}>
                      <h1 className="text-[#2C2C2C] text-sm text-start font-medium capitalize mt-[-10px]">
                        {follower.from_user_full_name}
                      </h1>
                      <p className="">{}</p>
                    </Link>
                  </div>
                </div>
                <div className="relative w-full justify-center flex  sm:justify-end items-center gap-5 sm:gap-10 mt-2 sm:mt-0 lg:mt-0 ">
                  <button
                    className="border border-[#773fc6] text-black rounded-md  text-xs sm:text-sm  p-1 sm:p-2"
                    onClick={() => handleShow(index)}
                  >
                    Following
                  </button>
                  {show[index] && (
                    <div className="absolute top-10 right-14  border bg-white border-gray-300 shadow-md rounded-md flex flex-col px-1 ">
                      <div className="flex p-1 items-center justify-center">
                        <button
                          onClick={() => handleDeleteModal(follower)}
                          className="hover:bg-[#773fc6]  rounded-md hover:text-white text-black p-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    className="text-3xl sm:text-4xl text-gray-400 relative"
                    onMouseEnter={() => setShowChat(follower?.from_user_id)}
                    onMouseLeave={() => setShowChat("")}
                    onClick={() => {
                      follower?.from_user_id === userIdFromContext
                        ? setChatId(follower?.to_user_id)
                        : setChatId(follower?.from_user_id);
                    }}
                  >
                    <Image src="/emoji/chat.png" width={30} height={30}></Image>
                    {showChat === follower?.from_user_id && (
                      <p className="bg- [#773fc6] text-[#62B498] text-xs font-medium px-1 py- rounded-sm  absolute top-[-25px] right-1 ">
                        Chat
                      </p>
                    )}
                  </button>
                </div>
              </div>
            ))}
          {showDeleteModal && (
            <PopUp
              close={handleCloseDeleteModal}
              onClick={deleteFollowers}
              title="Are you want Unfollow this follower"
              action="Unfollow"
              message=""
              error="error"
            />
          )}
        </div>
      ) : (
        <div className="min-h-[50vh] border-[#E3CCE1] w-full flex justify-center items-center">
          <h1 className=" font-medium">No Followers Valuable</h1>
        </div>
      )}
    </>
  );
};

export default FollowersPage;
