"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import axios from "axios";
import PopUp from "@/app/components/PopUp";

const FollowersPage = () => {
  const [followers, setFollowers] = useState([]);
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFollower, setSelectedFollower] = useState(null);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
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
          <div className="flex mt-5" key={index}>
            <div className="w-3/4  flex justify-between items-center">
              <div className="flex">
                <div className="">
                  <Image
                    width={50}
                    height={50}
                    alt="pic"
                    src={
                      follower.from_user_image
                        ? follower.from_user_image
                        : "/assets/Ellipse-39.png"
                    }
                    className="rounded "
                  />
                </div>
                <div className="">
                  <h1 className="text-[#2C2C2C] font-medium">
                    {follower.from_user_full_name}
                  </h1>
                  <p className="text-[#888888] font-medium text-sm">
                    Human resource executive
                  </p>
                  <p className="text-[#888888] font-medium text-sm">
                    6 post this week
                  </p>
                </div>
              </div>

              <button className="border-2 border-[#A8359C]  rounded-md p-2">
                Following
              </button>
            </div>
            <div className="w-1/4  flex items-center justify-center">
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
                        Unfollow
                      </button>
                    </div>
                  </div>
                )}
                <button className="text-2xl text-gray-500">
                  <PiShareFatLight />
                </button>
              </div>
            </div>
          </div>
        ))}

      {showDeleteModal && (
        <PopUp
          close={handleDeleteModal}
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
