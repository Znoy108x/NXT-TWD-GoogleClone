import React from 'react'
import {ChevronLeftIcon , ChevronRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useRouter } from 'next/router';
const PaginationButtons = () => {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex  text-blue-700 mb-10 w-[200px] relative left-1/4"> 
        {startIndex >=10 && (
            <Link href={`/Search?term=${router.query.term}&start=${startIndex - 10}`}
            >
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronLeftIcon className="w-5"/>
                    <p>Previous</p>
                </div>
            </Link>
        )}
        <Link href={`/Search?term=${router.query.term}&start=${startIndex + 10}`}
        >
            <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                <ChevronRightIcon className="w-5"/>
                <p>Next</p>
            </div>
        </Link>
    </div>
  )
}
export default PaginationButtons