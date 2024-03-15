import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [dropdownOpen, setDropdownOpen] = useState(Array(20).fill(false));

  const toggleDropdown = (index) => {
    console.log(index, "index");

    const newDropdownState = dropdownOpen.map((state, i) =>
      i === index ? !state : false
    );
    console.log(newDropdownState, "newDropdownState");

    setDropdownOpen(newDropdownState);
  };

  const renderDropdown = (index) => {
    return (
      <div className="absolute border bg-white border-gray-300 shadow-md rounded-md flex flex-col right-0 p-2">
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
      name: "Raj Singh",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Denial",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Zubain",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Charli",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Harry",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Marrycom",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Zuzi",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Ronaldo",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Peri",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Candy",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Nelson",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Black Man",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Panther",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "X-man",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Avenger",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Xformer",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Juli",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Alex",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
    {
      name: "Berg",
      position: "OPPO India Marketing Head",
      company: "Tech Connection India Pvt.Ltd.",
    },
  ];
  const indexOfLastItem = currentPage * itemsPerPage; //1*5
  console.log(currentPage, "currentPage");
  console.log(indexOfLastItem, "indexOfLastItem");
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log(indexOfFirstItem, "indexOfFirstItem");
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem); // 0,5

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex  p-3 border-2 border-gray-300 rounded-md mt-56 sm:mt-5 md:mt-5 lg:mt-5">
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
      <span className="font-semibold text-[#374151] dark:text-white text-sm mt-5">
        {cards.length}
      </span>{" "}
      connections
      {currentItems.map((card, index) => (
        <div
          key={index}
          className="flex justify-between border-b-2 border-gray-300 mt-2 p-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <Image
                alt="rtr-pic"
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
      <div className="flex items-center justify-center mt-3">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="p-2">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {indexOfFirstItem + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {indexOfLastItem > cards.length ? cards.length : indexOfLastItem}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {cards.length}
            </span>{" "}
            Entries
          </span>
        </div>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-600 border-0 border-s border-gray-700 rounded hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= cards.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
