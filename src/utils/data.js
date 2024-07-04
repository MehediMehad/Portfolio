import tools from "../../public/assets/settings.png"
import frontend from "../../public/assets/backend (1).png"
import man from "../../public/assets/soft-skills.png"
import backend from "../../public/assets/frontend.png"
import react from "../../public/assets/file-type-reactjs.1024x910.png"
import css from "../../public/assets/file-type-css.902x1024.png"
import tailwind from "../../public/assets/tailwind-css.1024x615.png"
import js from "../../public/assets/file-type-js-official.1024x1024.png"
import html from "../../public/assets/file-type-html.902x1024.png"
import node from "../../public/assets/nodejs-original.907x1024.png"
import db from "../../public/assets/mongodb.1024x1024.png"
import ex from "../../public/assets/express-original.1024x594.png"
import vsCode from "../../public/assets/file-type-vscode.1024x1018.png"
import npm from "../../public/assets/npm.1024x1024.png"
import gitHub from "../../public/assets/github-desktop.1024x1024.png"


export const  SKILLS = [
    {
        title:"Frontend",
        icon: frontend,
        mySkills: [
            {skill: "HTML", percentage: "80%", img: react },
            {skill: "HTML", percentage: "80%", img: js },
            {skill: "HTML", percentage: "80%", img:  tailwind},
            {skill: "HTML", percentage: "80%", img: css },
            {skill: "HTML", percentage: "80%", img: html },
        ]
    },
    {
        title:"Backend",
        icon: backend,
        mySkills: [
            {skill: "HTML", percentage: "80%", img: db },
            {skill: "HTML", percentage: "80%", img: node },
            {skill: "HTML", percentage: "80%", img: js },
            {skill: "HTML", percentage: "80%", img: ex },

        ]
    },
    {
        title:"Tools",
        icon: tools,
        mySkills: [
            {skill: "HTML", percentage: "80%", img: vsCode },
            {skill: "HTML", percentage: "80%", img: gitHub },
            {skill: "HTML", percentage: "80%", img: npm },
        ]
    },
    // {
    //     title:"Soft Skills",
    //     icon: man,
    //     mySkills: [
    //         {skill: "Soft", percentage: "80%"},
    //         {skill: "HTML", percentage: "80%"},
    //         {skill: "HTML", percentage: "80%"},
    //         {skill: "HTML", percentage: "80%"},
    //     ]
    // },
]