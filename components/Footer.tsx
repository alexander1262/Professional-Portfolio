import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='w-screen flex bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600 border-t-2 border-slate-300 md:py-4'>
      <div className='flex justify-between p-2 space-x-2 items-center mx-auto max-w-7xl'>
        <a href='https://github.com/alexander1262' target='_blank' rel="noreferrer">
          <BsGithub size={35} className='hover:text-slate-700 hover:cursor-pointer' href='https://github.com/alexander1262' target='_blank' />
        </a>
        <a href='https://www.linkedin.com/in/alexander-nathaniel-weiss/' target='_blank' rel="noreferrer">
          <BsLinkedin size={35} className='hover:text-slate-700 hover:cursor-pointer' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
