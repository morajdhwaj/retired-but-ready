import React from "react";

import Image from "next/image";
import { ImProfile } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { SiHsbc } from "react-icons/si";
import { MdOutlineJoinInner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Network = () => {
  return (
    <div className="">
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
          <h1 className="text-center text-sm font-medium mt-2" >
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
      <h1 className="mt-5 text-[#773fc6] font-medium text-sm">
        RetPro's (123456)already in my network
      </h1>
      <div className=" border border-[#9079af] w-[60%] h-0.5" />
      <div className="grid grid-cols-5  gap-10 mt-5 ">
        <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>

        <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>

       <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>

        <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>
        <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>
       <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>

       <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>

        <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>
        <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>

      <div className="border border-gray-300 rounded-md ">
          <div className=" bg-[#B3CEE2] ">
            <IoMdCloseCircle className="size-8 mx-32 "/>
            <div className="flex items-center justify-center pb-4">  
            <Image src="/assets/110.png"
            width={40}
            height={40}
            alt="pic"
            className=" w-24  h-24 rounded-full border-2   border-gray-200 "/>
            </div>
        </div>
        <h1 className="mt-5 flex items-center justify-center font-sans text-xl">Adel Calzoni</h1>
        <p className="text-center flex text-xs mt-1 text-gray-500">Lorem  Ipsum  is  simply  dummy</p> 
        <p className="text-center text-sm text-gray-500"> text of the</p>
        <div className="flex justify-center items-center gap-2 mt-2">
        <SiHsbc className="fill-red-600 size-8"/>
        <h1>HSBC</h1>
        </div>
        <div className="flex justify-center items-center mt-2 gap-1">
        <MdOutlineJoinInner className="text-gray-700" />
        <h1 className="text-gray-500 text-sm font-medium">19 connections</h1>
        </div>
        <div className="flex justify-center gap-2 items-center mt-2 mb-4">
          <button className=" p-2 px-6 border-2 rounded-md border-[#773fc6]"><h1 className="text-[#773fc6] font-medium">Message</h1></button>
          <BsThreeDots className="text-gray-600 size-5"/>
        </div>
        </div>
      </div>
      <div className="mt-2 ">
        <h1 className="flex justify-center items-center text-[#773fc6] font-medium">see all</h1>
      </div>
    </div>
  );
};

export default Network;