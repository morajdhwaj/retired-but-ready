"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const data = [
  {
    information: "Lorem ipsum dolor",
    member: "241 member",
  },
  {
    information: "Lorem ipsum dolor",
    member: "242 member",
  },
  {
    information: "Lorem ipsum dolor",
    member: "243 member",
  },
];
const getUserIdFromStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userId");
  }
  return null;
};
const JoinNewGroup = () => {
  const [userId, setUserId] = useState(getUserIdFromStorage());
  const [recommendedGroupsData, setRecommendedGroupsData] = useState([]);

  useEffect(() => {
    getRecommendedGroups();
    const userIdFromStorage = getUserIdFromStorage();
    if (userIdFromStorage !== userId) {
      setUserId(userIdFromStorage);
    }
  }, []); // Run only once when component mounts

  // RECOMMENDED GROUP API ---------------------------------------------

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

  useEffect(() => {
    console.log(recommendedGroupsData, "this is all data");
  }, [recommendedGroupsData]);

  const mapData = recommendedGroupsData.slice(0, 3);

  return (
    <div className="right-0 sm:right-4 lg:right-6 md:right-12 md:fixed   lg:fixed  xl:fixed  top-40 xl:right-72   h-[80vh]">
      <div className="lg:px-10 sm:px-5  w-full  lg:w-[23vw] ">
        <div className="rounded-lg flex flex-col sm:flex sm:flex-col md:flex md:flex-col md:items-center sm:p-5 py-5 gap-2  border bg-white">
          <div className="text-center text-lg font-bold">
            <h1 className="text-lg md:text-sm">
              Groups you might be interested in
            </h1>
          </div>

          {mapData.map((data) => (
            <div key={data._id} className="w-full">
              <div className="mt-5 flex justify-between  w-full md:flex md:flex-col mx-1">
                <div className="flex">
                  <div>
                    <Image
                      src="/assets/Ellipse-39.png"
                      width={50}
                      height={50}
                      alt="pic"
                      className="w-16 h-16 rounded-full border-2 border-gray-200"
                    />
                  </div>
                  <div>
                    <p className=" mx-2">{data.group_name}</p>
                    <p className=" mx-2">{data.group_description}</p>
                    {/* <p className=" mx-2">{data.}</p> */}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className="border-2 border-[#A8359C]  sm:w-20 p-1 rounded-lg text-sm font-bold">
                    Join
                  </button>
                </div>
              </div>
              <div className="border-2 mt-2 border-gray-200 mx-5" />
            </div>
          ))}

          <div className="flex justify-center items-center mt-2 mb-full">
            <button className="border-2 border-[#A8359C] w-40 h-10 text-lg font-medium text-center rounded-lg">
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNewGroup;
