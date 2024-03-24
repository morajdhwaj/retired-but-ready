"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { UserIdContext } from "@/context/UserIdContext";

const Recommendation = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [recommendedGroupsData, setRecommendedGroupsData] = useState([]);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, []); // Run only once when component mounts

  // RECOMMENDED GROUP API ---------------------------------------------

  const getRecommendedGroups = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/recommended-groups/${userId}`
      );
      setRecommendedGroupsData(response.data);
      console.log(response, "this is response from recommended group");
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
    <div>
      {recommendedGroupsData.map((data) => (
        <div key={data._id}>
          <div className="mt-5 flex justify-between">
            <div className="flex">
              <div className="mt-3">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={50}
                  height={50}
                  alt="pic"
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
              </div>
              <div className="mx-2 mt-1">
                <p className="text-base font-medium lg:text-lg lg:font-semibold">
                  {data.group_name}
                </p>
                <p className=" text-sm md:text-sm ">{data.group_description}</p>
                {/* <p className=" text-sm md:text-sm ">{curelem.paragraph}</p> */}
              </div>
            </div>
            <div>
              {data.join_requests &&
              data.join_requests.some(
                (item) => item.requested_user === userId
              ) ? (
                <button className="border-2 border-[#A8359C] p-1 w- lg:w- text-center font-bold rounded-lg mt-5 mx-2 lg:mx-0">
                  Requested
                </button>
              ) : (
                <button
                  className="border-2 border-[#A8359C] p-1 w-14 lg:w-20 text-center font-bold rounded-lg mt-5 mx-2 lg:mx-0"
                  onClick={() => joinGroup(data._id)}
                >
                  Join
                </button>
              )}
            </div>
          </div>
          <div className="border border-gray-200 mt-2 mx-2" />
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
