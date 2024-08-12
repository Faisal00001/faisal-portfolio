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
        <motion.section>
            contact page
        </motion.section>
    );
};

export default Contact;