import React from 'react'
import Image from "next/image"
const Avatar = ({url , className}) => {
  return ( <img className={`${className}
   rounded-full object-cover relative w-[40px] h-[40px] hover:scale-110 duration-200`} src={url} alt="har har mahadev"/>
  )
}
export default Avatar