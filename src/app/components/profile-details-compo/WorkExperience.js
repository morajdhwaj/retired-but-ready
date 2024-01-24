import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const WorkExperience = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [country, setCountry] = useState("");
  const [experience, setExperience] = useState("");
  const [professionalField, setProfessionalField] = useState("");
  const [professionalExpertise, setProfessionalExpertise] = useState("");
  const [PersonalSkills, setPersonalSkills] = useState([]);
  const [englishProficiency, setEnglishProficiency] = useState("");

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
        setCountry(response?.data?.country_name);
        setExperience(response?.data?.total_experience);
        setProfessionalField(response?.data?.professional_field);
        setProfessionalExpertise(response?.data?.professional_expertise);
        setPersonalSkills(response?.data?.skills?.personal);
        setEnglishProficiency(response?.data?.english_proficiency);
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
        total_experience: experience,
        professional_field: professionalField,
        professional_expertise: professionalExpertise,
        skills: userData?.skills,
        languages: userData?.languages,
        english_proficiency: userData?.english_proficiency,
        education: userData?.education,
        work_history: userData?.work_history,
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

  console.log(userData);

  return (
    <div className="flex  m-5 flex-col gap-5  ">
      <div className="flex  gap-5 justify-end ">
        <button onClick={() => setEdit(!edit)}>
          <FaEdit size={30} />
        </button>
        {edit && (
          <button onClick={updateUser}>
            <h2 className="font-semibold text-[#773fc6]">Save changes</h2>
          </button>
        )}
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Total work experience</h2>
        {edit ? (
          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  px-2 rounded w-full"
          />
        ) : (
          <h2 className="font-semibold ">{experience} Year</h2>
        )}
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Professional field</h2>
        {edit ? (
          <input
            value={professionalField}
            onChange={(e) => setProfessionalField(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10   px-2 rounded w-full"
          />
        ) : (
          <h2 className="font-semibold ">{professionalField}</h2>
        )}
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Professional Expertise</h2>
        {edit ? (
          <input
            value={professionalExpertise}
            onChange={(e) => setProfessionalExpertise(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10  px-2 rounded w-full"
          />
        ) : (
          <h2 className="font-semibold ">{professionalExpertise}</h2>
        )}
      </div>
      {/* <div className="w-full">
        <h2 className="font-semibold text-gray-500">Personal Skills</h2>
        {edit ? (
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
        ) : (
          <div>
            {PersonalSkills.map((item) => {
              return <h2 className="font-semibold ">{item?.skill_name}</h2>;
            })}
          </div>
        )}
      </div> */}
      <div>
        <h2 className="font-semibold text-gray-500">English Proficiency</h2>

        {edit ? (
          <select className=" h-10 bg-[#f2f1f3] border-gray-300  border rounded  px-2 w-full">
            <option>Good</option>
            <option>Not Good</option>
            <option>Bad</option>
          </select>
        ) : (
          <h2 className="font-semibold ">{englishProficiency}</h2>
        )}
      </div>
      {/* <div className="w-full">
        <h2 className="font-semibold text-gray-500">Other language</h2>
        <div className="flex gap-1 flex-col">
          <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
        </div>
      </div> */}
    </div>
  );
};

export default WorkExperience;
