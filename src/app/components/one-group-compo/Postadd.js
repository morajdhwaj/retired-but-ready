"use client";

import React, { useState, useEffect, useContext } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import Image from "next/image";
import { MdOutlineComment } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { UserIdContext } from "@/context/UserIdContext";
import axios from "axios";

const Postadd = ({ groupId }) => {
  const [groupPost, setGroupPost] = useState([]);
  const [userId, setUserId] = useState("");
  const { userIdFromContext } = useContext(UserIdContext);

  useEffect(() => {
    setUserId(userIdFromContext);
    getAllGroupPost();
  }, [userId]);

  const getAllGroupPost = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/get-all-group-posts/${groupId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGroupPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(groupId, "POSTADDD KA groupId");
  // const element = [
  //   {
  //     name: "AMAN",
  //   },
  //   {
  //     name: "MORAJ",
  //   },
  //   {
  //     name: "YASEEN",
  //   },
  // ];

  return (
    <>
      {groupPost.map((groupElem, index) => (
        <div
          className=" w-3/4 mt-5 rounded-md border border-gray-400 p-5"
          key={index}
        >
          <div className="w-full  flex justify-between ">
            <div className="flex">
              <Image
                src="/assets/Ellipse-39.png"
                width={60}
                height={60}
                alt="pic"
              />
              <div>
                <h1 className="text-sm">
                  {groupElem.post_user.user_display_name}
                </h1>
                <p className="text-xs text-gray-400">
                  {groupElem.post_user.last_designation}
                </p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
            <div>
              <FaEllipsisVertical className="fill-gray-500 text-2xl" />
            </div>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>
          <div>
            <h1>{groupElem.post_description}</h1>
            <div className="flex items-center justify-center">
              {/* <Image src="/assets/13.jpg" width={400} height={650} alt="pic" /> */}
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center justify-center gap-2">
                <AiOutlineLike className="fill-yellow-600 " />
                <h1>Like</h1>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MdOutlineComment />
                <h1>Comment</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Postadd;
