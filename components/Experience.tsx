"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';

export default function Experience() {
    const {ref} = useSectionInView("Experience");

  return (  
    <section ref={ref} id="experience">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline>
            {experiencesData.map((experienceItem, index)=>(
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{
                            background:'#f3f4f6',
                            boxShadow:'none',
                            border: "1px solid rgba(0,0,0,0.5)",
                            textAlign:"left",
                            padding:"1.3rem 2rem"   
                        }}
                        contentArrowStyle={{
                            borderRight:"0.4rem solid #9ca3af"
                        }}
                        date={experienceItem.date}
                        icon={experienceItem.icon}
                        iconStyle={{
                            background:"white",
                            fontSize: "1.5rem",

                        }}
                        
                    >
                        <h3 className="font-semibold capitalize">
                            {experienceItem.title}
                        </h3>
                        <p className="font-normal !mt-0">{experienceItem.location}</p>
                        <p className="!font-normal !mt-1 text-gray-700">{experienceItem.description}</p>
                        </VerticalTimelineElement>

                </React.Fragment>

            ))}
        </VerticalTimeline>
    </section>
  )
}

//paused at 4.43.30 https://www.youtube.com/watch?v=sUKptmUVIBM
