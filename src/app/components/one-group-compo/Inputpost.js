"use client";

import Image from "next/image";
import { GoFileMedia } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

import { UserIdContext } from "@/context/UserIdContext";
import React, { useState, useEffect, useContext } from "react";

import AllTypeGroupPost from "./AllTypeGroupPost";

const Inputpost = ({ groupId }) => {
  const [anyGroupPost, setAnyGroupPost] = useState(false);
  const [type, setType] = useState(null);
  const [userId, setUserId] = useState("");
  const { userIdFromContext } = useContext(UserIdContext);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userId]);

  console.log(groupId, "inputpost ka groupid");
  console.log(userId, "POST KA USERiD");

  return (
    <div className=" w-3/4 mt-5">
      <div className="rounded-md border border-gray-400  p-5">
        <div className="flex gap-2">
          <Image
            src="/assets/Ellipse-39.png"
            width={60}
            height={60}
            alt="pic"
          />
          <input
            placeholder="  Start a group in this group"
            type="text"
            className="rounded-full w-full border border-gray-300 bg-slate-200 "
          />
        </div>
        <div
          className="flex justify-between items-center mt-3 "
          onClick={() => {
            setAnyGroupPost(true);
            setType("Multimedia");
          }}
        >
          <div className="flex gap-2 items-center pl-28">
            <GoFileMedia />
            <p>Media</p>
          </div>
          <div
            className="flex gap-2 items-center pr-28"
            onClick={() => {
              setAnyGroupPost(true);
              setType("Text");
            }}
          >
            <FiEdit />
            <p>Text</p>
          </div>
        </div>
      </div>
      {anyGroupPost && (
        <div>
          <AllTypeGroupPost
            userId={userId}
            setAnyGroupPost={setAnyGroupPost}
            selectedType={type}
            groupId={groupId}
          />
        </div>
      )}
    </div>
  );
};

export default Inputpost;
