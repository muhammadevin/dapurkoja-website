import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import halal from '../public/halal.png'

const Footer = () => {
  return (
    <div className='h-[225px] flex flex-row px-16 py-10 justify-between bg-secondary'>
      <div className='flex flex-col gap-4 items-start w-[344px]'>
        <div className='flex items-center gap-2'>
          <BsInstagram />
          <p className='text-sm'>@dapur_koja</p>
        </div>
        <div className='flex items-center gap-2'>
          <FiMail />
          <p className='text-sm'>halo.dapurkoja@gmail.com</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 text-center items-center w-[344px]'>
        <h4 className='text-lg font-bold'>FRESHLY MADE BY ORDER EVERYDAY</h4>
        <p className='text-lg font-semibold'>No MSG, No preservatives</p>
        <p className='mt-auto'>© 2023 Dapur Koja. All rights reserved.</p>
      </div>

      <div className='flex flex-row w-[344px] justify-end'>
        <Image src={halal} className='w-[84px] h-[84px]' />
      </div>
    </div>
  )
}

export default Footer
