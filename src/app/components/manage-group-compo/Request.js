"use client";

import { UserIdContext } from "@/context/UserIdContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Request = ({ groupId, getGroupInfo }) => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getJoinRequest();
  }, []);

  const getJoinRequest = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/view-group-join-request/${groupId}`,
      params: { current_user_id: userIdFromContext },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setRequests(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const approveRequest = (reqUser) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/approve-join-request/${groupId}/${reqUser}`,
      params: { admin_id: userIdFromContext },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getJoinRequest();
        getGroupInfo();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const rejectRequest = (reqUser) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/reject-join-request/${groupId}/${reqUser}`,
      params: { admin_id: userIdFromContext },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getJoinRequest();
        getGroupInfo();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(requests, "request");

  return (
    <div className="bg-white w-4/5 rounded-lg pt-5 overflow-hidden">
      <div className="">
        <div className="flex items-end gap-5 py-5 border-b border-gray-300 px-5">
          <h2 className="text-xl">Pending Requests</h2>
        </div>
      </div>
      <div className="">
        {requests.map((request) => (
          <div
            key={request?.requested_user}
            className="flex justify-between border-b border-gray-300 p-5 "
          >
            <div className="flex gap-5 items-center ">
              <div>
                <Link href={`/profile/${request?.requested_user}`}>
                  {request?.user_info?.image ? (
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
                <Link
                  href={`/profile/${request?.requested_user}`}
                  className="text-xl"
                >
                  {request?.user_info?.name}
                </Link>
                <h2 className="text-xs">{request?.user_info?.designation}</h2>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => approveRequest(request?.requested_user)}
                className="border border-[#773FC6] px-5 h-10 rounded-xl hover:shadow-lg"
              >
                Accept
              </button>
              <button
                onClick={() => rejectRequest(request?.requested_user)}
                className="border border-[#773FC6] px-5 h-10 rounded-xl  hover:shadow-lg"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
