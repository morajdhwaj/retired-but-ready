"use client";

import axios from "axios";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import PostAsText from "./PostAsText";
import toast from "react-hot-toast";
import PostAsMultiMedia from "./PostAsMultiMedia";

const AllTypePost = ({ userId, setAnyTypePost, getFeeds, selectedType }) => {
  const [descriptions, setDescriptions] = useState("");
  const [type, setType] = useState(selectedType);

  const createPost = (is_published) => {
    const options = {
      method: "POST",
      url: "https://retpro.catax.me/post/create",
      headers: { "Content-Type": "application/json" },
      data: {
        post_user: userId,
        post_type: type.toLowerCase(),
        post_description: descriptions,
        post_location: "global",
        location_id: null,
        is_published: is_published,
        comment_condition: "string",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setAnyTypePost(false);
        getFeeds();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  console.log(type, "type");

  return (
    <div className="fixed inset-0 flex  justify-center z-50">
      <div className="absolute inset-0 bg-black/50 opacity-75"></div>
      <div
        className={`bg-white rounded-md z-50  h-[50vh] w-full sm:w-4/5 md:w-3/5 xl:w-2/5 mt-20 sm:mr-20`}
      >
        <div className="flex justify-end m-2">
          <button onClick={() => setAnyTypePost(false)}>
            <GrClose />
          </button>
        </div>
        <div>
          <div className="mx-5">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1"
            >
              <option>Multimedia</option>
              <option>Text</option>
            </select>
          </div>
          <div className="mt-5 ">
            {type == "Text" && (
              <PostAsText
                getFeeds={getFeeds}
                descriptions={descriptions}
                setDescriptions={setDescriptions}
                userId={userId}
                setAnyTypePost={setAnyTypePost}
              />
            )}
            {type == "Multimedia" && (
              <PostAsMultiMedia
                getFeeds={getFeeds}
                descriptions={descriptions}
                setDescriptions={setDescriptions}
                userId={userId}
                setAnyTypePost={setAnyTypePost}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTypePost;
