import Navbar from "@/app/components/Navbar";
import React from "react";


const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-gray-200 flex ">
        <div className="w-[54%]  flex flex-col justify-center items-center p-5">
          <h1 className="text-2xl font-bold hover:border-b-2 hover:border-blue-500">
            Create an account
          </h1>
          <br/>
          <div className="border-2 border-gray-300 w-full rounded-md p-5 hover:border-blue-500 hover:shadow-sm ">
            <input type="text" placeholder="full name*" className="mb-4 bg-gray-100 border text-sm rounded-md block w-full p-1.5 hover:border-blue-500"/>
            <input type="text" placeholder="e-mail address*" className="mb-4 bg-gray-100 border text-sm rounded-md block w-full p-1.5 hover:border-blue-500 "/>
            <input type="text" placeholder="enter a password*" className="mb-4 bg-gray-100 border text-sm rounded-md block w-full p-1.5 hover:border-blue-500"/>
            <input type="text" placeholder="mobile number" className="mb-4 bg-gray-100 border text-sm rounded-md block w-full p-1.5 hover:border-blue-500"/>
            <input type="text" placeholder="tap to verify" className="mb-4 bg-gray-100 border text-sm rounded-md block w-full p-1.5  hover:border-blue-500 hover:rounded-none "/>
            <button className="bg-[#773FC6] mp-4 w-full p-1.5 rounded-md border hover:border-blue-500 hover:rounded-none text-white font-bold text-2xl">Create account</button>
            
          </div>

        </div>
        <div className="bg-blue-300 w-[46%]  flex flex-col justify-center items-center"> 
        <div className="mt-16">
            
          <img src="\assets\Group-626217.png"/>
        </div>
         <div className=" border-[#773FC6] border-2 w-1/2">
          <button className="w-24 text-sm h-8 bg-white rounded-md " ><img src="https://www.shutterstock.com/image-vector/facebook-icon-vector-illustration-social-260nw-2275272041.jpg" alt="" />GOOGLE</button><br/>
          <button className="w-24 text-sm h-8 bg-white rounded-md ">FACEBOOK</button><br/>
          <button className="w-24 text-sm h-8 bg-white rounded-md ">MOBILE</button><br/>
          <button className="w-24 text-sm h-8 bg-white rounded-md ">EMAIL</button>
          
        </div> 
         
        </div>
        </div>
      </div>
     
   
  );
};

export default page;
