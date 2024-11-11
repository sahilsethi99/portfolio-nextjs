"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion';
import useSectionInView from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { send } from 'process';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

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
        <p className="text-gray-700 -mt-6 dark:text-white/8-">Got an idea or opportunity you'd like to discuss?</p>
          <p className="text-gray-700"> Contact me @{" "}<a className="underline" href="mailto:sethisahil20132013@gmail.com">sethisahil20132013@gmail.com</a>{" "}or through this form.</p>
        <form className="mt-10 flex flex-col dark:text-black" action={async (formData)=>{
          const {data,error} = await sendEmail(formData);
          if(error){
            toast.error(error);
            return;
          }
          toast.success('Thanks for the email, will reach back soon!');
        }} >
        <input name="senderEmail" className="h-14 px-4  rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all " placeholder="Your email" type="email" required maxLength={500}/>
        <textarea name="message" className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all " required maxLength={5000} placeholder="Your message or any relevant details for our first meeting?"/>
        <SubmitBtn/>
        </form>
    </motion.section>
  )
}