import Image from "next/image";
import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdComment } from "react-icons/md";

const All = () => {
  return (
    <div>
      <div className=" mt-5">
        <div className="flex justify-between bg-white p-2 border-b-2 border-gray-300">
          <div className="flex items-center gap-2 justify-center">
            <div>
              <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                Munwar Raj singh
              </h2>
              <p className="text-xs">Chief Executive Officer</p>
              <p className="text-xs">17 h</p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical size={25} color="gray" />
          </div>
        </div>
        <div className="mt-5">
          <p className="text-sm">
            In the week gone by, we had covered the launch of one of the most
            awaited compact SUV in country, Additionally, we also covered a
            series of...
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
          <h2>
            Weekly news round-up: 2022 Hyundai Venue launched more details on
            Mahindra Scropio-N
          </h2>
          <p className="text-xs font-normal">18 June 2022 13:42</p>
        </div>
        <div className="mt-5">
          <h2 className="font-medium text-[#773fc6]">
            New Toyota mid-size SUV spotted
          </h2>
          <p className="text-xs">www.msn.com/en-in/auto | 6 min | 2 days ago</p>
        </div>
        <div>
          <div className="flex gap-1 items-center  ">
            <AiFillLike />
            <p className="text-sm">1,232</p>
          </div>
          <div className="mt-2 flex justify-between">
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
            </div>
            <div className="flex items-center gap-2 text-sm">
              321
              <p className="text-sm">Comments</p> | 24
              <p className="text-sm">Shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
