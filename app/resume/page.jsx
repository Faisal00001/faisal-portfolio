"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiDjango, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

import { BsFiletypeSql } from "react-icons/bs";

import { GiArtificialIntelligence } from "react-icons/gi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about =
{
    title: 'About me',
    description: "I am driven by my love for creating visually stunning websites and my expertise in machine learning and computer vision. I am dedicated to advancing in web development, collaborating with dynamic teams to create innovative web applications. My goal is to deliver exceptional user experiences and push the boundaries of web technology.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Faisal Osman"
        },
        {
            fieldName: 'Phone',
            fieldValue: "(+880) 1790 203 616"
        },
        {
            fieldName: 'Skype',
            fieldValue: "live:faisalosman798"
        },
        {
            fieldName: 'Nationality',
            fieldValue: "Bangladeshi"
        },
        {
            fieldName: 'Email',
            fieldValue: "faisalosman798@gmail.com"
        },
        {
            fieldName: 'Freelance',
            fieldValue: "Available"
        },
        {
            fieldName: 'Languages',
            fieldValue: "English, Bangla"
        },
    ]
}

// Experience data
const experience =
{
    icon: "/assets/resume/badge.svg",
    title: 'My Experience',
    description: "Having contributed as a frontend engineer at AUB Tech and currently at RCN, I bring hands-on experience in developing engaging web applications. I specialize in creating responsive user interfaces and optimizing user experiences using modern frontend technologies.",
    items: [
        {
            company: "RCN",
            postion: "Junior Full Stack Developer",
            duration: "2024 - Present"
        },
        {
            company: "AUB Tech",
            postion: "Frontend Developer",
            duration: "2023 - 2024"
        },
        {
            company: "BJET",
            postion: "Engineering Trainee",
            duration: "Summer 2023"
        },
    ]
}


// education data
const education =
{
    icon: "/assets/resume/cap.svg",
    title: 'My Education',
    description: "I completed my BSc in Computer Science and Engineering with a CGPA of 3.48 from North South University. My education has equipped me with a strong foundation in computer science principles, preparing me to excel in roles that require technical expertise and innovation.",
    items: [
        {
            institution: "Online Course Platform",
            postion: "Full Stack Web Development",
            duration: "2023"
        },
        {
            institution: "North South University",
            postion: "BSC in Computer Science and Engineering",
            duration: "2017 - 2022"
        },
        {
            institution: "Shaheed Moshiur Rahman Degree College",
            postion: "HSC",
            duration: "2014 - 2016"
        },
    ]
}


// skills data
const skills =
{
    title: "My Skills",
    description: "I specialize in a wide range of technologies including React.js, Next.js, Node.js, Express.js, MongoDB, Django, SQLite, and machine learning. With proficiency in frontend and backend development, I create dynamic web applications and implement robust solutions. My skills include building responsive user interfaces, designing efficient server-side architectures, and leveraging data-driven insights for machine learning applications.",
    skillList: [
        {
            icon: <FaHtml5></FaHtml5>,
            name: "html 5"
        },
        {
            icon: <FaCss3></FaCss3>,
            name: "css 3"
        },
        {
            icon: <SiTailwindcss></SiTailwindcss>,
            name: "tailwind css"
        },
        {
            icon: <FaJs></FaJs>,
            name: "javascript"
        },
        {
            icon: <FaReact></FaReact>,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs></SiNextdotjs>,
            name: "next.js"
        },
        {
            icon: <FaFigma></FaFigma>,
            name: "figma"
        },
        {
            icon: <FaNodeJs></FaNodeJs>,
            name: "node.js"
        },
        {
            icon: <SiDjango></SiDjango>,
            name: "django"
        },
        {
            icon: <GiArtificialIntelligence></GiArtificialIntelligence>,
            name: "artificial intelligence"
        },
        {
            icon: <SiMongodb></SiMongodb>,
            name: "mongodb"
        },
        {
            icon: <BsFiletypeSql></BsFiletypeSql>,
            name: "sql"
        },
    ]
}



const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            experience.items.map((item, index) => {
                                                return <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start" key={index}>
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">{item.postion}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            education
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;