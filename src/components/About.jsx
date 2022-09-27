import React from 'react'
import {FaGithub,  FaLinkedin} from 'react-icons/fa'

const About = () => {
  return (
    <div >
        <div className='h-screen w-full p-40 flex flex-col  bg-neutral-400 '> 
        <h1 className='text-4xl text-blue-900 border-b-red-300 my-4'>Rahma Sfaxi </h1>
        <span className='hidden md:flex p-10 text-xl border border-solid border-red-400 rounded'>I'm a sofware enginner with 6 years of experience in diffrent sectors to know better a bout ne please check my linkdein and my github and pleade take a look at the projects sesions  </span>
        {/* add socials*/}
        <ul className='flex flex-col '>
        <li className='transform hover:rotate-45 transition duration-300  '> <a href='/'>linkedin <FaLinkedin size={30}/></a></li>
        <li><a href='/'>github  <FaGithub size={30}/></a></li>
        </ul>
        
        </div>

    </div>

  )
}

export default About