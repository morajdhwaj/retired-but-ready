"use client";

import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { FaUserLarge } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";
import axios from "axios"; // Import Axios
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { UserIdContext } from "@/context/UserIdContext";

import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { RiGroup2Fill } from "react-icons/ri";

const data = [
  { id: 1, value: "Technology", label: "Technology" },
  { id: 2, value: "Business", label: "Business" },
  { id: 3, value: "Law", label: "Law" },
  { id: 4, value: "Sports", label: "Sports" },
  { id: 5, value: "Health", label: "Health" },
  { id: 6, value: "Education", label: "Education" },
  { id: 7, value: "Finance", label: "Finance" },
  { id: 8, value: "Art", label: "Art" },
  { id: 9, value: "Science", label: "Science" },
  { id: 10, value: "Food", label: "Food" },
  { id: 11, value: "Travel", label: "Travel" },
  { id: 12, value: "Music", label: "Music" },
  { id: 13, value: "Fashion", label: "Fashion" },
  { id: 14, value: "Environment", label: "Environment" },
  { id: 15, value: "Politics", label: "Politics" },
  { id: 16, value: "Entertainment", label: "Entertainment" },
  { id: 17, value: "History", label: "History" },
  { id: 18, value: "Religion", label: "Religion" },
  { id: 19, value: "Pets", label: "Pets" },
  { id: 20, value: "Automotive", label: "Automotive" },
];

const Page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [Category, setCategory] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [groupType, setGroupType] = useState("public");
  const [handleSetImage, setHandleSetImage] = useState("");

  const router = useRouter();

  useEffect(() => {
    setUserId(userIdFromContext);
  }, [userId]);

  const handleCategory = (selected, selection) => {
    const { action, option } = selection;

    if (action === "clear") {
      setCategory([]);
    } else if (action === "select-option") {
      if (selected.length < 6) {
        setCategory(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setCategory(selected);
    } else if (action === "create-option") {
      if (selected.length <= 5) {
        const newOption = { value: option.value, label: option.label };
        setCategory((prevSkills) => [...prevSkills, newOption]);
      } else {
        toast.error("Maximum total limit is 5");
      }
    }
  };

  const createGroup = () => {
    if (groupName.length <= 0) {
      toast.error("Group name cannot be empty");
      return;
    }

    const requestData = {
      group_name: groupName,
      group_description: groupDescription,
      group_image: handleSetImage,
      group_banner: "string",
      group_category: groupType,
      group_interests: Category.map((item) => item.value),
      join_requests: [],
      approved_requests: [],
      rejected_requests: [],
      group_admin: [],
      created_by: "string",
      created_on: new Date().toISOString(),
      is_deleted: false,
      group_comments: [],
      is_group_featured: false,
      group_status: groupType,
    };

    axios
      .post(
        `https://retpro.catax.me/create-group?user_id=${userId}`,
        requestData
      )
      .then((response) => {
        console.log(response.data);
        toast.success(response.data.message);
        router.push("groups-page  ");
        setCategory([]);
        setGroupName("");
        setGroupDescription("");
        // Perform any further actions, like redirecting or updating state
      })
      .catch((error) => {
        console.error("Error creating group:", error);
        // Handle error, maybe show a message to the user
      });
  };

  console.log(userId, "this is user id from create group page");

  return (
    <div className="bg-[#EDEBF2] h-[100vh pb-5  px-10 ">
      <Navbar />
      <div className="mt-20 pt-8">
        <div className=" bg-[#F2F2F2] relative pb-32  w-[80%] m-auto">
          <div
            className="relative  m-auto bg-[#EBEBEB] h-40  border-2"
            style={{
              backgroundImage: `url('/assets/Background.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%", // full screen width
              height: "20vh", // full screen height
              borderRadius: 10,
            }}
          >
            {/* Profile Picture */}
            <div className="p-10 rounded-full absolute  h-28 w-28 flex justify-center  items-center bottom-[-50px]   left-20 bg-white">
              <button className=" h-7 w-7 flex justify-center items-center  bg-gradient-to-b from-[#f1cbf1] to-white rounded-full">
                <label htmlFor="profile-picture" className="cursor-pointer">
                  <input
                    type="file"
                    id="profile-picture"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setHandleSetImage(e.target.value)}
                  />
                  <RiGroup2Fill color="gray" size={100} />
                </label>
              </button>
              {/* <button className="right-0 top-14 h-7 w-7 flex justify-center items-center absolute bg-gradient-to-b from-[#f1cbf1] to-white rounded-full">
                <label htmlFor="profile-picture" className="cursor-pointer">
                  <input
                    type="file"
                    id="profile-picture"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setHandleSetImage(e.target.value)}
                  />
                  <MdEdit size={20} />
                </label>
              </button> */}
            </div>
            {/* Add Picture Button */}
            {/* <div className="rounded-full w-5  h-5 p-4 flex justify-center items-center absolute right-3 top-3 bg-white">
              <button className="">
                <label htmlFor="profile-picture" className="cursor-pointer">
                  <input
                    type="file"
                    id="profile-picture"
                    accept="image/*"
                    className="hidden"
                    // onChange={setBannerImage}
                  />
                  <AiFillPicture />
                </label>
              </button>
            </div> */}
          </div>
          {/* Group Details */}
          <div className="pl-20 pt-16 pb-5 ">
            <div className="flex flex-col">
              <h1 className="font-semibold ">Group name</h1>
              <input
                type="text"
                className="rounded-sm border border-gray-200 w-[70%] p-[6px]"
                placeholder="Enter your group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-5 ">
              <h1 className="font-semibold ">Description</h1>
              <textarea
                name=""
                id=""
                className="w-[70%] p-1 border border-gray-200"
                placeholder="Write description hear"
                value={groupDescription}
                onChange={(e) =>
                  setGroupDescription(
                    e.target.value.replace(/(^[a-zA-Z])|(\.\s*\w)/gm, (match) =>
                      match.toUpperCase()
                    )
                  )
                }
              ></textarea>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="font-semibold ">Category</h1>
              <CreatableSelect
                id="personal"
                value={Category}
                instanceId="selectSkills"
                isMulti
                name="colors"
                className="basic-multi-select w-[70%]"
                classNamePrefix="select"
                options={data}
                onChange={handleCategory}
              />
            </div>
            {/* Group Type */}
            <div className="mt-5">
              <h2 className="font-semibold ">Group Type</h2>
              <div className="mb-5">
                <div className="">
                  <input
                    type="radio"
                    value="public"
                    checked={groupType === "public"}
                    onChange={(e) => setGroupType(e.target.value)}
                    name="group"
                    className=""
                  />
                  <label htmlFor="" className="ml-2">
                    Public
                  </label>
                </div>
                <p className="text-sm ml-5 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                  id inventore iste. Commodi, ab voluptate!
                </p>
              </div>
              <div className="">
                <div className="">
                  <input
                    type="radio"
                    value="private"
                    name="group"
                    checked={groupType === "private"}
                    onChange={(e) => setGroupType(e.target.value)}
                    className=""
                  />
                  <label htmlFor="" className="ml-2">
                    Private
                  </label>
                </div>
                <p className="text-sm ml-5 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, natus! Eveniet sit laborum magnam optio.
                </p>
              </div>
            </div>

            {/* Create Group Button */}

            <div className="flex justify-between">
              <button
                className="py-3 px-8 bg-[#773fc6] text-white  absolute right-14 bottom-10 rounded-md "
                onClick={createGroup}
              >
                Create Group
              </button>{" "}
              <Link
                href="/groups-page"
                className="py-3 px-4 items-center border-2 border-[#773fc6] flex  absolute left-14 bottom-10 rounded-md "
              >
                <IoArrowBackOutline size={20} />
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
