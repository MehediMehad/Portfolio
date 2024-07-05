"use client"
import myPic from '../../public/assets/myPic.jpg'

import Image from "next/image";

const About = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto my-36 glass p-5' id="about">
            <h3 className="text-4xl font-semibold text-center text-[#d1d5db]">About <span>Me</span></h3>
                <div className="grid grid-cols-2 ">
                    {/* study */}
                    <div className="col-span-2 md:col-span-1 w-full pb-5">
                        <div className="p-5 text-[#d1d5db]">
                            <p className='mt-4 active-project inline-block px-6 text-center mx-auto'>Educational</p>
                            <p className='mt-5'>I am a dedicated and enthusiastic web developer studying Computer Science and Technology at GraphicArts Institute. </p>
                        </div>
                        <div className="p-5 text-[#d1d5db]">
                            <p className='mt-4 active-project inline-block px-6 text-center mx-auto'>Educational</p>
                            <p className='mt-5'>I am committed to continuous learning and improvement, constantly exploring new technologies and methodologies to enhance my skills. I am eager to pursue a job or internship to drive my web development career toward success. My goal is to contribute to innovative projects and deliver outstanding results. </p>
                        </div>
                    </div>
                    {/* gol */}
                    <div className="hidden md:block col-span-1 p-5 w-full bg-gray-700">
                    <Image placeholder="blur" className="rounded-xl ml-28" src={myPic} alt='My Photo' height={490} />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default About;