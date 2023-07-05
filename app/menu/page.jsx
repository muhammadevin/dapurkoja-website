import { Footer, Navbar, Button, MenuCard } from "../../components"
import Link from "next/link"
import '../index.css'
import Image from 'next/image'
import texture from '../../public/texture.jpeg'
import menuheader from '../../public/menuheader.png'
import supabase from '../../utils/supabase'

export const revalidate = 5

const Menu = async () => {
  const { data: menuItems } = await supabase.from('products').select()

  return (
    <main className="flex flex-col bg-primary h-full">
      <Image className='absolute z-10 object-cover opacity-20 h-full' src={texture}></Image>

      <div className='z-20'>
        <Navbar />

        <div className="relative w-full h-[680px]">
          <Image src={menuheader} className="h-full object-cover" />
          <div className="absolute z-30 inset-0 flex flex-col items-center gap-4 justify-center">
            <div className="w-[200px] border-2 border-primary rounded-md justify-center text-center px-4 py-2 mb-8">
              <h2 className="font-bold text-3xl">Our Menu</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center min-h-[40px] md:h-[100px] text-secondary 
                        font-semibold text-sm md:text-xl border-b border-secondary border-opacity-25">
          {Array.from(new Set(menuItems.map(item => item.category))).map((category, index) => (
            <Link key={index} href={`#${category}`} className="">{category}</Link>
          ))}
        </div>

        <div className="px-4 sm:px-20 py-20 xl:px-48 gap-5 items-center justify-center">
          <div className="flex flex-col gap-10 px-4 sm:px-20 text-secondary max-w-[1130px] items-center justify-center">
            {Array.from(new Set(menuItems.map(item => item.category))).map((category, index) => (
              <div className="flex flex-col gap-4">
                <h2 className="font-bold md:text-2xl">{category}</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 items-center justify-items-center" key={index}>
                  {menuItems.filter(item => item.category === category).map((item, itemIndex) => (
                    <MenuCard key={itemIndex} title={item.name} desc={item.description} image={item.imageSrc} price={item.price}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

export default Menu