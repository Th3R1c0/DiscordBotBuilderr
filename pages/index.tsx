import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Flow } from "../components/flow/flow";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalstate, toggleModal } from '../redux-toolkit/slices/themeSlice';

import {db} from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { getDocs } from "firebase/firestore"; 

const Home: NextPage = () => {
  useEffect(() => {
    const log = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
      console.log(`doc id: => ${doc.id}`);
    });
    }
    log()
  }, [])
  const dispatch = useDispatch(toggleModal)
  const modalstate = useSelector(selectModalstate)
  return (

    
    <div className="w-full h-full flex items-center justify-center ">

        <div className={`text-2xl card w-max z-40 bg-base-100 shadow-xl ${modalstate ? '' : 'hidden'} absolute`}>
      <div className="card-body">
        <h2 className="card-title text-4xl">Discord Bot Builder prototype!!</h2>
        <p>Made with <b>Nextjs</b> as React Library,<br/> <b>Tailwindcss</b> for styling,<br/> and <b>Redux Toolkit</b> for state manegment.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => dispatch(toggleModal())}>Close</button>
        </div>
      </div>
    </div>


      <Flow />
    </div>
  )
}

export default Home
