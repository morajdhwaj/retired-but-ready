import React from 'react'
import Image from "next/image";
import { ImProfile } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const ConnectionThree = () => {
  return (
    <div>
      <div className=" flex mx-6 justify-between bg-scroll">
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 p-2">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs "></p>
            </div>
            <Image
              src="/assets/antina.png"
              className=" mx-4 mt-1 "
              alt="antina"
              width={40}
              height={40}
            />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> GPS location
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <ImProfile className=" mx-8 mt-3 size-8 fill-pink-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Profile
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <FaGlobe className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my <br />
            Connectios
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Hiring
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-orange-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Work experience
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  "></div>
            <IoPeopleSharp className=" mx-8 mt-3 size-8 fill-green-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> best matches
          </h1>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-[#374151] font-semibold text-sm">
          1,573 connections
        </h1>
      </div>
      <div className=" flex justify-between pt-2 pb-2  border-gray-300 border-b-2 mt-5">
        <div className="flex gap-2 w-1/2 ">
          <Image
            src="/assets/Business-1.png"
            className="w-1/5 p-2"
            alt="Business"
            width={50}
            height={50}
          />
          <div className="mt-2">
            <h1 className="text-[rgb(63,198,108)] font-medium">Munwar Raj Singh</h1>
            <p className="text-[#374151] font-medium text-sm">
              OPPO India Marketing Head,
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Tech Connection India Pvt.Ltd.
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Connected 2days ago
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-1/2">
          <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
          <IoIosSend className="text-[#333333] font-medium size-5" />
        </div>
      </div>
      <div className=" flex justify-between pt-2 pb-2  border-gray-300 border-b-2">
        <div className="flex gap-2 w-1/2 ">
          <Image
            src="/assets/Business-1.png"
            className="w-1/5 p-2"
            alt="Business"
            width={30}
            height={30}
          />
          <div className="mt-2">
            <h1 className="text-[#773FC6] font-medium">Munwar Raj Singh</h1>
            <p className="text-[#374151] font-medium text-sm">
              OPPO India Marketing Head,
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Tech Connection India Pvt.Ltd.
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Connected 2days ago
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-1/2">
          <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
          <IoIosSend className="text-[#333333] font-medium size-5" />
        </div>
      </div>
      <div className=" flex justify-between pt-2 pb-2  border-gray-300 border-b-2">
        <div className="flex gap-2 w-1/2 ">
          <Image
            src="/assets/Business-1.png"
            className="w-1/5 p-2"
            alt="Business"
            width={50}
            height={50}
          />
          <div className="mt-2">
            <h1 className="text-[rgb(63,198,108)] font-medium">Munwar Raj Singh</h1>
            <p className="text-[#374151] font-medium text-sm">
              OPPO India Marketing Head,
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Tech Connection India Pvt.Ltd.
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Connected 2days ago
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-1/2">
          <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
          <IoIosSend className="text-[#333333] font-medium size-5" />
        </div>
      </div>
      <div className=" flex justify-between pt-2 pb-2  border-gray-300 border-b-2">
        <div className="flex gap-2 w-1/2 ">
          <Image
            src="/assets/Business-1.png"
            className="w-1/5 p-2"
            alt="Business"
            width={50}
            height={50}
          />
          <div className="mt-2">
            <h1 className="text-[#773FC6] font-medium">Munwar Raj Singh</h1>
            <p className="text-[#374151] font-medium text-sm">
              OPPO India Marketing Head,
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Tech Connection India Pvt.Ltd.
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Connected 2days ago
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-1/2">
          <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
          <IoIosSend className="text-[#333333] font-medium size-5" />
        </div>
      </div>
      <div className=" flex justify-between pt-2 pb-2  border-gray-300 border-b-2">
        <div className="flex gap-2 w-1/2 ">
          <Image
            src="/assets/Business-1.png"
            className="w-1/5 p-2"
            alt="Business"
            width={50}
            height={50}
          />
          <div className="mt-2">
            <h1 className="text-[rgb(63,198,108)] font-medium">Munwar Raj Singh</h1>
            <p className="text-[#374151] font-medium text-sm">
              OPPO India Marketing Head,
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Tech Connection India Pvt.Ltd.
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Connected 2days ago
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-1/2">
          <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
          <IoIosSend className="text-[#333333] font-medium size-5" />
        </div>
      </div>
      <div className=" flex justify-between pt-2 pb-2  border-gray-300 border-b-2">
        <div className="flex gap-2 w-1/2 ">
          <Image
            src="/assets/Business-1.png"
            className="w-1/5 p-2"
            alt="Business"
            width={50}
            height={50}
          />
          <div className="mt-2">
            <h1 className="text-[#773FC6] font-medium">Munwar Raj Singh</h1>
            <p className="text-[#374151] font-medium text-sm">
              OPPO India Marketing Head,
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Tech Connection India Pvt.Ltd.
            </p>
            <p className="text-[#374151] font-medium text-sm">
              Connected 2days ago
            </p>
          </div>
        </div>
        <div className="flex justify-end  w-1/2">
          <IoEllipsisVerticalSharp className="text-[#374151] font-medium size-5" />
          <IoIosSend className="text-[#333333] font-medium size-5" />
        </div>
      </div>
    </div>
  )
}

export default ConnectionThree
