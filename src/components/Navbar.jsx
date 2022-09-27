import React from 'react'
import logo from '../assets/logo-color.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaGithub,  FaLinkedin} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

    const [mobilenav,setNav]= useState(false);

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
        <div> 
            <img src = {logo}  className='w-[80px]'></img>
        </div>

        {/*menu*/}
        <nav className='hidden md:flex  h-screen justify-center space-x-2'>
        <a href='/'>About</a>
        <a href='/'>work</a>
        <a href='/'>contact</a>
        </nav>


        <div onClick={()=>setNav(!mobilenav)} className='md:hidden z-10'>
             {!mobilenav ?<FaBars/>: <FaTimes/> }
        </div>

        {/*Mobile menu*/}

        <nav className={!mobilenav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-zinc-400 justify-center items-center flex flex-col'}>
        <a href='/'>About</a>
        <a href='/'>work</a>
        <a href='/'>contact</a>
        </nav>
    
        {/* Social icons */}
        <div className='hidden md:flex  flex-col top-[70%]  '>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
            >
            Linkedin <FaLinkedin size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='/'
            >
            Github <FaGithub size={30} />
            </a>
        </li>
        </ul>
        </div>
        </div>
  )
}

export default Navbar