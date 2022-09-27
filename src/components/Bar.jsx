import React from 'react'
import {FaGithub,  FaLinkedin} from 'react-icons/fa'
import { useRef } from 'react'

function Bar() {



    const scrollTosection=(elemntRef)=>
     {
         window.scrollTo(
             {
               top: elemntRef.current.offsetTop,
               behavior: 'smooth'

             }
         )
     }

  return (

    <div>
        <div className='flex flex-row  justify-around items-center bg-red-500 h-20'>
        <nav className='space-x-4' > {/* nav needs its own spcacing to space elements*/}
            <a href='#about' >about</a>
            <a href='#work'>work</a>
            <a href='#form'>Form</a>
        </nav>
        <p>Box1 </p>
        <p>Box2 </p>
        <p>Box3 </p>
        </div>

        <a href='https://www.linkedin.com/signup' className=' -ml-12 w-fit flex  bg-yellow-400 transform hover:translate-x-12 transition duration-300' >Github
<FaGithub size={30}/> </a>

       <div className=' h-40 w-fit flex justify-around bg-yellow-400'>
       <a href='/' className='text-red-900' >Linkedin</a>  
       <FaLinkedin size={30}> </FaLinkedin>
        </div>
    </div>

  )
}

export default Bar