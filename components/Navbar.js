import React from 'react'
import Avatar from '../components/Avatar'
import {ViewGridIcon , MicrophoneIconw} from "@heroicons/react/solid"
const Navbar = () => {
  return (<div className="flex justify-between p-5 text-sm text-gray-700">
  <div className='flex space-x-4 items-center'>
    <p className="a_link">About</p>
    <p className="a_link">Store</p>
  </div>
  <div className='flex space-x-4 items-center'>
    <p className="a_link">Gmail</p>
    <p className="a_link">Images</p>
    <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-300 duration-300'/>
    <Avatar url={"https://pbs.twimg.com/profile_images/1139766931576070144/CQkC4lxN_400x400.jpg"}/>
  </div>
</div>
  )
}

export default Navbar