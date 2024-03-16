"use client";

import React, { useEffect, useState, useContext } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import JoinGroupRecommendation from "@/app/components/groupComponent/JoinNewGroup";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import toast from "react-hot-toast";

import { UserIdContext } from "@/context/UserIdContext";

const page = ({ params }) => {
  const profileId = params["user"];
  const { userIdFromContext } = useContext(UserIdContext);

  const [connections, setConnections] = useState([]);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);
  const [work, setWork] = useState([]);
  const [followRequests, setFollowRequests] = useState([]);
  const [isRequested, setIsRequested] = useState([]);
  const [myConnections, setMyConnections] = useState([]);

  // GET USER ID FROM LOCAL STORAGE --------------------------------

  useEffect(() => {
    setUserId(userIdFromContext);
  }, []); // Run only once when component mounts

  useEffect(() => {
    getUserData();
    geFollowRequests();
    checkRequests();
    getAllConnection();
    getMyAllConnection();
  }, [profileId]);

  // GET PROFILE DATA ---------------------------------------------

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/user/profile/${profileId}`
      );
      setUserData(response.data);
      const eeducation = response.data.education || [];
      setEducation(eeducation);
      const skills = response.data.skills.personal;
      setSkill(skills);
      const works = response.data.work_history || [];
      setWork(works);
      console.log(work, "this is works fields");
      console.log(skill, "this is skill  fields");
      console.log(education, "this is education fields");
      console.log(response, "this is response from user data");
      console.log(response.data, "this is response data from user data");
    } catch (error) {
      console.log(error, "this is error from get user data");
    }
  };

  //SEND FOLLOW REQUEST API ----------------------------------------------

  const followRequestSend = async () => {
    try {
      const response = await axios.post(
        `https://retpro.catax.me/follow/${userId}/${profileId}`
      );
      geFollowRequests();
      toast.success(response?.data?.message);
      console.log(response, "this is response from follow request");
    } catch (error) {
      console.log(error, "this error from follow request");
      toast.error(error);
    }
  };

  // DO  UNFOLLOW -----------------------------------------------------------

  const UnFollowRequestSend = async () => {
    try {
      const response = await axios.post(
        `https://retpro.catax.me/unfollow/${userId}/${profileId}`
      );
      geFollowRequests();
      toast.success(response?.data?.message);
      console.log(response, "this is response from follow request");
    } catch (error) {
      console.log(error, "this error from UnFollow request");
    }
  };

  // GET ALL  FOLLOW REQUESTS FROM API -------------------------------------

  const geFollowRequests = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/my-followers/${profileId}`
      );
      setFollowRequests(response.data);

      console.log(
        response.data,
        "this is response data form get follow requests"
      );
    } catch (error) {
      console.log(error, "this error from get all follow request");
    }
  };

  // SEND CONNECTING REQUEST --------------------------------------------------

  const connectionRequest = async () => {
    const data = {
      from_user: "string",
      from_user_image: "string",
      from_user_full_name: "string",
      is_premium_user: true,
      is_verified_user: true,
      to_user: "string",
      to_user_image: "string",
      to_user_full_name: "string",
      personal_message: "",
      network_sent_on: "2024-03-06T06:41:13.930Z",
      network_status: "string",
    };

    try {
      const response = await axios.post(
        `https://retpro.catax.me/send-request/${userId}/${profileId}`,
        data
      );
      checkRequests();
      toast.success(response?.data?.message);
      console.log(response, "this is response from send connecting request");
    } catch (error) {
      console.log(error, "this is error from send connect request");
      toast.error(error);
    }
  };

  // CHECK CONNECTING REQUESTS -----------------------------------------------------

  const checkRequests = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/my-network-request/${userId}`
      );

      filterConnection(response.data.outgoing_requests);
      console.log(
        response.data.outgoing_requests,
        "this is response from check requests "
      );
    } catch (error) {
      console.log(error, "this  is error from check requests");
    }
  };

  // REMOVE CONNECTION REQUEST -------------------------------------------------------------

  const removeRequest = async (request_id) => {
    try {
      const response = await axios.delete(
        `https://retpro.catax.me/remove-request/${request_id}`
      );
      checkRequests();
      toast.success(response?.data?.message);
      console.log(response, "this is response form remove Request");
    } catch (error) {
      console.log(error, "this is error from remove connection requests");
      toast.error(error);
    }
  };

  // CHECK PROFILE ID IS AVAILABLE RO NOT ----------------------------------------------------

  const filterConnection = (data) => {
    const isRequestedData = data.filter((item) => item.to_user === profileId);
    setIsRequested(isRequestedData);
    console.log(isRequestedData, "this is requested data find");
  };

  // GET ALL CONNECTION API ------------------------------------------------------------------------

  const getAllConnection = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/my-network/${profileId}`
      );
      setConnections(response.data);
      console.log(response.data, "this is response from get all connection");
    } catch (error) {
      console.log(error, "this is error from get all connection");
    }
  };
  // GET ALL CONNECTION API ------------------------------------------------------------------------

  const getMyAllConnection = async () => {
    try {
      const response = await axios.get(
        `https://retpro.catax.me/my-network/${userId}`
      );
      const isConnected = response.data.filter(
        (items) => items.to_user === profileId || items.from_user === profileId
      );
      setMyConnections(isConnected);
      console.log(response.data, "this is response from get all connection");
    } catch (error) {
      console.log(error, "this is error from get all connection");
    }
  };

  console.log(
    profileId,
    userId,
    connections,
    myConnections,
    "this is profile id "
  );

  return (
    <>
      <div className="bg-[#EDEBF2]  px-10 h-full min-h-[100vh] ">
        <Navbar />
        <div className=" h-[220vh  pt-10 sm:pt-20 lg:pt-10 lg:mt-0">
          <div className="hidden lg:flex ">
            <div className="">
              <Sidebar />
            </div>
          </div>
          <div className=" md:flex justify-between md:mx-8 pb-10 mt-20 lg:mt-[130px] mx-5 sm:mx-14 lg:ml-[260px]   ">
            <div className="w-[68%] min-h-[80vh] pb-5  bg-white rounded-t-lg">
              <div className="relative flex  justify-center ">
                <div className="absolute  w-full   pt-24 ">
                  <div className="w-full bg-gradient-to-tr  from-purple-200 to-white flex bg-transparent flex-col md:flex-row gap-5 py-5 justify-between items-center rounded-t-xl px-5 ">
                    <div className="flex items-center justify-center gap-2  ">
                      {userData?.user_image ? (
                        <Image
                          alt="rtr-pic"
                          src={userData?.user_image}
                          height={70}
                          width={70}
                          className="w-20 h-20 rounded-full border-2 border-gray-200"
                        />
                      ) : (
                        <FaUserCircle color="gray" size={70} />
                      )}
                      <div className="font-semibold">
                        <h2>{userData?.user_display_name}</h2>
                        <p className="text-gray-500">
                          {userData.last_designation}
                        </p>
                      </div>
                    </div>
                    {profileId === userId ? (
                      <Link
                        href="/profile-details"
                        className="flex gap-2 items-center px-3 py-1 border-2 rounded-lg border-[#a8349d] h-10 w-32 justify-center"
                      >
                        <span>Edit</span>
                      </Link>
                    ) : (
                      <div className=" flex gap-5 ">
                        {myConnections.length > 0 ? (
                          <>
                            {myConnections.map((data) => (
                              <button
                                key={data?._id}
                                className="flex gap-2 items-center px-3 py-1 border-2 rounded-lg border-[#a8349d] h-10 w-32 justify-center"
                                onClick={() => removeRequest(data?._id)}
                              >
                                <span>Connected</span>
                              </button>
                            ))}
                          </>
                        ) : (
                          <>
                            {isRequested.length > 0 &&
                            isRequested[0].to_user === profileId ? (
                              <>
                                {isRequested.map((data) => (
                                  <button
                                    key={data.network_request_id}
                                    className="flex gap-2 items-center px-3 py-1 border-2 rounded-lg border-[#a8349d] h-10 w-32 justify-center"
                                    onClick={() =>
                                      removeRequest(data.network_request_id)
                                    }
                                  >
                                    <span>Requested</span>
                                  </button>
                                ))}
                              </>
                            ) : (
                              <button
                                className="flex gap-2 items-center px-3 py-1 border-2 rounded-lg border-[#a8349d] h-10 w-32 justify-center"
                                onClick={connectionRequest}
                              >
                                <IoMdPersonAdd />
                                <span>Connect</span>
                              </button>
                            )}
                          </>
                        )}

                        {followRequests &&
                        followRequests.some(
                          (item) => item.from_user_id === userId
                        ) ? (
                          <button
                            className=" flex gap-2 items-center px-3 py-1 border-2 rounded-lg border-[#a8349d] h-10 w-32 justify-center"
                            onClick={UnFollowRequestSend}
                          >
                            Following
                          </button>
                        ) : (
                          <button
                            className=" flex gap-2 items-center px-3 py-1 border-2 rounded-lg border-[#a8349d] h-10 w-32 justify-center"
                            onClick={followRequestSend}
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url('/assets/Background.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%", // full screen width
                    height: "20vh", // full screen height
                    borderRadius: 10,
                  }}
                  className="text-white p-5 flex  justify-between"
                >
                  <h2 className="font-semibold text-2xl">Profile</h2>
                </div>
              </div>
              <div className="mt-20  px-[5%]  ">
                <div className="flex justify-between ">
                  <div className="">
                    <h2 className="text-lg">
                      {userData.user_city},{userData.user_state},
                      {userData.country_name}
                    </h2>
                    <Link
                      href={`/connections/${profileId}`}
                      className="text-sm text-[#773FC6] font-semibold"
                    >
                      <span className="">{connections.length} </span>Connection{" "}
                      {userIdFromContext}
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <div className="border p-1 rounded-sm border-black">
                      <HiMiniBuildingOffice2 size={30} />
                    </div>
                    {work.map((data) => (
                      <h2 className="" key={data.company_id}>
                        {data.company_name}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="border-2 rounded-lg px-5 py-4 mt-4">
                  <div className="">
                    <h2 className="text-lg font-semibold">About</h2>
                    <p className="text-sm">{userData.profile_summary}</p>
                  </div>
                </div>
                <div className="border-2 rounded-lg py-2 mt-4">
                  <div className=" px-3">
                    <div className="">
                      <h2 className="text-lg font-semibold">Activity</h2>
                      <Link href="#" className="text-[#a8349d]">
                        1000 Follower
                      </Link>
                    </div>

                    <div className="">
                      <div className="flex gap-3 my-4">
                        <Link
                          href={`/feed/${profileId}`}
                          className="border-2 border-[#a8349d] rounded-lg py-1 px-5 "
                        >
                          Post
                        </Link>
                        <Link
                          href={`/feed/${profileId}`}
                          className="border-2 border-[#a8349d] rounded-lg py-1 px-5 "
                        >
                          Comment
                        </Link>{" "}
                        <Link
                          href={`/feed/${profileId}`}
                          className="border-2 border-[#a8349d] rounded-lg py-1 px-5 "
                        >
                          Image
                        </Link>
                      </div>
                      {/* <div className="border-2 rounded-lg h-16 w-full"></div> */}
                    </div>
                  </div>
                  <div className="border-t-2 mt-3">
                    <Link
                      href={`/feed/${profileId}`}
                      className="text-md font-semibold flex justify-center items-center gap-3 py-2 w-full"
                    >
                      Show all posts
                      <span className="">
                        <FaArrowRightLong size={20} />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="border-2 rounded-lg px-3 py-4 mt-4">
                  <h2 className="text-lg font-semibold">Experience</h2>
                  <div className="">
                    {work.map((data) => (
                      <div className="flex mt-3 gap-4" key={data.company_id}>
                        <div className="">
                          <HiMiniBuildingOffice2 size={50} />
                        </div>
                        <div className="">
                          <h2 className="font-semibold">{data.title}</h2>
                          <h3 className="text-sm font-medium">
                            {data.company_name}
                          </h3>
                          <p className="text-sm font-medium">
                            {/* {data.start_date} */}
                            {dayjs(data.start_date).format("MM/DD/YYYY")}
                          </p>

                          {/* <p className="text-sm mt-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit et quia corrupti quisquam illum quam,
                          illo iste aut! Nobis, numquam!
                        </p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-2 rounded-lg px-3 py-2 mt-4">
                  <h2 className="text-lg font-semibold">Education</h2>
                  <div className="">
                    {education.map((data) => (
                      <div
                        className="flex items-center mt-3 gap-4 mb-3"
                        key={data.institution_id}
                      >
                        <div className="">
                          <IoSchoolSharp size={50} />
                        </div>
                        <div className="">
                          <h2 className="font-semibold">
                            {data.institution_name}
                          </h2>
                          <h2 className="font-semibold">{data.degree}</h2>
                          <p className="text-sm font-medium">
                            {data.start_year} - {data.end_year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-2 rounded-lg  py-2 mt-4">
                  <div className="px-3">
                    <h2 className="text-lg font-semibold">Skill</h2>
                    <div className=" px-6 pb-5">
                      {skill.map((data) => (
                        <div
                          className="border-b-2 w-full mt-2 pb-1"
                          key={data.skill_id}
                        >
                          <h2 className="">{data.skill_name}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t-2 mt-3">
                    <button className="text-md font-semibold flex justify-center items-center gap-3 py-2 w-full">
                      Show all skills
                      <span className="">
                        <FaArrowRightLong size={20} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <JoinGroupRecommendation />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
