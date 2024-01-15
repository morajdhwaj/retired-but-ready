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
import { useRouter } from "next/navigation";

const page = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState("");
  const hiddenFileInput = useRef(null);
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [profileHeadline, setProfileHeadline] = useState("");
  const [profileSummary, setProfileSummary] = useState("");
  const [lastDesignation, setLastDesignation] = useState("Software Developer");
  const [totalExperience, setTotalExperience] = useState("");
  const [professionalField, setProfessionalField] = useState("");
  const [professionalExpertise, setProfessionalExpertise] = useState("");
  const [skills, setSkills] = useState([]);
  const [personalSkills, setPersonalSkills] = useState([]);
  const [professionalSkills, setProfessionalSkills] = useState([]);
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
  const [acceptableCurrencies, setAcceptableCurrencies] = useState("INR");
  const [interests, setInterests] = useState([]);
  const [retirementCause, setRetirementCause] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const router = useRouter();

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

  const handleSubmit = () => {
    if (
      !displayName ||
      !firstName ||
      age ||
      gender ||
      city ||
      country ||
      state ||
      retirementCause ||
      facebook ||
      twitter ||
      linkedin ||
      personalSkills ||
      professionalSkills ||
      professionalSkills ||
      professionalSkills ||
      professionalSkills ||
      certificateName
    ) {
      toast.error("All fields marked * are mandatory");

      return;
    }
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
          personal: personalSkills.map((item) => ({
            skill_id: item.value,
            skill_name: item.label,
          })),
          professional: [],
        },
        languages: languages,
        english_proficiency: englishProficiency,
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
            company_name: companyName,
            title: title,
            start_date: "2022-10-01T00:00:00.000Z",
            end_date: "present",
          },
        ],
        certifications: [
          {
            certification_id: null,
            certification_name: certificateName,
            credentials: "UC-b88f5ab3-3812-4901-bf6e-0a751d09ef65",
            certification_date: "2022-11-26T00:00:00.000Z",
          },
        ],
        is_charged: true,
        acceptable_currencies: [acceptableCurrencies],
        interests: ["ganja"],
        retirement_cause: retirementCause.map((item) => item.label),
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
        router.push("/profile-details");
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error?.response?.data?.detail);
      });
  };

  // console.log(
  //   professionalSkills.map((item) => ({
  //     skill_id: item.value,
  //     skill_name: item.label,
  //   })),
  //   "last"
  // );

  console.log(englishProficiency, "last");

  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>

        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full ">
            <div className="md:w-1/2 md:flex items-center justify-end">
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
          <div className="lg:mx-40 mt-5 flex flex-col gap-5">
            <p className="text-gray-500 text-center">
              A photo that shows your face clearly is ideal. You know what else
              make fo a great profile picture? your smile
            </p>
            <div className="flex items-center  gap-5 md:gap-10 xl:gap-0 flex-wrap justify-center">
              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 1
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                1
              </h1>
              <p className="text-gray-300 hidden xl:flex ">- - - - - -</p>
              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 2
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                2
              </h1>
              <p className="text-gray-300 hidden xl:flex">- - - - - -</p>

              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 3
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                3
              </h1>
              <p className="text-gray-300 hidden xl:flex">- - - - - -</p>

              <h1
                className={`border-2  self-start px-5 py-2.5 rounded-full text-2xl ${
                  step === 4
                    ? "border-[#773fc6] text-[#773fc6]"
                    : "text-gray-500"
                } `}
              >
                4
              </h1>
              <p className="text-gray-300 hidden xl:flex">- - - - - -</p>

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
              <SocialInfo
                stepUp={handleStepUp}
                stepDown={handleStepDown}
                retirementCause={retirementCause}
                setRetirementCause={setRetirementCause}
                facebook={facebook}
                setFacebook={setFacebook}
                twitter={twitter}
                setTwitter={setTwitter}
                linkedIn={linkedin}
                setLinkedin={setLinkedin}
              />
            )}
            {step === 3 && (
              <SkillsComponent
                stepUp={handleStepUp}
                stepDown={handleStepDown}
                lastDesignation={lastDesignation}
                setLastDesignation={setLastDesignation}
                totalExperience={totalExperience}
                setTotalExperience={setTotalExperience}
                professionalField={professionalField}
                setProfessionalField={setProfessionalField}
                professionalExpertise={professionalExpertise}
                setProfessionalExpertise={setProfessionalExpertise}
                skills={skills}
                setSkills={setSkills}
                personalSkills={personalSkills}
                setPersonalSkills={setPersonalSkills}
                professionalSkills={professionalSkills}
                setProfessionalSkills={setProfessionalSkills}
              />
            )}
            {step === 4 && (
              <Experiences
                stepUp={handleStepUp}
                stepDown={handleStepDown}
                englishProficiency={englishProficiency}
                setEnglishProficiency={setEnglishProficiency}
                languages={languages}
                setLanguages={setLanguages}
                companyName={companyName}
                setCompanyName={setCompanyName}
                title={title}
                setTitle={setTitle}
              />
            )}
            {step === 5 && (
              <Certification
                stepDown={handleStepDown}
                handleSubmit={handleSubmit}
                certificateName={certificateName}
                setCertificateName={setCertificateName}
                acceptableCurrencies={acceptableCurrencies}
                setAcceptableCurrencies={setAcceptableCurrencies}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
