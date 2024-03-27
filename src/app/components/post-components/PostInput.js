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
  const [type, setType] = useState(null);

  return (
    <div>
      <div className="mx-10 border rounded-xl p-5 bg-white">
        <div className="flex flex-col md:flex-row  gap-5">
          <div className="flex items-center justify-center">
            {userData?.user_image ? (
              <Image
                alt="rtr-pic"
                src={userData?.user_image}
                height={40}
                width={40}
                className="w-16 h-14 rounded-full border-2 border-gray-200"
              />
            ) : (
              <FaUserCircle color="gray" size={50} />
            )}
          </div>
          <button
            onClick={() => {
              setAnyTypePost(true);
              setType("Text");
            }}
            className=" w-full border border-gray-300 rounded-full flex items-center px-5"
          >
            <h2 className="font-semibold text-gray-500 py-2 text-center md:text-start w-full">
              Start a post
            </h2>
          </button>
        </div>
        <div className="md:mx-20 mt-5 sm:flex  items-center justify-around">
          <button
            onClick={() => {
              setAnyTypePost(true);
              setType("Multimedia");
            }}
            className=" p-3 rounded  flex  items-center gap-2"
          >
            <TfiGallery color="#773fc3" size="20" />
            <p>Media</p>
          </button>
          <button
            onClick={() => {
              setAnyTypePost(true);
              setType("Text");
            }}
            className=" p-3 rounded  flex  items-center gap-2"
          >
            <SlNote color="#773fc3" size="20" />
            <p>Write text</p>
          </button>
        </div>
      </div>

      {anyTypePost && (
        <div>
          <AllTypePost
            getFeeds={getFeeds}
            userId={userId}
            setAnyTypePost={setAnyTypePost}
            selectedType={type}
          />
        </div>
      )}
    </div>
  );
};

export default PostInput;
