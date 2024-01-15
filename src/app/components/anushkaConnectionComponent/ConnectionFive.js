import React from "react";
import Image from "next/image";
import { ImProfile } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { SiHsbc } from "react-icons/si";
import { MdOutlineJoinInner } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const ConnectionFive = () => {
  return (
    <div>
      <div className=" flex flex-wrap gap-4 mx-6 justify-between bg-scroll   mt-52 sm:mt-40 lg:mt-0">
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 p-2">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-xs text-center ">276</p>
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
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-sm text-center">1k+</p>
            </div>
            <ImProfile className=" mx-8 mt-3 size-8 fill-pink-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Profile
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-sm text-center">14k+</p>
            </div>
            <FaGlobe className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my <br />
            Connectios
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-sm text-center">1k+</p>
            </div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-blue-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Hiring
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-sm text-center ">14k+</p>
            </div>
            <FaSearchLocation className=" mx-8 mt-3 size-8 fill-orange-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> Work experience
          </h1>
        </div>
        <div>
          <div className="bg-gray-300 w-24  h-24 rounded-full border-2  border-gray-400 ">
            <div className="bg-gray-100 rounded-full border border-red-500 w-10 h-4 mx-16  ">
              <p className="text-sm text-center">1k+</p>
            </div>
            <IoPeopleSharp className=" mx-8 mt-3 size-8 fill-green-500" />
          </div>
          <h1 className="text-center text-sm font-medium mt-2">
            Based on my
            <br /> best matches
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold mt-10">1,573 Connection</h1>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex flex-wrap ">
          <Image
            alt="Ellipse"
            src="/assets/Ellipse-39.png"
            height={80}
            width={80}
          />
          <div className="mt-2 mx-2">
            <p className="text-[#773fc6] font-semibold ">Munawar Raj Singh</p>
            <p className="text-sm font-medium">
              Ret.OPPO India Marketing Head,
            </p>
            <p className="text-sm font-medium">
              Tech Connection India Pvt.Ltd.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 ">
                <p className="text-[#773fc6] font-bold text-center">
                  View Job Post
                </p>
              </button>
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 md:mx-2 lg:mx-2 ">
                <p className="text-[#773fc6] font-bold text-center"> Message</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mx-5">
          <BsThreeDotsVertical />
          <IoIosSend />
        </div>
      </div>
      <div className="border border-gray-300 mx-2  w-60 sm:w-72 md:w-96 lg:w-96 mt-5" />
      <div className="mt-5 flex justify-between ">
        <div className="flex flex-wrap ">
          <Image
            alt="Ellipse"
            src="/assets/Ellipse-39.png"
            height={80}
            width={80}
          />
          <div className="mt-2 mx-2">
            <p className="text-[#773fc6] font-semibold ">Munawar Raj Singh</p>
            <p className="text-sm font-medium">
              Ret.OPPO India Marketing Head,
            </p>
            <p className="text-sm font-medium">
              Tech Connection India Pvt.Ltd.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 ">
                <p className="text-[#773fc6] font-bold text-center">
                  View Job Post
                </p>
              </button>
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 md:mx-2  lg:mx-2 ">
                <p className="text-[#773fc6] font-bold text-center"> Message</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mx-5">
          <BsThreeDotsVertical />
          <IoIosSend />
        </div>
      </div>
      <div className="border border-gray-300 mx-2  w-60 sm:w-72 md:w-96 lg:w-96 mt-5" />
      <div className="mt-5 flex justify-between">
        <div className="flex flex-wrap ">
          <Image
            alt="Ellipse"
            src="/assets/Ellipse-39.png"
            height={80}
            width={80}
          />
          <div className="mt-2 mx-2">
            <p className="text-green-600 font-semibold ">Munawar Raj Singh</p>
            <p className="text-sm font-medium">
              Ret.OPPO India Marketing Head,
            </p>
            <p className="text-sm font-medium">
              Tech Connection India Pvt.Ltd.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="border-2 rounded-lg  w-36 mt-2 border-green-600 h-9 ">
                <p className="text-green-600 font-bold text-center">
                  View Job Post
                </p>
              </button>
              <button className="border-2 rounded-lg  w-36 mt-2 border-green-600 h-9 md:mx-2  lg:mx-2 ">
                <p className="text-green-600 font-bold text-center"> Message</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mx-5">
          <BsThreeDotsVertical />
          <IoIosSend />
        </div>
      </div>
      <div className="border border-gray-300 mx-2  w-60 sm:w-72 md:w-96 lg:w-96 mt-5" />
      <div className="mt-5 flex justify-between">
        <div className="flex flex-wrap ">
          <Image
            alt="Ellipse"
            src="/assets/Ellipse-39.png"
            height={80}
            width={80}
          />
          <div className="mt-2 mx-2">
            <p className="text-[#773fc6] font-semibold ">Munawar Raj Singh</p>
            <p className="text-sm font-medium">
              Ret.OPPO India Marketing Head,
            </p>
            <p className="text-sm font-medium">
              Tech Connection India Pvt.Ltd.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 ">
                <p className="text-[#773fc6] font-bold text-center">
                  View Job Post
                </p>
              </button>
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 md:mx-2  lg:mx-2 ">
                <p className="text-[#773fc6] font-bold text-center"> Message</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mx-5">
          <BsThreeDotsVertical />
          <IoIosSend />
        </div>
      </div>
      <div className="border border-gray-300 mx-2 w-60 sm:w-72 md:w-96 lg:w-96 mt-5" />

      <div className="mt-5 flex justify-between">
        <div className="flex flex-wrap ">
          <Image
            alt="Ellipse"
            src="/assets/Ellipse-39.png"
            height={80}
            width={80}
          />
          <div className="mt-2 mx-2">
            <p className="text-green-600 font-semibold ">Munawar Raj Singh</p>
            <p className="text-sm font-medium">
              Ret.OPPO India Marketing Head,
            </p>
            <p className="text-sm font-medium">
              Tech Connection India Pvt.Ltd.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="border-2 rounded-lg  w-36 mt-2  border-green-600 h-9 ">
                <p className="text-green-600 font-bold text-center">
                  View Job Post
                </p>
              </button>
              <button className="border-2 rounded-lg  w-36 mt-2  border-green-600 h-9 md:mx-2  lg:mx-2 ">
                <p className="text-green-600 font-bold text-center"> Message</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mx-5">
          <BsThreeDotsVertical />
          <IoIosSend />
        </div>
      </div>
      <div className="border border-gray-300 mx-2 w-60 sm:w-72 md:w-96 lg:w-96  mt-5" />
      <div className="mt-5 flex justify-between">
        <div className="flex flex-wrap ">
          <Image
            alt="Ellipse"
            src="/assets/Ellipse-39.png"
            height={80}
            width={80}
          />
          <div className="mt-2 mx-2">
            <p className="text-[#773fc6] font-semibold ">Munawar Raj Singh</p>
            <p className="text-sm font-medium">
              Ret.OPPO India Marketing Head,
            </p>
            <p className="text-sm font-medium">
              Tech Connection India Pvt.Ltd.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9 ">
                <p className="text-[#773fc6] font-bold text-center">
                  View Job Post
                </p>
              </button>
              <button className="border-2 rounded-lg  w-36 mt-2 border-[#773fc6] h-9  ">
                <p className="text-[#773fc6] font-bold text-center"> Message</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mx-5">
          <BsThreeDotsVertical />
          <IoIosSend />
        </div>
      </div>
      <div className="border border-gray-300 mx-2 w-60 sm:w-72 md:w-96 lg:w-96 mt-5" />
    </div>
  );
};

export default ConnectionFive;
