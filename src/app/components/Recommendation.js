"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";
import Link from "next/link";

const Recommendation = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [recommendedGroupsData, setRecommendedGroupsData] = useState([]);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]); // Run only once when component mounts

  useEffect(() => {
    getRecommendedGroups();
  }, [userId]);

  // RECOMMENDED GROUP API ---------------------------------------------

  const getRecommendedGroups = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/recommended-groups/${userId}`
      );
      setRecommendedGroupsData(response.data);
      console.log(response.data, "this is response from recommended group");
    } catch (error) {
      console.log(error, "this error get from recommended group api");
    }
  };

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
    <div className="h-[73vh] sm:h-[65vh] overflow-y-scroll pr-2 w-full">
      {recommendedGroupsData.map((data) => (
        <div key={data._id} className="border-b-2 border-gray-200 py-2 pr-2">
          <div className=" flex justify-between">
            <div className="flex">
              <Link href={`/group-page/${data?._id}`} className="">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={50}
                  height={50}
                  alt="pic"
                  className="w-[64px] h-16 rounded-full border-2 border-gray-200"
                />
              </Link>
              <div className="mx-2 mt-1 flex flex-col justify-center">
                <Link
                  href={`/group-page/${data?._id}`}
                  className="text-[17px] font-medium   capitalize "
                >
                  {data.group_name}
                </Link>
                <p className=" text-sm capitalize ">
                  {data.group_description.slice(0, 30)}
                </p>
                {/* <p className=" text-sm md:text-sm ">{curelem.paragraph}</p> */}
              </div>
            </div>
            <div className="flex items-center">
              {data.join_requests &&
              data.join_requests.some(
                (item) => item.requested_user === userId
              ) ? (
                <button className="border-2 border-[#773fc6] py-1 px-2 w- lg:w- text-center font-medium rounded-lg  mx-2 lg:mx-0">
                  Requested
                </button>
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
          {/* <div className="border border-gray-200 mt-2 mx-2" /> */}
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
