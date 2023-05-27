import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/alexander-nathaniel-weiss/',
            style: 'rounded-tr-md bg-blue-300'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/alexander1262',
            style: 'bg-gray-500'
        },
        {
            id: 3,
            child: (
                <>
                Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:weisssander@gmail.com',
            style: 'bg-red-400'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/proresume.pdf',
            style: 'rounded-br-md bg-purple-400',
            download: true,
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download}) => (
        <li
            key={id}
            className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold drop-shadow-xl' +
            ' ' +
            style
        }
            >
            <a
                href={href}
                className='flex justify-between items-center w-full'
                download={download}
                target='_blank'
                rel="noreferrer"
            >
                {child}
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
