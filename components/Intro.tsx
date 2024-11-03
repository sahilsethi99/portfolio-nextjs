"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import useSectionInView from '@/lib/hooks';

export default function Intro() {
 const {ref} = useSectionInView("Home",0.5);

  return (
    <section ref={ref} id="home"  className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative">
             <motion.div
             initial={{opacity: 0, scale: 0 }}
             animate={{opacity: 1, scale: 1}}
             transition={{
              type:"tween",
              duration:0.2
             }}
             >
                <Image src="/sahil-bg.png" 
                  width={192} 
                  height={192} 
                  quality="100" 
                  priority={true} 
                  alt="Sahil photo"
                  className="h-46 w-36 rounded-full border-[0.28rem] border-white object-cover shadow-xl" 
                  />

             </motion.div>
                  <motion.span className="text-4xl absolute bottom-0 left-0"
                  initial={{opacity: 0,scale: 0}}
                  animate={{opacity: 1,scale: 1}}
                  transition={{
                    type:'spring',
                    stiffness:125,
                    delay:0.1,
                    duration:0.7
                  }}
                  >
                    🚀
                  </motion.span>
            </div>
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity:0, y:100}}
        animate={{opacity:1,y:0}}
        >
                  <span className="">
                    Hey, I'm Sahil.
                  </span> I'm a 
                  <span className="font-bold"> Full-Stack Developer </span>
                  with <span className="font-bold">2.5 </span> years of experience. Confident in <span className="italic underline font-bold">JavaScript-based</span> {"   "}technical roles, my focus remains on delivering dynamic web solutions.
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.1}}
        >
                <Link href='#contact' className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here {" "}<BsArrowRight className="group-hover:translate-x-1 transition"/></Link>
                  <a className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href="/SahilSethiResume.pdf" download>Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1"/></a>
                  <div className="flex gap-2 px-1 justify-center items-center">
                  <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" href="https://www.linkedin.com/in/sahil-sethi99/" target="_blank"><BsLinkedin/></a>
                  <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" href="https://github.com/sahilsethi99" target="_blank"><FaGithubSquare/></a>
                  </div>
        
        </motion.div>

    </section>
  )
}
