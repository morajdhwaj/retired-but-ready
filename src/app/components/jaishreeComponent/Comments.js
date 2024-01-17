import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const Comments = () => {
  const [dropdownOpen, setDropdownOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleDropdown = (index) => {
    console.log(index, "index");

    const newDropdownState = dropdownOpen.map((state, i) =>
      i === index ? !state : false
    );
    console.log(newDropdownState,'newDropdownState')

    setDropdownOpen(newDropdownState);
  };

  const renderDropdown = (index) => {

    
    return (
      <div className="absolute border border-gray-300 shadow-md rounded-md flex flex-col  mt-6 bg-white p-2">
        <button className="hover:bg-[#773fc6]  rounded-md hover:text-white text-black p-2">
          Share via
        </button>
        <button className="hover:bg-[#773fc6]  rounded-md hover:text-white text-black p-2">
          Message to Devid
        </button>
        <button className=" hover:bg-[#773fc6] rounded-md hover:text-white text-black p-2">
          Report Comment
        </button>
      </div>
    );
  };

  const cards = [
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    {
      name: "David Alto Swain",
      position: "Citrix XenApp,XenDesktop/VMware Mob...",
      time:"20 min ",
      paragraph:" It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.",
      like :"Like | Reply",
    },
    
    
    
  ];
    

  
  return (
    <div className="mx-4 h-[100%]">
      <div className="bg-[#FFFFFF] flex justify-between p-4 shadow-md  mt-40 sm:mt-20 md:mt-10 ">
        <div className="flex gap-2">
          <IoIosArrowBack className="text-[#773FC6] mt-1 text-xl" />
          <h1 className="text-[#773FC6] text-xl font-semibold">Comments</h1>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color="gray" />
        </div>
      </div>
      {/* ------------------- */}
      {cards.map((card, index) => (
      <div className=" mt-5 flex-row sm:flex "
      key={index}>
        <div >
        <Image alt="" src="/assets/Ellipse-39.png" height={50} width={50} />
        </div>
        <div className="flex border-gray-300 border rounded-b-lg rounded-tr-lg p-2">
        <div className=" w-[80%]">
              <h2 className="text-sm font-semibold text-[#773fc6]  ">
                {card.name}
              </h2>
              <p className="text-xs font-medium">{card.position}</p>
              <p className="text-xs text-gray-400">{card.time}</p>
              <p className="text-xs font-medium text-gray-800 mt-4">
                {card.paragraph}
              </p>
              <p className="text-xs mt-4">{card.like}</p>
            </div>
            <div className=" w-[20%] flex justify-end">
            <BsThreeDotsVertical size={25} color="gray"
            onClick={() => toggleDropdown(index)} />
            {dropdownOpen[index] && renderDropdown(index)}
          </div>

        </div>
      </div>
       ))}
      
      
      
      

     
    </div>
  );
};

export default Comments;
