import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/Faisal00001'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/faisal-osman-41b203182/'
    },
    {
        icon: <FaYoutube />,
        path: 'https://www.youtube.com/channel/UCi97S_psAJSmvKeluQdrvcQ'
    },
    {
        icon: <FaTwitter />,
        path: 'https://x.com/FaisalO84787'
    }
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((social, index) => {
                    return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
                })
            }
        </div>
    );
};

export default Socials;