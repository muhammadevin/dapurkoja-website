import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import halal from '../public/halal.png'

const Footer = () => {
  return (
    <div className='pb-10 w-full gap-4 flex flex-col md:flex-row pt-8 px-4 py-4 md:px-16 md:py-10 bg-secondary justify-between'>
      <div className='flex flex-col gap-4 items-start w-[164px] md:w-[188px]'>
        <a href="https://www.instagram.com/dapur_koja/">
          <div className='flex items-center gap-2'>
            <BsInstagram />
            <p className='text-xs md:text-sm'>@dapur_koja</p>
          </div>
        </a>
        <a href="mailto:halo.dapurkoja@gmail.com">
          <div className='flex items-center gap-2'>
            <FiMail />
            <p className='text-xs md:text-sm'>halo.dapurkoja@gmail.com</p>
          </div>
        </a>
      </div>

      <div className='flex flex-col gap-1 text-left md:text-center w-[344px]'>
        <h4 className='text-xs md:text-lg font-bold'>FRESHLY MADE BY ORDER EVERYDAY</h4>
        <p className='text-xs md:text-lg font-semibold'>No MSG, No preservatives</p>
        <p className='text-xs md:text-base'>© 2023 Dapur Koja. All rights reserved.</p>
      </div>

      <div className='flex w-[164px] md:w-[188px] justify-start md:justify-end'>
        <Image alt='halal' src={halal} className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[84px] lg:h-[84px]" />
      </div>
    </div>
  )
}

export default Footer
