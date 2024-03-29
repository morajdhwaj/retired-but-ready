"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import PopUp from "@/app/components/PopUp";
import Image from "next/image";
import { UserIdContext } from "@/context/UserIdContext";

const page = () => {
  const { userIdFromContext } = useContext(UserIdContext);
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [countryId, setCountryId] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [profileHeadline, setProfileHeadline] = useState("");
  const [profileSummary, setProfileSummary] = useState("");
  const [lastDesignation, setLastDesignation] = useState("");
  const [totalExperience, setTotalExperience] = useState("");
  const [professionalField, setProfessionalField] = useState("");
  const [professionalExpertise, setProfessionalExpertise] = useState("");
  const [skills, setSkills] = useState([]);
  const [personalSkills, setPersonalSkills] = useState([]);
  const [professionalSkills, setProfessionalSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [englishProficiency, setEnglishProficiency] = useState("");
  const [institutionId, setInstitutionId] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [institutionStart, setInstitutionStart] = useState("");
  const [institutionEnd, setInstitutionEnd] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [certificateId, setCertificateId] = useState("");
  const [certificateName, setCertificateName] = useState("");
  const [certificateDate, setCertificateDate] = useState("");
  const [credentials, setCredentials] = useState("");
  const [isCharged, setIsCharged] = useState(true);
  const [aboutYou, setAboutYou] = useState("");
  const [acceptableCurrencies, setAcceptableCurrencies] = useState([]);
  const [interests, setInterests] = useState([]);
  const [retirementCause, setRetirementCause] = useState([]);
  const [wantFrom, setWantFrom] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobile, setMobile] = useState();

  const router = useRouter();

  useEffect(() => {
    setUserId(userIdFromContext);
    getUserData();
  }, [userId]);

  const getUserData = () => {
    const options = {
      method: "GET",
      url: `https://retpro.catax.me/user/profile/${userId}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("this is aman data", response?.data);
        setUserData(response?.data);
        setDisplayName(response?.data?.user_display_name);
        setFirstName(response?.data?.user_first_name);
        setLastName(response?.data?.user_last_name);
        setMobile(response?.data?.user_mobile);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [step]);

  const form = new FormData();
  form.append("file", selectedImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const uploadImg = () => {
    if (!selectedImage) {
      console.error("No image selected");
      toast.error("Please select an image to upload.");
      return;
    }

    const form = new FormData();
    form.append("pic_file", selectedImage, selectedImage.name);
    const options = {
      method: "POST",
      url: `https://retpro.catax.me/user/upload-profile-pic`,
      params: { user_id: userId },
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success(response.data.message); // Show success message using toast
        getUserData();
        // Update any state or UI as necessary
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Failed to upload profile picture."); // Show error message using toast
        // Handle error more specifically if needed
      });
  };

  console.log(
    personalSkills.map((item) => item.label),
    "ps"
  );

  console.log(userData, "sssss");
  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        {/* <div className="hidden lg:flex">
          <Sidebar />s
        </div> */}

        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full ">
            <div
              className={`md:w-1/2 w-full md:flex items-center ${
                userData?.user_image ? "justify-center" : "justify-end"
              }`}
            >
              <h1 className="text-4xl font-medium text-center"> Profile</h1>
            </div>
            {userData.user_image ? (
              <Image
                src={userData.user_image}
                alt="Selected Profile"
                className="mt-2 rounded-full h-40 w-40"
                height={100}
                width={100}
              />
            ) : (
              <div className="w-1/2 flex items-center justify-center flex-col gap-5">
                {selectedImage ? (
                  <div className="rounded-full flex  flex-col items-center justify-center bg-red-20">
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Profile"
                      className="mt-2 rounded-full h-40 w-40"
                      height={150}
                      width={150}
                    />

                    <button
                      onClick={uploadImg}
                      className="border border-[#773fc6] text-[#773fc6] p-1 text-xs rounded mt-3 "
                    >
                      Click again for upload
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <label htmlFor="profile-picture" className="cursor-pointer">
                      <div className="flex items-center justify-center">
                        <FaCircleUser size={100} />
                      </div>
                      <input
                        type="file"
                        id="profile-picture"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      <h1 className="border border-[#773fc6] text-[#773fc6] p-1 text-xs rounded mt-3 ">
                        Click here for select profile
                      </h1>
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="lg:mx-40 mt-5 flex flex-col gap-5">
            <p className="text-gray-500 text-center">
              A photo that shows your face clearly is ideal. You know what else
              make fo a great profile picture? your smile
            </p>
            <div className="flex items-center  gap-5 md:gap-10 xl:gap-0 flex-wrap justify-center">
              <button onClick={() => setStep(1)}>
                <h1
                  className={`border-2  self-start px-[18px] py-2 rounded-full text-2xl ${
                    step === 1
                      ? "border-[#773fc6] text-[#773fc6]"
                      : "text-gray-500"
                  } `}
                >
                  1
                </h1>
              </button>
              <p className="text-gray-300 hidden xl:flex ">- - - - - -</p>
              <button onClick={() => setStep(2)}>
                <h1
                  className={`border-2  self-start px-4 py-2 rounded-full text-2xl ${
                    step === 2
                      ? "border-[#773fc6] text-[#773fc6]"
                      : "text-gray-500"
                  } `}
                >
                  2
                </h1>
              </button>
              <p className="text-gray-300 hidden xl:flex">- - - - - -</p>

              <button onClick={() => setStep(3)}>
                <h1
                  className={`border-2  self-start px-4 py-2 rounded-full text-2xl ${
                    step === 3
                      ? "border-[#773fc6] text-[#773fc6]"
                      : "text-gray-500"
                  } `}
                >
                  3
                </h1>
              </button>
              <p className="text-gray-300 hidden xl:flex">- - - - - -</p>

              <button onClick={() => setStep(4)}>
                <h1
                  className={`border-2  self-start px-4 py-2 rounded-full text-2xl ${
                    step === 4
                      ? "border-[#773fc6] text-[#773fc6]"
                      : "text-gray-500"
                  } `}
                >
                  4
                </h1>
              </button>
              <p className="text-gray-300 hidden xl:flex">- - - - - -</p>
              <button onClick={() => setStep(5)}>
                <h1
                  className={`border-2  self-start px-4 py-2 rounded-full text-2xl ${
                    step === 5
                      ? "border-[#773fc6] text-[#773fc6]"
                      : "text-gray-500"
                  } `}
                >
                  5
                </h1>
              </button>
            </div>
            <p className="text-[#ba0001] text-center">
              All fields marked "*" are mandatory
            </p>
            {step === 1 && (
              <PersonalInfo
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                displayName={displayName}
                setDisplayName={setDisplayName}
                gender={gender}
                setGender={setGender}
                country={country}
                setCountry={setCountry}
                state={state}
                setState={setState}
                city={city}
                setCity={setCity}
                userId={userId}
                setCompanyId={setCountryId}
                step={step}
                setStep={setStep}
                setShowModal={setShowModal}
                countryId={countryId}
                mobile_no={mobile}
              />
            )}
            {step === 2 && (
              <SocialInfo
                step={step}
                userId={userId}
                setStep={setStep}
                setShowModal={setShowModal}
                retirementCause={retirementCause}
                setRetirementCause={setRetirementCause}
                age={age}
                setAge={setAge}
                facebook={facebook}
                setFacebook={setFacebook}
                twitter={twitter}
                setTwitter={setTwitter}
                linkedin={linkedin}
                setLinkedin={setLinkedin}
                instagram={instagram}
                setInstagram={setInstagram}
                wantFrom={wantFrom}
                setWantFrom={setWantFrom}
              />
            )}
            {step === 3 && (
              <SkillsComponent
                userId={userId}
                step={step}
                setStep={setStep}
                setShowModal={setShowModal}
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
                userId={userId}
                step={step}
                setStep={setStep}
                setShowModal={setShowModal}
                englishProficiency={englishProficiency}
                setEnglishProficiency={setEnglishProficiency}
                languages={languages}
                setLanguages={setLanguages}
                experiences={experiences}
                setExperiences={setExperiences}
              />
            )}
            {step === 5 && (
              <Certification
                userId={userId}
                step={step}
                setStep={setStep}
                isCharged={isCharged}
                aboutYou={aboutYou}
                setAboutYou={setAboutYou}
                setIsCharged={setIsCharged}
                setShowModal={setShowModal}
                certificateName={certificateName}
                setCertificateName={setCertificateName}
                acceptableCurrencies={acceptableCurrencies}
                setAcceptableCurrencies={setAcceptableCurrencies}
              />
            )}
          </div>
        </div>
        {showModal && (
          <PopUp
            onClick={() => setShowModal(false)}
            title=" Something doesn't look right"
            action="Take me back"
            error="error"
            message="You may have left one or more field empty  while filling the form, please check and fill in th field to continue"
          />
        )}
      </div>
    </div>
  );
};

export default page;
