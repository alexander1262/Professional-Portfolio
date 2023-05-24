'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'



const HeroSection = () => {
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true);
    }, [])

  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='border-2 border-black rounded-lg shadow-2xl' src='/selfie.png' alt='' width={300} height={300}/>
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className={`font-bold text-3xl mt-6 md:text-7xl hover:cursor-default md:mt-0`}>Hi, I&#39;m Alexander!</h1>
                <p className='text-lg mt-4 mb-8 md:text-2xl hover:cursor-default'>
                    I&#39;m a{' '}
                    <span className='font-semibold text-purple-400'>
                        Front End Web Developer{' '}
                    </span>
                </p>
                <a href='/proresume.pdf' target='_blank' className='text-3xl bg-blue-400 hover:bg-blue-300 rounded-lg p-2 shadow-lg font-semibold'>Resume</a>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
