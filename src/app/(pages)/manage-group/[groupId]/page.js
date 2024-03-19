import Navbar from "@/app/components/Navbar";
import Membership from "@/app/components/manage-group-compo/Membership";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  const groupId = params["groupId"];

  return (
    <div className="bg-[#e8e9e8] pb-10 min-h-[100vh]  sm:px-5 md:px-10 ">
      <Navbar />
      <div className="pt-32 mx-20">
        <div className="bg-white rounded-lg ">
          <div className="border-b border-gray-200 p-8 flex gap-2 items-center">
            <Image
              alt="group-dp"
              src="/assets/Group.png"
              width={50}
              height={50}
              className="h-14 w-14 rounded-full"
            />
            <h1 className="text-lg font-semibold">Group Name</h1>
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
          <Membership groupId={groupId} />
        </div>
      </div>
    </div>
  );
};

export default page;