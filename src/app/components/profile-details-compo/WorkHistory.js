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
        user_display_name: userData?.user_display_name,
        user_first_name: userData?.user_first_name,
        user_last_name: userData?.user_last_name,
        user_age: userData?.user_age,
        user_gender: userData?.user_gender,
        country_id: userData?.country_id,
        country_name: userData?.country_name,
        user_state: userData?.user_state,
        user_city: userData?.user_city,
        city_coordinates: userData?.city_coordinates,
        profile_headline: userData?.profile_headline,
        profile_summary: userData?.profile_summary,
        last_designation: userData?.last_designation,
        total_experience: userData?.total_experience,
        professional_field: userData?.professional_field,
        professional_expertise: userData?.professional_expertise,
        skills: userData?.skills,
        languages: userData?.languages,
        english_proficiency: userData?.english_proficiency,
        education: userData?.education,
        work_history: [
          {
            company_id: "657d55d2033cb72b10c630e5",
            company_name: companyName,
            title: title,
            start_date: "2022-10-01T00:00:00.000Z",
            end_date: "present",
          },
        ],
        certifications: userData?.certifications,
        is_charged: userData?.is_charged,
        acceptable_currencies: userData?.acceptable_currencies,
        interests: userData?.interests,
        retirement_cause: userData?.retirement_cause,
        social_links: userData?.social_links,
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
      {/* <div className="flex  gap-5 justify-end ">
        <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button>
        {edit && (
          <button onClick={updateUser}>
            <h2 className="font-semibold text-[#773fc6]">Save changes</h2>
          </button>
        )}
      </div> */}
      <div className="flex flex-wrap gap-7">
        {companies.map((company) => {
          return (
            <div
              className="mt-5 border  self-start gap-5  p-5 border-[#773fc6] rounded-lg   "
              key={company.company_name}
            >
              <div>
                <h2 className="text-[#808184] font-medium">Company Name</h2>

                {edit ? (
                  <input
                    value={company.company_name}
                    className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full"
                  />
                ) : (
                  <h2 className="font-semibold ">{company.company_name}</h2>
                )}
              </div>
              <div className="">
                <h2 className="text-[#808184] font-medium mt-2">Title/Role</h2>

                <h2 className="font-semibold ">{company.title}</h2>
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
