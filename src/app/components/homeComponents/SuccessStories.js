import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const SuccessStories = () => {
  return (
    <div className="py-10 px-10">
      <div className="flex">
        <div className="w-4/5">
          <h1 className="text-3xl md:text-5xl  font-semibold md:leading-[55px] lg:leading-[60px]">
            Some real life success stories to get inspired by
          </h1>
        </div>
        <div className="w-1/5  gap-5 hidden md:flex  ">
          <button onClick={""}>
            <GoArrowLeft size={40} />
          </button>
          <button>
            <GoArrowRight size={40} />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className="md:w-1/2 flex flex-col gap-5 mt-7 ms:mt-10 md:pr-20">
          <h2 className="text-2xl">
            "No online course could have helped me this way"
          </h2>
          <p className=" sm:leading-6 lg:leading-7 text-gray-500">
            "A RetPro helped me realize that my aspirations were leaning more
            towards Data Sciences that what I am currently doing "
          </p>
          <div className="flex gap-5 mt-5">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/Ellipse-38.png"
                alt="/assets/Ellipse-38.png"
                height={50}
                width={50}
              />
            </div>
            <div className="">
              <h2 className="font-semibold text-xl">Wilson Thai</h2>
              <p>Ontario, Canada</p>
              <div className="flex gap-1">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-5 mt-10 md:pr-20">
          <h2 className="text-2xl">
            "I have been rewarded with both help and loyalty"
          </h2>
          <p className="sm:leading-6 lg:leading-7 text-gray-500">
            "The retired professional who is currently working with me to
            improve my language proficiency in French , is passionate about
            teaching "
          </p>
          <div className="flex gap-5 mt-5">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/Ellipse-39.png"
                alt="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
            </div>
            <div className="">
              <h2 className="font-semibold text-xl">Milena Belmar</h2>
              <p>Ontario, Canada</p>
              <div className="flex gap-1">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
