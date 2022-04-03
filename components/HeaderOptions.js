import React from 'react'
import {DotsVerticalIcon , MapIcon , NewspaperIcon , PhotographIcon , PlayIcon , SearchIcon} from "@heroicons/react/outline"

import HeaderOption from "./HeaderOption"
const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 border-b-[1px]">
        <div className="flex space-x-6 lg:pl-52">
            <HeaderOption Icon={SearchIcon} title="All" selected/>
            <HeaderOption Icon={PhotographIcon} title="Images"/>
            <HeaderOption Icon={PlayIcon} title="Videos"/>
            <HeaderOption Icon={NewspaperIcon} title="News" />
            <HeaderOption Icon={MapIcon} title="Map"/>
            <HeaderOption Icon={DotsVerticalIcon} title="More"/>
        </div>
        <div className="flex space-x-4">
            <p className=''>Settings</p>
            <p className=''>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions