import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

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
          <h2 className="text-xl"> {admins?.length} Admin</h2>
        </div>
      </div>
      <div className="">
        {admins?.map((admin) => (
          <div
            key={admin?.id}
            className="flex justify-between border-b border-gray-300 p-5 "
          >
            <div className="flex gap-5 items-center ">
              <div>
                <Link href={`/profile/${admin?.id}`}>
                  {admin?.image ? (
                    <Image
                      alt="rtr-pic"
                      src={admin?.image}
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
                <Link href={`/profile/${admin?.id}`} className="text-xl">
                  {admin.name}
                </Link>
                <h2 className="text-xs">{admin?.last_designation}</h2>
              </div>
            </div>
            <div>
              {admin.id !== userId && (
                <button
                  onClick={() => removeAdmin(admin?.id)}
                  className=" border border-[#773fc6]  hover:bg-[#773fc6] w-48 rounded-md hover:text-white text-black p-2"
                >
                  Remove from Admin
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
