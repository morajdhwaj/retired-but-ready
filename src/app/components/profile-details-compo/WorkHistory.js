import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { companyTitle } from "../array-data/CompanyTitle";
import { IoClose } from "react-icons/io5";

const WorkHistory = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companies, setCompanies] = useState([]);
  const [title, setTitle] = useState("");
  const [companyStart, setCompanyStart] = useState("");
  const [companyEnd, setCompanyEnd] = useState("");
  const [experiences, setExperiences] = useState([]);
  const currentDate = new Date().toISOString().split("T")[0];

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

        // Modify work_history before setting it as companies and experiences
        const formattedWorkHistory = response?.data?.work_history.map(
          (experience) => ({
            ...experience,
            start_date: experience.start_date.split("T")[0], // Remove time portion
            end_date: experience.end_date.split("T")[0], // Remove time portion
          })
        );

        setCompanies(formattedWorkHistory);
        setExperiences(formattedWorkHistory);
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
        work_history: experiences.map(({ company_id, ...rest }) => rest),
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

  const handleAddExperience = () => {
    if (!companyName || !title || !companyStart || !companyEnd) {
      toast.error("Please fill the required input fields");
      return;
    }

    const newExperience = {
      company_name: companyName,
      title: title,
      start_date: companyStart,
      end_date: companyEnd,
    };

    setExperiences([...experiences, newExperience]);
    setCompanyName("");
    setTitle("");
    setCompanyStart("");
    setCompanyEnd("");
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  if (userData.length === 0) {
    return <h1 className="mx-5">Loading...</h1>;
  }

  console.log(experiences, "ex");

  return (
    <div className="m-5">
      <div className="flex  gap-5 justify-end ">
        <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button>
      </div>
      {!edit ? (
        <div className="flex flex-wrap gap-7">
          {companies.map((company, index) => {
            return (
              <div
                className="mt-5 border  self-start gap-5  p-5 border-[#773fc6] rounded-lg   "
                key={index}
              >
                <div className="flex  gap-5 justify-end ">
                  <button onClick={() => setEdit(index)}></button>
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
                  <h2 className="text-[#808184] font-medium mt-2">
                    Title/Role
                  </h2>
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
      ) : (
        <div className="mt-5 ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="my-5 border p-2 rounded-lg border-[#773fc6] "
            >
              <div>
                <div className="flex justify-between">
                  <h2 className="text-[#808184] font-medium">Company Name</h2>
                  <button onClick={() => handleRemoveExperience(index)}>
                    <IoClose size={30} color="gray" />
                  </button>
                </div>
                <h2 className=" font-medium ">{experience?.company_name}</h2>
              </div>
              <div className="mt-5">
                <h2 className="text-[#808184] font-medium">Title</h2>
                <h2 className=" font-medium">{experience?.title}</h2>
              </div>
              <div className="mt-5 flex gap-20">
                <div>
                  <h2 className="text-[#808184] font-medium">Start date</h2>
                  <h2 className=" font-medium">
                    {experience?.start_date.split("-").reverse().join("-")}
                  </h2>
                </div>
                <div>
                  <h2 className="text-[#808184] font-medium">End date</h2>
                  <h2 className=" font-medium">
                    {experience?.end_date.split("-").reverse().join("-")}
                  </h2>
                </div>
              </div>
            </div>
          ))}
          <div className="">
            <div>
              <h2 className="text-[#808184] font-medium">Company Name*</h2>
              <input
                value={companyName}
                onChange={(e) =>
                  setCompanyName(
                    e.target.value.replace(/\b\w/g, (c) => c.toUpperCase())
                  )
                }
                className=" h-10  bg-[#f2f1f3] px-2 border-gray-300 border rounded w-full"
              />
            </div>
            <div className="mt-5">
              <h2 className="text-[#808184] font-medium">Title*</h2>

              <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
              >
                <>
                  <option value="" disabled>
                    Select Title
                  </option>
                  {companyTitle.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                  <option>Other</option>
                </>
              </select>
            </div>
            <div className="flex gap-6 mt-5">
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">Start date*</h2>
                <input
                  value={companyStart}
                  onChange={(e) => setCompanyStart(e.target.value)}
                  className="h-10 bg-[#f2f1f3] border-gray-300 border text-gray-600 pl-2  rounded w-full"
                  type="date"
                  max={currentDate}
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-[#808184] font-medium">End date*</h2>
                <input
                  value={companyEnd}
                  onChange={(e) => setCompanyEnd(e.target.value)}
                  className="h-10 bg-[#f2f1f3] border-gray-300 border text-gray-600 pl-2  rounded w-full"
                  type="date"
                  max={currentDate}
                />
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center items-center">
          {experiences.length !== 0 && (
            <button
              onClick={handleAddExperience}
              className="text-xl text-[#773fc6]  border p-2 rounded-lg border-[#773fc6] font-medium mt-10"
            >
              Add position
            </button>
          )}
        </div> */}

          <div className="mt-10 gap-10 flex items-center justify-center w-full">
            {experiences.length == 0 ||
            companyName ||
            companyStart ||
            companyEnd ? (
              <button
                onClick={handleAddExperience}
                className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
              >
                Add position
              </button>
            ) : (
              <button
                onClick={updateUser}
                className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2 "
              >
                Save changes
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkHistory;
