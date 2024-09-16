import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800  flex justify-around text-[24px] '>
        <div className="logo font-bold text-white pl-[48px] pt-[8px]">

            <span className="text-green-700  font-[900]"> &lt;</span>
               Pass
           <span className='text-green-700 font-bold pt-[8px]'>OP</span>
            <span className="text-green-700 text-xl pt-[10px] text-[28px] ">/&gt;</span>
            </div>
        {/* <ul className='flex gap-6 text-white text-[15px] p-[20px]'>
            <li><a className='hover:font-semibold' href="/">Home</a>  </li>
            <li><a className='hover:font-semibold' href="/about">About</a></li>
            <li><a className='hover:font-semibold' href="/contact">Contact</a></li>
        </ul> */}
        <button className='hover:bg-green-500 hover:cursor-pointer  ring-white ring-1 bg-green-800 flex justify-center py-3 items-center rounded-full w-[107px] m-[10px] gap-[9px]'>
          <img className='invert w-[22px]' src="/icons/github.svg" alt="github logo" />
          <span className='font-bold text-white hover:font-semibold text-[16px]'>GitHub</span>

        </button>
    </nav>
  )
}

export default Navbar
