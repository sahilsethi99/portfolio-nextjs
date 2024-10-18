import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image';
import Project from './Project';

export default function Projects() {
  return (
    <section>
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

//paused at 2.59.54