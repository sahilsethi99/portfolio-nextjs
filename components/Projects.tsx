"use client";
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image';
import Project from './Project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const{ref, inView} = useInView({threshold:0.5});
  const {setActiveSection,timeOfLastClick} = useActiveSectionContext();

  useEffect(()=>{
    if(inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection("Projects");

  },[inView,setActiveSection,timeOfLastClick])


  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
        <SectionHeading>Projects</SectionHeading>
        <div>
        {ok .map((project, index)=>(
            <React.Fragment key={index}>
                <Project {...project}/>
            </React.Fragment>

        ))}

        </div>

    </section>
  )
}

