"use client"

// import { Button } from "../components/ui/button";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
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
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [loading, setLoading] = useState(false); // Loading state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSelectChange = (value) => {
        setFormData({
            ...formData,
            service: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const toastId = toast.loading('Sending your message...');
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!', { id: toastId }); // Show success toast
                setFormData({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
            } else {
                toast.error('Failed to send the message. Please try again.', { id: toastId }); // Show error toast
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.', { id: toastId }); // Show error toast
        } finally {
            setLoading(false);
        }

    };


    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }} className="py-6 mb-24">
            <div className="container mx-auto">

                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* forms */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
                            <p className="text-white/60">
                                As a web development graduate with machine learning expertise, I’m eager to create innovative, visually captivating websites. Let’s collaborate to push boundaries and develop exceptional, user-focused web applications together!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required
                                />
                                <Input type="lastname" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required
                                />
                                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required
                                />
                                <Input type="phone" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required
                                />
                            </div>
                            {/* Select */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select a service
                                        </SelectLabel>
                                        <SelectItem value="Web Development">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="Machine Learning">
                                            Machine Learning
                                        </SelectItem>
                                        <SelectItem value="Logo Design">
                                            Logo Design
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* Text area */}
                            <Textarea className="h-[200px]" placeholder="Type your message here." name="message" onChange={handleChange} value={formData.message} required />
                            {/* button */}
                            <Button size="md" className="max-w-40" type="submit">Send message</Button>
                        </form>
                    </div>
                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {
                                info.map((item, index) => {
                                    return <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl flex">{item.description}</h3>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Contact;