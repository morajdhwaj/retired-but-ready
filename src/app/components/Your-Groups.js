"use client";
import React, { useContext, useEffect, useReducer, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import PopUp from "../components/PopUp";
import { UserIdContext } from "@/context/UserIdContext";

const Page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [userId, setUserId] = useState("");
  const [groupsData, setGroupsData] = useState([]);
  const [showOption, setShowOption] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");

  // GET USER ID FROM LOCALSTORAGE --------------------------------------

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userIdFromContext]); // Run only once when component mounts

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);
  // GET GROUP DATA FROM API --------------------------------------------------

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/my-groups/${userId}`
      );
      setGroupsData(response.data);
      console.log(response.data, "this is data from get group api");
    } catch (error) {
      console.log(error, "this error form get all groups");
    }
  };

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

  console.log(userId, "this is user id  from our group ");

  return (
    <div>
      <div className=" flex flex-col w-full   lg:w-[40vh xl:w-[60vh  border-white bg-white rounded-lg h-[73vh] sm:h-[65vh] overflow-y-scroll pr-2">
        {groupsData.map((groupData) => (
          <div
            key={groupData?.group_id}
            className="border-b-2 border-gray-200 py-2"
          >
            <div className="flex justify-between relative">
              {/* Map over the information array */}
              <Link
                className="flex  mx-1 items-center "
                href={`/group-page/${groupData?.group_id}`}
              >
                <Image
                  src="/assets/Ellipse-39.png"
                  width={40}
                  height={40}
                  alt="pic"
                  className="w-14 h-14 rounded-full border-2 border-gray-200 "
                />
                <div className="mt- mx-2 text-base font-medium lg:text-sm flex items-center">
                  <p className="capitalize  text-[17px]">
                    {groupData.group_name}{" "}
                    <span className="text-[#c66ebe] text-xs">
                      {groupData?.created_by === userId && "(owner)"}
                    </span>
                  </p>
                  {/* <p className="mt-1">240 member</p> */}
                </div>
              </Link>
              {groupData?.created_by === userId && (
                <div className="flex items-center">
                  <button
                    className="  mx-2"
                    onClick={() => {
                      showOption.length === 0
                        ? setShowOption(groupData.group_id)
                        : setShowOption("");
                    }}
                  >
                    <BsThreeDotsVertical color="#252f3f" />
                  </button>
                </div>
              )}
              {showOption === groupData.group_id ? (
                <div className="absolute flex flex-col border right-2 top-12 bg-white py-2 px-3 rounded-md gap-1  z-20">
                  <Link
                    className="hover:bg-[#9B3D98] hover:text-white px-3 py-1 rounded-lg text-center"
                    href={`/edit-group/${groupData.group_id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="hover:bg-[#9B3D98] hover:text-white px-3 py-1 rounded-lg text-center"
                    onClick={() => {
                      setShowDeleteModal(groupData.group_id), setShowOption("");
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <div className="mt-2 border border-gray-200 mx-1" /> */}
          </div>
        ))}
      </div>
      {showDeleteModal && (
        <PopUp
          close={handleDeleteModal}
          onClick={deleteGroup}
          title="Are you sure to Delete this post"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default Page;
