"use client";
import Navbar from "@/app/components/Navbar";
import PopUp from "@/app/components/PopUp";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
 import { UserIdContext } from "@/context/UserIdContext";


const country_codes = [
  { country: "Argentina", std_code: "+54" },
  { country: "Australia", std_code: "+61" },
  { country: "Austria", std_code: "+43" },
  { country: "Bangladesh", std_code: "+880" },
  { country: "Belgium", std_code: "+32" },
  { country: "Brazil", std_code: "+55" },
  { country: "Canada", std_code: "+1" },
  { country: "Chile", std_code: "+56" },
  { country: "China", std_code: "+86" },
  { country: "Colombia", std_code: "+57" },
  { country: "Czech Republic", std_code: "+420" },
  { country: "Denmark", std_code: "+45" },
  { country: "Egypt", std_code: "+20" },
  { country: "Finland", std_code: "+358" },
  { country: "France", std_code: "+33" },
  { country: "Germany", std_code: "+49" },
  { country: "Greece", std_code: "+30" },
  { country: "Hong Kong", std_code: "+852" },
  { country: "Hungary", std_code: "+36" },
  { country: "India", std_code: "+91" },
  { country: "Indonesia", std_code: "+62" },
  { country: "Iraq", std_code: "+964" },
  { country: "Ireland", std_code: "+353" },
  { country: "Israel", std_code: "+972" },
  { country: "Italy", std_code: "+39" },
  { country: "Japan", std_code: "+81" },
  { country: "Malaysia", std_code: "+60" },
  { country: "Mexico", std_code: "+52" },
  { country: "Netherlands", std_code: "+31" },
  { country: "New Zealand", std_code: "+64" },
  { country: "Nigeria", std_code: "+234" },
  { country: "Norway", std_code: "+47" },
  { country: "Pakistan", std_code: "+92" },
  { country: "Peru", std_code: "+51" },
  { country: "Philippines", std_code: "+63" },
  { country: "Poland", std_code: "+48" },
  { country: "Portugal", std_code: "+351" },
  { country: "Russia", std_code: "+7" },
  { country: "Saudi Arabia", std_code: "+966" },
  { country: "Singapore", std_code: "+65" },
  { country: "South Africa", std_code: "+27" },
  { country: "South Korea", std_code: "+82" },
  { country: "Spain", std_code: "+34" },
  { country: "Sweden", std_code: "+46" },
  { country: "Switzerland", std_code: "+41" },
  { country: "Thailand", std_code: "+66" },
  { country: "Turkey", std_code: "+90" },
  { country: "United Arab Emirates", std_code: "+971" },
  { country: "United Kingdom", std_code: "+44" },
  { country: "United States", std_code: "+1" },
  { country: "Vietnam", std_code: "+84" },
];

const page = () => {
const {  setUserIdContext } = useContext(UserIdContext);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [countryCode, setCountryCode] = useState("+91");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetch(
            https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en
          )
            .then((response) => response.json())
            .then((data) => {
              setCountryInfo({
                countryName: data.countryName,
                countryCode: data.countryCode,
              });
            })
            .catch((error) => console.error("Error fetching location:", error));
        },
        (error) => console.error("Error getting geolocation:", error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleModal = () => {
    setShowModal(true);
    showModal && router.push("/verification-email");
  };
  const handleRegister = () => {
    const requiredFields = {
      userName: "Full Name",
      displayName: "Display Name",
      mobile: "Mobile Number",
      email: "Email",
      password: "Password",
    };

    const emptyField = Object.keys(requiredFields).find(
      (key) => !eval(key) // eslint-disable-line no-eval
    );

    if (emptyField) {
      toast.error(Please fill the ${requiredFields[emptyField]} field);
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    const options = {
      method: "POST",
      url: "https://retpro.catax.me/user/register",
      headers: { "Content-Type": "application/json" },
      data: {
        user_mobile: mobile.toString(),
        user_email: email,
        user_fullname: userName,
        user_display_name: displayName,
        user_password: password,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      setUserIdContext( response?.data?.user_id);
        toast.success(response.data.message);
        handleModal();
      })
      .catch(function (error) {
        console.error(error);
        toast.error(error.response.data.detail);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(mobile);

  return (
    <div>
      <Navbar />

      <div className="bg-gray-200 md:flex lg:flex pt-16 md:h-[100vh] lg:h-[100vh]  ">
        <div className=" md:w-[100%] lg:w-[54%] flex flex-col   items-center ">
          <h1 className="text-2xl font-bold hover:border-b-2  mt-5">
            Create an account
          </h1>

          <br />
          <div className="border-2 border-gray-300 w-[80%] rounded-md   hover:shadow-sm p-4 ">
            <div>
              <h2 className="ml-2">
                {" "}
                Full name <span className="text-red-500">*</span>{" "}
              </h2>
              <input
                value={userName}
                onChange={(e) =>
                  setUserName(
                    e.target.value.replace(/\b\w/g, (c) => c.toUpperCase())
                  )
                }
                type="text"
                className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 "
              />
            </div>

            <div>
              <h2 className="ml-2">
                {" "}
                Display name <span className="text-red-500">*</span>{" "}
              </h2>
              <input
                value={displayName}
                onChange={(e) =>
                  setDisplayName(
                    e.target.value.replace(/\b\w/g, (c) => c.toUpperCase())
                  )
                }
                type="text"
                className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 "
              />
            </div>
            <div>
              <h2 className="ml-2">
                {" "}
                Mobile number <span className="text-red-500">*</span>{" "}
              </h2>

              <div className="flex   mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg  w-full h-10 p-1.5">
                <div className="h-20">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-gray-200 focus:outline-none"
                  >
                    {country_codes.map((country, index) => (
                      <option key={index}>
                        {country.country} ({country.std_code})
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  pattern="[0-9]"
                  value={mobile}
                  onChange={(e) => {
                    const onlyNum = e.target.value.replace(/[^0-9]/g, "");
                    setMobile(onlyNum);
                  }}
                  maxLength={10}
                  className=" bg-gray-200 text-md rounded-lg block w-full pl-5    focus:outline-none"
                  // Added focus:outline-none to remove the focus border
                />
              </div>
            </div>
            <div>
              <h2 className="ml-2">
                Email <span className="text-red-500">*</span>{" "}
              </h2>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" mb-4 bg-gray-200  border-gray-300 border-2 text-md  rounded-lg block w-full h-10 p-1.5 "
              />
            </div>
            <div>
              <h2 className="ml-2">
                Password <span className="text-red-500">*</span>{" "}
              </h2>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5  "
              />
            </div>
            {isLoading ? (
              <button className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-lg border  hover:rounded-lg text-white  text-xl">
                Loading...
              </button>
            ) : (
              <button
                onClick={handleRegister}
                className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-lg border  hover:rounded-lg text-white  text-xl"
              >
                Create account
              </button>
            )}
          </div>
        </div>

        <div className=" md:w-[100%] lg:w-[46%]  flex flex-col  ">
          <div className="mt-10 flex justify-center items-center ">
            <Image
              alt="register"
              src="/assets/Group-626217.png"
              width={400}
              height={300}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[100px] bg-gray-400 " />
            <h3 className="ml-2 mr-2">or login through</h3>
            <div className="h-[1px] w-[100px] bg-gray-400" />
          </div>
          <div className=" w-75% flex justify-center items-center mb-5 mt-5 ">
            <div className="flex flex-col gap-5  ">
              <button
                onClick={() => {
                  toast.error("Google login not working");
                }}
                className="w-28 flex justify-evenly text-xs font-semibold items-center border rounded-lg border-[#773FC6] h-10"
              >
                <Image
                  src="/assets/GOOGLE.png"
                  alt="google"
                  width={20}
                  height={20}
                />
                GOOGLE
              </button>
              <button
                onClick={() => {
                  toast.error("Mobile login not working");
                }}
                className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10"
              >
                <Image
                  src="/assets/mobile-phone-svgrepo-com-1.png"
                  alt="mobile"
                  width={20}
                  height={20}
                />
                MOBILE
              </button>
            </div>
            <div className="flex flex-col gap-5 mx-4">
              <button
                onClick={() => {
                  toast.error("Facebook login not working");
                }}
                className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                FACEBOOK
              </button>

              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="w-28 flex font-semibold text-xs justify-evenly items-center border rounded-lg border-[#773FC6]  h-10 "
              >
                <Image
                  src="/assets/EMAIL.png"
                  alt="email"
                  width={20}
                  height={20}
                />
                EMAIL
              </button>
            </div>
          </div>
        </div>
        {showModal && (
          <PopUp
            onClick={handleModal}
            title="Account created successfully"
            action="verify"
            message={`we have send a verification code on ${email} `}
          />
        )}
      </div>
    </div>
  );
};

export default page;




// "use client";
// import Navbar from "@/app/components/Navbar";
// import PopUp from "@/app/components/PopUp";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import React, { useContext, useEffect } from "react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import Image from "next/image";
//  import { UserIdContext } from "@/context/UserIdContext";


// const page = () => {
//   const { setUserIdContext } = useContext(UserIdContext);
//   const [showModal, setShowModal] = useState(false);
//   const [userName, setUserName] = useState(null);
//   const [displayName, setDisplayName] = useState(null);
//   const [mobile, setMobile] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [countryCode, setCountryCode] = useState("+91");
//   const [isLoading, setIsLoading] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     getLocation();
//   }, []);

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           fetch(
//             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
//           )
//             .then((response) => response.json())
//             .then((data) => {
//               setCountryInfo({
//                 countryName: data.countryName,
//                 countryCode: data.countryCode,
//               });
//             })
//             .catch((error) => console.error("Error fetching location:", error));
//         },
//         (error) => console.error("Error getting geolocation:", error)
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   };

//   const handleModal = () => {
//     setShowModal(true);
//     showModal && router.push("/verification-email");
//   };
//   const handleRegister = () => {
//     const requiredFields = {
//       userName: "Full Name",
//       displayName: "Display Name",
//       mobile: "Mobile Number",
//       email: "Email",
//       password: "Password",
//     };

//     const emptyField = Object.keys(requiredFields).find(
//       (key) => !eval(key) // eslint-disable-line no-eval
//     );

//     if (emptyField) {
//       toast.error(`Please fill the ${requiredFields[emptyField]} field`);
//       return;
//     }

//     if (password.length < 6) {
//       toast.error("Password must be at least 6 characters long");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);

//     const options = {
//       method: "POST",
//       url: "https://retpro.catax.me/user/register",
//       headers: { "Content-Type": "application/json" },
//       data: {
//         user_mobile: mobile.toString(),
//         user_email: email,
//         user_fullname: userName,
//         user_display_name: displayName,
//         user_password: password,
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         setUserIdContext(response?.data?.user_id);
//         // localStorage.setItem("userId", response?.data?.user_id);
//         toast.success(response.data.message);
//         handleModal();
//       })
//       .catch(function (error) {
//         console.error(error);
//         toast.error(error.response.data.detail);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   console.log(mobile);

//   return (
//     <div>
//       <Navbar />

//       <div className="bg-gray-200 md:flex lg:flex pt-16 md:h-[100vh] lg:h-[100vh]  ">
//         <div className=" md:w-[100%] lg:w-[54%] flex flex-col   items-center ">
//           <h1 className="text-2xl font-bold hover:border-b-2  mt-5">
//             Create an account
//           </h1>

//           <br />
//           <div className="border-2 border-gray-300 w-[80%] rounded-md   hover:shadow-sm p-4 ">
//             <div>
//               <h2 className="ml-2">
//                 {" "}
//                 Full name <span className="text-red-500">*</span>{" "}
//               </h2>
//               <input
//                 value={userName}
//                 onChange={(e) =>
//                   setUserName(
//                     e.target.value.replace(/\b\w/g, (c) => c.toUpperCase())
//                   )
//                 }
//                 type="text"
//                 className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 "
//               />
//             </div>

//             <div>
//               <h2 className="ml-2">
//                 {" "}
//                 Display name <span className="text-red-500">*</span>{" "}
//               </h2>
//               <input
//                 value={displayName}
//                 onChange={(e) =>
//                   setDisplayName(
//                     e.target.value.replace(/\b\w/g, (c) => c.toUpperCase())
//                   )
//                 }
//                 type="text"
//                 className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 "
//               />
//             </div>
//             <div>
//               <h2 className="ml-2">
//                 {" "}
//                 Mobile number <span className="text-red-500">*</span>{" "}
//               </h2>

//               <div className="flex   mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg  w-full h-10 p-1.5">
//                 <div className="h-20">
//                   <select
//                     value={countryCode}
//                     onChange={(e) => setCountryCode(e.target.value)}
//                     className="bg-gray-200 focus:outline-none"
//                   >
//                     {country_codes.map((country, index) => (
//                       <option key={index}>
//                         {country.country} ({country.std_code})
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <input
//                   type="text"
//                   pattern="[0-9]"
//                   value={mobile}
//                   onChange={(e) => {
//                     const onlyNum = e.target.value.replace(/[^0-9]/g, "");
//                     setMobile(onlyNum);
//                   }}
//                   maxLength={10}
//                   className=" bg-gray-200 text-md rounded-lg block w-full pl-5    focus:outline-none"
//                   // Added focus:outline-none to remove the focus border
//                 />
//               </div>
//             </div>
//             <div>
//               <h2 className="ml-2">
//                 Email <span className="text-red-500">*</span>{" "}
//               </h2>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className=" mb-4 bg-gray-200  border-gray-300 border-2 text-md  rounded-lg block w-full h-10 p-1.5 "
//               />
//             </div>
//             <div>
//               <h2 className="ml-2">
//                 Password <span className="text-red-500">*</span>{" "}
//               </h2>

//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5  "
//               />
//             </div>
//             {isLoading ? (
//               <button className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-lg border  hover:rounded-lg text-white  text-xl">
//                 Loading...
//               </button>
//             ) : (
//               <button
//                 onClick={handleRegister}
//                 className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-lg border  hover:rounded-lg text-white  text-xl"
//               >
//                 Create account
//               </button>
//             )}
//           </div>
//         </div>

//         <div className=" md:w-[100%] lg:w-[46%]  flex flex-col  ">
//           <div className="mt-10 flex justify-center items-center ">
//             <Image
//               alt="register"
//               src="/assets/Group-626217.png"
//               width={400}
//               height={300}
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <div className="h-[1px] w-[100px] bg-gray-400 " />
//             <h3 className="ml-2 mr-2">or login through</h3>
//             <div className="h-[1px] w-[100px] bg-gray-400" />
//           </div>
//           <div className=" w-75% flex justify-center items-center mb-5 mt-5 ">
//             <div className="flex flex-col gap-5  ">
//               <button
//                 onClick={() => {
//                   toast.error("Google login not working");
//                 }}
//                 className="w-28 flex justify-evenly text-xs font-semibold items-center border rounded-lg border-[#773FC6] h-10"
//               >
//                 <Image
//                   src="/assets/GOOGLE.png"
//                   alt="google"
//                   width={20}
//                   height={20}
//                 />
//                 GOOGLE
//               </button>
//               <button
//                 onClick={() => {
//                   toast.error("Mobile login not working");
//                 }}
//                 className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10"
//               >
//                 <Image
//                   src="/assets/mobile-phone-svgrepo-com-1.png"
//                   alt="mobile"
//                   width={20}
//                   height={20}
//                 />
//                 MOBILE
//               </button>
//             </div>
//             <div className="flex flex-col gap-5 mx-4">
//               <button
//                 onClick={() => {
//                   toast.error("Facebook login not working");
//                 }}
//                 className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10"
//               >
//                 <Image
//                   src="/assets/facebook.png"
//                   alt="facebook"
//                   width={20}
//                   height={20}
//                 />
//                 FACEBOOK
//               </button>

//               <button
//                 onClick={() => {
//                   router.push("/login");
//                 }}
//                 className="w-28 flex font-semibold text-xs justify-evenly items-center border rounded-lg border-[#773FC6]  h-10 "
//               >
//                 <Image
//                   src="/assets/EMAIL.png"
//                   alt="email"
//                   width={20}
//                   height={20}
//                 />
//                 EMAIL
//               </button>
//             </div>
//           </div>
//         </div>
//         {showModal && (
//           <PopUp
//             onClick={handleModal}
//             title="Account created successfully"
//             action="verify"
//             message={`we have send a verification code on ${email} `}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default page;
