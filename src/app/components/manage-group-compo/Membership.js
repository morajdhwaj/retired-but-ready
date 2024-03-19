"use client";

import React, { useContext, useEffect, useState } from "react";
import Member from "./Member";
import Invite from "./Invite";
import Admin from "./Admin";
import Request from "./Request";
import Blocked from "./Blocked";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";

const Membership = ({ groupId }) => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [tab, setTab] = useState("member");
  const [groupInfo, setGroupInfo] = useState([]);

  useEffect(() => {
    getGroupInfo();
  }, []);

  const getGroupInfo = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/get-group-info/${groupId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGroupInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="flex gap-5 ">
      <div className="flex flex-col bg-white py-5 w-48 gap-3 rounded-lg">
        <button
          onClick={() => setTab("member")}
          className="text-left text-gray-700 "
        >
          <h2
            className={` pl-2   ${
              tab == "member"
                ? "border-l-2  border-[#773FC6]  text-[#773FC6]"
                : "border-l-2  border-white"
            }`}
          >
            Member
          </h2>
        </button>
        <button
          onClick={() => setTab("admin")}
          className="text-left text-gray-700 "
        >
          <h2
            className={` pl-2   ${
              tab == "admin"
                ? "border-l-2  border-[#773FC6]  text-[#773FC6]"
                : "border-l-2  border-white"
            }`}
          >
            Admin
          </h2>
        </button>
        <button
          onClick={() => setTab("request")}
          className="text-left text-gray-700 "
        >
          <h2
            className={` pl-2   ${
              tab == "request"
                ? "border-l-2  border-[#773FC6]  text-[#773FC6]"
                : "border-l-2  border-white"
            }`}
          >
            Request
          </h2>
        </button>
        <button
          onClick={() => setTab("invite")}
          className="text-left text-gray-700 "
        >
          <h2
            className={` pl-2   ${
              tab == "invite"
                ? "border-l-2  border-[#773FC6]  text-[#773FC6]"
                : "border-l-2  border-white"
            }`}
          >
            Invite
          </h2>
        </button>
        <button
          onClick={() => setTab("blocked")}
          className="text-left text-gray-700 "
        >
          <h2
            className={` pl-2   ${
              tab == "blocked"
                ? "border-l-2  border-[#773FC6]  text-[#773FC6]"
                : "border-l-2  border-white"
            }`}
          >
            Blocked
          </h2>
        </button>
      </div>
      <div className="w-full">
        {tab == "member" && (
          <Member
            groupId={groupId}
            groupInfo={groupInfo}
            userId={userIdFromContext}
            getGroupInfo={getGroupInfo}
          />
        )}
        {tab == "admin" && (
          <Admin
            groupId={groupId}
            groupInfo={groupInfo}
            userId={userIdFromContext}
            getGroupInfo={getGroupInfo}
          />
        )}
        {tab == "request" && <Request groupId={groupId} />}
        {tab == "invite" && <Invite groupId={groupId} />}
        {tab == "blocked" && <Blocked groupId={groupId} />}
      </div>
    </div>
  );
};

export default Membership;
