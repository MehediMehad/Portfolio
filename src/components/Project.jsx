"use client"
import React, { useState } from 'react'
import project1 from "../../public/assets/food.png";
import school from "../../public/assets/school.png";
import hotel from "../../public/assets/hotel.png";
import arrow from "../../public/assets/arrow.png";
import book from "../../public/assets/book.png";
import art from "../../public/assets/arrt.png";
// import arrow from "../../public/assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai'
import Image from 'next/image';
const projects = [
    {
        img: school,
        title: "Project #1",
        description:
            "Employee Management.",
        links: {
            site: "https://awei-b5fd9.firebaseapp.com",
            github: "https://github.com/programming-hero-web-course1/b9a12-client-side-MehediMehad.git",
        },
    },
    {
        img: project1,
        title: "Project #2",
        description: "Alternative Product Information System.",
        links: {
            site: "https://assignment-eleven-96112.web.app",
            github: "https://github.com/Porgramming-Hero-web-course/b9a11-client-side-MehediMehad.git",
        },
    },
    {
        img: art,
        title: "Project #3",
        description: "Art & Craft",
        links: {
            site: "https://assignment-ten-3e753.web.app",
            github: "https://github.com/programming-hero-web-course-4/B9A10-client-side-MehediMehad.git",
        },
    },
    {
        img: hotel,
        title: "Project #4",
        description:
            "Real Estate Websites",
        links: {
            site: "https://luxury-home-bec8d.web.app",
            github: "https://github.com/programming-hero-web-course-4/b9a9-real-estate-MehediMehad.git",
        },
    },
    {
        img: book,
        title: "Project #5",
        description: "Book-Review Websites ",
        links: {
            site: "https://glistening-lily-d0242e.netlify.app",
            github: "https://github.com/programming-hero-web-course-4/b9a8-book-vibe-MehediMehad.git",
        },
    },
    {
        img: project1,
        title: "Project #6",
        description:
            "Restaurant Website",
        links: {
            site: "https://dainty-swan-46e3b4.netlify.app",
            github: "https://github.com/programming-hero-web-course1/b9a7-chefs-table-MehediMehad.git",
        },
    }
]

const Project = () => {
    const [currentProject, setCurrentProject] = useState(0)

    return (
        <div className='my-6 max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 md:mt-36 py-20 glass md:pr-5' id="portfolio">


            <div className='z-10 col-span-3 grid place-items-center grid-cols-1 relative '>
                <p className='text-gray-200 font-bold text-4xl -skew-y-6 hidden md:block'>Select Project</p>
                <Image placeholder="blur" className="absolute w-[50px] top-10 right-12 hidden md:block" src={arrow} alt='My Photo' />
                <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
   space-y-2 md:space-y-4 text-2xl'>
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600
         transition duration-300 ${currentProject === index ? 'active-project' : ''
                                }`}
                        >
                            {project.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='z-10 md:mr-5 w-full border-2 col-span-5'>
                <div className='w-full h-80'>
                    <Image className='w-full h-full object-cover  mb-4' src={projects[currentProject].img} alt={projects[currentProject].title} />
                </div>
                <div className='p-6'>
                    <p className='text-gray-200 my-4'>
                        {projects[currentProject].description}
                    </p>
                    <div className='flex space-x-4'>
                        <a href={projects[currentProject].links.site} target='_blank' className='px-4 py-2 bg-slate-600
                   text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                        <a href={projects[currentProject].links.github} target='_blank' className='px-4 py-2 bg-gray-800
                   text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'>
                            <AiFillGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project