import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const WorkHistory = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companies, setCompanies] = useState([]);
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
        setCompanies(response?.data?.work_history);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const updateUser = () => {
    const options = {
      method: "PUT",
      url: "https://retpro.catax.me/user/update-profile",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        english_proficiency: userData?.english_proficiency,
        education: userData?.education,

        work_history: [
          {
            company_name: companyName,
            title: title,
            start_date: "2022-10-01T00:00:00.000Z",
            end_date: "present",
          },
        ],
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
        setEdit(!edit);
        getUserData();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  if (userData.length === 0) {
    return <h1 className="mx-5">Loading...</h1>;
  }

  console.log(companies);

  return (
    <div className="m-5">
      <div className="flex  gap-5 justify-end ">
        {/* <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button> */}
        {edit && (
          <button onClick={updateUser}>
            <h2 className="font-semibold text-[#773fc6]">Save changes</h2>
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-7">
        {companies.map((company, index) => {
          return (
            <div
              className="mt-5 border  self-start gap-5  p-5 border-[#773fc6] rounded-lg   "
              // key={company.company_name}
              key={index}
            >
              <div className="flex  gap-5 justify-end ">
                <button onClick={() => setEdit(index)}>
                  {/* <FaEdit size={30} /> */}
                </button>
                {/* {edit === index && (
                  <button onClick={updateUser}>
                    <h2 className="font-semibold text-[#773fc6]">
                      Save changes
                    </h2>
                  </button>
                )} */}
              </div>
              <div>
                <h2 className="text-[#808184] font-medium">Company Name</h2>

                {edit === index ? (
                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  rounded w-full"
                  />
                ) : (
                  <h2 className="font-semibold ">{company.company_name}</h2>
                )}
              </div>
              <div className="">
                <h2 className="text-[#808184] font-medium mt-2">Title/Role</h2>
                {edit === index ? (
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  rounded w-full"
                  />
                ) : (
                  <h2 className="font-semibold ">{company.title}</h2>
                )}
              </div>
              <div className="flex gap-5 mt-2">
                <div>
                  <h2 className="text-[#808184] font-medium">Start time</h2>

                  <h2 className="font-semibold text-sm  ">
                    {dayjs(company?.start_date).format("DD-MM-YYYY")}
                  </h2>
                </div>
                <div>
                  <h2 className="text-[#808184] font-medium">End time</h2>

                  <h2 className="font-semibold text-sm ">
                    {" "}
                    {dayjs(company?.end_date).format("DD-MM-YYYY")}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
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
