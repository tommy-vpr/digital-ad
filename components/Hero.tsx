'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full h-96 bg-900 flex items-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 
    justify-center bg-[#00171f] relative overflow-hidden'>
      {/* <div className='w-1/2 flex flex-col gap-6 p-12'>
        <h3 className='text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta cupiditate quae nisi culpa quia unde, voluptatibus sit hic, non voluptatum quasi rem iusto mollitia voluptates assumenda recusandae cum distinctio.
        </h3>

        <div>
            <button className='bg-blue-500 py-4 px-8 text-gray-200 rounded-md'>Learn More</button>
        </div>
      </div>
      <div className='w-1/2'>

      </div> */}
     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 z-10 -translate-y-1/2 flex flex-col
        justify-content items-center'>
        <motion.h3 
        initial={{
            y: -20,
            opacity: 0
        }}
        viewport={{ once: true }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        className='text-4xl md:text-7xl uppercase text-white text-center'>
            Just Relax
        </motion.h3>
        <motion.p 
        initial={{
            y: -20,
            opacity: 0
        }}
        animate={{
            y: 0,
            opacity: 1,
            transition: {
                delay: .2
            }
        }}
        className='mt-6 text-black text-md md:text-xl max-w-[500px] text-center'>
        Gummies, Pens, And Everything In Between
        Your one-stop shop for all your relaxation needs is here!
        </motion.p>

        <Link 
            href='https://burningdaily.com/' 
        >
            <motion.div
            initial={{
                y: 20,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    delay: .4
                }
            }}
            className='px-8 py-2 text-white bg-indigo-900 text-center
            rounded-full mt-8 hover:bg-indigo-800 transition duration-150 
            w-full text-sm md:text-lg'
            >
                Learn More
            </motion.div>
        </Link>
     </div>

    {/* <Image 
        priority
        src='/images/hero-desktop.jpg'
        alt='hero image'
        fill
        className='object-cover grayscale filter'
      /> */}

                <motion.div
                    className='absolute top-4 left-16'
                    animate={{ 
                        y: [0, 10, 0],
                        rotate: 45
                    }}
                    transition= {{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                >
                    <Image 
                        height={90}
                        width={90}
                        alt='edible 1'
                        src='/images/edible-1.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute top-24 right-8 md:right-24'
                    animate={{ 
                        y: [0, 10, 0],
                        rotate: 45
                    }}
                    transition= {{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                >
                    <Image 
                        height={90}
                        width={90}
                        alt='edible 1'
                        src='/images/edible-3.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute top-48 md:top-24 left-12 md:left-1/3'
                    animate={{ 
                        y: [0, 10, 0],
                        rotate: 45
                    }}
                    transition= {{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                >
                    <Image 
                        height={90}
                        width={90}
                        alt='edible 1'
                        src='/images/edible-3.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute top-4 right-1/3'
                    animate={{ 
                        y: [0, 10, 0],
                        rotate: 45
                    }}
                    transition= {{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                >
                    <Image 
                        height={70}
                        width={70}
                        alt='edible 1'
                        src='/images/edible-3.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute top-1/2 left-1/2 rotate-45'
                    animate={{ 
                        y: [0, 20, 0],
                        rotate: 180
                    }}
                    transition= {{
                        duration: 9,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                >
                    <Image 
                        height={60}
                        width={60}
                        alt='edible 1'
                        src='/images/edible-2.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute bottom-4 left-1/4'
                    animate={{ 
                        y: [12,0,12],
                        rotate: 90
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: 'reverse' }}
                >
                    <Image 
                        height={80}
                        width={80}
                        alt='edible 1'
                        src='/images/edible-4.png'
                    />
                </motion.div>

                <motion.div
                    className='hidden md:inline-block absolute bottom-36 left-24 blur-[1px]'
                    animate={{ 
                        y: [12,0,12],
                        rotate: 90
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: 'reverse' }}
                >
                    <Image 
                        height={40}
                        width={40}
                        alt='edible 1'
                        src='/images/edible-4.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute bottom-8 right-24'
                    animate={{ 
                        y: [12,0,12],
                        rotate: 90
                    }}
                    transition={{ 
                        duration: 11, 
                        repeat: Infinity,
                        repeatType: 'reverse' }}
                >
                    <Image 
                        height={100}
                        width={100}
                        alt='edible 1'
                        src='/images/edible-1.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute top-24 right-1/4 blur-[1px]'
                    animate={{ 
                        y: [0, 10, 0],
                        rotate: 45
                    }}
                    transition= {{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                >
                    <Image 
                        height={50}
                        width={50}
                        alt='edible 1'
                        src='/images/edible-4.png'
                    />
                </motion.div>
    </div>
  )
}

export default Hero
