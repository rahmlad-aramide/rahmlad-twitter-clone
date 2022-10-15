import React from 'react'
import {CiSearch} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='relative flex h-4'>
        <input type="search" name='search' placeholder='Search Twitter' className='bg-gray-400 rounded-full pl-2 h-8'/>
        <CiSearch className='absolute text-white top-1' size={20} />
    </div>
  )
}

export default Search