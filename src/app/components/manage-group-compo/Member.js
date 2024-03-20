import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Member = ({ groupId, groupInfo, userId, getGroupInfo }) => {
  const members = groupInfo.users;
  const [showDropDown, setShowDropDown] = useState(false);
  const [memberId, setMemberId] = useState("");

  const handleDropdown = (userId) => {
    if (!memberId) {
      setShowDropDown(!showDropDown);
      setMemberId(userId);
    } else setMemberId("");
  };

  const addAdmin = (memberID) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/add-group-admin/${groupId}`,
      params: { new_admin_id: memberID, current_user_id: userId },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setMemberId("");
        getGroupInfo();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const removeMember = (memberID) => {
    const options = {
      method: "DELETE",
      url: `https://retpro.catax.me/remove-group-user/${groupId}/${memberID}/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setMemberId("");
        getGroupInfo();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(members, "group id");

  return (
    <div className="bg-white w-4/5 rounded-lg pt-5 overflow-hidden">
      <div className="">
        <div className="flex items-end gap-5 py-5 border-b border-gray-300 px-5">
          <h2 className="text-xl"> {members?.length} Members</h2>
        </div>
      </div>
      <div className="">
        {members?.map((member) => (
          <div
            key={member?.id}
            className="flex justify-between border-b border-gray-300 p-5 "
          >
            <div className="flex gap-5 items-center ">
              <div>
                <Link href={`/profile/${member?.id}`}>
                  {member?.image ? (
                    <Image
                      alt="rtr-pic"
                      src={member?.image}
                      height={50}
                      width={50}
                      className="w-16 h-16 rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <FaUserCircle color="gray" size={60} />
                  )}
                </Link>
              </div>
              <div>
                <Link href={`/profile/${member?.id}`} className="text-xl">
                  {member?.name
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Link>
                <h2 className="text-xs">
                  {" "}
                  {member?.last_designation
                    ?.toLowerCase()
                    ?.split(" ")
                    ?.map(
                      (word) => word.charAt(0).toUpperCase() + word.slice(1)
                    )
                    ?.join(" ")}
                </h2>
              </div>
            </div>
            <div>
              <button>
                <BsThreeDotsVertical
                  onClick={() => handleDropdown(member?.id)}
                  color="#252f3f"
                  size={25}
                />
              </button>
              {memberId == member?.id && (
                <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-66 px-2 ">
                  <div className="flex flex-col p-2 items-center justify-center">
                    <button
                      onClick={() => addAdmin(member?.id)}
                      className="hover:bg-[#773fc6] w-40 rounded-md hover:text-white text-black p-2"
                    >
                      Assign Admin
                    </button>
                    <button
                      onClick={() => removeMember(member?.id)}
                      className=" hover:bg-[#773fc6] w-40 rounded-md hover:text-white text-black p-2"
                    >
                      Remove Member
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
