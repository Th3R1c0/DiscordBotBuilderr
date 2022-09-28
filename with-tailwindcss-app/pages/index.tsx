import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Flow } from "../components/flow/flow";

const Home: NextPage = () => {
  return (
    <div className='w-full h-full'>
      <Flow />
    </div>
  )
}

export default Home
