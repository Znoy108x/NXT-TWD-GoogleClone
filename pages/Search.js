import React from 'react'
import Head from 'next/head'
import Header from "../components/Header"
import Object from "../Object"
import { useRouter } from 'next/router'
import SearchResults from "../components/SearchResults"
const Search = ({results}) => {
  const router = useRouter()
return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="" />
        </Head>
        <Header/>
        <SearchResults results={results}/>
    </div>
  )
}
export default Search
export async function getServerSideProps(context){
  const useDummyData = false; 
  const startIndex = context.query.start||0
  const data = useDummyData ? Object : await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDGgTTl55TdQXh11J8fYyOxFFuzGP2zG3E&cx=a3bba0d4507690da5&q=${context.query.term}&start=${startIndex}`).then((res) =>res.json())
  return {
    props:{
      results : data
    }
  }
}