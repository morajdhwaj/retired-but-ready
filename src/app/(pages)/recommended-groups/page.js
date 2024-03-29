"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { RiGroup2Fill } from "react-icons/ri";
import Loader from "@/app/components/Loader";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [recommendedGroupsData, setRecommendedGroupsData] = useState([]);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]); // Run only once when component mounts

  // RECOMMENDED GROUP API ---------------------------------------------

  useEffect(() => {
    if (userId) {
      getRecommendedGroups();
    }
  }, [userId]);

  const getRecommendedGroups = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/recommended-groups/${userId}`
      );
      setRecommendedGroupsData(response.data);
      console.log(response.data, "this is response --------------------");
    } catch (error) {
      console.log(error, "this error get from recommended group api aman");
    }
  };

  const joinGroup = async (groupId) => {
    try {
      const response = await axios.post(
        `https://retpro.catax.me/group-join-request/${groupId}?current_user_id=${userId}`
      );
      getRecommendedGroups();
      toast.success(response.data.message);
      console.log(response, "this is response form join  group");
    } catch (error) {
      console.log(error, "this is error from join group");
    }
  };

  useEffect(() => {
    console.log(
      recommendedGroupsData,
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
  }, [recommendedGroupsData]);

  if (recommendedGroupsData.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#e8e9e8]   lg:px-10 min-h-[100vh] ">
      <Navbar />
      <div className="  pt-10 sm:pt-20 lg:pt-10 lg:mt-0">
        <div className="hidden lg:flex ">
          <div className="">
            <Sidebar />
          </div>
        </div>
        <div className="   mt-[60px] lg:mt-[92px]  mx-5 sm:mx-14 lg:ml-[260px] lg:mr-32 sm:mr-14 bg-white p-10 pt-5 rounded-lg min-h-[70vh] ">
          <h1 className="text-base font-semibold mb-6 ">
            Recommendations just for you
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
            {recommendedGroupsData.map((data) => (
              <div
                className="rounded-lg h-[350px] w-full  shadow-xl overflow-hidden relative "
                key={data?._id}
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="">
                    {/* <button className="absolute right-2 top-2">
                      <RxCross2 size={20} />
                    </button> */}
                    <div className="bg-[#B8CDE0] w-full h-[120px]"></div>
                    <Link href={`/group-page/${data?._id}`} className="">
                      <div className="m-auto mt-[-50px] flex items-center justify-center">
                        <RiGroup2Fill color="gray" size={100} />
                      </div>
                    </Link>
                    <Link href={`/group-page/${data?._id}`}>
                      <p className="text-center mt-4 text-lg font-bold px-2">
                        {data?.group_name}
                      </p>
                    </Link>
                    <p className="text-center p-2 text-xs">
                      {" "}
                      {data?.group_description}
                    </p>
                  </div>
                  <div className="flex justify-center bottom-[20px] mb-5 ">
                    {data.join_requests &&
                    data.join_requests.some(
                      (item) => item.requested_user === userId
                    ) ? (
                      <div className="border-2 border-[#773fc6] py-1 w- lg:w- text-center font-bold rounded-lg my-1 px-2 mx-2 lg:mx-0">
                        Requested
                      </div>
                    ) : (
                      <button
                        className="border-2 border-[#773fc6] p-1 w-14 lg:w-20 text-center font-bold rounded-lg my-1 mx-2 lg:mx-0"
                        onClick={() => joinGroup(data?._id)}
                      >
                        Join
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
