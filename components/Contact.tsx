"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion';
import useSectionInView from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { send } from 'process';

export default function Contact() {
  const {ref} = useSectionInView("Contact");


  return (
    <motion.section ref={ref} id="contact" className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        <SectionHeading>
          Contact Me
        </SectionHeading>
        <p className="text-gray-700 -mt-6">Got an idea or opportunity you'd like to discuss?</p>
          <p className="text-gray-700"> Contact me @{" "}<a className="underline" href="mailto:sethisahil20132013@gmail.com">sethisahil20132013@gmail.com</a>{" "}or through this form.</p>
        <form action={async (formData)=>{
          await sendEmail(formData);
        }} className="mt-10 flex flex-col">
        <input name="senderEmail" className="h-14 px-4  rounded-lg border border-black/10 " placeholder="Your email" type="email" required maxLength={500}/>
        <textarea name="message" className="h-52 my-3 rounded-lg border border-black/10 p-4 " required maxLength={5000} placeholder="Your message or any relevant details for our first meeting?"/>
        <button type="submit" className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}</button>
        </form>
    </motion.section>
  )
}

//https://www.youtube.com/watch?v=sUKptmUVIBM 4.47