import {useState , useRef} from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { MicrophoneIcon, SearchIcon} from "@heroicons/react/solid"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
export default function Home() {
  // const [search , setSearch] =useState("") 
  const searchInputRef = useRef(null)
  const router = useRouter()
  const search = (e)=>{
    e.preventDefault();
    const term = searchInputRef.current.value
    if(!term){
      return;
    }
    router.push(`/Search?term=${term}&start=0`)
  } 
  return (
    <div className="flex flex-col">
      <Head>
        <title>Boogle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen'>
        <Navbar/>
        <div className='flex flex-col items-center mt-24'>
          <Image src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c51f/image" alt={"google logo"}width={300} height={100} />
          <div className='w-full flex mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md px-5 py-3 rounded-full border-2 order-gray-500 sm:max-w-xl '>
            <SearchIcon className="h-5 mr-3 text-gray-500"/>
            <input  ref={searchInputRef} type="text" className="focus:outline-none flex-grow"/>
            <MicrophoneIcon className="h-5 mr-3 text-gray-500"/>
          </div>
          <div className="flex space-x-10 mt-6">
            <button onClick={search} className='btn'>Google Search</button>
            <button onClick={search} className='btn'>I'm Feeling Lucky</button>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}