import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='w-screen flex bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600 border-t-2 border-slate-300 md:py-4'>
      <div className='flex justify-between p-2 space-x-2 items-center mx-auto max-w-7xl'>
        <BsGithub size={35} className='hover:text-slate-700 hover:cursor-pointer' />
        <BsLinkedin size={35} className='hover:text-slate-700 hover:cursor-pointer' />
      </div>
    </footer>
  )
}

export default Footer
