"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import { SlNote } from "react-icons/sl";

import { FaUserCircle } from "react-icons/fa";
import GroupAllTypePost from "./GroupAllTypePost";

const GroupPostInput = ({ userId, userData, getFeeds, groupId }) => {
  const [anyTypePost, setAnyTypePost] = useState(false);
  const [type, setType] = useState(null);

  return (
    <div>
      <div className="mx-10 border rounded-xl p-5 bg-white">
        <div className="flex gap-5">
          <div>
            {userData?.user_image ? (
              <Image
                alt="rtr-pic"
                src={userData?.user_image}
                height={50}
                width={50}
                className="w-24 h-20 rounded-full border-2 border-gray-200"
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
            <h2 className="font-semibold text-gray-500">Start a post</h2>
          </button>
        </div>
        <div className="mx-20 mt-5 flex  items-center justify-around">
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
          <GroupAllTypePost
            getFeeds={getFeeds}
            userId={userId}
            setAnyTypePost={setAnyTypePost}
            selectedType={type}
            groupId={groupId}
          />
        </div>
      )}
    </div>
  );
};

export default GroupPostInput;
