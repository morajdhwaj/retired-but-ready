import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-gray-200 items-center px-20 pt-5">
      <div className="w-1/2">
        <Image src="/assets/RBRLogo1.png" width={170} height={170} />
      </div>
      <div className="w-1/2 flex items-center justify-end gap-16">
        <input
          placeholder="Looking for..."
          className="bg-gray-200 border border-purple-300 text-sm rounded-lg px-2 py-1  "
        />
        <Link href="/register" className="font-semibold">
          Home
        </Link>
        <select className="bg-gray-200 font-semibold">
          <option>EN</option>
          <option>HI</option>
        </select>
        <Link
          className="bg-purple-200 px-6 py-3 rounded-lg text-purple-700 "
          href="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
