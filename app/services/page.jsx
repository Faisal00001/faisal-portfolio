"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: "With expertise in React.js, Next.js, Node.js, Express.js, MongoDB, Django, and SQLite, I craft dynamic and responsive web applications. My approach ensures every project is aesthetically pleasing, robust, and scalable, delivering high-quality, professional results. Let's work together to bring your vision to life.",
        href: 'mailto:faisalosman798@gmail.com'
    },
    {
        num: '02',
        title: 'Machine Learning',
        description: "Leveraging machine learning, I design models that turn data into actionable insights. With expertise in algorithms, data preprocessing, model training, and evaluation, I create high-quality, scalable solutions that optimize performance, automate processes, and drive innovation.",
        href: 'mailto:faisalosman798@gmail.com'
    },
    {
        num: '03',
        title: 'Logo Design',
        description: "With a keen eye for aesthetics and a passion for creativity, I design unique and memorable logos that capture the essence of your brand. My approach ensures each logo is visually striking, versatile, and aligns perfectly with your brand identity, helping you stand out in a competitive market.",
        href: 'mailto:faisalosman798@gmail.com'
    }
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {
                        services.map((service, index) => {
                            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <a href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"></BsArrowDownRight>
                                    </a>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description} </p>
                                <div className="border-b border-white/20 w-full">

                                </div>
                            </div>
                        })
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default Services;