"use client";
import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data';

type SectionName = typeof links[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}
type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick:number;
  setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>;

}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {

    
    const [activeSection,setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
 
// custom-hook to handle the useContext null error inside Header component. 
export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);

  if(context===null){
    throw new Error (
    "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

//paused at 4.03.30 https://www.youtube.com/watch?v=sUKptmUVIBM