import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const WorkHistory = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data);
        setUserData(response?.data);
        setCompanyName(response?.data?.work_history[0].company_name);
        setTitle(response?.data?.work_history[0].title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (userData.length === 0) {
    return <h1 className="mx-5">Loading...</h1>;
  }

  console.log(companyName);

  return (
    <div className="m-5">
      {/* <div className="flex justify-end ">
        <button>
          <FaEdit size={30} />
        </button>
      </div> */}
      <div>
        <h2 className="text-[#808184] font-medium">Company Name</h2>
        {edit ? (
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
        ) : (
          <h2 className="font-semibold ">{companyName}</h2>
        )}
      </div>
      <div className="mt-5">
        <h2 className="text-[#808184] font-medium">Title/Role</h2>
        {edit ? (
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
        ) : (
          <h2 className="font-semibold ">{title}</h2>
        )}{" "}
      </div>
      {/* <div className="flex gap-6 mt-5">
        <div className="w-1/2">
          <h2 className="text-[#808184] font-medium">From</h2>
          <input
            className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
            type="date"
          ></input>
        </div>
        <div className="w-1/2">
          <h2 className="text-[#808184] font-medium">To</h2>
          <input
            className="  h-10 bg-[#f2f1f3] border-gray-300  border rounded  w-full"
            type="date"
          ></input>
        </div>
      </div> */}
      {/* <div className="mt-5">
        <h2 className="text-[#808184] font-medium">Certifications</h2>
        <div className="flex flex-col gap-1">
          <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
          <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-[#808184] font-medium">Your URL</h2>
        <input className=" h-10  bg-[#f2f1f3] border-gray-300 border rounded w-full" />
      </div> */}
    </div>
  );
};

export default WorkHistory;
