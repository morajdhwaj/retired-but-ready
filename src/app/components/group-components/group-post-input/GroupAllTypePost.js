"use client";

import axios from "axios";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import toast from "react-hot-toast";
import GroupPostAsText from "./GroupPostAsText";
import GroupPostAsMultiMedia from "./GroupPostAsMultiMedia";

const GroupAllTypePost = ({
  userId,
  groupId,
  setAnyTypePost,
  getFeeds,
  selectedType,
}) => {
  const [descriptions, setDescriptions] = useState("");
  const [type, setType] = useState(selectedType);

  console.log(type, "type");

  return (
    <div className="fixed inset-0 flex  justify-center z-50">
      <div className="absolute inset-0 bg-black/50 opacity-75"></div>
      <div
        className={`bg-white rounded-md z-50 h-[55vh] w-full sm:w-4/5 md:w-3/5 xl:w-2/5 mt-20 p-2 sm:mr-20`}
      >
        <div className="flex justify-end m-2">
          <button onClick={() => setAnyTypePost(false)}>
            <GrClose color="#f96363" />
          </button>
        </div>
        <div>
          <div className="mx-5 flex gap-5">
            <button
              onClick={() => setType("Text")}
              className={`border border-gray-300 rounded-lg  px-2 py-1 w-32 ${
                type == "Text" && "bg-[#773fc6]  text-white"
              }`}
            >
              Text
            </button>
            <button
              onClick={() => setType("Multimedia")}
              className={`border border-gray-300 rounded-lg px-2 py-1 w-32 ${
                type == "Multimedia" && "bg-[#773fc6]  text-white"
              }`}
            >
              Multimedia
            </button>
          </div>

          <div className="mt-5 ">
            {type == "Text" && (
              <GroupPostAsText
                getFeeds={getFeeds}
                groupId={groupId}
                descriptions={descriptions}
                setDescriptions={setDescriptions}
                userId={userId}
                setAnyTypePost={setAnyTypePost}
              />
            )}
            {type == "Multimedia" && (
              <GroupPostAsMultiMedia
                getFeeds={getFeeds}
                groupId={groupId}
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

export default GroupAllTypePost;
