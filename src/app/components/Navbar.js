import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  return (
    <div className="flex bg-[#EDEBF2] fixed top-0 left-0 bottom-0 w-full h-20 z-50 items-center px-5 md:px-10 ">
      <div className="w-1/2 flex text-xs justify-between ">
        <Link href="/">
          <Image src="/assets/RBRLogo1.png" width={70} height={70} />
        </Link>
        <div className="flex gap-2">
          <Link href="/profile-setup">Profile-setup</Link>
          <Link href="/profile-details">Profile</Link>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end gap-2 md:gap-16">
        <input
          placeholder="Looking for..."
          className="bg-gray-200 border border-purple-300 text-xs md:text-sm rounded-lg px-2 py-1 w-20 md:w-40  "
        />
        <Link href="/register" className=" text-xs md:text-lg font-semibold">
          Register
        </Link>
        <select className="bg-[#EDEBF2] font-semibold text-xs md:text-lg">
          <option>EN</option>
          <option>HI</option>
        </select>
        <Link
          className="bg-purple-200 px-2  py-1 md:px-6 md:py-3 text-xs md:text-lg rounded-lg text-[#773fc6] "
          href="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
