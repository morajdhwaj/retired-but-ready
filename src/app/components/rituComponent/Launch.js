import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { TiAttachmentOutline } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";

import Image from "next/image";

const Launch = () => {
  return (
    <div>
      <div className="mt-10 sm:mt-10 md:mt-10 flex justify-between bg-white py-2">
        <div className=" flex gap-2">
          <IoMdClose className="text-[#773FC6] mt-1 text-xl ml-2" />
          <h1 className="text-[#773FC6] ">Share a Post</h1>
        </div>
        <div>
          <h1 className="mr-5 text-[#773FC6]">POST</h1>
        </div>
      </div>

      <div className="flex md:flex lg:flex justify-between bg-white p-2 border-b-2 border-gray-300 mt-10 ">
        <div className=" lg:flex items-center gap-2 justify-center">
          <div>
            <Image
              alt="rtr-pic"
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
          <select className="text-start flex justify-evenly border border-black rounded m-5 lg:px-10 py-2">
            <option>Anyone</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>

      <div className=" flex gap-6 font-bold mt-4">
        <h1 className="text-[#773FC6]">#Successfully</h1>
        <h1 className="text-[#773FC6]">#joyful</h1>
        <h1 className="text-[#773FC6]">#happy</h1>
      </div>

      <div className="mt-5">
        <div className="text-xs">
          <p>
            In the week gone by, We had covered the launch of one of the most
            awaited compact SUVs in the country. Additionally, We also covered a
            series of...
          </p>
          <p>
            In the week gone by, We had covered the launch of one of the most
            awaited compact SUVs in the country. Additionally, We also covered a
            series of...
          </p>
        </div>
        <div className="text-[#773FC6] text-end">...see more</div>
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

      <div className="border bg-gray-300 w-full h-1 mt-10" />

      <div className="flex justify-between items-center py-3">
        <div className="text-[#773FC6]"># Add hashtag</div>
        <div>
          <select className="border border-black rounded py-2 px-5">
            <option>Anyone</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>

      <div className="border bg-gray-300 w-full h-1 " />

      <div className="sm:mt-5 lg:flex justify-between items-center p-5">
        <div className="flex gap-5">
          <FaCamera />
          <GrGallery />
          <FaLocationDot />
          <TiAttachmentOutline />
          <IoIosContact />
        </div>
        <div>
          <button className="bg-[#773FC6] text-white rounded px-8 py-3">
            Post
          </button>
        </div>
      </div>

      <div className="border bg-gray-300 w-full h-1" />
    </div>
  );
};

export default Launch;
