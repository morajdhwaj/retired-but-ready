"use client";
import Image from "next/image";

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
  const [showChat, setShowChat] = useState("");

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
    <>
      {following.length > 0 ? (
        <div className="min-h-[50vh]">
          {following.length > 0 &&
            following.map((item) => (
              <div
                className="w-full p-2 pl-0 sm:flex sm:justify-between sm:items-center  border-b border-[#E3CCE1] mt-5"
                key={item?.to_user_id}
              >
                <div className="w-full   flex flex-col sm:flex-row sm:justify-start justify-center  items-center gap-2">
                  <div className=" flex items-center ">
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
                  <div className=" flex items-center ">
                    <Link href={`/profile/${item?.to_user_id}`}>
                      <h1 className="text-[#2C2C2C] text-sm text-start font-medium capitalize mt-[-10px]">
                        {item?.to_user_full_name}
                      </h1>
                      <p className="">{}</p>
                    </Link>
                  </div>
                </div>
                <div className="w-full justify-center flex  sm:justify-end items-center gap-5 sm:gap-10 mt-2 sm:mt-0 lg:mt-0 ">
                  <button
                    className="border border-[#773fc6] text-black rounded-md  text-xs sm:text-sm  p-1 sm:p-2"
                    onClick={() => handleUnfollowModal(item)}
                  >
                    Following
                  </button>
                  <button
                    className="text-3xl sm:text-4xl text-gray-400 relative"
                    onMouseEnter={() => setShowChat(item?.to_user_id)}
                    onMouseLeave={() => setShowChat("")}
                    onClick={() => setChatId(item?.user_id)}
                  >
                    <Image src="/emoji/chat.png" width={30} height={30}></Image>
                    {showChat === item?.to_user_id && (
                      <p className="bg- [#773fc6] text-[#62B498] text-xs font-medium px-1 py- rounded-sm  absolute top-[-25px] right-1 ">
                        Chat
                      </p>
                    )}
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
      ) : (
        <div className="min-h-[50vh] border-[#E3CCE1] w-full flex justify-center items-center">
          <h1 className=" font-medium">No Following Valuable</h1>
        </div>
      )}
    </>
  );
};
export default FollowingPage;
