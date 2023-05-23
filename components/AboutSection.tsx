import React from 'react'

const skills = [
    {skill:'HTML'},
    {skill:'CSS'},
    {skill:'Javascript'},
    {skill:'Typescript'},
    {skill:'React.js'},
    {skill:'Node.js'},
    {skill:'Handlebars.js'},
    {skill:'Tailwind CSS'},
    {skill:'Next.js'},
    {skill:'Github'},
    {skill:'VSCode'}
]

function AboutSection() {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl hover:cursor-default'>About Me</h1>
            <div className='flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left hover:cursor-default'>Get to know me!</h1>
                    <p className='hover:cursor-default'>My name is Alexander and I am a Front End Web Developer who loves to learn and is highly self-motivated.</p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left hover:cursor-default'>My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((item, idx) => {
                            return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:cursor-default'>{item.skill}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
