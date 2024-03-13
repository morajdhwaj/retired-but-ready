"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import axios from "axios";
import PopUp from "@/app/components/PopUp";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
 import { UserIdContext } from "@/context/UserIdContext";

const FollowersPage = () => {
   const { userIdFromContext } = useContext(UserIdContext);
  const [followers, setFollowers] = useState([]);
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFollower, setSelectedFollower] = useState(null);

  useEffect(() => {
    setUserId(userIdFromContext);
    getFollowers();
  }, [userId]);

  const getFollowers = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-followers/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
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

  return (
    <div>
      {followers.length > 0 &&
        followers.map((follower, index) => (
          <div className="flex ">
            <div className="w-3/4   flex-wrap lg:flex justify-between items-center  pb-5">
              <div className="w-[10%]">
                <Link
                  key={follower.from_user_id}
                  href={`/profile/${follower.from_user_id}`}
                >
                  {follower.from_user_image ? (
                    <Image
                      src={follower.from_user_image}
                      width={30}
                      height={30}
                      alt="pic"
                      className="w-16 h-16 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle className="w-16 h-16 rounded-full border-2 border-gray-200 " />
                  )}
                </Link>
              </div>
              <div className="flex justify-between items-center w-[90%]  border-[#E3CCE1] border-b  p-2">
                <div className="">
                  <Link href={`/profile/${follower.from_user_id}`}>
                    <h1 className="text-[#2C2C2C] text-sm font-medium">
                      {follower.from_user_full_name}
                    </h1>
                  </Link>
                  <p className="text-[#888888]  font-medium text-xs">
                    Human resource executive
                  </p>
                  <p className="text-[#888888] font-medium text-xs mt-2">
                    6 post this week
                  </p>
                </div>

                <button className="border border-[#A8359C] text-black rounded-md p-2">
                  Following
                </button>
              </div>
            </div>
            <div className="w-1/4 gap-4 flex items-center justify-center  p-5">
              <div>
                <button className="text-2xl text-gray-500">
                  <BsThreeDotsVertical onClick={() => handleShow(index)} />
                </button>
                {show[index] && (
                  <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-48 px-2 ">
                    <div className="flex flex-col p-2 items-center justify-center">
                      <button
                        onClick={() => handleDeleteModal(follower)}
                        className="hover:bg-[#773fc6] w-20 rounded-md hover:text-white text-black p-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
                <button className="text-2xl text-gray-500">
                  <IoChatbubbleEllipsesOutline />
                </button>
              </div>
            </div>
          </div>
        ))}

      {showDeleteModal && (
        <PopUp
          close={handleCloseDeleteModal}
          onClick={deleteFollowers}
          title="Are you want Remove this follower"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default FollowersPage;
