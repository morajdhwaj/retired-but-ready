"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import { FaBox, FaUserCircle } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import { AiFillTool } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ProfileDetails from "@/app/components/profile-details-compo/ProfileDetails";
import WhyRBR from "@/app/components/profile-details-compo/WhyRBR";
import SocialMedia from "@/app/components/profile-details-compo/SocialMedia";
import WorkExperience from "@/app/components/profile-details-compo/WorkExperience";
import WorkHistory from "@/app/components/profile-details-compo/WorkHistory";
import axios from "axios";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  // const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
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
        console.log(response?.data, "hello im sachin");
        setUserData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImg(file);
    }
  };

  const uploadImg = (file) => {
    const form = new FormData();
    form.append("pic_file", file, file.name);
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
        getUserData();
        setTimeout(() => {
          toast.success(response.data.message);
        }, 1000);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Failed to upload profile picture."); // Show error message using toast
        // Handle error more specifically if needed
      });
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (userData.length === 0) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#EDEBF2] px-10 ">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24">
          <div className="relative flex  justify-center ">
            <div className="absolute w-[96%] pt-24 mx-5">
              <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
                <div className="flex gap-2">
                  <div className="relative">
                    {userData?.user_image ? (
                      <Image
                        alt="user profile"
                        src={userData?.user_image}
                        height={50}
                        width={50}
                        className="rounded-full"
                      />
                    ) : (
                      <FaUserCircle size={60} />
                    )}

                    <button className="right-[-10px] top-8 h-7 w-7 flex justify-center items-center absolute bg-gradient-to-b from-[#f1cbf1] to-white rounded-full">
                      <label
                        htmlFor="profile-picture"
                        className="cursor-pointer"
                      >
                        <input
                          type="file"
                          id="profile-picture"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <MdEdit size={20} />
                      </label>
                    </button>
                  </div>
                  <div className="font-semibold">
                    <h2>{userData.user_display_name}</h2>
                    <p className="text-gray-500">{userData.last_designation}</p>
                  </div>
                </div>
                <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5 ">
                  <button className="flex items-center gap-1 p-2 bg-white rounded-lg">
                    <FaBox size={10} />
                    OVERVIEW
                  </button>
                  <button className="flex items-center gap-1 ">
                    <PiFilesFill size={15} /> TEAMS
                  </button>
                  <button className="flex items-center gap-1 ">
                    <AiFillTool size={15} />
                    PROJECTS
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('/assets/Background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "20vh",
                borderRadius: 10,
              }}
              className="text-white p-5 flex  justify-between"
            >
              <h2 className="font-semibold text-2xl">
                My Tabs{" "}
                <span className="text-sm font-normal">/ profile Overview</span>
              </h2>
              <p className="text-sm font-normal mt-5 hidden md:flex">
                Previewing as a visitor
              </p>
            </div>
          </div>
          <div className="mt-48 sm:mt-32 md:mt-20 mx-5">
            <p className="text-gray-500 text-lg text-center leading-8">
              I'm steve jacob, an ex-banker with over 30 years of experience in
              Retail Banking, I've spent a good amount of years with JPMorgan
              Chase and Bank of America in the US. I am on RBR to network,
              mentor, and find some freelance work. I am also an excellent
              violinist as my hobby. I am on RBR to network, mentor, and find
              some freelance work. I am also an excellent violinist as my hobby.
            </p>
          </div>
          <div className="m-10 flex flex-col gap-3">
            <div
              onClick={() => handleToggle(1)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 1
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Personal Details</h1>
              <div className="flex">
                {activeIndex === 1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 1 && <ProfileDetails userId={userId} />}

            <div
              onClick={() => handleToggle(2)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 2
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Why are you 'Retired But Ready'?</h1>
              <div>
                {activeIndex === 2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 2 && <WhyRBR userId={userId} />}

            <div
              onClick={() => handleToggle(3)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 3
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Social Media Presence</h1>
              <div>
                {activeIndex === 3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 3 && <SocialMedia userId={userId} />}

            <div
              onClick={() => handleToggle(4)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 4
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Work Experience</h1>
              <div>
                {activeIndex === 4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 4 && <WorkExperience userId={userId} />}

            <div
              onClick={() => handleToggle(5)}
              className={`font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
                activeIndex === 5
                  ? "bg-[#773fc6] text-white "
                  : "bg-gray-200  text-gray-500"
              }`}
            >
              <h1>Work History</h1>
              <div>
                {activeIndex === 5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
            </div>
            {activeIndex === 5 && <WorkHistory userId={userId} />}
          </div>
        </div>
      </div>
      <div className="flex bg-[#f2f1f3] ml-36  items-center justify-center gap-10 py-10">
        <Link
          href="/login"
          className="bg-[#773fc6] text-center  p-2 text-white font-medium rounded w-40 "
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Page;

// import React, { useEffect, useState } from "react";
// import Navbar from "@/app/components/Navbar";
// import Sidebar from "@/app/components/Sidebar";
// import Image from "next/image";
// import { FaBox, FaEdit } from "react-icons/fa";
// import { PiFilesFill } from "react-icons/pi";
// import { AiFillTool } from "react-icons/ai";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
// import ProfileDetails from "@/app/components/profile-details-compo/ProfileDetails";
// import WhyRBR from "@/app/components/profile-details-compo/WhyRBR";
// import SocialMedia from "@/app/components/profile-details-compo/SocialMedia";
// import WorkExperience from "@/app/components/profile-details-compo/WorkExperience";
// import WorkHistory from "@/app/components/profile-details-compo/WorkHistory";
// import axios from "axios";
// import Link from "next/link";
// import Loader from "@/app/components/Loader";
// import toast from "react-hot-toast";
// // import EditeIProfileImage from "@/app/components/EditeIProfileImage";

// const page = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [userId, setUserId] = useState("");
//   const [userData, setUserData] = useState([]);
//   // const [anyTypePost, setAnyTypePost] = useState(false);
//   const [selectedImage, setSelectedImage] = useState();

//   useEffect(() => {
//     setUserId(localStorage.getItem("userId"));
//     getUserData();
//   }, [userId]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//     }
//     uploadImg();
//     console.log("file", file);
//     console.log("hello im sachin");
//   };

//   const uploadImg = () => {
//     console.log("selectedImage", selectedImage);
//     if (!selectedImage) {
//       console.error("No image selected");
//       toast.error("Please select an image to upload.");
//       return;
//     }

//     const form = new FormData();
//     form.append("pic_file", selectedImage, selectedImage.name);
//     const options = {
//       method: "POST",
//       url: `https://retpro.catax.me/user/upload-profile-pic`,
//       params: { user_id: userId },
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       data: form,
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         toast.success(response.data.message);
//         getUserData();
//         console.log("userData")
//       })
//       .catch(function (error) {
//         console.error(error);
//         toast.error("Failed to upload profile picture."); // Show error message using toast
//         // Handle error more specifically if needed
//       });
//   };

//   const getUserData = () => {
//     const options = {
//       method: "GET",
//       url: `https://retpro.catax.me/user/profile/${userId}`,
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response?.data);
//         setUserData(response?.data);
//         setCompanyName(response?.data?.work_history[0].company_name);
//         setTitle(response?.data?.work_history[0].title);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   const handleToggle = (index) => {
//     activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
//   };

//   if (userData.length === 0) {
//     return (
//       <div className="h-[100vh] flex items-center justify-center">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#EDEBF2] px-10 ">
//       <Navbar />
//       <div className="flex">
//         <div className="hidden lg:flex">
//           <Sidebar />
//         </div>
//         <div className="w-full bg-[#f2f1f3]  p-5 lg:ml-52 pt-24">
//           <div className="relative flex  justify-center ">
//             <div className="absolute w-[96%] pt-24 mx-5">
//               <div className="w-full bg-gradient-to-b from-[#f1cbf1] to-white flex flex-col gap-5 md:flex-row py-5 justify-between rounded-xl px-5 ">
//                 <div className="flex gap-2">
//                   <div className="relative">
//                     <button
//                       className=" right-0 absolute bg-gradient-to-b from-[#f1cbf1] to-white rounded-full"
//                       // onClick={() => handleImageChange()}
//                     >
//                       <label
//                         htmlFor="profile-picture"
//                         className="cursor-pointer"
//                       >
//                         <input
//                           type="file"
//                           id="profile-picture"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={handleImageChange}
//                         />
//                         <FaEdit size={20} />
//                       </label>
//                     </button>

//                     <Image
//                       src={userData.user_image}
//                       alt="/assets/110.png"
//                       height={50}
//                       width={50}
//                       className="rounded-full h-[70px] w-[70px]"
//                     />

//                     {/*{anyTypePost && (
//                       <div>
//                         <EditeIProfileImage />
//                       </div>
//                    )}*/}
//                   </div>
//                   <div className="font-semibold">
//                     <h2>{userData.user_display_name}</h2>
//                     <p className="text-gray-500">
//                       {" "}
//                       {userData.last_designation}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-5 ">
//                   <button className="flex items-center gap-1 p-2 bg-white rounded-lg">
//                     <FaBox size={10} />
//                     OVERVIEW
//                   </button>
//                   <button className="flex items-center gap-1 ">
//                     <PiFilesFill size={15} /> TEAMS
//                   </button>
//                   <button className="flex items-center gap-1 ">
//                     <AiFillTool size={15} />
//                     PROJECTS
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 backgroundImage: `url('/assets/Background.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100%", // full screen width
//                 height: "20vh", // full screen height
//                 borderRadius: 10,
//               }}
//               className="text-white p-5 flex  justify-between"
//             >
//               <h2 className="font-semibold text-2xl">
//                 My Tabs{" "}
//                 <span className="text-sm font-normal">/ profile Overview</span>
//               </h2>
//               <p className="text-sm font-normal mt-5 hidden md:flex">
//                 Previewing as a visitor
//               </p>
//             </div>
//           </div>
//           <div className="mt-48 sm:mt-32 md:mt-20 mx-5">
//             <p className="text-gray-500 text-lg text-center leading-8">
//               I'm steve jacob , an ex-banker with over 30 years of experience in
//               Retail Banking, I've spent good amount of years with JPMorgen
//               Chase and Bank of America in the US. I am on RBR to network,
//               mentor, and find some freelance work. I am also an excellent
//               violinist as my hobby. I am on RBR to network , mentor , and find
//               some freelance work. I am also an excellent violinist as my hobby
//             </p>
//           </div>
//           <div className="m-10 flex flex-col gap-3">
//             <div
//               onClick={() => handleToggle(1)}
//               className={` font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
//                 activeIndex === 1
//                   ? "bg-[#773fc6] text-white "
//                   : "bg-gray-200  text-gray-500"
//               }`}
//             >
//               <h1> Personal Details</h1>
//               <div className="flex">
//                 {activeIndex === 1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
//               </div>
//             </div>
//             {activeIndex === 1 && <ProfileDetails userId={userId} />}

//             <div
//               onClick={() => handleToggle(2)}
//               className={` font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
//                 activeIndex === 2
//                   ? "bg-[#773fc6] text-white "
//                   : "bg-gray-200  text-gray-500"
//               }`}
//             >
//               <h1> Why are you 'Retired But Ready'?</h1>
//               <div>
//                 {activeIndex === 2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
//               </div>
//             </div>
//             {activeIndex === 2 && <WhyRBR userId={userId} />}

//             <div
//               onClick={() => handleToggle(3)}
//               className={` font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
//                 activeIndex === 3
//                   ? "bg-[#773fc6] text-white "
//                   : "bg-gray-200  text-gray-500"
//               }`}
//             >
//               <h1> Social Media Presence</h1>
//               <div>
//                 {activeIndex === 3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
//               </div>
//             </div>
//             {activeIndex === 3 && <SocialMedia userId={userId} />}

//             <div
//               onClick={() => handleToggle(4)}
//               className={` font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
//                 activeIndex === 4
//                   ? "bg-[#773fc6] text-white "
//                   : "bg-gray-200  text-gray-500"
//               }`}
//             >
//               <h1> Work Experience</h1>
//               <div>
//                 {activeIndex === 4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
//               </div>
//             </div>
//             {activeIndex === 4 && <WorkExperience userId={userId} />}

//             <div
//               onClick={() => handleToggle(5)}
//               className={` font-semibold text-2xl px-5 py-3 rounded-lg cursor-pointer  flex items-center justify-between ${
//                 activeIndex === 5
//                   ? "bg-[#773fc6] text-white "
//                   : "bg-gray-200  text-gray-500"
//               }`}
//             >
//               <h1> Work History</h1>
//               <div>
//                 {activeIndex === 5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
//               </div>
//             </div>
//             {activeIndex === 5 && <WorkHistory userId={userId} />}
//           </div>
//         </div>
//       </div>
//       <div className="flex bg-[#f2f1f3] ml-36  items-center justify-center gap-10 py-10">
//         <Link
//           href="/login"
//           className="bg-[#773fc6] text-center  p-2 text-white font-medium rounded w-40 "
//         >
//           Log Out
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default page;
