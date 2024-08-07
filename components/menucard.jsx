import Image from 'next/image'
import menuImg from '../public/menu.png'

const MenuCard = ({title, desc, imageSrc, price}) => {
  return (
    <div className="flex flex-row border tracking-tighter border-red-600 rounded-md px-4 py-2 w-full max-w-[480px] min-h-[140px] items-center gap-4">
      {
        imageSrc ? (
          <Image alt={title} src={imageSrc} width="100" height="100" className="rounded-md object-cover w-[100px] h-[100px]"></Image>
        ) : (
          <Image alt="prodplaceholder" src={menuImg} width="100" height="100" className="rounded-md object-cover w-[100px] h-[100px]"></Image>
        )
      }
      <div className='flex flex-col flex-1 gap-1 text-red-600'>
        <p className='font-semibold text-base md:text-lg'>{title}</p>
        <p className='font-semibold text-sm md:text-base'>{desc}</p>
        <p className='font-bold text-base md:text-lg'>{price}K</p>
      </div>
    </div>
  )
}
export default MenuCard