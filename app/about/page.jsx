import { Footer, Navbar, Button } from "../../components"
import '../index.css'
import Image from 'next/image'
import texture from '../../public/texture.jpeg'
import aboutheader from '../../public/aboutheader.png'
import kasam1 from '../../public/kasam1.png'
import kasam2 from '../../public/kasam2.png'
import cemcam from '../../public/cemcam.png'
import beefo from '../../public/beefo.png'

const About = () => {
  const collabs = [
    {
      title: 'Dapur Koja x Cemil Camil',
      image: cemcam,
    },
    {
      title: 'Dapur Koja x Beefo',
      image: beefo,
    },
  ];

  return (
    <main className="flex flex-col bg-primary h-[2493px]">
      <Image className='absolute z-10 object-cover opacity-20 h-inherit' src={texture}></Image>
      <div className='z-20'>
        <Navbar />

        <div className="relative w-full h-[680px]">
          <Image src={aboutheader} className="h-full object-cover" />
          <div className="absolute z-30 inset-0 flex flex-col items-center gap-4 justify-center">
            <div className="w-[200px] border-2 border-primary rounded-md justify-center text-center px-4 py-2 mb-8">
              <h2 className="font-bold text-3xl">Our Story</h2>
            </div>
            <p className="w-[580px] text-center">Dapur Koja was established in July 2019. Starting from a home kitchen in the area of Bintaro, South Tangerang, which is sold on a pre-order basis and now are available through an online food application. </p>
            <p className="w-[580px] text-center">The name Koja is taken from Daun Salam Koja or well known as curry leaf as Daun Salam Koja is the main ingredient that we use in all our menus. At first we only had 1 menu which is Buttermilk Chicken and as the time goes, we have developed several menus. Not only we serve chicken, we also have beef tongue, and we will keep developing for upcoming menus.</p>
          </div>
        </div>

        <div className="w-full h-[750px] py-20 flex flex-row items-center gap-8 pr-24">
          <div className="scrolling_images overflow-auto w-3/5 float-left flex flex-row gap-8">
            <Image src={kasam1} className="w-[520px] h-[520px]" />
            <Image src={kasam2} className="w-[520px] h-[520px]" />
          </div>
          <div className="w-2/5 float-right flex flex-col gap-5">
            <p className=" font-semibold text-red-600 text-left">In Dapur Koja, we are trying to be sustainable as much as we can. We minimize of using plastic, that is why we use an eco-friendly packaging like recyclable meal box, wooden cutleries, and paper bag. We also homegrown our ingredients which is the main ingredient on all of our product; Daun Salam Koja. We also shop our ingredients from local market everyday to make sure everything is fresh while also supporting local goods.</p>
            <p className=" font-semibold text-red-600 text-left">When we first started in 2020, we sold </p>
            <p className="text-3xl font-bold text-red-600 text-left">2,854 boxes.</p>
            <p className=" font-semibold text-red-600 text-left">In 2021, we kept on growing and finally reached our milestone delivering </p>
            <p className="text-3xl font-bold text-red-600 text-left">3,462 boxes</p>
            <p className=" font-semibold text-red-600 text-left">all across the city.</p>
          </div>
        </div>

        <div className="h-[720px] flex flex-col gap-10 py-20 px-12  items-center">
          <div className="w-[450px] border-2 border-red-600 rounded-md justify-center text-center px-4 py-2 mb-8">
            <h2 className="font-bold text-3xl text-red-600">Previous Collaborations</h2>
          </div>

          <div className="flex flex-row gap-5">
            {collabs.map((collab, index) => (
              <div key={index} className="flex flex-col gap-3 items-center justify-center">
                <p className="text-lg font-bold text-red-600">{collab.title}</p>
                <Image src={collab.image} className="w-[250px] h-[250px] rounded-lg" />
              </div>
            ))}
          </div>

          <Button text="Check out our full menu" link="/menu"/>
        </div>

        <div className="mt-auto">
          <Footer/>
        </div>
      </div>
    </main>
  )
}

export default About