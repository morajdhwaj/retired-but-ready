"use client";

import axios from "axios";

import toast from "react-hot-toast";
import { UserIdContext } from "@/context/UserIdContext";
import React, { useState, useEffect, useContext } from "react";

const GroupPostAsText = ({
  descriptions,
  setDescriptions,

  setAnyGroupPost,

  groupId,
  getAllGroupPost,
}) => {
  const [userId, setUserId] = useState("");
  const { userIdFromContext } = useContext(UserIdContext);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userId]);

  const createPost = () => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/create",
      headers: { "Content-Type": "application/json" },
      data: {
        post_user: userId,
        post_type: "text",
        post_description: descriptions,
        post_location: "group",
        location_id: groupId,
        is_published: true,
        comment_condition: "string",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setAnyGroupPost(false);
        getAllGroupPost();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  console.log(groupId, "groptext ka id");
  console.log(descriptions, "helooo description");
  console.log(userId, "text userID");

  return (
    <div className="mx-5 ">
      <textarea
        value={descriptions}
        onChange={(e) =>
          setDescriptions(
            e.target.value.replace(/(^[a-zA-Z])|(\.\s*\w)/gm, (match) =>
              match.toUpperCase()
            )
          )
        }
        className="border border-gray-200 w-full h-60 p-5 rounded"
        placeholder="Write your thought here..."
      />
      <div className="flex justify-end mx-5 mt-5 gap-5">
        <button
          onClick={() => createPost(true)}
          className="bg-[#773fc6] text-white px-4 py-2 rounded-lg"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default GroupPostAsText;
