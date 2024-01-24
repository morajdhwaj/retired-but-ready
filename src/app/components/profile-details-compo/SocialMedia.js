import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const SocialMedia = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");

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
        setFacebook(response?.data?.social_links?.facebook);
        setTwitter(response?.data?.social_links?.twitter);
        setLinkedin(response?.data?.social_links?.linkedIn);
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
        work_history: userData?.work_history,
        certifications: userData?.certifications,
        is_charged: userData?.is_charged,
        acceptable_currencies: userData?.acceptable_currencies,
        interests: userData?.interests,
        retirement_cause: userData?.retirement_cause,
        social_links: {
          linkedIn: linkedin,
          facebook: facebook,
          twitter: twitter,
        },
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

  console.log(userData?.social_links);

  return (
    <div className="flex  flex-col gap-5 m-5  ">
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

      {edit && (
        <div className="">
          <h2 className="font-medium">Link your accounts</h2>
          <p className="text-xs text-gray-500">
            (provide links to your linkedin, facebook, google and other social
            media accounts that are relevant with your profile and work
            experience)
          </p>
        </div>
      )}
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Facebook</h2>
        {edit ? (
          <input
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  rounded w-full"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        ) : (
          <h2 className="font-semibold ">{facebook}</h2>
        )}
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Twitter</h2>
        {edit ? (
          <input
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10   px-2 rounded w-full"
          />
        ) : (
          <h2 className="font-semibold ">{twitter}</h2>
        )}
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Linkedin</h2>
        {edit ? (
          <input
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10   px-2 rounded w-full"
          />
        ) : (
          <h2 className="font-semibold ">{linkedin}</h2>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
