import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl  text-white courier-prime-regular'>
            Hello <br /><span className='text-3xl font-semibold'>Wahid!</span> 
        </h1>
        <button className=' cursor-pointer courier-prime-bold bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header