import axios from "axios";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";

const Admin = ({ groupId, groupInfo, userId, getGroupInfo }) => {
  const admins = groupInfo.admins;

  const removeAdmin = (admin) => {
    const options = {
      method: "PUT",
      url: `https://retpro.catax.me/remove-group-admin/${groupId}`,
      params: { admin_to_remove_id: admin, current_user_id: userId },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        getGroupInfo();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(admins, "hhhh");
  return (
    <div className="bg-white w-4/5 rounded-lg pt-5 overflow-hidden">
      <div className="">
        <div className="flex items-end gap-5 py-5 border-b border-gray-300 px-5">
          <h2 className="text-xl">Admin</h2>
          <h5 className="text-sm">{admins?.length} Person</h5>
        </div>
      </div>
      <div className="">
        {admins?.map((admin, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-gray-300 p-5 "
          >
            <div className="flex gap-5 items-center ">
              <Image
                src="/assets/110.png"
                alt="profile"
                height={50}
                width={50}
                className="h-14 w-14 rounded-full"
              />
              <div>
                <h2 className="text-xl">{admin}</h2>
                <h2 className="text-xs">UX Designer</h2>
              </div>
            </div>
            <div>
              {admin !== userId && (
                <button
                  onClick={() => removeAdmin(admin)}
                  className=" border border-[#773fc6]  hover:bg-[#773fc6] w-40 rounded-md hover:text-white text-black p-2"
                >
                  Remove Admin
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
