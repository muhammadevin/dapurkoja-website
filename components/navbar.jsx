import logo from '../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='navbar font-sans font-semibold text-secondary flex flex-row items-center justify-center px-16 py-6 gap-10 text-lg'>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Image src={logo} className="w-[170px] h-[70px]"></Image>
      <Link href="/menu">Menu</Link>
      <Link href="https://linktr.ee/dapur_koja">Order</Link>
    </div>
  )
}

export default Navbar