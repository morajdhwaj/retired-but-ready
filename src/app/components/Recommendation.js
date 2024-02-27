"use client";
import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Recommendation = () => {
  return (
    <div>
      <div className="flex ">
        <div className="  ">
          <div className="flex justify-between   border-gray-200 w-full">
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>245 Member</p>
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
          <div className="flex justify-between  border-b-2 border-gray-200 w-full">
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>245 Member</p>
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
          <div className="flex justify-between  border-b-2 border-gray-200 w-full">
            <div className="flex mt-2">
              <Image
                src="/assets/Ellipse-39.png"
                width={40}
                height={40}
                alt="pic"
                className=" w-24  h-24 rounded-full border-2   border-gray-200 "
              />
              <div className="mt-5 mx-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>245 Member</p>
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <button>
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
