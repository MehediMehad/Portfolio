import React from 'react';
import './SkillsInfoCard.css';
import Image from 'next/image';

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <>
            <div className="grid grid-cols-3 justify-center text-center  items-center h-60">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="col-span-1 mx-auto p-5 ">
                            <Image className= 'text-white text-center items-center shadow-md' src={item.img} alt={item.skill} width={60} height={60} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            </>
    );
};

export default SkillsInfoCard;