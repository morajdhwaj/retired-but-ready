import React from "react";
import { FaEdit } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex  flex-col gap-5  ">
      <div className="flex justify-end mt-5">
        <button>
          <FaEdit size={30} />
        </button>
      </div>
      <div className="">
        <h2 className="font-medium">Link your accounts</h2>
        <p className="text-xs text-gray-500">
          (provide links to your linkedin, facebook, google and other social
          media accounts that are relevant with your profile and work
          experience)
        </p>
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Facebook</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Twitter</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Linkedin</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Instagram</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Behance</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-gray-500">Others</h2>
        <input className="bg-[#f2f1f3] border border-gray-300 h-10   rounded w-full" />
      </div>
    </div>
  );
};

export default SocialMedia;
