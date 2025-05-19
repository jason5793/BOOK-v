import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-end'>
        <div className="flex justify-betweeen w-75 p-3">
            <div  className='hover:cursor-pointer hover:text-red-600'>Home</div>
            <div  className='hover:cursor-pointer hover:text-red-600 relative'>Cart</div>
            <div  className='hover:cursor-pointer hover:text-red-600'>About</div>
            <div  className='hover:cursor-pointer hover:text-red-600'></div>
        </div>
    </div>
  )
}

export default Header;