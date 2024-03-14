import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { PiHandsClappingLight } from "react-icons/pi";
import { TbBulbFilled } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";

import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import Image from "next/image";
const Youtube = () => {
  return (
    <div>
      <div className="w-full  lg:h-[100px] bg-white mt-10">
        <div className=" flex m-2 items-center gap-2 justify-between">
          <div className="flex gap-2">
            <button>
              <CiPlay1 className="text-base sm:text-xl lg:text-2xl " />
            </button>
            <div className="">
              <p className="  text-[#773fc6] font-semibold text-xs sm:text-base lg:text-lg mt-5">
                Youtube
              </p>
              <p className="text-black font-normal  text-xs sm:text-base lg:text-sm">
                1,609,6937 followers
              </p>
              <p className="text-black font-normal  text-xs sm:text-base lg:text-sm">
                1h
              </p>
            </div>
          </div>
          <div className="flex gap-2 text-[#773fc6] font-bold m-5">
            <FaPlus className="mt-1" />
            <p>Follow</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm">
          In the week gone by, we had covered the launch of one of the most
          awaited compact SUV in country, Additionally, we also covered a series
          of...
        </p>
        <p className="text-sm text-end text-[#773fc6]">...see more</p>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, transparent, rgba(0, 0, 0, 0.7)), url('https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%", // full screen width
          height: "70vh", // full screen height
          borderRadius: 10,
        }}
        className="p-5 text-white font-medium flex flex-col justify-between mt-10"
      >
        <h2 className="text-xs md:text-lg">
          Weekly news round-up: 2022 Hyundai Venue launched more details on
          Mahindra Scropio-N
        </h2>
        <p className="text-xs font-normal">18 June 2022 13:42</p>
      </div>
      <div className="mt-5">
        <h2 className="font-medium text-[#773fc6]">
          New Toyota mid-size SUV spotted
        </h2>
        <p className="text-xs flex flex-wrap sm:flex sm:flex-wrap lg:flex">
          www.msn.com/en-in/auto <LuDot className="text-xl" /> 6 min.read
          <LuDot className="text-xl" /> 2 days ago
        </p>
      </div>
      <div className="text-xl mt-2 sm:mt-2 lg:mt-0">
        <button>
          <AiOutlineLike />
        </button>
        <button>
          <PiHandsClappingLight />
        </button>
        <button>
          <FaHeart />
        </button>
        <button>
          <TbBulbFilled />
        </button>
      </div>
      <div className="h-0.5 w-full bg-gray-300 mt-5" />
      <div className="mt-2 flex flex-col sm:flex-row gap-5 justify-between">
        <div className="flex flex-wrap sm:flex sm:flex-wrap lg:flex lg:items-center gap-2 mt-5">
          <button>
            <AiOutlineLike />
          </button>
          <p className="text-sm">Like</p>
          <button>
            <MdComment />
          </button>
          <p className="text-sm">Comment</p>
          <button>
            <IoIosShareAlt />
          </button>
          <p className="text-sm">Share</p>

          <button>
            <IoIosSend />
          </button>
          <p className="text-sm">Send</p>
        </div>
        <div className="flex flex-wrap sm:flex sm:flex-wrap lg:flex items-center gap-2 text-sm">
          3215
          <p className="text-sm">
            Comments
          </p> <LuDot className="text-xl " /> 687
          <p className="text-sm">Shares</p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-300 mt-5" />
      <div className="mt-5">
        <p className="text-lg font-semibold">Comments</p>
      </div>
      <div className="mt-10 flex">
        <div className="md:flex lg:flex  gap-2 justify-center">
          <div>
            <Image
              alt="rtr-pic"
              src="/assets/Ellipse-39.png"
              height={50}
              width={50}
            />
          </div>
          <div className=" md:flex lg:flex justify-between border-gray-300 p-2 border-2 rounded-b-xl">
            <div>
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold text-[#773fc6]  ">
                  David Alto Swain
                </h2>
                <button>
                  <BsThreeDotsVertical size={25} color="black" />
                </button>
              </div>
              <p className="text-sm text-black mt-2 ">
                Citrix XenApp,XenDesktop/VMware Mob...
              </p>
              <p className="text-xs mt-1">20 mins.</p>
              <p className="text-sm sm:text-sm lg:text-base font-normal mt-3">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <div className="text-base  flex flex-wrap sm:flex sm:flex-wrap lg:flex gap-3 mt-1">
                <div className="mt-2 flex gap-1">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <PiHandsClappingLight />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <TbBulbFilled />
                  </button>
                </div>
                <p className="mt-2">1,713</p>
                <p className="text-base mt-2 text-black">Like | Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex">
        <div className=" md:flex lg:flex  gap-2 justify-center">
          <div>
            <Image
              alt="rtr-pic"
              src="/assets/Ellipse-39.png"
              height={50}
              width={50}
            />
          </div>
          <div className="flex justify-between border-gray-300 p-2 border-2 rounded-b-xl">
            <div>
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold text-[#773fc6]  ">
                  David Alto Swain
                </h2>
                <button>
                  <BsThreeDotsVertical size={25} color="black" />
                </button>
              </div>
              <p className="text-sm text-black mt-2 ">
                Citrix XenApp,XenDesktop/VMware Mob...
              </p>
              <p className="text-xs mt-1">20 mins.</p>
              <p className="text-sm sm:text-sm lg:text-base font-normal mt-3">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <div className="text-base flex flex-wrap sm:flex sm:flex-wrap  lg:flex gap-3 mt-1">
                <div className="mt-2 flex flex-wrap sm:flex sm:flex-wrap lg:flex gap-1">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <PiHandsClappingLight />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <TbBulbFilled />
                  </button>
                </div>
                <p className="mt-2">1,713</p>
                <p className="text-base mt-2 text-black">Like | Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" md:flex lg:flex  gap-2 justify-center">
          <div>
            <Image
              alt="rtr-pic"
              src="/assets/Ellipse-39.png"
              height={50}
              width={50}
            />
          </div>
          <div className="flex justify-between border-gray-300 p-2 border-2 rounded-b-xl">
            <div>
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold text-[#773fc6]  ">
                  David Alto Swain
                </h2>
                <button>
                  <BsThreeDotsVertical size={25} color="black" />
                </button>
              </div>
              <p className="text-sm text-black mt-2 ">
                Citrix XenApp,XenDesktop/VMware Mob...
              </p>
              <p className="text-xs mt-1">20 mins.</p>
              <p className="text-sm sm:text-sm lg:text-base font-normal mt-3">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <div className="text-base  flex flex-wrap sm:flex sm:flex-wrap lg:flex gap-3 mt-1">
                <div className="mt-2 flex gap-1">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <PiHandsClappingLight />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <TbBulbFilled />
                  </button>
                </div>
                <p className="mt-2">1,713</p>
                <p className="text-base mt-2 text-black">Like | Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex">
        <div className="md:flex lg:flex  gap-2 justify-center">
          <div>
            <Image
              alt="rtr-pic"
              src="/assets/Ellipse-39.png"
              height={50}
              width={50}
            />
          </div>
          <div className="flex justify-between border-gray-300 p-2 border-2 rounded-b-xl">
            <div>
              <div className="flex justify-between">
                <h2 className="text-sm font-semibold text-[#773fc6]  ">
                  David Alto Swain
                </h2>
                <button>
                  <BsThreeDotsVertical size={25} color="black" />
                </button>
              </div>
              <p className=" sm:text-xs lg:text-sm text-black mt-2 ">
                Citrix XenApp,XenDesktop/VMware Mob...
              </p>
              <p className="text-xs mt-1">20 mins.</p>
              <p className="text-sm sm:text-sm lg:text-base font-normal mt-3">
                It's fake so what?..Even For Credit cards were susceptible to
                such scanners where a guy would simply wave the scanner on your
                rear jeans pocket and card would be biled.
              </p>
              <div className="text-base  flex flex-wrap sm:flex sm:flex-wrap lg:flex gap-3 mt-1">
                <div className="mt-2 flex gap-1">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <PiHandsClappingLight />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <TbBulbFilled />
                  </button>
                </div>
                <p className="mt-2">1,713</p>
                <p className="text-base mt-2 text-black">Like | Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
