import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/Group193.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="py-32 ">
        <div className="flex px-20 gap-20 ">
          <div className="w-1/5">
            <Image src="/assets/RBRLogo1.png" width={100} height={100} />
            <p className="text-gray-500 text-justify  mt-5">
              Our mission is to create economic & engagement opportunity for our
              people around the world - age no bar
            </p>
          </div>
          <div className="w-1/5 flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">About</h1>
            <div className="flex flex-col gap-5 ">
              <Link href="" className="text-gray-500 ">
                About Us
              </Link>
              <Link href="" className="text-gray-500 ">
                Features
              </Link>
              <Link href="" className="text-gray-500 ">
                News
              </Link>
              <Link href="" className="text-gray-500 ">
                Careers
              </Link>
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">Support</h1>
            <div className="flex flex-col gap-5 ">
              <Link href="" className="text-gray-500 ">
                Account
              </Link>
              <Link href="" className="text-gray-500 ">
                Support Center
              </Link>
              <Link href="" className="text-gray-500 ">
                feedback
              </Link>
              <Link href="" className="text-gray-500 ">
                Contact Us
              </Link>
              <Link href="" className="text-gray-500 ">
                Accessibility
              </Link>
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-5 justify-center">
            <h1 className="text-2xl font-semibold">Get our app</h1>
            <div className="flex flex-col gap-5 ">
              <button className="flex border border-[#2b2b42] text-start self-start py-1 px-2 rounded items-center justify-center gap-2">
                <div>
                  <FaGooglePlay size={30} color="#2b2b42" />
                </div>
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <h2 className="text-gray-700">Google Play</h2>
                </div>
              </button>
              <button className="flex border border-[#2b2b42] text-start self-start py-1 px-2 rounded items-center justify-center gap-2">
                <div>
                  <FaApple size={30} color="#2b2b42" />
                </div>
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <h2 className="text-gray-700">Google Play</h2>
                </div>
              </button>
            </div>
          </div>
          <div className="w-1/5">
            <Image src="/assets/Landingpage1.png" width={180} height={250} />
          </div>
        </div>
        <div className="  bg-gray-400 mx-20 h-[1px] mt-20 " />
      </div>
    </div>
  );
};

export default Footer;
