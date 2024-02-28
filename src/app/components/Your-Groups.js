"use client";
import React, { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
const information = [
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "240 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "241 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "242 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "243 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "244 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "245 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "246 member",
  },
  {
    Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Member: "247 member",
  },
];

const getUserIdFromStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userId");
  }
  return null;
};

const Page = () => {
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
          `https://retpro.catax.me/my-groups/${userId}`
        );
        setGroupsData(response.data);
        console.log(response, "this is data from get group api");
      } catch (error) {
        console.log(error, "this error form get all groups");
      }
    };

    fetchData();
  }, [userId]);
  console.log(userId, "this is user id  from our group");

  return (
    <div>
      <div className="flex flex-col   border-white bg-white rounded-lg h-[69vh] overflow-y-scroll ">
        {information.map((curelem, key) => (
          <div>
            <div className="flex justify-between" key={key}>
              {/* Map over the information array */}
              <div className="flex mt-2 mx-1 ">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={40}
                  height={40}
                  alt="pic"
                  className="w-14 h-14 rounded-full border-2 border-gray-200 mt-3"
                />
                <div className="mt-5 mx-2 text-sm">
                  <p>{curelem.Data}</p>
                  <p className="mt-1">{curelem.Member}</p>
                </div>
              </div>
              <div>
                <button className="mt-6 mx-2">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
            <div className="mt-2 border border-gray-200 mx-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
