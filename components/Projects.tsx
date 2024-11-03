"use client";
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image';
import Project from './Project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import useSectionInView from '@/lib/hooks';

export default function Projects() {
 const {ref} = useSectionInView("Projects",0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
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

