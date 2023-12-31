"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { FaCircleUser } from "react-icons/fa6";
import PersonalInfo from "@/app/components/profile-setup-compo/PersonalInfo";
import SocialInfo from "@/app/components/profile-setup-compo/SocialInfo";
import SkillsComponent from "@/app/components/profile-setup-compo/SkillsComponent";
import Experiences from "@/app/components/profile-setup-compo/Experiences";
import Certification from "@/app/components/profile-setup-compo/Certification";
import axios from "axios";
import toast from "react-hot-toast";

const page = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState("");
  const hiddenFileInput = useRef(null);
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [profileHeadline, setProfileHeadline] = useState("");
  const [profileSummary, setProfileSummary] = useState("");
  const [lastDesignation, setLastDesignation] = useState("");
  const [totalExperience, setTotalExperience] = useState("");
  const [professionalField, setProfessionalField] = useState("");
  const [professionalExpertise, setProfessionalExpertise] = useState("");
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [englishProficiency, setEnglishProficiency] = useState("Good");
  const [institutionId, setInstitutionId] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [institutionStart, setInstitutionStart] = useState("");
  const [institutionEnd, setInstitutionEnd] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [companyStart, setCompanyEnd] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [certificateName, setCertificateName] = useState("");
  const [certificateDate, setCertificateDate] = useState("");
  const [credentials, setCredentials] = useState("");
  const [isCharged, setIsCharged] = useState(false);
  const [acceptableCurrencies, setAcceptableCurrencies] = useState("");
  const [interests, setInterests] = useState([]);
  const [retirementCause, setRetirementCause] = useState("");
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [step]);

  const handleStepUp = () => {
    setStep(step + 1);
  };
  const handleStepDown = () => {
    setStep(step - 1);
  };

  const handleUpdate = () => {
    const options = {
      method: "PUT",
      url: "https://retpro.catax.me/user/update-profile",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        user_display_name: displayName,
        user_first_name: firstName,
        user_last_name: lastName,
        user_age: age,
        user_gender: gender,
        country_id: "1",
        country_name: country,
        user_state: state,
        user_city: city,
        city_coordinates: ["12.3210", "43.432123"],
        profile_headline: "ganja piyo mst rho",
        profile_summary: "saste ganja ke liye sampark kare",
        last_designation: "dealer",
        total_experience: "30+",
        professional_field: "weed",
        professional_expertise: "vasooli",
        skills: {
          personal: [
            {
              skill_id: "657a9aefec8c5016e744d8ba",
              skill_name: "string",
            },
          ],
          professional: [],
        },
        languages: ["english"],
        english_proficiency: "full imglish",
        education: [
          {
            institution_id: "657aa5ab21d8f5ad8d839413",
            institution_name: "allen",
            degree: "dealing",
            field: "ganja",
            start_year: 2020,
            end_year: 2024,
          },
        ],
        work_history: [
          {
            company_id: "657d55d2033cb72b10c630e5",
            company_name: "catax",
            title: "intern",
            start_date: "2022-10-01T00:00:00.000Z",
            end_date: "present",
          },
        ],
        certifications: [
          {
            certification_id: null,
            certification_name: "Python",
            credentials: "UC-b88f5ab3-3812-4901-bf6e-0a751d09ef65",
            certification_date: "2022-11-26T00:00:00.000Z",
          },
        ],
        is_charged: true,
        acceptable_currencies: ["rupyaa"],
        interests: ["ganja"],
        retirement_cause: ["heavy dose"],
        social_links: {
          linkedIn: "string",
          facebook: "string",
          twitter: "string",
        },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  console.log(userId, "user");
  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="w-full bg-[#f2f1f3]  p-5 ml-52 pt-24">
          <div className="flex w-full  ">
            <div className="w-1/2 flex items-center justify-end">
              <h1 className="text-4xl font-medium"> Profile</h1>
            </div>
            <div className="w-1/2 flex items-center justify-center flex-col gap-5">
              <FaCircleUser size={100} />
              <button
                className="border border-[#773fc6] text-[#773fc6] p-1 text-xs rounded"
                onClick={handleClick}
              >
                Add a profile picture
              </button>
              <div>
                <input
                  type="file"
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  style={{ display: "none" }} // Make the file input element invisible
                />
              </div>
            </div>
          </div>
          <div className="mx-40 mt-5 flex flex-col gap-5">
            <p className="text-gray-500 text-center">
              A photo that shows your face clearly is ideal. You know what else
              make fo a great profile picture? your smile
            </p>
            <div className="flex items-center justify-center">
              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 1
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                1
              </h1>
              <p className="text-gray-300">- - - - - -</p>
              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 2
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                2
              </h1>
              <p className="text-gray-300">- - - - - -</p>

              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 3
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                3
              </h1>
              <p className="text-gray-300">- - - - - -</p>

              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 4
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                4
              </h1>
              <p className="text-gray-300">- - - - - -</p>

              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 5
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                5
              </h1>
            </div>
            <p className="text-[#ba0001] text-center">
              All fields marked "*" are mandatory
            </p>
            {step === 1 && (
              <PersonalInfo
                stepUp={handleStepUp}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                displayName={displayName}
                setDisplayName={setDisplayName}
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
                country={country}
                setCountry={setCountry}
                state={state}
                setState={setState}
                city={city}
                setCity={setCity}
              />
            )}
            {step === 2 && (
              <SocialInfo stepUp={handleStepUp} stepDown={handleStepDown} />
            )}
            {step === 3 && (
              <SkillsComponent
                stepUp={handleStepUp}
                stepDown={handleStepDown}
              />
            )}
            {step === 4 && (
              <Experiences
                stepUp={handleStepUp}
                stepDown={handleStepDown}
                englishProficiency={englishProficiency}
                setEnglishProficiency={setEnglishProficiency}
              />
            )}
            {step === 5 && <Certification stepDown={handleStepDown} />}
          </div>
          {step === 5 && (
            <div className="w-full  p-5 ml-36 pt-24 flex items-center justify-center ">
              <button
                onClick={handleUpdate}
                className=" w-40 bg-[#773fc6] p-2 text-white font-medium rounded"
              >
                submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
