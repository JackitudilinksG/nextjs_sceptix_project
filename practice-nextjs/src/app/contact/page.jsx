import React from 'react'
import Link from 'next/link'

const contact = () => {
  return (
    <div className='max-w-5xl text-center mt-3'>
      <nav className='  text-white font-inter  font-medium   text-center'>
        <div className=" flex align-center justify-between p-6 bg-slate-800 rounded-md">
          <Link href="/" className= 'hover:text-blue-200'>Home</Link>
          <Link href="/shop" className='hover:text-blue-200'>Shop</Link>
          <Link href="/contact" className='hover:text-blue-200'>Contact</Link>
          <Link href="/about" className='hover:text-blue-200'>About</Link>
        </div>
      </nav>
      <br />
      <h1 className=" font-inter font-extrabold text-6xl">This is a <span className=" text-red-400">Contact</span> page</h1>
      <p className="bg-white text-black p-7 text-center mt-7 rounded-md ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur qui aspernatur doloribus dolorem impedit asperiores.
           Velit dolor maxime fugiat eaque maiores tempore! Unde ea soluta eaque aliquid, mollitia animi vel!
      </p>    
    </div>
  )
}

export default contact
