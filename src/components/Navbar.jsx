import React,{useState} from 'react';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const [toggle,setToggle] =useState(false);
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
      
      <div className='px-2 flex justify-between  items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Logo</h1> */}
          <img src={logo} alt='menu' className='w-full h-[28px] mr-10'/>
        </div>
        
        <div className='flex items-center'>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>Login</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          <img src={!toggle?menu:close} alt='menu' className='w-[28px] h-[28px] object-contain mr-10'/>
           
        </div>
      </div>

      <ul className={!toggle?'hidden':'absolute bg-white w-full px-8 md:hidden'}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>About</li>
            <li className='border-b-2 border-zinc-300 w-full'>Support</li>
            <li className='border-b-2 border-zinc-300 w-full'>Platform</li>
            <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
            <div className='flex flex-col my-4'>
              <button className=' bg-transparent text-black mb-4 py-3 px-8'>Login</button>
              <button className='px-8 py-3'>Sign Up</button>
            </div>
      </ul>
      
    </div>
  )
}

export default Navbar