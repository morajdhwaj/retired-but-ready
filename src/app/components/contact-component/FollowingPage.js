"use client";
import Image from "next/image";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import { UserIdContext } from "@/context/UserIdContext";
import axios from "axios";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import PopUp from "../PopUp";

const FollowingPage = () => {
  const router = useRouter();
  const [following, setFollowing] = useState([]);
  const { userIdFromContext, setChatIdContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [selectedFollowing, setSelectedFollowing] = useState(null);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]);

  useEffect(() => {
    if (userId) {
      getFollowing();
    }
  }, [userId]);

  const getFollowing = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/following/${userId}`
      );
      setFollowing(response.data);
      console.log(response.data, "this is response form following page");
    } catch (error) {
      console.log(error, "this error get from recommended following page");
    }
  };

  const handleUnfollowModal = (following) => {
    setSelectedFollowing(following.to_user_id);
  };

  const unfollowFollowing = async () => {
    try {
      const response = await axios.post(
        `https://retpro.catax.me/unfollow/${userId}/${selectedFollowing}`
      );
      console.log(response.data, " responsoe");
      setSelectedFollowing(null);
      getFollowing();
    } catch (error) {
      console.log(error, "this is unfollow error");
    }
  };

  const setChatId = (chatId) => {
    setChatIdContext(chatId);
    router.push("/message-page");
  };

  return (
    <div>
      {following.length > 0 &&
        following.map((item) => (
          <div
            className="w-full p-2 flex flex-col sm:flex-row lg:flex-row border-b border-[#E3CCE1] mt-5"
            key={item?.to_user_id}
          >
            <div className="w-full sm:w-[75%] lg:w-[75%] flex justify-between ">
              <div className="w-1/2  sm:w-[15%]  flex items-center justify-center">
                <Link href={`/profile/${item.to_user_id}`}>
                  {item?.to_user_image ? (
                    <Image
                      src={item?.to_user_image}
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
              <div className="w-1/2 sm:w-[85%]  ">
                <Link href={`/profile/${item?.to_user_id}`}>
                  <h1 className="text-[#2C2C2C] text-sm text-start font-medium mt-2">
                    {item?.to_user_full_name}
                  </h1>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-[25%] lg:w-[25%] flex justify-around items-center mt-2 sm:mt-0 lg:mt-0">
              <button
                className="border border-[#A8359C] text-black rounded-md  text-xs sm:text-sm p-2"
                onClick={() => handleUnfollowModal(item)}
              >
                Following
              </button>
              <button
                className="text-3xl sm:text-4xl text-gray-400"
                onClick={() => setChatId(item?.to_user_id)}
              >
                <IoChatbubbleEllipsesOutline />
              </button>
            </div>
          </div>
        ))}
      {selectedFollowing && (
        <PopUp
          close={() => setSelectedFollowing(null)}
          onClick={unfollowFollowing}
          title="Are you sure you want to Unfollow this Following?"
          action="Unfollow"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default FollowingPage;
