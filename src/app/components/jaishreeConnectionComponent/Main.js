import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';

const Main = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className='flex  p-3 border-2 border-gray-300 rounded-md mt-56 sm:mt-5 md:mt-5 lg:mt-10'>
        <IoIosSearch className='mt-1' />
        <input
          type='text'
          placeholder='Type a name to search...'
          className='bg-transparent text-sm'
        />
      </div>
      <h1 className='mt-5 text-xs text-gray-400'>Here are your search results...</h1>
      <h1 className='text-[#374151] font-semibold text-sm mt-5'>
        1,573 connections
      </h1>

      <div className='flex justify-between  p-2 border-b-2 border-gray-300 mt-5'>
        <div className='flex flex-wrap items-center gap-2  '>
          <div className=' '>
            <Image alt='' src='/assets/Ellipse-39.png' height={50} width={50}
             />
          </div>
          <div>
            <h2 className='text-sm font-semibold text-[#773fc6]  '>
              Munwar Raj Singh
            </h2>
            <p className='text-[#374151] font-medium text-sm'>
              OPPO India Marketing Head,
            </p>
            <p className='text-[#374151] font-medium text-sm'>
              Tech Connection India Pvt.Ltd.
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color='gray' onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className='absolute  border border-gray-300  shadow-md  rounded-md flex flex-col right-0 bg-white  p-2'>
                <button className='bg-[#773fc6] rounded-md text-white p-2'>Add a connection</button>
                <button className='p-2'>Send message</button>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-between p-2 border-b-2 border-gray-300 '>
        <div className='flex flex-wrap items-center gap-2 '>
          <div>
            <Image alt='' src='/assets/Ellipse-39.png' height={50} width={50} />
          </div>
          <div>
            <h2 className='text-sm font-semibold text-[#773fc6]  '>
              Munwar Raj Singh
            </h2>
            <p className='text-[#374151] font-medium text-sm'>
              OPPO India Marketing Head,
            </p>
            <p className='text-[#374151] font-medium text-sm'>
              Tech Connection India Pvt.Ltd.
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color='gray'  />
          
        </div>
      </div>
      <div className='flex justify-between  p-2 border-b-2 border-gray-300 '>
        <div className='flex flex-wrap items-center gap-2 '>
          <div>
            <Image alt='' src='/assets/Ellipse-39.png' height={50} width={50} />
          </div>
          <div>
            <h2 className='text-sm font-semibold text-[#773fc6]  '>
              Munwar Raj Singh
            </h2>
            <p className='text-[#374151] font-medium text-sm'>
              OPPO India Marketing Head,
            </p>
            <p className='text-[#374151] font-medium text-sm'>
              Tech Connection India Pvt.Ltd.
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color='gray'  />
         
        </div>
      </div>
      <div className='flex justify-between p-2 border-b-2 border-gray-300 '>
        <div className='flex flex-wrap items-center gap-2 '>
          <div>
            <Image alt='' src='/assets/Ellipse-39.png' height={50} width={50} />
          </div>
          <div>
            <h2 className='text-sm font-semibold text-[#773fc6]  '>
              Munwar Raj Singh
            </h2>
            <p className='text-[#374151] font-medium text-sm'>
              OPPO India Marketing Head,
            </p>
            <p className='text-[#374151] font-medium text-sm'>
              Tech Connection India Pvt.Ltd.
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color='gray' />
          
        </div>
      </div>
      <div className='flex justify-between p-2 border-b-2 border-gray-300 mt-5'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Image alt='' src='/assets/Ellipse-39.png' height={50} width={50} />
          </div>
          <div>
            <h2 className='text-sm font-semibold text-[#773fc6]  '>
              Munwar Raj Singh
            </h2>
            <p className='text-[#374151] font-medium text-sm'>
              OPPO India Marketing Head,
            </p>
            <p className='text-[#374151] font-medium text-sm'>
              Tech Connection India Pvt.Ltd.
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color='gray'  />
          
        </div>
      </div>
      <div className='flex justify-between p-2 border-b-2 border-gray-300 mt-5'>
        <div className='flex flex-wrap items-center gap-2 '>
          <div>
            <Image alt='' src='/assets/Ellipse-39.png' height={50} width={50} />
          </div>
          <div>
            <h2 className='text-sm font-semibold text-[#773fc6]  '>
              Munwar Raj Singh
            </h2>
            <p className='text-[#374151] font-medium text-sm'>
              OPPO India Marketing Head,
            </p>
            <p className='text-[#374151] font-medium text-sm'>
              Tech Connection India Pvt.Ltd.
            </p>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical size={25} color='gray'  />
          
        </div>
      </div>
    </div>
  );
};

export default Main;


