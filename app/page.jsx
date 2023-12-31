'use client'

import Image from 'next/image'
import texture from '../public/texture.jpeg'
import gofood from '../public/gofood.png'
import grabfood from '../public/grabfood.png'
import shopeefood from '../public/shopeefood.png'

import ayam from '../public/ayam.png'
import makan from '../public/makan.png'
import sambal from '../public/sambal.jpeg'

import { Button, Navbar } from "../components"
import { useEffect, useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null);
  let animationFrameId;
  let scrollDirection = 1;

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollEnd = container.scrollWidth - container.clientWidth;
      let scrollPosition = 0;

      const scrollAnimation = () => {
        scrollPosition += (0.5) * scrollDirection;

        if (scrollPosition >= scrollEnd) {
          scrollDirection = -1;
        } else if (scrollPosition <= 0) {
          scrollDirection = 1;
        }

        container.scrollTo({
          left: scrollPosition,
          behavior: 'auto',
        });

        animationFrameId = requestAnimationFrame(scrollAnimation);
      };

      scrollAnimation();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="flex flex-col bg-primary h-[100vh]">
      <div className='absolute z-10 w-full h-[100vh]'><Image className='h-[100vh] object-cover opacity-20' src={texture}></Image></div>
      <div className='z-20'>
        <Navbar />

        <div className="scrolling_images h-[400px] w-full flex flex-row overflow-auto gap-6 mx-auto justify-center" ref={containerRef}>
          <Image alt='ayam' src={ayam} className="h-full w-full object-cover"></Image>
          <Image alt='makan' src={makan} className="h-full w-[1750px] object-cover"></Image>
          <Image alt='sambal' src={sambal} className="h-full w-[350px] object-cover"></Image>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-6 mt-8 px-8'>
          <h1 className='font-sans font-semibold text-center text-secondary text-xl'>Open every Monday-Saturday 11AM - 9PM</h1>
          <Button text="Order now" link="https://linktr.ee/dapur_koja"></Button>
          <div className='flex flex-row gap-6 items-center'>
            <Image alt='grabfood' src={grabfood} className="w-[72px] h-auto sm:w-[142px]"></Image>
            <Image alt='gofood' src={gofood} className="w-[74px] h-auto sm:w-[144px]"></Image>
            <Image alt='shopeefood' src={shopeefood} className="w-[100px] h-auto sm:w-[180px]"></Image>
          </div>
        </div>
      </div>
    </main>
  )
}
