"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
const info = [
    {
        icon: <FaPhoneAlt></FaPhoneAlt>,
        title: 'Phone',
        description: '(+880) 1790 203 616'
    },
    {
        icon: <FaEnvelope></FaEnvelope>,
        title: 'Email',
        description: 'faisalosman798@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt></FaMapMarkedAlt>,
        title: 'Address',
        description: 'Merul Badda, Dhaka, Bangladesh'
    }
]

const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }} className="py-6 mb-24">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* forms */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
                            <p className="text-white/60">
                                As a web development graduate with machine learning expertise, I’m eager to create innovative, visually captivating websites. Let’s collaborate to push boundaries and develop exceptional, user-focused web applications together!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeHolder="Firstname"
                                />
                                <Input type="lastname" placeHolder="Lastname"
                                />
                                <Input type="email" placeHolder="Email address"
                                />
                                <Input type="phone" placeHolder="Phone number"
                                />
                            </div>
                            {/* Select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeHolder="Select a service"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select a service
                                        </SelectLabel>
                                        <SelectItem value="est">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="cst">
                                            Machine Learning
                                        </SelectItem>
                                        <SelectItem value="mst">
                                            Logo Design
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </form>
                    </div>
                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        info
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Contact;