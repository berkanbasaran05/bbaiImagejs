import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {PhotoIcon} from  '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='sticky flex flex-row bg-white top-0 p-5  items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '> 
    
    <motion.div
    initial={{x:-200}}
    animate={{x:0}}
    transition={{duration:1.5}}
    >
    <Link to={"/"}>
    <img 
    className='w-16 h-16 rounded-full'
    src='data:image/png;base64,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'></img>
    
    </Link>
    </motion.div>

    <motion.div
    initial={{x:200 }}
    animate={{x:0}}
    transition={{duration:1.5}}
    >
    

         
    <Link to={"/create-post"}>
    <button className='rounded-3xl flex flex-row w-28   mx-auto justify-evenly p-2  items-center bg-black hover:bg-gray-700 text-white'>
        <h1>Create </h1>
        <PhotoIcon className='w-7 h-7 text-white'/>

    </button>
    </Link>


    </motion.div>

   
     </div>
  )
}

export default Header