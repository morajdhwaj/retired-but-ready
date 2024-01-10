import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="mx-4 h-[100%]">
      <div className="bg-[#FFFFFF] flex justify-between p-4 shadow-md  mt-40 sm:mt-20 md:mt-10 ">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">Comments</h1>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color="gray" />
        </div>
      </div>
      {/* ------------------- */}
      <div className=" mt-5 flex-row sm:flex ">
        <div >
        <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
        </div>
        <div className="flex border-gray-300 border rounded-b-lg p-2">
        <div className=" w-[80%]">
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                David Alto Swain
              </h2>
              <p className="text-xs font-medium">Citrix XenApp,XenDesktop/VMware Mob...</p>
              <p className="text-xs text-gray-400">20 mins.</p>
              <p className="text-xs font-medium text-gray-800 mt-4">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <p className="text-xs mt-4">Like | Reply</p>
            </div>
            <div className=" w-[20%] flex justify-end">
            <BsThreeDotsVertical size={25} color="gray" />
          </div>

        </div>
      </div>
      <div className="  flex-row sm:flex ">
        <div >
        <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
        </div>
        <div className="flex border-gray-300 border rounded-b-lg p-2">
        <div className=" w-[80%]">
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                David Alto Swain
              </h2>
              <p className="text-xs font-medium">Citrix XenApp,XenDesktop/VMware Mob...</p>
              <p className="text-xs text-gray-400">20 mins.</p>
              <p className="text-xs font-medium text-gray-800 mt-4">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <p className="text-xs mt-4">Like | Reply</p>
            </div>
            <div className=" w-[20%] flex justify-end">
            <BsThreeDotsVertical size={25} color="gray" />
          </div>

        </div>
      </div>
      <div className="  flex-row sm:flex ">
        <div >
        <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
        </div>
        <div className="flex border-gray-300 border rounded-b-lg p-2">
        <div className=" w-[80%]">
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                David Alto Swain
              </h2>
              <p className="text-xs font-medium">Citrix XenApp,XenDesktop/VMware Mob...</p>
              <p className="text-xs text-gray-400">20 mins.</p>
              <p className="text-xs font-medium text-gray-800 mt-4">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <p className="text-xs mt-4">Like | Reply</p>
            </div>
            <div className=" w-[20%] flex justify-end">
            <BsThreeDotsVertical size={25} color="gray" />
          </div>

        </div>
      </div>
      <div className="  flex-row sm:flex ">
        <div >
        <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
        </div>
        <div className="flex border-gray-300 border rounded-b-lg p-2">
        <div className=" w-[80%]">
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                David Alto Swain
              </h2>
              <p className="text-xs font-medium">Citrix XenApp,XenDesktop/VMware Mob...</p>
              <p className="text-xs text-gray-400">20 mins.</p>
              <p className="text-xs font-medium text-gray-800 mt-4">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <p className="text-xs mt-4">Like | Reply</p>
            </div>
            <div className=" w-[20%] flex justify-end">
            <BsThreeDotsVertical size={25} color="gray" />
          </div>

        </div>
      </div>

      

     
    </div>
  );
};

export default Comments;
