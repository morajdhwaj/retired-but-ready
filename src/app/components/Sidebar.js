import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import { AiFillTool } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { PiFilesFill } from "react-icons/pi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FiOctagon } from "react-icons/fi";
import { MdAnnouncement } from "react-icons/md";
const Sidebar = () => {
  return (
    <div>
      <div className="mx-10 fixed py-10 top-10 left-0 bottom-0  h-10 z-50 flex justify-center">
        <div className="border border-[#773fc6] w-20 rounded-lg fixe flex flex-col items-center py-5 gap-5 self-start">
          <div className="bg-[#773fc6] p-2 rounded-lg">
            <IoIosHome color="white" />
          </div>
          <h3 className="text-xs">MY TABS</h3>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <FaFile color="#344767" />
          </div>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <AiFillTool color="#344767" />
          </div>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <FaCartShopping color="#344767" />
          </div>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <PiFilesFill color="#344767" />
          </div>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <BsFillRocketTakeoffFill color="#344767" />
          </div>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <FiOctagon color="#344767" />
          </div>
          <div className="bg-white p-2 rounded-lg hover:bg-[#773fc6]">
            <MdAnnouncement color="#344767" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
