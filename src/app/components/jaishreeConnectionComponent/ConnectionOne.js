import React from 'react'
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import Image from 'next/image';

const ConnectionOne = () => {
  return (
    <div>
      <div>
        <h1 className='text-[#374151] font-semibold text-sm'>1,573 connections</h1>
      </div>
      <div className='bg-yellow-600 flex justify-between  p-4'>
        <div className='flex gap-2 bg-slate-500 w-1/2 ' >
            <Image
            src="/assets/Business-1.png"
            className="w-1/5 "
            alt="Business"
            width={50}
            height={50}/>
            <div className=''>
                <h1>Munwar Raj Singh</h1>
                <p>OPPO India Marketing Head,</p>
                <p>Tech Connection India Pvt.Ltd.</p>
                <p>Connected 2days ago</p>
            </div>
        </div>
        <div className='flex  bg-red-600 w-1/2'>
        <IoEllipsisVerticalSharp />
        <IoIosSend />
        </div>
      </div>
    </div>
  )
}

export default ConnectionOne
