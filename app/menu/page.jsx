import { Footer, Navbar, Button, MenuCard } from "../../components"
import Link from "next/link"
import Image from 'next/image'
import menuheader from '../../public/menuheader.png'
import supabase from '../../utils/supabase'

export const revalidate = 5

const Menu = async () => {
  const { data: menuItems } = await supabase.from('products').select()
  const sortedMenuItems = menuItems
  .sort((a, b) => a.menu_id - b.menu_id)
  .sort((a, b) => a.category_id - b.category_id);

  return (
    <main className="flex flex-col bg-primary bg-texture h-full">
      <div className='z-20'>
        <Navbar />

        <div className="relative w-full h-[200px] md:h-[420px] lg:h-[680px]">
          <Image alt="menuheader" src={menuheader} className="h-full object-cover" />
          <div className="absolute z-30 inset-0 flex flex-col items-center gap-4 justify-center">
            <div className="w-[200px] border-2 border-primary rounded-md justify-center items-center text-center px-4 py-2 ">
              <h2 className="font-bold text-4xl">Our Menu</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 md:gap-12 justify-center items-center min-h-[40px] md:h-[100px] text-secondary 
                        font-semibold text-md md:text-2xl border-b border-secondary border-opacity-25">
          {Array.from(new Set(menuItems.map(item => item.category))).map((category, index) => (
            <Link key={index} href={`#${category}`}>{category}</Link>
          ))}
        </div>

        <div className="px-4 sm:px-20 pt-8 pb-20 xl:px-48 gap-5 items-center justify-center">
          <div className="flex flex-col w-full gap-10 px-4 lg:px-20 text-secondary  items-center justify-center">
            {Array.from(new Set(sortedMenuItems.map(item => item.category))).map((category, index) => (
              <div key={index} id={category} className="flex flex-col gap-4 w-full h-full">
                <h2 className="font-bold text-2xl md:text-3xl">{category}</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 items-center justify-items-center" key={index}>
                  {sortedMenuItems.filter(item => item.category === category).map((item, itemIndex) => (
                    <MenuCard key={itemIndex} title={item.name} desc={item.description} imageSrc={item.imageSrc} price={item.price}/>
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