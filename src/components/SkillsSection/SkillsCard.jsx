"use client"
import React from 'react';
import './SkillsCard.css'
import Image from 'next/image';
const SkillsCard = ({title, iconUrl, isActive, onClick}) => {
    return (
        // <div className={`skills-card ${isActive ? "active" : ""}`}
        // onClick={() => onClick()}
        // >
        //     <div className="">
        //         <Image className= 'skill-icon text-white text-center items-center' src={iconUrl} alt={title} width={60} height={60} />
        //         <div className='skills-Span inline'>{title}</div>
        //     </div>
            
        // </div>
        <div className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
        >
            <div className="col-span-1 ">
                <Image className= 'skill-icon text-white text-center items-center' src={iconUrl} alt={title} width={60} height={60} />
                <div className='skills-Span inline'>{title}</div>
            </div>
            
        </div>
    );
};

export default SkillsCard;