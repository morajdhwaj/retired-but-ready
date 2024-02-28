"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import axios from "axios";

const FollowersPage = () => {
  const [follower, setFollowers] = useState([]);
  const [userId, setUserId] = useState("");

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

  console.log(follower, "follower ka data");

  // const contacts = [
  //   {
  //     name: "Jaya",
  //     role: "OPPO India Marketing Head",
  //     company: "Tech Connection India Pvt.Ltd.",
  //     lastConnected: "Connected 2 days ago",
  //   },
  //   {
  //     name: "Parul",
  //     role: "Role for Parul",
  //     company: "Company for Parul",
  //     lastConnected: "Connected 2 days ago",
  //   },
  //   {
  //     name: "Kimjan",
  //     role: "Role for Kimjan",
  //     company: "Company for Kimjan",
  //     lastConnected: "Connected 2 days ago",
  //   },
  // ];

  return (
    <div>
      {follower.length > 0 &&
        follower.map((followItem, index) => (
          <div className="flex mt-5" key={index}>
            <div className="w-3/4  flex justify-between items-center">
              <div className="flex">
                <div className="">
                  <Image
                    // src="/assets/Ellipse-39.png"
                    width={50}
                    height={50}
                    alt="pic"
                    src={
                      followItem.from_user_image
                        ? followItem.from_user_image
                        : "/assets/Ellipse-39.png"
                    }
                    className="rounded "
                  />
                </div>
                <div className="">
                  <h1 className="text-[#2C2C2C] font-medium">
                    {followItem.from_user_full_name}
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
                  <BsThreeDotsVertical />
                </button>
                <button className="text-2xl text-gray-500">
                  <PiShareFatLight />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FollowersPage;
