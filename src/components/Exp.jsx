import React from 'react'
import etherum from '../assets/eth.png'

function Exp() {
  return (
    <div className='flex flex-col justify-center border border-b-slate-800 m-10 hover:animate-pulse'>
        <img src={etherum} alt='etherum logo'/>
        <p className='text-sm m-3 font-extralight sm:text-xs'> this card contains my etherum project it is a crypto trasfer wallet
        I will describe a lot in the project
        </p>
        <p className='text-l text-red-800 font-bold sm:text-xs'>Technologies  </p>
        <ul > 
        <li className='bg-gray-100 rounded-full text-slate-800 font-semibold m-2 w-fit'> #Etheum</li>
        <li className='bg-gray-100 rounded-full text-slate-800 font-semibold m-2 w-fit'> #Recat</li>
        <li className='bg-gray-100 rounded-full text-slate-800 font-semibold m-2 w-fit'>#Test</li>
        </ul>
        <div className='flex flex-row justify-evenly'>
        <button className=' bg-orange-200 hover:bg-blue-300 hover:transition duration-300 ease-in-out'> demo</button>
        <button className='bg-orange-200 hover:bg-blue-300  '>code </button>
        </div>

    </div>
  )
}

export default Exp