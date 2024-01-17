import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Main = () => {
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
      <div className="absolute border border-gray-300 shadow-md rounded-md flex flex-col right-0 bg-white p-2">
        <button className="hover:bg-[#773fc6]  rounded-md hover:text-white text-black p-2">
          Add a connection
        </button>
        <button className=" hover:bg-[#773fc6] rounded-md hover:text-white text-black p-2">
          Send message
        </button>
      </div>
    );
  };

  const cards = [
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Munwar Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
  ];

  return (
    <div>
      <div className="flex  p-3 border-2 border-gray-300 rounded-md mt-56 sm:mt-5 md:mt-5 lg:mt-10">
        <IoIosSearch className="mt-1" />
        <input
          type="text"
          placeholder="Type a name to search..."
          className="bg-transparent text-sm"
        />
      </div>
      <h1 className="mt-5 text-xs text-gray-400">
        Here are your search results...
      </h1>
      <h1 className="text-[#374151] font-semibold text-sm mt-5">
        1,573 connections
      </h1>

      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-between border-b-2 border-gray-300 mt-5 p-5"
        >
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={50}
                width={50}
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#773fc6]">
                {card.name}
              </h2>
              <p className="text-[#374151] font-medium text-sm">
                {card.position}
              </p>
              <p className="text-[#374151] font-medium text-sm">
                {card.company}
              </p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical
              size={25}
              color="gray"
              onClick={() => toggleDropdown(index)}
            />
            {dropdownOpen[index] && renderDropdown(index)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
