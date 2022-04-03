import React,{useState} from 'react'
import {GlobeIcon} from "@heroicons/react/solid"
const Footer = () => {
    
  return (
    <div className='grid w-full divide-y-[1px] bg-gray-100 text-sm absolute bottom-0'>
        <div className='px-8 py-1'>
            <p>India</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 py-2'>
            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:justify-start'>
                <GlobeIcon className='h-5 mr-1 text-green-600'/> 
                <p>
                    Lord Abhay Bisht
                </p>
            </div>
            <div className='flex space-x-8 justify-center whitespace-nowrap md:justify-self-start'>
                <p>Advertising</p>
                <p>Business</p>
                <p>How Search works</p>
            </div>
            <div className='flex space-x-8 justify-center whitespace-nowrap 
            md:ml-auto'>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}
export default Footer