"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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

        <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity:0, y:100}}
        animate={{opacity:1,y:0}}
        >
                  <span className="">
                    Hey, I'm Sahil.
                  </span> I'm a 
                  <span className="font-bold"> Full-Stack Developer </span>
                  with <span className="font-bold">2.5 </span> years of experience. Confident in <span className="italic underline font-bold">JavaScript-based</span> {"   "}technical roles, my focus remains on delivering dynamic web solutions.
        </motion.p>

        <div>
                <Link href='#contact' className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full">Contact me here <BsArrowRight/>{" "}</Link>
                  <a className="bg-white  px-7 py-3 flex items-center gap-2 rounded-full">Download Resume <HiDownload/></a>
                  <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"><BsLinkedin/></a>
                  <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"><FaGithubSquare/></a>
                  
        
        </div>

    </section>
  )
}
