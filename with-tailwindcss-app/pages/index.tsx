import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Flow } from "../components/flow/flow";
const Home: NextPage = () => {
  return (
    <div className='w-full h-full bg-blue-200'>
      <Flow />
    </div>
  )
}

export default Home
