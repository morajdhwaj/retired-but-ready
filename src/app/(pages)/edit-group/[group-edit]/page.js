"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import { FaUserLarge } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";
import axios from "axios"; // Import Axios
import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
import { UserIdContext } from "@/context/UserIdContext";

const data = [
  { id: 1, value: "Technology", label: "Technology" },
  { id: 2, value: "Business", label: "Business" },
  { id: 3, value: "Law", label: "Law" },
  { id: 4, value: "Sports", label: "Sports" },
];

const Page = ({ params }) => {
  const { userIdFromContext } = useContext(UserIdContext);
  const router = useRouter();
  const groupId = params["group-edit"];

  const [userId, setUserId] = useState("");
  const [groupsData, setGroupsData] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupType, setGroupType] = useState(""); // Add groupType state
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setUserId(userIdFromContext);
  }, []);

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

  useEffect(() => {
    const filteredItems = groupsData.find((item) => item.group_id === groupId);
    if (filteredItems) {
      setGroupName(filteredItems.group_name || "");
      setGroupDescription(filteredItems.group_description || "");
      setGroupType(filteredItems.group_category || "");
      // Convert group_interests to the correct format if necessary
      const formattedInterests = filteredItems.group_interests.map(
        (interest) => ({ label: interest, value: interest })
      );
      setCategory(formattedInterests || []);

      console.log(filteredItems, "this is filtered item");
    }
  }, [groupsData, groupId]);

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

  const updateGroupInfo = async () => {
    const groupInterests = category.map((item) => item.value);

    const groupData = {
      group_name: groupName,
      group_description: groupDescription,
      group_image: "string", // Replace "string" with actual image URL if needed
      group_banner: "string", // Replace "string" with actual banner image URL if needed
      group_category: groupType, // Replace "string" with actual category if needed
      group_interests: groupInterests, // Replace "string" with actual interests if needed
    };

    try {
      const response = await axios.put(
        `https://retpro.catax.me/update-group-info/${groupId}?current_user_id=${userId}`,
        groupData
      );

      console.log(response, "this is response form updateGroupData");
      toast.success(response.data.message);
      router.push("/groups-page");
    } catch (error) {
      console.log(error, "this is error from updateGroupInfo");
      // toast.error(error);
    }
  };

  console.log(category, groupType, "this is category ");

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
              <div className="">
                <FaUserLarge size={50} />
              </div>
              <button className="right-0 top-14 h-7 w-7 flex justify-center items-center absolute bg-gradient-to-b from-[#f1cbf1] to-white rounded-full">
                <label htmlFor="profile-picture" className="cursor-pointer">
                  <input
                    type="file"
                    id="profile-picture"
                    accept="image/*"
                    className="hidden"
                    // onChange={handleSetImage}
                  />
                  <MdEdit size={20} />
                </label>
              </button>
            </div>
            {/* Add Picture Button */}
            <div className="rounded-full w-5  h-5 p-4 flex justify-center items-center absolute right-3 top-3 bg-white">
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
            </div>
          </div>
          {/* Group Details */}
          <div className="pl-20 pt-16 pb-5 ">
            <div className="flex flex-col">
              <label htmlFor="" className="">
                Group name
              </label>
              <input
                type="text"
                className="rounded-sm border border-gray-200 w-[70%] p-[6px] mt-2"
                placeholder="Enter your group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-5 ">
              <label htmlFor="" className="mb-2">
                Description
              </label>
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
              <label htmlFor="" className="mb-2">
                Category
              </label>
              <CreatableSelect
                id="personal"
                value={category}
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
            {/* <div className="mt-5">
              <h2 className="mb-3">Group Type</h2>
              <div className="mb-5">
                <div className="">
                  <input
                    type="radio"
                    value="public"
                    selected={groupType==="public"}
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
                    selected={groupType==="private"}
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
            </div> */}
            <div className="mt-5">
              <h2 className="mb-3">Group Type</h2>
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
            <button
              className="py-3 px-8 border-2 border-[#773fc6]  absolute right-14 bottom-10  rounded-xl hover:shadow-lg"
              onClick={updateGroupInfo}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
