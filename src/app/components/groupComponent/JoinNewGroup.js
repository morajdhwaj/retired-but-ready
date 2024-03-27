"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RiGroup2Fill } from "react-icons/ri";

const JoinNewGroup = () => {
  const router = useRouter();
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
  const showAllRecommendation = () => {
    router.push("/recommended-groups");
  };

  const mapData = recommendedGroupsData.slice(0, 3);

  const joinGroup = async (groupId) => {
    try {
      const response = await axios.post(
        `https://retpro.catax.me/group-join-request/${groupId}?current_user_id=${userId}`
      );
      getRecommendedGroups();
      console.log(response, "this is response form join  group");
    } catch (error) {
      console.log(error, "this is error from join group");
    }
  };

  return (
    <div className="right-0 sm:right-4 lg:right-6 md:right-12 md:fixed  w-[40vw]  lg:w-[30vw]   h-[100vh] hidden md:block ">
      <div className="lg:px-10 sm:px-5 h-full   lg:w-[28vw ">
        <div className="rounded-lg h-full flex flex-col sm:flex sm:flex-col md:flex md:flex-col md:items-center  py-5 gap-2  border bg-white">
          <div className="text-center text-lg font-medium">
            <h1 className="text-md">Groups you might be interested in</h1>
          </div>
          <div className="border-2 mt-2 border-gray-200  w-full" />
          <div className="max-h-[65vh] sm:px-5 ">
            {mapData.map((data) => (
              <div key={data._id} className="w-full py-1 ">
                <div className="mt-2 flex justify-between gap-5 p-2  w-full md:flex md:flex-col mx-1">
                  <div className="flex">
                    <Link href={`/group-page/${data?._id}`}>
                      <RiGroup2Fill color="gray" size={50} />
                    </Link>
                    <div>
                      <Link
                        href={`/group-page/${data?._id}`}
                        className=" mx-2 capitalize font-semibold "
                      >
                        {data.group_name}
                      </Link>
                      <p className=" mx-2 capitalize ">
                        {data.group_description.slice(0, 30)}
                        {data?.group_description.length > 30 ? "..." : ""}
                      </p>
                      {/* <p className=" mx-2">{data.}</p> */}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {data.join_requests &&
                    data.join_requests.some(
                      (item) => item.requested_user === userId
                    ) ? (
                      <div className="border-2 border-[#773fc6] py-1 px-2 w- lg:w- text-center font-medium rounded-lg  mx-2 lg:mx-0">
                        Requested
                      </div>
                    ) : (
                      <button
                        className="border-2 border-[#773fc6] py-1 px-8 w- 14 lg:w- 24 text-center font-medium rounded-lg  mx-2 lg:mx-0"
                        onClick={() => joinGroup(data._id)}
                      >
                        Join
                      </button>
                    )}
                  </div>
                </div>
                <div className="border-2 mt-2 border-gray-200 mx-5" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-2 mb-full">
            <button
              className="border-2 border-[#773fc6] w-40 h-10 text-lg font-medium text-center rounded-lg"
              onClick={() => showAllRecommendation()}
            >
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNewGroup;
