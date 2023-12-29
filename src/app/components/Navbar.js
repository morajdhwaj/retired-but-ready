import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-[#EDEBF2] fixed top-0 left-0 bottom-0 w-full h-20 z-50 items-center px-10 ">
      <div className="w-1/2 flex text-xs justify-between ">
        <Link href="/">
          <Image src="/assets/RBRLogo1.png" width={70} height={70} />
        </Link>
        <div className="flex gap-2">
          <Link href="/profile-setup">Profile-setup</Link>
          <Link href="/profile-details">Profile</Link>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end gap-16">
        <input
          placeholder="Looking for..."
          className="bg-gray-200 border border-purple-300 text-sm rounded-lg px-2 py-1  "
        />
        <Link href="/register" className="font-semibold">
          Home
        </Link>
        <select className="bg-[#EDEBF2] font-semibold">
          <option>EN</option>
          <option>HI</option>
        </select>
        <Link
          className="bg-purple-200 px-6 py-3 rounded-lg text-[#773fc6] "
          href="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
