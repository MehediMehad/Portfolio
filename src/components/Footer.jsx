"use client"

import Image from 'next/image'
import fb from '../../public/assets/facebook.png'
import linkedin from '../../public/assets/linkedin.png'
import instagram from '../../public/assets/instagram.png'
import github from '../../public/assets/github.png'
import twitter from '../../public/assets/twitter.png'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Mehedi</h3>
            <div className="flex flex-col my-3">
                            <div className="text-7xl flex justify-start gap-3 max-h-8 ">
                                <a className="max-w-8" href="https://www.linkedin.com/in/mehedimehad" target="_blank"> <Image className="rounded-xl" src={linkedin} alt='linkedin logo' /></a>
                                <a className="max-w-8" href="https://www.instagram.com/mehedimehad" target="_blank"> <Image className="rounded-xl" src={instagram} alt='instagram logo' /></a>
                                <a className="max-w-8" href="https://github.com/MehediMehad" target="_blank"> <Image className="rounded-xl" src={github} alt='github logo' /></a>
                                <a className="max-w-8" href="https://www.twitter.com/MehediMehad" target="_blank"> <Image className="rounded-xl" src={twitter} alt='twitter logo' /></a>
                                <a className="max-w-8" href="https://www.facebook.com/mohammadmehedihasanmehad" target="_blank"> <Image className="rounded-xl" src={fb} alt='fb logo' /></a>
                            </div>

                        </div>
        </div>

        <p className='text-gray-400'>© 2024 Mehedi</p>

    </div>
  )
}

export default Footer