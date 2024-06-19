"use client"
import React from "react";
import myPic from '../../public/assets/myPic.jpg'
import fb from '../../public/assets/facebook.png'
import linkedin from '../../public/assets/linkedin.png'
import instagram from '../../public/assets/instagram.png'
import github from '../../public/assets/github.png'
import twitter from '../../public/assets/twitter.png'
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="max-w-[1200px] mx-auto gap-6 p-10 md:p-0 md:pt-36" id="home">
            <div className=" md:flex justify-around glass p-8 bg-green-400 ">
                <div className="my-auto ml-8  flex-col">
                    <p className="text-2xl md:text-4xl font-bold text-gray-200 md:mb-2">Hi! I am Mehedi </p>
                    <div className="text-2xl md:text-4xl font-bold text-gray-200">
                        <TypeAnimation className=""
                            sequence={[
                                "Frontend Developer",
                                1000,
                                "React Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-xl md:text-3xl font-bold text-gray-500 md:mt-4">
                        with a one years plus experience
                    </p>
                    <div className="">

                        <div className="flex flex-col my-3 mb-8">
                            <div className="text-7xl flex justify-start gap-3 max-h-8 ">
                                <a className="max-w-8" href="https://www.linkedin.com/in/mehedimehad" target="_blank"> <Image className="rounded-xl" src={linkedin} alt='linkedin logo' /></a>
                                <a className="max-w-8" href="https://www.instagram.com/mehedimehad" target="_blank"> <Image className="rounded-xl" src={instagram} alt='instagram logo' /></a>
                                <a className="max-w-8" href="https://github.com/MehediMehad" target="_blank"> <Image className="rounded-xl" src={github} alt='github logo' /></a>
                                <a className="max-w-8" href="https://www.twitter.com/MehediMehad" target="_blank"> <Image className="rounded-xl" src={twitter} alt='twitter logo' /></a>
                                <a className="max-w-8" href="https://www.facebook.com/mohammadmehedihasanmehad" target="_blank"> <Image className="rounded-xl" src={fb} alt='fb logo' /></a>
                            </div>

                        </div>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1phackZ_ZQls0ORn1JMxVtw1U6aXrJG8P/view"
                        target="_blank"
                        title="See My Resume"
                        class="mt-4 px-4 py-2 text-lg font-bold text-white  bg-primary-color rounded-xl">
                        My Resume
                    </a>
                </div>
                <div className="flex mt-10 md:mt-0 items-center content-center">
                    <Image placeholder="blur" className="rounded-xl" src={myPic} alt='My Photo' height={490} />
                </div>
            </div>
        </div>
    );
};

export default Hero;