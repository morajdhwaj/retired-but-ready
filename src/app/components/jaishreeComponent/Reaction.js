import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { AiFillLike} from "react-icons/ai";
import { IoHeartCircle } from "react-icons/io5";
import { PiHandsClapping } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import Image from "next/image";

const Reaction = () => {
  return (
    <div className='mx-4'>
        <div className='bg-[#FFFFFF] flex justify-between p-2 shadow-md'>
            <div className='flex gap-2'>
                <IoIosArrowBack className='text-[#773FC6] mt-1' />
                <h1 className='text-[#773FC6]'>Reactions</h1>
            </div>
            <h1 className='text-[#773FC6] font-medium text-lg'>x</h1>
       </div>
       {/* ------------------- */}
       <div className='flex p-5 gap-4'>
        <button className='text-[#773FC6] font-bold'>All 123445</button>
        <button className='flex gap-2'>
        <AiFillLike className='mt-1' />
        <p>456</p>
        </button>
        <button className='flex gap-2'>
        <IoHeartCircle className='mt-1' />
        <p>412</p>
        </button>
        <button className='flex gap-2'>
        <PiHandsClapping className='mt-1' />
        <p>400</p>
        </button>
        <button className='flex gap-2'>
        <HiOutlineLightBulb className='mt-1'/>
        <p>200</p>
        </button>
        <button className='flex gap-2'>
        <AiFillLike className='mt-1'/>
        <p>456</p>
        </button>
        <button className='flex gap-2'>
        <IoHeartCircle className='mt-1'/>
        <p>412</p>
        </button>
        <button className='flex gap-2'>
        <PiHandsClapping className='mt-1' />
        <p>400</p>
        </button>
        <button className='flex gap-2'>
        <HiOutlineLightBulb className='mt-1' />
        <p>200</p>
        </button>
    </div>
      {/* ------------------- */}
      <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#773FC6] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6 mt-0.5'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#70b94b] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    
    <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6 mt-0.5'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#773FC6] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    
    <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6 mt-0.5'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#70b94b] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    
    <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6 mt-0.5'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#773FC6] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6 mt-0.5'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#70b94b] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    <div className='bg-[#FFFFFF] shadow-md flex gap-2 p-6 mt-0.5'>
       <div>
       <Image
                alt=""
                src="/assets/Ellipse-39.png"
                height={75}
                width={75}
               
       /></div> 
     <div   >
        <h1 className='text-[#773FC6] font-bold'>Munawar Raj Singh</h1>
        <p className='text-sm' >
        OPPO India Marketing Head,</p>
        <p className='text-sm'>Teach Connection India Pvt.Ltd.</p>
      </div>
    </div>
    

    </div>
  )
}

export default Reaction;
