import React , {useRef} from 'react'
import Image from "next/image"
import {useRouter} from "next/router"
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid"
import {} from "@heroicons/react/outline"
import Avatar from "../components/Avatar"
import HeaderOptions from "./HeaderOptions"
const Header = () => {
    const rooter = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) =>{
        e.preventDefault()
        const term = searchInputRef.current.value
        if(!term){
            return;
        }
        rooter.push(`/Search?term=${term}`);
    }
  return (
      <div>
        <div className="flex p-5">
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"}
            width={110} height={5} className="cursor-pointer" alt="search google logo " onClick={()=>rooter.push("/")}/>
            <form className="flex border-2 border-gray-200 rounded-full flex-grow shadow-lg max-w-xl items-center px-6 py-2 ml-10 mr-5">
                <input ref={searchInputRef} type="text" className="w-full focus:outline-none"/>
                <XIcon className="mr-3 h-7 text-gray-500 cursor-pointer transition transform
                duration-100 hover:scale-125 sm:mr-3"
                onClick={()=>(searchInputRef.current.value="")}/>
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500
                border-l-2 pl-4 border-gray-300
                cursor-pointer
                "/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                <button className="hidden" type="submit" onClick={search}>Search</button>
            </form>
            <Avatar url="https://pbs.twimg.com/profile_images/1139766931576070144/CQkC4lxN_400x400.jpg" className={"ml-auto"}/>
        </div>
        <HeaderOptions/>
    </div>
  )
}

export default Header