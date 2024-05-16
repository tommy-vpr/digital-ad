'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Content = () => {
  return (
    <div className='mx-auto max-w-[960px] flex flex-col items-center justify-center'>
      <h3 className='my-12 w-full text-4xl text-center font-lightest'>
        JUST GUMMIES
      </h3>
    
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <Image 
                src='/images/gummie4.jpg'
                height={600}
                width={300}
                alt='gummy 4'
                className='rounded-lg'
            />

            <Image 
                src='/images/gummie2.jpg'
                height={600}
                width={300}
                alt='gummy 1'
                className='rounded-lg'
            />

            <Image 
                src='/images/gummie3.jpg'
                height={600}
                width={300}
                alt='gummy 3'
                className='rounded-lg'
            />
        </div>

        <div className='flex flex-col md:flex-row gap-8 py-16 w-full'>
            <div className='p-4 md:p-0 w-full md:w-1/2 flex flex-col gap-4'>
                <h3 className='font-semibold text-3xl'>
                    ONE STOP SHOP
                </h3>
                <p>
                    Everything you need and more to experience bliss, one click away
                    We’re dedicated to providing top-shelf service, products and experiences.

                </p>

                <Link className='bg-purple-500 py-2 px-6 text-white 
                    rounded-lg w-fit transition duration-150 cursor-pointer 
                    hover:bg-purple-400'
                    href='https://burningdaily.com/'
                    >
                        Claim 20% off
                </Link>
                <p className='text-2xl'>
                    your first order now!
                </p>
            </div>
            <div className='w-full mt-24 md:mt-0 md:w-1/2 relative'>
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
                        height={50}
                        width={120}
                        alt='edible 1'
                        src='/images/pen.png'
                    />
                </motion.div>

                <motion.div
                    className='absolute top-16 left-1/3'
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
                    className='absolute bottom-0 left-1/4'
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
                    className='absolute bottom-2 right-8'
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
            </div>
        </div>
    </div>
  )
}

export default Content
