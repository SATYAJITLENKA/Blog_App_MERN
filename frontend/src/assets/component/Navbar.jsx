import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center shadow-md font-bold gap-6 py-3 border-2 color-black '>

        <Link to={'/'}>Home</Link>
        <Link to={'/create'}>Create</Link>
        
    </div>
  )
}

export default Navbar