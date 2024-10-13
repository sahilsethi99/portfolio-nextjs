import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Intro from '@/components/Intro'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sahil | Portfolio',
  description: 'Sahil is a full stack developer with 2.5 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
    // colors  34d399 green f472b6 pink c4b5fd purple {E6D9A2, 8967B3 }
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#BCF2F6] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#E5D4FF] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header/>
        {/* <Intro/> */}
        {children}
        </body>
    </html>
  )
}
