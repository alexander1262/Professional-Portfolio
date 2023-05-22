'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl' src='/selfie.png' alt='' width={300} height={300}/>
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-bold text-3xl mt-6 md:text-7xl md:mt-0'>Hi, I&#39;m Alexander!</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I&#39;m a{' '}
                    <span className='font-semibold text-purple-400'>
                        Front End Web Developer{' '}
                    </span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
