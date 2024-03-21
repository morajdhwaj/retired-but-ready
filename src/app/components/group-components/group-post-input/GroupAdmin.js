import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const GroupAdmin = ({ groupId, userData }) => {
  return (
    <div className="bg-white  ml-10 rounded-b-lg flex flex-col justify-between py-5">
      <div className="flex  flex-col gap-2 items-center justify-center p-5">
        {userData?.user_image ? (
          <Image
            alt="rtr-pic"
            src={userData?.user_image}
            height={50}
            width={50}
          />
        ) : (
          <FaUserCircle color="gray" size={50} />
        )}
        <div className="flex flex-col gap-1 items-center justify-center ">
          <h1 className="font-semibold ">{userData?.user_display_name}</h1>
          <h1 className="font-semibold text-xs text-gray-500 ">
            (Group Admin)
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Link
          href={`/manage-group/${groupId}`}
          className="border border-[#773FC6] flex items-center justify-center  h-10 w-40 rounded-xl text-sm  hover:shadow-lg"
        >
          Manage Group
        </Link>
        <Link
          href={`/edit-group/${groupId}`}
          className="border border-[#773FC6] flex items-center justify-center  h-10 w-40 rounded-xl text-sm  hover:shadow-lg"
        >
          Edit Group
        </Link>
      </div>
    </div>
  );
};

export default GroupAdmin;
