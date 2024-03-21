"use client";

import Loader from "@/app/components/Loader";
import Navbar from "@/app/components/Navbar";
import Membership from "@/app/components/manage-group-compo/Membership";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const groupId = params["groupId"];
  const [groupInfo, setGroupInfo] = useState([]);

  useEffect(() => {
    getGroupInfo();
  }, []);

  const getGroupInfo = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/get-group-info/${groupId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        setGroupInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (groupInfo.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#e8e9e8] pb-10 min-h-[100vh]  sm:px-5 md:px-10 ">
      <Navbar />
      <div className="pt-32 mx-20">
        <div className="bg-white rounded-lg ">
          <div className="border-b border-gray-200 p-8 flex gap-3 items-center">
            <Image
              alt="group-dp"
              src="/assets/Group.png"
              width={50}
              height={50}
              className="h-14 w-14 rounded-full"
            />
            <div className="">
              <h1 className="text-lg font-semibold capitalize ">
                {groupInfo?.name}
              </h1>
              <p className="capitalize text-sm">{groupInfo?.description}</p>
            </div>
          </div>
          <div>
            <h1 className="p-8">Manage Group </h1>
          </div>
          <div className="px-8 flex gap-5">
            <button className="text-[#773fc6] border-b-2 border-[#773fc6]">
              Membership
            </button>
            <button disabled className="text-gray-400">
              Content
            </button>
          </div>
        </div>
        <div className="mt-10">
          <Membership
            groupId={groupId}
            getGroupInfo={getGroupInfo}
            groupInfo={groupInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
