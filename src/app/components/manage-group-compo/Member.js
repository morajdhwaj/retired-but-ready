import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Member = () => {
  return (
    <div className="bg-white w-4/5 rounded-lg pt-5 overflow-hidden">
      <div className="">
        <div className="flex items-end gap-5 py-5 border-b border-gray-300 px-5">
          <h2 className="text-xl">Member</h2>
          <h5 className="text-sm">2 Person</h5>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between border-b border-gray-300 p-5 ">
          <div className="flex gap-5 items-center ">
            <Image
              src="/assets/110.png"
              alt="profile"
              height={50}
              width={50}
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-xl">Person 1</h2>
              <h2 className="text-xs">UX Designer</h2>
            </div>
          </div>
          <div>
            <button>
              <BsThreeDotsVertical color="#252f3f" size={25} />
            </button>
          </div>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-5 ">
          <div className="flex gap-5 items-center ">
            <Image
              src="/assets/110.png"
              alt="profile"
              height={50}
              width={50}
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-xl">Person 2</h2>
              <h2 className="text-xs">UX Designer</h2>
            </div>
          </div>
          <div>
            <button>
              <BsThreeDotsVertical color="#252f3f" size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
