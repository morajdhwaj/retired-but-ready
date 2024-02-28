"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";

const getUserIdFromStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userId");
  }
  return null;
};

const Recommendation = () => {
  const [userId, setUserId] = useState(getUserIdFromStorage());

  useEffect(() => {
    const userIdFromStorage = getUserIdFromStorage();
    if (userIdFromStorage !== userId) {
      setUserId(userIdFromStorage);
    }
  }, []); // Run only once when component mounts

  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://retpro.catax.me/recommended-groups/${userId}`
        );
        setGroupsData(response.data);
        console.log(response, "this is data from get recommendation api");
      } catch (error) {
        console.log(error, "this error form get all groups");
      }
    };

    fetchData();
  }, [userId]);
  console.log(userId, "this is user id  from recommendation component");

  return (
    <div>
      <div className="flex  h-[69vh] overflow-y-scroll ">
        <div className="  ">
          <div className="flex justify-between   border-gray-200 w-full">
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>245 Member</p>
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
          <div className="flex justify-between  border-b-2 border-gray-200 w-full">
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>245 Member</p>
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
          <div className="flex justify-between  border-b-2 border-gray-200 w-full">
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>245 Member</p>
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
