import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='pb-10 w-full gap-4 flex flex-col md:flex-row pt-8 px-4 py-4 md:px-16 md:py-10 text-white bg-secondary justify-between'>
      <div className='flex flex-col gap-4 items-start w-[164px] md:w-[188px]'>
        <a href="https://www.instagram.com/dapur_koja/">
          <div className='flex items-center gap-2'>
            <BsInstagram />
            <p className='text-base md:text-xl'>@dapur_koja</p>
          </div>
        </a>
        <a href="mailto:halo.dapurkoja@gmail.com">
          <div className='flex items-center gap-2'>
            <FiMail />
            <p className='text-base md:text-xl'>halo.dapurkoja@gmail.com</p>
          </div>
        </a>
      </div>

      <div className='flex flex-col gap-1 text-left md:text-center w-[344px]'>
        <h4 className='text-base md:text-right md:text-lg font-bold'>FRESHLY MADE BY ORDER EVERYDAY</h4>
        <p className='text-base md:text-right md:text-lg font-semibold'>No pork, No lard, No MSG, No preservatives</p>
        <p className='text-base md:text-right md:text-base'>© 2023 Dapur Koja. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
