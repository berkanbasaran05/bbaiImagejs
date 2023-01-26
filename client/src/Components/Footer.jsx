import { HeartIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-center mx-auto text-white space-x-2 text-xs'>

        <h3>© 2023 Design by </h3>
        <a href='https://portfolio-khaki-iota.vercel.app/'>berkanbasaran</a>
        <h3>Made with  </h3>
        <HeartIcon className='h-4 w-4'/>
    </div>
  )
}

export default Footer