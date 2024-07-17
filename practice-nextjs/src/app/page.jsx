import React from 'react'
import Link from 'next/link'

//home page
const Home = () => {
  return (
    <div className='max-w-5xl text-center mt-10'>
      <nav className='text-white font-inter font-medium text-center'>
        <div className="flex align-center justify-between p-6 bg-slate-800 rounded-full">
          <Link href="/" className= 'hover:text-blue-200 ml-10'>Home</Link>
          <Link href="/shop" className='hover:text-blue-200'>Shop</Link>
          <Link href="/contact" className='hover:text-blue-200'>Contact</Link>
          <Link href="/about" className='hover:text-blue-200 mr-10'>About</Link>
        </div>
      </nav>
      <br />
      <h1 className=" font-inter font-extrabold text-6xl">This is a <span className=" text-blue-400">Home</span> page</h1>
      <p className="bg-white text-black p-7 text-center mt-7 rounded-md ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur qui aspernatur doloribus dolorem impedit asperiores.
           Velit dolor maxime fugiat eaque maiores tempore! Unde ea soluta eaque aliquid, mollitia animi vel!
      </p>
      <div className='flex align-center mt-10'>
        <img src="/cr7_phone.jpg" width={300} height={300} alt="where image?" />
      </div>
    </div>
  )
}

export default Home
