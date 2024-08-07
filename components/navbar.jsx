'use client'

import logo from '../public/logo.png'
import list from '../public/list.png'
import close from '../public/close.png'
import Link from 'next/link'
import Image from 'next/image'
import { BsList } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex flex-row items-center justify-center px-6 md:px-16 py-2 md:py-6 gap-10 text-lg font-semibold text-secondary'>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-10
      text-2xl font-semibold text-secondary cursor-pointer'>
        <li className=''><a href="/">Home</a></li>
        <li className=''><a href="/about">About</a></li>
        <li><a href="/"><Image alt='logo' src={logo} className="w-[170px] h-[70px]"></Image></a></li>
        <li className=''><a href="/menu">Menu</a></li>
        <li className=''><a href="https://linktr.ee/dapur_koja">Order</a></li>
      </ul>

      <div className='sm:hidden flex flex-row w-full justify-between items-center'>
        <a href="/"><Image alt='logo' src={logo} className="w-[157px] h-[66px]"></Image></a>
        <Image src={toggle ? close : list} alt="menu" 
        className='w-[20px] h-[20px] object-contain' onClick={() => setToggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-secondary absolute z-40
        top-20 right-0 mx-4 my-2 min-w-[100px] rounded-lg`}>
           <ul className='list-none flex flex-col justify-center items-center flex-1 gap-2
            text-lg font-semibold text-primary cursor-pointer'>
              <li className=''><a href="/">Home</a></li>
              <li className=''><a href="/about">About</a></li>
              <li className=''><a href="/menu">Menu</a></li>
              <li className=''><a href="https://linktr.ee/dapur_koja">Order</a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar