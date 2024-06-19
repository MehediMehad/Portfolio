"use client"
import React from "react";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiMongodb
} from 'react-icons/di'
import { TypeAnimation } from "react-type-animation";
const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-36 p-10 md:p-0 ">
      <div className="">

        
        <div className="text-3xl p-12 font-bold text-center glass pt-5">
        <TypeAnimation className="mb-5"
                            sequence={[
                                "My Skills",
                                1000,
                                "My Skills",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
          <div className="flex justify-around gap-4 mt-5">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <SiTailwindcss className="text-[#38bdf8]" /> 
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <RiNextjsFill className="text-black md:bg-white rounded-full border-0" />
            <DiNodejsSmall className="text-green-500" />
            <SiExpress className="text-white" />
            <DiMongodb className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;