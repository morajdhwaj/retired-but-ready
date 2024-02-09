"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import { SlNote } from "react-icons/sl";
import PostAsText from "./PostAsText";
import PostAsMultiMedia from "./PostAsMultiMedia";
import AllTypePost from "./AllTypePost";
import { FaUserCircle } from "react-icons/fa";

const PostInput = ({ userId, feeds, setFeeds, userData, getFeeds }) => {
  const [anyTypePost, setAnyTypePost] = useState(false);

  return (
    <div>
      <div className="mx-10 border rounded-xl p-5 bg-white">
        <div className="flex gap-5">
          <div>
            {userData?.user_image ? (
              <Image alt="" src={userData?.user_image} height={50} width={50} />
            ) : (
              <FaUserCircle size={50} />
            )}
          </div>
          <button
            onClick={() => setAnyTypePost(true)}
            className=" w-full border border-gray-300 rounded-full flex items-center px-5"
          >
            <h2 className="font-semibold text-gray-500">Start a post</h2>
          </button>
        </div>
        <div className="mx-20 mt-5 flex  justify-between">
          <div className=" p-3 rounded  flex  items-center gap-2">
            <TfiGallery color="#773fc3" size="20" />
            <p>Media</p>
          </div>
          <div className=" p-3 rounded  flex  items-center gap-2">
            <SlNote color="#773fc3" size="20" />
            <p>Write Article</p>
          </div>
        </div>
      </div>

      {anyTypePost && (
        <div>
          <AllTypePost
            getFeeds={getFeeds}
            userId={userId}
            setAnyTypePost={setAnyTypePost}
          />
        </div>
      )}
    </div>
  );
};

export default PostInput;
