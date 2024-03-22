"use client";
import Loader from "@/app/components/Loader";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import GroupAdmin from "@/app/components/group-components/group-post-input/GroupAdmin";
import GroupPostInput from "@/app/components/group-components/group-post-input/GroupPostInput";
import AllPosts from "@/app/components/group-components/group-posts/AllPosts";
import { UserIdContext } from "@/context/UserIdContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiGroup2Fill } from "react-icons/ri";

const page = ({ params }) => {
  const groupId = params["group-id"];
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [groupFeeds, setGroupFeeds] = useState([]);
  const [groupAdmins, setGroupAdmins] = useState([]);
  const [groupUsers, setGroupUsers] = useState([]);

  const router = useRouter();

  const [groupInfo, setGroupInfo] = useState([]);

  useEffect(() => {
    setUserId(userIdFromContext);
    getUserData();
    getGroupInfo();
    getGroupPosts();
  }, [userId]);

  const getGroupInfo = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/get-group-info/${groupId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setGroupInfo(response?.data);
        setGroupAdmins(response?.data?.admins);
        setGroupUsers(response?.data?.users);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setUserData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getGroupPosts = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/get-all-group-posts/${groupId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGroupFeeds(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (groupInfo.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const isAdminUserConditionTrue =
    groupAdmins.some((admin) => admin.id === userId) !==
    groupUsers.some((user) => user.id === userId);

  console.log(groupUsers, "group users");
  return (
    <div className="bg-[#e8e9e8]  min-h-[100vh]  sm:px-5 md:px-10 ">
      <Navbar />

      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-60   pt-24  ">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%]   pt-24 ">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 sm:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex items-center justify-center gap-2">
                  <RiGroup2Fill color="gray" size={50} />

                  <div className="font-semibold">
                    <h2>{groupInfo?.name}</h2>
                  </div>
                </div>

                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5 mr-4"></div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('/assets/Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%", // full screen width
                height: "20vh", // full screen height
                borderRadius: 10,
              }}
              className="text-white p-5 flex  justify-between"
            >
              <h2 className="font-semibold text-2xl">Group Posts</h2>
            </div>
          </div>
          {isAdminUserConditionTrue && (
            <div className="mt-44 sm:mt-32 md:mt-20 mx-20   ">
              <GroupPostInput
                userData={userData}
                getFeeds={getGroupPosts}
                userId={userId}
                groupId={groupId}
              />
            </div>
          )}
          <div className="mt-44 sm:mt-32 md:mt-10">
            <AllPosts
              feeds={groupFeeds}
              setFeeds={setGroupFeeds}
              getFeeds={getGroupPosts}
              userId={userId}
            />
          </div>
        </div>
        <div className="mt-20 w-80  ">
          {groupAdmins.some((admin) => admin?.id === userId) && (
            <GroupAdmin groupId={groupId} userData={userData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
