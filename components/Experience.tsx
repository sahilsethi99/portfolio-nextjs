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
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "@/context/theme-context";


export default function Experience() {
  const { ref,inView } = useSectionInView("Experience",0.2);
  const {theme} = useTheme();
  // const lineColor = theme !== "light" ? "#e5e7eb" : "rgb(255, 255, 255, 0.2)";
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline className="vertical-timeline vertical-timeline-custom">
            {experiencesData.map((experienceItem, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        // visible={inView}
                        contentStyle={{
                            background: theme === 'light'?  "#C5D3E8" : "rgb(255,255,255, 0.05)",
                            boxShadow:"none",
                            border: "1px solid rgba(0,0,0,0.05)",
                            textAlign:"left",
                            padding:"1.3rem 2rem"   
                        }}
                        contentArrowStyle={{
                            borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255, 0.5)"
                        }}
                        date={experienceItem.date}
                        icon={experienceItem.icon}
                        iconStyle={{
                            background:theme === 'light' ? "white" : "rgba(255,255,255, 0.15)",
                            fontSize: "1.5rem",

                        }}
                    >
                        <h3 className="font-semibold capitalize">
                            {experienceItem.title}
                        </h3>
                        <p className="font-normal !mt-0">{experienceItem.location}</p>
                        <p className="!font-normal !mt-1 text-gray-700 dark:text-white/75">{experienceItem.description}</p>
                        </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
        <style jsx>{`
        .vertical-timeline::before {
          background-color: var(--line-color) !important;
        }
      `}</style>
    </section>
  );
}

//7.04