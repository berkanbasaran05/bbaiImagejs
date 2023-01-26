import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {PhotoIcon} from  '@heroicons/react/24/solid'
import logo  from '../assets/logo.png'

const Header = () => {
  return (
    <div className='bg-transparent h-24 flex flex-row  top-0 p-5  items-start justify-between max-w-6xl mx-auto z-20 xl:items-center '> 
    
    <motion.div
    initial={{x:-200}}
    animate={{x:0}}
    transition={{duration:1.5}}
    >
    <Link to={"/"}>
    <img 
    className='w-12 h-12 rounded-lg'
    src={logo}/>    
    </Link>
    </motion.div>

    <motion.div
    initial={{x:200 }}
    animate={{x:0}}
    transition={{duration:1.5}}
    >
    

         
    <Link to={"/create-post"}>
    <button className='rounded-3xl flex flex-row w-40   mx-auto justify-evenly p-2  items-center bg-gray-700 hover:bg-gray-700 text-white'>
        <h1>Create with AI </h1>
        <PhotoIcon className='w-7 h-7 text-white'/>

    </button>
    </Link>


    </motion.div>

   
     </div>
  )
}

export default Header