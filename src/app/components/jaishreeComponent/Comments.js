import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { AiFillLike} from "react-icons/ai";
import { IoHeartCircle } from "react-icons/io5";
import { PiHandsClapping } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const Reaction = () => {
  return (
    <div className='mx-4'>
        <div className='bg-[#FFFFFF] flex justify-between p-4 shadow-md mt-10'>
            <div className='flex gap-2'>
                <IoIosArrowBack className='text-[#773FC6] mt-1 text-xl' />
                <h1 className='text-[#773FC6] text-xl font-semibold'>Comments</h1>
            </div>
            <div>
            <BsThreeDotsVertical size={25} color="gray" />
            </div>
        </div>
       {/* ------------------- */}
      
    <div className='  flex gap-2  mt-4 '>
        <div>
        <Image
                alt=""
                src="/assets/Ellipse-38.png"
                height={50}
                width={50}
              />
        </div>
        <div className='flex border border-gray-300 rounded-b-lg p-5 '>
            <div>
                <h1 className='text-[#773FC6] font-semibold'>David Alto Swain</h1>
                <p className='text-sm font-medium'>Citrix XenApp,XenDesktop/VMware Mob...</p>
                <p className='text-sm text-gray-500 mt-1'>20 mins.</p>
                <p className='text-sm font-medium text-gray-800 mt-2'>It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.</p>
                <p className='text-sm mt-5'>Like | Reply</p>
            </div>
            <div>
            <BsThreeDotsVertical size={25} color="gray" />
            </div>
        </div>
       
    </div>
    <div className='  flex gap-2   '>
        <div>
        <Image
                alt=""
                src="/assets/Ellipse-38.png"
                height={50}
                width={50}
              />
        </div>
        <div className='flex border border-gray-300 rounded-b-lg p-5 '>
            <div>
                <h1 className='text-[#773FC6] font-semibold'>David Alto Swain</h1>
                <p className='text-sm font-medium'>Citrix XenApp,XenDesktop/VMware Mob...</p>
                <p className='text-sm text-gray-500 mt-1'>20 mins.</p>
                <p className='text-sm font-medium text-gray-800 mt-2'>It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.</p>
                <p className='text-sm mt-5'>Like | Reply</p>
            </div>
            <div>
            <BsThreeDotsVertical size={25} color="gray" />
            </div>
        </div>
       
    </div>
    <div className='  flex gap-2  '>
        <div>
        <Image
                alt=""
                src="/assets/Ellipse-38.png"
                height={50}
                width={50}
              />
        </div>
        <div className='flex border border-gray-300 rounded-b-lg p-5'>
            <div>
                <h1 className='text-[#773FC6] font-semibold'>David Alto Swain</h1>
                <p className='text-sm font-medium'>Citrix XenApp,XenDesktop/VMware Mob...</p>
                <p className='text-sm text-gray-500 mt-1'>20 mins.</p>
                <p className='text-sm font-medium text-gray-800 mt-2'>It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.</p>
                <p className='text-sm mt-5'>Like | Reply</p>
            </div>
            <div>
            <BsThreeDotsVertical size={25} color="gray" />
            </div>
        </div>
       
    </div>
    <div className='  flex gap-2 '>
        <div>
        <Image
                alt=""
                src="/assets/Ellipse-38.png"
                height={50}
                width={50}
              />
        </div>
        <div className='flex border border-gray-300 rounded-b-lg p-5'>
            <div>
                <h1 className='text-[#773FC6] font-semibold'>David Alto Swain</h1>
                <p className='text-sm font-medium'>Citrix XenApp,XenDesktop/VMware Mob...</p>
                <p className='text-sm text-gray-500 mt-1'>20 mins.</p>
                <p className='text-sm font-medium text-gray-800 mt-2'>It's fake so what?..Even For Credit cards were susceptible to such scanners where a guy would simply wave the scanner on your rear jeans pocket and card would be biled.</p>
                <p className='text-sm mt-5'>Like | Reply</p>
            </div>
            <div>
            <BsThreeDotsVertical size={25} color="gray" />
            </div>
        </div>
       
    </div>
   
    
    

    </div>
  )
}

export default Reaction;
