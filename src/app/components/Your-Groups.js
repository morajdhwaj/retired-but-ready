"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import PopUp from "../components/PopUp";
import { UserIdContext } from "@/context/UserIdContext";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiGroup2Fill } from "react-icons/ri";
import Loader from "./Loader";

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

  if (!userId) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  console.log(groupsData, "group data ");

  return (
    <div>
      <div className=" flex flex-col w-full   lg:w-[40vh xl:w-[60vh  border-white bg-white rounded-lg h-[73vh] sm:h-[65vh] overflow-y-scroll pr-2">
        {groupsData.length == 0 ? (
          <div className="flex mt-20  justify-center h-full">
            <h1 className="text-xl font-semibold text-gray-400">
              Need to create / join a group
            </h1>
          </div>
        ) : (
          <div>
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
                    <RiGroup2Fill color="gray" size={50} />
                    <div className="mt- mx-2 text-base font-medium lg:text-sm flex items-center">
                      <p className="capitalize  text-[17px]">
                        {groupData.group_name}
                        <span className="text-gray-400 text-xs">
                          {groupData?.created_by === userId && " (owner) "}
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
                        className="hover:bg-[#773fc6] hover:text-white px-3 py-1 rounded-lg text-center  flex w-24 justify-between items-center"
                        href={`/edit-group/${groupData.group_id}`}
                      >
                        <h2>Edit</h2>
                        <FaEdit />
                      </Link>
                      <button
                        className="hover:bg-[#773fc6] hover:text-white px-3 py-1 rounded-lg text-center flex w-24 justify-between items-center"
                        onClick={() => {
                          setShowDeleteModal(groupData.group_id),
                            setShowOption("");
                        }}
                      >
                        <h2>Delete</h2>
                        <MdDelete />
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
        )}
      </div>
      {showDeleteModal && (
        <PopUp
          close={handleDeleteModal}
          onClick={deleteGroup}
          title="Are you sure to Delete this group"
          action="Delete"
          message=""
          error="error"
        />
      )}
    </div>
  );
};

export default Page;
