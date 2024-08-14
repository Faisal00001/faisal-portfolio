"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/src/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/src/components/WorkSliderBtns";

// import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
    {
        num: '01',
        category: 'Full Stack',
        title: 'Adventure Atlas',
        description:
            "This tour guide app enables easy booking, booking tracking, and story sharing on Facebook. Users can review guides, view travel history, and earn discounts after three bookings, enhancing the overall travel experience.",
        stack: [
            {
                name: 'Html 5'
            },
            {
                name: 'Css 3'
            },
            {
                name: 'Tailwind.css'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'Firebase'
            },
            {
                name: 'React.js'
            },
            {
                name: 'Node.js'
            },
            {
                name: 'Express.js'
            },
            {
                name: 'Mongodb'
            }

        ],
        image: '/assets/work/adventureAtlas.jpg',
        live: 'https://adventureatlas-aa476.web.app/',
        github: '',
    },
    {
        num: '02',
        category: 'Full Stack',
        title: 'Learn Ora',
        description:
            "LearnOra revolutionizes E-Learning with advanced digital tools, ensuring secure, organized, and accessible knowledge storage. It enhances efficiency, meets evolving user needs, and provides a streamlined, enduring learning experience with information always available.",
        stack: [
            {
                name: 'html 5'
            },
            {
                name: 'Css 3'
            },

            {
                name: 'Javascript'
            },

            {
                name: 'Django'
            },
            {
                name: 'SQL Lite'
            },
        ],
        image: '/assets/work/LearnOra.jpg',
        live: '',
        github: 'https://github.com/Faisal00001/LearnOra',
    },
    {
        num: '03',
        category: 'Full Stack',
        title: 'AUB Tech',
        description: "AUB Tech's website, built with React, Node.js, Express.js, and MongoDB, offers a seamless, user-friendly experience. It ensures efficient data management and smooth delivery of services, enhancing visitor engagement.",
        stack: [
            {
                name: 'html 5'
            },
            {
                name: 'Css 3'
            },
            {
                name: 'tailwind.css'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'React.js'
            },
            {
                name: 'Node.js'
            },
            {
                name: 'Express.js'
            },
            {
                name: 'Mongodb'
            }
        ],
        image: '/assets/work/aubTech.jpg',
        live: 'https://theaubtech.com/',
        github: 'https://github.com/Faisal00001/AUB_TECH',
    },
    {
        num: '04',
        category: 'Full Stack',
        title: 'RCN Ecommerce',
        description: "This e-commerce platform, built with Django and React, offers dedicated panels for users, sellers, and admins, enabling seamless product purchases, sales management, and activity oversight, ensuring a comprehensive, user-friendly marketplace experience.",
        stack: [
            {
                name: 'html 5'
            },
            {
                name: 'Css 3'
            },
            {
                name: 'tailwind.css'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'React.js'
            },
            {
                name: 'Django'
            },
            {
                name: 'SQL Lite'
            }
        ],
        image: '/assets/work/RCN.jpg',
        live: 'https://668fa112fb9af700a1c7d7bf--shimmering-boba-6d92e2.netlify.app/',
        github: 'https://github.com/Faisal00001/kopotakkho-electronics',
    },
    {
        num: '05',
        category: 'AI',
        title: 'Maize Tassel',
        description: "Deep learning with YOLOv5 improves tassel detection in maize via UAV imagery, enabling precise, large-scale monitoring. This enhances crop management decisions, boosting agricultural productivity and resource efficiency over traditional methods.",
        stack: [
            {
                name: 'Detectorn2'
            },
            {
                name: 'Yolo-V5'
            },
            {
                name: 'Yolo-V7'
            },
            {
                name: 'Pytorch'
            },
            {
                name: 'Python'
            },
            {
                name: 'Roboflow'
            },
        ],
        image: '/assets/work/maizeTassel.jpeg',
        live: '',
        github: 'https://github.com/Faisal00001/Deep-Learning-with-Unmanned-Aerial-Vehicle-Imagery-in-the-Detection-of-Tassels-in-Maize',
    },
    {
        num: '06',
        category: 'AI',
        title: 'Tooth Decay',
        description: "This computer vision technique uses smartphone microphotography to detect tooth tissue destruction. It transforms smartphones into diagnostic tools, enabling real-time dental monitoring, enhancing preventive care, and improving overall oral health outcomes.",
        stack: [
            {
                name: 'Detectorn2'
            },
            {
                name: 'Yolo-V5'
            },
            {
                name: 'Yolo-V7'
            },
            {
                name: 'Faster-RCNN'
            },
            {
                name: 'Pytorch'
            },
            {
                name: 'Python'
            },
            {
                name: 'Roboflow'
            },
        ],
        image: '/assets/work/toothDecay.jpg',
        live: '',
        github: 'https://github.com/Faisal00001/Detection-of-Tooth-Tissue-Destruction-using-Deep-Learning-Techniques',
    }

]
const Work = () => {
    const [project, setProject] = useState(projects[0])
    const handleSlideChange = (swiper) => {
        // get the current index
        const currentIndex = swiper.activeIndex
        console.log(currentIndex)
        // update the project state based on current slide index
        setProject(projects[currentIndex])
    }
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 mb-24">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex flex-wrap gap-4">
                                {
                                    project.stack.map((item, index) => {
                                        return <li key={index}>{item.name}

                                            {/* remove the last comma */}

                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="border border-white/20">

                            </div>
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:[520px] mb-12" onSlideChange={handleSlideChange}>
                            {
                                projects.map((projects, index) => {
                                    return <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                                        </div>
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                        </div>
                                        <div className="w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt="" />
                                        </div>
                                    </SwiperSlide>
                                })
                            }
                            {/* Slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute xl:gap-24 xl:mt-3 xl:mx-auto xl:relative right-0 bottom-[calc(50%_-22px)] z-20 w-full justify-between xl:w-max " btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"></WorkSliderBtns>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;