"use client";
import React, { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import PopUp from "../components/PopUp";

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
  const [groupsData, setGroupsData] = useState([]);
  const [showOption, setShowOption] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");

  // GET USER ID FROM LOCALSTORAGE --------------------------------------

  useEffect(() => {
    const userIdFromStorage = getUserIdFromStorage();
    if (userIdFromStorage !== userId) {
      setUserId(userIdFromStorage);
    }
  }, []); // Run only once when component mounts

  // GET GROUP DATA FROM API --------------------------------------------------
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

  // DELETE GROUP ------------------------------------------------------------------

  const deleteGroup = async () => {
    try {
      const response = await axios.delete(
        `https://retpro.catax.me/delete-group/${showDeleteModal}?current_user_id=${userId}`
      );
      toast.success(response.data.message);
      setShowOption("");
      setShowDeleteModal("");

      console.log(response, "this is response from delete group");
    } catch (error) {
      console.log(error, "this is error from delete group api");
      toast.error(error);
    }
  };

  // EDIT GROUP --------------------------------------------------------------------------

  const handleDeleteModal = () => {
    setShowDeleteModal("");
  };

  console.log(userId, "this is user id  from our group");

  return (
    <div>
      <div className=" flex flex-col   lg:w-[40vh xl:w-[60vh  border-white bg-white rounded-lg">
        {groupsData.map((groupData, key) => (
          <div>
            <div className="flex justify-between relative" key={key}>
              {/* Map over the information array */}
              <div className="flex mt-2 mx-1 ">
                <Image
                  src="/assets/Ellipse-39.png"
                  width={40}
                  height={40}
                  alt="pic"
                  className="w-14 h-14 rounded-full border-2 border-gray-200 mt-3"
                />
                <div className="mt-5 mx-2 text-base font-medium lg:text-sm">
                  <p>
                    {groupData.group_name}{" "}
                    <span className="text-[#d547c7]">
                      {" "}
                      {groupData.created_by === userId ? "(owner)" : "(member)"}
                    </span>
                  </p>
                  <p className="mt-1">240 member</p>
                </div>
              </div>
              <div>
                <button
                  className=" mt-10 md:mt-10 mx-2"
                  onClick={() => {
                    showOption.length === 0
                      ? setShowOption(groupData.group_id)
                      : setShowOption("");
                  }}
                >
                  <BsThreeDotsVertical />
                </button>
              </div>
              {showOption === groupData.group_id ? (
                <div className="absolute flex flex-col border right-2 top-16 bg-white py-3 px-4 rounded-md gap-2  z-20">
                  <Link className="" href={`/edit-group/${groupData.group_id}`}>
                    Edit
                  </Link>
                  <button
                    className=""
                    onClick={() => {setShowDeleteModal(groupData.group_id), setShowOption("");}}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-2 border border-gray-200 mx-1" />
          </div>
        ))}
      </div>
      {showDeleteModal && (
        <PopUp
          close={handleDeleteModal}
          onClick={deleteGroup}
          title="Are you want Delete this post"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default Page;
