import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TiAttachmentOutline } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";
import Image from "next/image";

const Send = () => {
  return (
    <div>
      <div className="">
        <div className=" mt-52 sm:mt-20 md:mt-5 flex justify-between bg-white py-2">
          <div className=" flex gap-2">
            <IoMdClose className="text-[#281b3a] mt-1 text-xl ml-2" />
            <h1 className="text-[#773FC6] ">Share a Post</h1>
          </div>
          <div>
            <h1 className="mx-5 text-[#773FC6]">POST</h1>
          </div>
        </div>
        <div className="w-full  lg:h-[100px] bg-white mt-10">
          <div className=" flex m-2 items-center gap-2 justify-between">
            <div className=" md:flex lg:flex gap-2 mt-5">
              <Image
                alt="rtr-pic"
                src="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
              <div className="">
                <p className="  text-[#773fc6] font-semibold text-xs sm:text-sm lg:text-lg ">
                  Munawar Raj Singh
                </p>
                <p className="text-black font-normal  text-xs sm:text-sm lg:text-sm">
                  Chief Executive Officer
                </p>
                <p className="text-black font-normal text-xs sm:text-sm lg:text-sm">
                  17h
                </p>
              </div>
            </div>
            <div>
              <select className="text-start  border border-black rounded m-5 px-10 py-2">
                <option>Anyone</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xs">
            <p>
              In the week gone by, We had covered the launch of one of the most
              awaited compact SUVs in the country. Additionally, We also covered
              a series of...
            </p>
            <p>
              In the week gone by, We had covered the launch of one of the most
              awaited compact SUVs in the country. Additionally, We also covered
              a series of...
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

        <div className="flex flex-wrap justify-between items-center py-3">
          <div className="text-[#773FC6]"># Add hashtag</div>
          <div>
            <select className="border border-black rounded h-10">
              <option>Anyone</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className="border bg-gray-300 w-full h-1 " />

        <div className="flex flex-wrap   justify-between items-center p-5">
          <div className="flex gap-5">
            <FaCamera />
            <GrGallery />
            <FaLocationDot />
            <TiAttachmentOutline />
            <IoIosContact />
          </div>
          <div>
            <button className="bg-gray-400 text-white rounded  mt-2 lg:mt-0text-center w-20 h-10">
              Send
            </button>
          </div>
        </div>

        <div className="border bg-gray-300 w-full h-1" />
      </div>
    </div>
  );
};

export default Send;
