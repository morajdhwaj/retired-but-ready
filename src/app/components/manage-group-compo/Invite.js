"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Invite = ({ groupId, groupInfo, userId, getGroupInfo }) => {
  const [myNetwork, setMyNetWork] = useState([]);

  useEffect(() => {
    getNetwork();
  }, []);

  const getNetwork = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/my-network/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "this is my network");
        setMyNetWork(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const addMember = (memberId) => {
    const options = {
      method: "POST",
      url: `https://retpro.catax.me/invite-user/${groupId}`,
      params: { user_id: memberId, current_user_id: userId },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getNetwork();
        getGroupInfo();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };
  return (
    <div className="bg-white w-4/5 rounded-lg pt-5 overflow-hidden">
      <div className="">
        <div className="flex items-end gap-5 py-5 border-b border-gray-300 px-5">
          <h2 className="text-xl">My Connections</h2>
        </div>
      </div>
      <div className="">
        {myNetwork?.map((member) => (
          <div
            key={member?._id}
            className="flex justify-between border-b border-gray-300 p-5 "
          >
            <div className="flex gap-5 items-center ">
              <div>
                <Link href={`/profile/${member?.user_id}`}>
                  {member?.user_image ? (
                    <Image
                      alt="rtr-pic"
                      src={member?.user_image}
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
                <Link href={`/profile/${member?.user_id}`} className="text-xl">
                  {" "}
                  {member?.user_full_name}
                </Link>
                <h2 className="text-xs">UX Designer</h2>
              </div>
            </div>
            {groupInfo?.admins?.some((user) => user?.id === member?.user_id) ? (
              <button className="border border-[#773FC6] px-7 h-10 rounded-xl hover:shadow-lg">
                Group Admin
              </button>
            ) : (
              <div className="flex gap-5">
                {groupInfo?.users?.some(
                  (user) => user?.id === member?.user_id
                ) ? (
                  <button className="border border-[#773FC6] px-5 h-10 rounded-xl hover:shadow-lg">
                    Group Member
                  </button>
                ) : (
                  <button
                    onClick={() => addMember(member?.user_id)}
                    className="border border-[#773FC6] px-7 h-10 rounded-xl hover:shadow-lg"
                  >
                    Add Member
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invite;
