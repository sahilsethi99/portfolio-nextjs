"use client";

import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/lib/hooks";


export default function Experience() {
//   const { ref,inView } = useSectionInView("Experience",0.2);

  return (
    <section  id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" >
            {experiencesData.map((experienceItem, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        // visible={inView}
                        contentStyle={{
                            background:"#C5D3E8",
                            boxShadow:"none",
                            border: "1px solid rgba(0,0,0,0.05)",
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
  );
}