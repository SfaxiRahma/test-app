import React from 'react'



function Form() {

  return (
    <div id='form'>
    <form  method='POST' action='https://getform.io/f/48ab86f6-3dfb-49fa-b422-4277406dd66c' className=' flex flex-col bg-slate-500 h-screen'>
    <p className='bg-slate-500  text-4xl  text-red-500'> Contact</p>
    <input className='border-red-500 border-b-4 m-4 bg-slate-100 ' placeholder='name' type='text' name='Name'/>
    <input className='border-red-500 border-b-4 m-4 bg-slate-100 ' placeholder='email'type='Email' name='email' /> 
    <textarea className='bg-slate-100' placeholder='text' name='Text' type='text'></textarea>
    <button type='submit' className='border-red-500 border-b-4 m-4 text-red-500'> Submit</button>
    </form>

    </div>

  )
}

export default Form