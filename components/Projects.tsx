'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

interface PortfolioItem {
    image: string
    deployed: string
    repo: string
    title: string
    description: string
    technologies: string
}

const portfolioData: PortfolioItem[] = [
    {
        image: '/javascriptquiz.png',
        deployed: 'https://alexander1262.github.io/Javascript-Timed-Coding-Quiz/',
        repo: 'https://github.com/alexander1262/Javascript-Timed-Coding-Quiz',
        title: 'Javascript Coding Quiz',
        description: 'A timed quiz on Javascript coding that uses localstorage for a highscores list',
        technologies: 'HTML | CSS | Javascript'
    },
    {
        image: '/dictionary.png',
        deployed: 'https://rapperthedabber.github.io/Daring-Dinoursars/',
        repo: 'https://github.com/rapperthedabber/Daring-Dinoursars',
        title: 'Daring Dinosaurs Dictionary',
        description: 'An online search engine that takes in a word and displays the definition, top 5 YouTube results, and Wikipedia entry',
        technologies: 'HTML | CSS | Javascript'
    },
    {
        image: '/neoplants.png',
        deployed: 'https://grey-stones.herokuapp.com/',
        repo: 'https://github.com/alexander1262/NeoPlants-Interactive-Web-Game',
        title: 'NeoPlants',
        description: 'A browser based game that allows the user to create, raise, and interact with a virtual plant',
        technologies: 'Handlebars | CSS | Javascript | Express.js | Node.js'
    },
    {
        image: '/groceryecommerce.png',
        deployed: 'https://groceryjad.herokuapp.com/',
        repo: 'https://github.com/JoshEflin/JAD',
        title: 'Grocery ECommerce',
        description: 'A Grocery ECommerce website that allows users to search recipes and purchase ingredients for those recipes',
        technologies: 'Javascript | React.js | Mongodb | Graphql | Tailwindcss'
    },
]

function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseOver = (index: number) => {
        setHoveredIndex(index);
    }

    const handleMouseOut = () => {
        setHoveredIndex(-1);
    }

    return (
      <div id="projects">
        <div>
          <h1 className="text-center text-4xl font-bold mb-6 hover:cursor-default">My Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.map((project, index) => (
            <div key={index} className="mb-5 items-center flex flex-row mx-4">
              <div
                className="relative"
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={handleMouseOut}
              >
                <Image src={project.image} alt={project.title} width={500} height={200} className="border-2 border-black" />
                {hoveredIndex === index && (
                  <div className="absolute bg-slate-400 bg-opacity-90 top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <h2 className="md:text-3xl texl-3xl font-bold hover:cursor-default">{project.title}</h2>
                    <p className="text-center hover:cursor-default">{project.description}</p>
                    <p className="font-semibold text-center hover:cursor-default">{project.technologies}</p>
                    <div className="flex flex-row space-x-4 mt-2">
                      <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                        <BsGithub size={40} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                      </a>
                      <br />
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <BsArrowUpRightSquare size={40} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Projects
