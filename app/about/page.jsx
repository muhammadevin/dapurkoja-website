import { Footer, Navbar, Button } from "../../components"
import Image from 'next/image'
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
    <main className="flex flex-col bg-texture bg-primary h-full">
      <div className='z-20'>
        <Navbar />

        <div className="relative w-full h-[400px] sm:h-[680px]">
          <Image src={aboutheader} className="h-full object-cover" />
          <div className="absolute z-30 inset-0 flex flex-col items-center gap-2 sm:gap-4 justify-center px-8 w-full">
            <div className="w-[200px] border-2 border-primary rounded-md justify-center text-center items-center px-4 py-2 mb-8">
              <h2 className="font-bold text-lg sm:text-3xl">Our Story</h2>
            </div>
            <p className="max-w-[580px] text-center text-xs sm:text-base">Dapur Koja was established in July 2019. Starting from a home kitchen in the area of Bintaro, South Tangerang, which is sold on a pre-order basis and now are available through an online food application. </p>
            <p className="max-w-[580px] text-center text-xs sm:text-base">The name Koja is taken from Daun Salam Koja or well known as curry leaf as Daun Salam Koja is the main ingredient that we use in all our menus. At first we only had 1 menu which is Buttermilk Chicken and as the time goes, we have developed several menus. Not only we serve chicken, we also have beef tongue, and we will keep developing for upcoming menus.</p>
          </div>
        </div>

        <div className="flex flex-col px-10 lg:px-0 py-8 lg:flex-row w-full max-h-[750px] lg:py-20 items-center gap-8 lg:pr-24">
          <div className="hidden lg:flex flex-row scrolling_images overflow-auto w-3/5 float-left gap-8">
            <Image src={kasam1} className="w-[520px] h-[520px]" />
            <Image src={kasam2} className="w-[520px] h-[520px]" />
          </div>
          <div className="w-full px-10 lg:w-2/5 flex flex-col gap-2 lg:gap-5 float-right text-center text-xs md:text-sm lg:text-base lg:text-left">
            <p className=" font-semibold text-red-600">In Dapur Koja, we are trying to be sustainable as much as we can. We minimize of using plastic, that is why we use an eco-friendly packaging like recyclable meal box, wooden cutleries, and paper bag. We also homegrown our ingredients which is the main ingredient on all of our product; Daun Salam Koja. We also shop our ingredients from local market everyday to make sure everything is fresh while also supporting local goods.</p>
            <p className=" font-semibold text-red-600">When we first started in 2020, we sold </p>
            <p className="text-xl lg:text-3xl font-bold text-red-600">2,854 boxes.</p>
            <p className=" font-semibold text-red-600">In 2021, we kept on growing and finally reached our milestone delivering </p>
            <p className="text-xl lg:text-3xl font-bold text-red-600">3,462 boxes</p>
            <p className=" font-semibold text-red-600">all across the city.</p>
          </div>
          <div className="flex flex-row scrolling_images w-full gap-4 object-cover lg:hidden justify-center">
            <Image src={kasam1} className="w-auto h-[180px] md:h-[320px]" />
            <Image src={kasam2} className="w-auto h-[180px] md:h-[320px]" />
          </div>
        </div>

        <div className="flex flex-col gap-10 pt-6 pb-12 px-8 md:py-20 md:px-12 items-center">
          <div className="w-[200px] md:w-full max-w-[450px] border-2 border-red-600 rounded-md justify-center text-center px-4 py-2">
            <h2 className="font-extrabold text-lg md:text-3xl text-red-600">Previous Collaborations</h2>
          </div>

          <div className="flex flex-row gap-2 md:gap-5">
            {collabs.map((collab, index) => (
              <div key={index} className="flex flex-col gap-3 items-center justify-center">
                <p className="text-sm md:text-lg font-bold text-red-600">{collab.title}</p>
                <Image src={collab.image} className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-lg" />
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