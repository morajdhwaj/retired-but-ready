import Navbar from "@/app/components/Navbar";
import React from "react";


const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-gray-200 flex ">
      
        <div className="w-[54%]  flex flex-col  items-center mt-16">
          <h1 className="text-2xl font-bold hover:border-b-2 hover:border-blue-500 ">
            Create an account
          </h1>
          <br/>
           <div className="border-2 border-gray-300 w-[80%] rounded-md  hover:border-blue-500 hover:shadow-sm p-4 ">
            <input type="text" placeholder="full name*" className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 hover:border-blue-500"/>
            <input type="text" placeholder="e-mail address*" className="mb-4 bg-gray-200  border-gray-300 border-2  text-md rounded-lg block w-full h-10 p-1.5 hover:border-blue-500 "/>
            <input type="text" placeholder="enter a password*" className="mb-4 bg-gray-200 border-gray-300 border-2  text-md rounded-lg block w-full  h-10 p-1.5 hover:border-blue-500"/>
            <input type="text" placeholder="mobile number" className="mb-4 bg-gray-200  border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5 hover:border-blue-500"/>
            <input type="text" placeholder="tap to verify" className="mb-4 bg-gray-200 border-gray-300 border-2 text-md rounded-lg block w-full h-10 p-1.5  hover:border-blue-500 hover:rounded-none "/>
            <button className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-lg border hover:border-blue-500 hover:rounded-lg text-white  text-xl">Create account</button>
            
          </div> 

        </div>
       
        <div className=" w-[46%]  flex flex-col  "> 
       
        <div className="mt-1 p-2">
            <img src="\assets\Group-626217.png" width={500} height={500} />
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[1px] w-[100px] bg-gray-400 "/>
          <h3 className="ml-2 mr-2">or login through</h3>
          <div  className="h-[1px] w-[100px] bg-gray-400"/>
        </div>
        <div className=" w-75% flex justify-center items-center mb-5 mt-2 ">
        
          <div className="flex flex-col gap-5  ">
          <button className="w-28 flex justify-evenly text-xs font-semibold items-center border rounded-lg border-[#773FC6] h-10">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" width={20} height={20} />
          GOOGLE
          </button>
          <button className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10">
          <img src="https://www.freeiconspng.com/thumbs/mobile-icon-png/file-mobile-smartphone-icon--wikimedia-commons-0.png " alt="" width={20} height={20}  />
            MOBILE</button>
          </div>
          <div className="flex flex-col gap-5 mx-4">
          <button className="w-28 font-semibold text-xs flex justify-evenly items-center border rounded-lg border-[#773FC6]  h-10">
          <img src="https://toppng.com/uploads/preview/facebook-logo-in-circle-without-background-11549845823jxxwaj1f82.png" alt="" width={20} height={20}  />FACEBOOK
          </button>
          
          <button className="w-28 flex font-semibold text-xs justify-evenly items-center border rounded-lg border-[#773FC6]  h-10 ">
          <img src="https://cdn-icons-png.flaticon.com/512/10542/10542539.png" alt="" width={20} height={20} />
            EMAIL</button>
            </div>
        </div>

        
      </div> 
        </div>
        </div>
      
     
   
  );
};

export default page;
