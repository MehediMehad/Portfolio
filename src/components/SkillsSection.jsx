"use client"
// import { SKILLS } from '@/utils/data';
import React, { useState } from 'react';
import SkillsCard from './SkillsSection/SkillsCard';
import { RiUser5Fill } from 'react-icons/ri';
import { SKILLS } from '@/utils/data';
import './SkillsSection.css'
import SkillsInfoCard from './SkillsSection/SkillsInfoCard';

const SkillsSection = () => {
    const [selectedSkill, setSelectedSkill] = useState((SKILLS[0]))
    console.log(selectedSkill);

    const handleSelectedSkill = (data) =>{
    setSelectedSkill(data)
    }


    return (
        // <div className="max-w-[1200px] mx-auto ">
        // <section className='skills-container glass p-20'>
        //     <h5>Technical Proficiency</h5>
        //     <div className="skills-content">
        //         <div className="skills ">
        //             {SKILLS.map((item) =>(
        //                 <SkillsCard 
        //                 key={item.title}
        //                 iconUrl={item.icon}
        //                 title={item.title}
        //                 isActive={selectedSkill.title === item.title}
                        
        //                 onClick={() => {
        //                     handleSelectedSkill(item)
        //                 }}
        //                 />
        //             ))}
        //         </div>
        //         {/* skills-info */}
        //         <div className=" w-full">
        //             <SkillsInfoCard
        //             heading={selectedSkill.title}
        //             skills={selectedSkill.mySkills}
        //             />
        //         </div>
        //     </div>

        // </section>
        // </div>
        <div className="max-w-[1200px] mx-auto my-36 glass ">
            <h2 className='text-center mt-5 -m6 font-bold text-white primary-color'>Technical Proficiency</h2>
        <section className='p-20 md:flex space-x-16 '>
            {/* <h5>Technical Proficiency</h5> */}
            <div className="md:w-5/12">
                <div className="grid grid-cols-2 gap-10">
                    {SKILLS.map((item) =>(
                        <SkillsCard 
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        
                        onClick={() => {
                            handleSelectedSkill(item)
                        }}
                        />
                    ))}
                </div>
                {/* skills-info */}
            </div>
            <div className="flex-1 w-full shadow-2xl bg-[#16141c] border-2 rounded-2xl border-indigo-800 p-5">
            <div className=" bg-[#1f192f] rounded-2xl">
                    <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.mySkills}
                    />
                </div>
                </div>

        </section>
        </div>
    );
};

export default SkillsSection;