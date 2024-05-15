import Image from 'next/image'
import React from 'react'

import { motion, useScroll } from "framer-motion"

import { FaUser, FaSearch, FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
  

import {Titan_One } from 'next/font/google'
const titan = Titan_One({ weight: '400', subsets: ['latin'] })

const Header = () => {

  return (
    <header className='w-full flex items-center justify-between sticky top-0
    z-20 p-4 bg-white border-b-[1px] border-gray-100'>
        <div>
            <Link href='https://burningdaily.com/'>
                <Image 
                    alt='logo'
                    height={50}
                    width={30}
                    src='/images/logo-sm.png'
                    className='sm:hidden'
                    />
            </Link>
            <Link href='https://burningdaily.com/'>
                <h2 className={`font-extrabold text-5xl hidden bg-gradient-to-r from-purple-600 
                to-indigo-600 sm:inline-block text-transparent bg-clip-text ${titan.className}`}>
                    CANDEES.
                </h2>
            </Link>
        </div>

        <div className='flex gap-4 items-center'>
            <Sheet>
                <SheetTrigger>
                    <div className='p-2 rounded-sm border-[1px] border-gray-600'>
                    <FaBars className='text-gray-800'/>
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>
                    <h2 className={`font-extrabold text-md hidden bg-gradient-to-r from-purple-600 
                    to-indigo-600 sm:inline-block text-transparent bg-clip-text ${titan.className}`}>
                        CANDEES.
                    </h2>
                    </SheetTitle>
                    <SheetDescription className='flex flex-col h-full'>
                        <ul className='flex flex-col gap-2'>
                            <Link href='https://burningdaily.com/'>
                                <li className='cursor-pointer p-2 hover:bg-gray-200 rounded-md transition duration-150'>HOME</li>
                            </Link>
                            <Link href='https://burningdaily.com/'>
                                <li className='cursor-pointer p-2 hover:bg-gray-200 rounded-md transition duration-150'>ABOUT</li>
                            </Link>
                            <Link href='https://burningdaily.com/'>
                                <li className='cursor-pointer p-2 hover:bg-gray-200 rounded-md transition duration-150'>LEARN MORE</li>
                            </Link>
                        </ul>
                    </SheetDescription>
                    </SheetHeader>
                    
                </SheetContent>
            </Sheet>
        </div>
    </header>
  )
}

export default Header
