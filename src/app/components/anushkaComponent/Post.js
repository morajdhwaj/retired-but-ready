import Image from "next/image";
import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { PiHandsClappingLight } from "react-icons/pi";
import { TbBulbFilled } from "react-icons/tb";
import { TbKeyboard } from "react-icons/tb";
import { PiAtThin } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";

const Post = () => {
  return (
    <div>
      <div className="w-full  h-[100px] bg-white mt-10">
        <div className=" flex m-2 items-center gap-2 justify-between">
          <div className="flex gap-2 mt-5">
            <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
            <div className="">
              <p className="  text-[#773fc6] font-semibold text-lg ">
                Munawar Raj Singh
              </p>
              <p className="text-black font-normal text-sm">
                Chief Executive Officer
              </p>
              <p className="text-black font-normal text-sm">17h</p>
            </div>
          </div>
          <div className="mt-1 m-5">
            <BsThreeDotsVertical />
            <BsThreeDotsVertical />
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
        className="p-5 text-white font-medium flex flex-col justify-between "
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
        <p className="text-xs flex">
          www.msn.com/en-in/auto <LuDot className="text-xl" /> 6 min.read
          <LuDot className="text-xl" /> 2 days ago
        </p>
      </div>
      <div className="text-lg flex">
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
        <p className="text-base mx-2">1,713</p>
      </div>
      <div className="h-0.5 w-full bg-gray-300 mt-5" />
      <div className=" flex flex-col sm:flex-row gap-5 justify-between mt-5">
        <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-2 text-sm">
          3215
          <p className="text-sm">
            Comments
          </p> <LuDot className="text-xl " /> 687
          <p className="text-sm">Shares</p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-300 mt-5" />
      <div className="mt-5 flex items-center gap-2">
        <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
        <p className="text-gray-400">Leave your thoughts here..</p>
      </div>
      <div className="h-0.5 w-full bg-gray-300 mt-5" />
      <div className="flex justify-between text-lg items-center gap-2 mt-2">
        <div className="flex mt-5 gap-2 text-2xl">
          <TbKeyboard />
          <PiAtThin />
          <FaCamera />
        </div>
        <div className="font-semibold text-[#773fc6] text-center mx-5">
          <p>Post</p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-300 mt-5" />
    </div>
  );
};

export default Post;
