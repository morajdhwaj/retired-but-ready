"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TfiGallery } from "react-icons/tfi";
import { SlNote } from "react-icons/sl";
import PostAsText from "./PostAsText";
import PostAsMultiMedia from "./PostAsMultiMedia";
import AllTypePost from "./AllTypePost";

const PostInput = ({ userId }) => {
  const [anyTypePost, setAnyTypePost] = useState(false);

  return (
    <div>
      <div className="mx-10 border rounded-xl p-5 bg-white">
        <div className="flex gap-5">
          <div>
            <Image alt="" src="/assets/110.png" height={50} width={50} />
          </div>
          <button
            onClick={() => setAnyTypePost(true)}
            className=" w-full border border-gray-300 rounded-full flex items-center px-5"
          >
            <h2 className="font-semibold text-gray-500">Start a post</h2>
          </button>
        </div>
        <div className="mx-20 mt-5 flex  justify-between">
          <button className=" p-3 rounded hover:bg-gray-100 flex  items-center gap-2">
            <TfiGallery color="#773fc3" size="20" />
            <p>Media</p>
          </button>
          <button className=" p-3 rounded hover:bg-gray-100 flex  items-center gap-2">
            <SlNote color="#773fc3" size="20" />
            <p>Write Article</p>
          </button>
        </div>
      </div>

      {anyTypePost && (
        <div>
          <AllTypePost userId={userId} setAnyTypePost={setAnyTypePost} />
        </div>
      )}
    </div>
  );
};

export default PostInput;