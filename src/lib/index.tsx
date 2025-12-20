import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaGithub, FaMobileAlt, FaSass, FaNpm } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiMui, SiRedux, SiPostman, SiReactrouter, SiShadcnui, SiReacthookform, SiAppwrite, SiZod, SiAxios, SiChartdotjs, SiNetlify, SiVite, SiLucide, SiReactquery, SiI18Next } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { LuChartSpline } from "react-icons/lu";
import { GrToast } from "react-icons/gr";
import { MdEmail } from "react-icons/md";




export const navLinks = [
    {
        section: "hero",
        title: "Home"
    },
    {
        section: "projects",
        title: "Projects"
    },
    {
        section: "services",
        title: "Services"
    },
    {
        section: "skills",
        title: "Skills"
    },
    {
        section: "footer",
        title: "Contact Me"
    }
];


export const techLinks = [
    {
        icon: <FaHtml5 size={100} />,
        title: "HTML"
    },
    {
        icon: <FaCss3Alt size={100} />,
        title: "CSS"
    },
    {
        icon: <IoLogoJavascript size={100} />,
        title: "Javascript"
    },
    {
        icon: <SiTypescript size={100} />,
        title: "Typescript"
    },
    {
        icon: <FaReact size={100} />,
        title: "React JS"
    },
    {
        icon: <RiNextjsFill size={100} />,
        title: "Next JS"
    },
    {
        icon: <RiTailwindCssFill size={100} />,
        title: "Tailwind CSS"
    },
    {
        icon: <BsBootstrapFill size={100} />,
        title: "Bootstrap"
    },
    {
        icon: <FaSass size={100} />,
        title: "Sass"
    },
    {
        icon: <SiMui size={100} />,
        title: "MUI"
    },
    {
        icon: <SiShadcnui size={100} />,
        title: "Shadcn"
    },
    {
        icon: <SiReactquery size={100} />,
        title: "React Query"
    },
    {
        icon: <SiReactrouter size={100} />,
        title: "React Router Dom"
    },
    {
        icon: <SiReacthookform size={100} />,
        title: "React Hook Form"
    },
    {
        icon: <SiZod size={100} />,
        title: "Zod"
    },
    {
        icon: <SiI18Next size={100} />,
        title: "React i18n"
    },
    {
        icon: <GrToast size={100} />,
        title: "React-Toastify"
    },
    {
        icon: <SiRedux size={100} />,
        title: "Redux & Redux toolkit"
    },
    {
        icon: <FaGithub size={100} />,
        title: "Github"
    },
    {
        icon: <IoLogoFirebase size={100} />,
        title: "Firebase"
    },
    {
        icon: <SiPostman size={100} />,
        title: "Postman"
    },
    {
        icon: <FaFigma size={100} />,
        title: "Figma"
    },
    {
        icon: <TbBrandFramerMotion size={100} />,
        title: "Framer Motion"
    },
    {
        icon: <FaNpm size={100} />,
        title: "Npm"
    },
    {
        icon: <SiVite size={100} />,
        title: "Vite"
    },
    {
        icon: <SiNetlify size={100} />,
        title: "Netlify"
    },
    {
        icon: <IoLogoVercel size={100} />,
        title: "Vercel"
    }
];



export const serviceLinks = [
    {
        lightImg: "/world-wide-web.png",
        darkImg: "/website.png",
        title: "Websites",
        desc: "Tailored web apps built with the latest technologies."
    },
    {
        lightImg: "/api-white.png",
        darkImg: "/api.png",
        title: "API Integration",
        desc: "Seamless integration for smooth data sharing and functionality."
    },
    {
        lightImg: "/responsive-design-white.png",
        darkImg: "/responsive-design.png",
        title: "Responsive design",
        desc: "Adaptive designs that fit all screens, ensuring great user experiences."
    },
    {
        lightImg: "/UI-white.png",
        darkImg: "/UI.png",
        title: "User interface",
        desc: "Engaging, responsive front-end designs enhancing user interactions."
    }
];



export const projectLinks = [
    {
        img: "/Femex.png",
        title: "Femex",
        desc: "A full website that shows the services of Femex with translation applied for two different languages and form that send emails to the company email using an API service email.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiReacthookform size={30} />,
                title: "React Hook Form"
            },
            {
                icon: <SiZod size={30} />,
                title: "Zod"
            },
            {
                icon: <MdEmail size={30} />,
                title: "EmailJS"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            },
            {
                icon: <SiI18Next size={30} />,
                title: "React i18n(Translation)"
            },
            {
                icon: <GrToast size={30} />,
                title: "React-Toastify"
            }
        ],
        live: "https://emex-bice.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/EMEX"
    },
    {
        img: "/Snapgram.png",
        title: "Snapgram",
        desc: "A full-stack social media application that enables users to create, edit, and delete posts, manage personal profiles, and connect with other users in a secure environment.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiShadcnui size={30} />,
                title: "Shadcn"
            },
            {
                icon: <SiReacthookform size={30} />,
                title: "React Hook Form"
            },
            {
                icon: <SiReactquery size={30} />,
                title: "React Query"
            },
            {
                icon: <SiAppwrite size={30} />,
                title: "AppWrite"
            },
            {
                icon: <SiZod size={30} />,
                title: "Zod"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            },
        ],
        live: "https://snapgraam-six.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/Snapgraam"
    },
    {
        img: "/storeFilteration.png",
        title: "Mini Store",
        desc: "A mockup E-commerce Store that gets it's data from an API with different filteration methods and a pagination to switch between pages.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiAxios size={30} />,
                title: "Axios"
            },
            {
                icon: <SiLucide size={30} />,
                title: "Lucide-React"
            },
        ],
        live: "https://ecommerce-filteration.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/EcommerceFilteration"
    },
    {
        img: "/dashboard.png",
        title: "Dashboard",
        desc: "A Responsive dashboard that displays different types of charts.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <LuChartSpline size={30} />,
                title: "Recharts"
            },
            {
                icon: <SiLucide size={30} />,
                title: "Lucide-React"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            },
        ],
        live: "https://dashboard-one-pied-50.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/Dashboard"
    },
    {
        img: "/Recipe-app.png",
        title: "Delicious",
        desc: "A Responsive Recipe application that displays the popular recipes in the home page, search functionality for recipes and let the user see ingredients of the recipe they choose.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiShadcnui size={30} />,
                title: "Shadcn"
            },
            {
                icon: <SiAxios size={30} />,
                title: "Axios"
            },
            {
                icon: <SiPostman size={30} />,
                title: "Postman"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            },
        ],
        live: "https://recipe-ii5ote7js-mahmoud-medhats-projects.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/Recipe-app"
    },
    {
        img: "/Cryptosite.png",
        title: "Crypto-place",
        desc: "A user-friendly platform built with React.js and styled with Tailwind CSS, offering real-time data on cryptocurrencies. It utilizes the CoinGecko API to display comprehensive details about various coins, including their current prices, market capitalization, trading volumes, price changes, and other key metrics. Users can easily search for specific coins, view their historical performance, and monitor market trends.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiChartdotjs size={30} />,
                title: "Chart JS"
            },
            {
                icon: <SiAxios size={30} />,
                title: "Axios"
            },
            {
                icon: <SiPostman size={30} />,
                title: "Postman"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            },
        ],
        live: "https://crypto-tracker-theta-hazel.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/Crypto-Tracker"
    },
    {
        img: "/AWA.png",
        title: "AWA",
        desc: "Responsive landing page for AWA, designed to showcase company offerings and enhance user experience.",
        techStack: [
            {
                icon: <RiNextjsFill size={30} />,
                title: "Next JS"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiShadcnui size={30} />,
                title: "Shadcn"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            }
        ],
        live: "https://www.awa-eg.com/",
        repo: "https://github.com/MahmoudMedhat17/AWA_NEXT"
    },
    {
        img: "/Arqaam.png",
        title: "Arqaam",
        desc: "A user-centered landing page for Arqaam IT Solutions, focusing on aseamless interface and engaging design to highlight company services and drive user engagement.",
        techStack: [
            {
                icon: <RiNextjsFill size={30} />,
                title: "Next JS"
            },
            {
                icon: <SiTypescript size={30} />,
                title: "TypeScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <SiShadcnui size={30} />,
                title: "Shadcn"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            }
        ],
        live: "https://arqaam-it.com/",
        repo: "https://github.com/MahmoudMedhat17/ARQAAM_NEXT"
    },
    {
        img: "/Burger-res.png",
        title: "Burger Restaurant",
        desc: "An engaging and dynamic website for a burger restaurant, featuring intuitive navigation and visually appealing elements that highlight the restaurant's menu and offerings.",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <SiReactrouter size={30} />,
                title: "React Router Dom"
            },
            {
                icon: <IoLogoJavascript size={30} />,
                title: "JavaScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            }
        ],
        live: "https://burger-restaurant-three.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/BurgerRestaurant"
    },
    {
        img: "/Zenith-space.png",
        title: "Zenith Space",
        desc: "A responsive modern landing page built with React JS, Tailwind CSS",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <IoLogoJavascript size={30} />,
                title: "JavaScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            }
        ],
        live: "https://zenith-space.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/Zenith-Space"
    },
    {
        img: "/ESHOP.png",
        title: "E S H O P",
        desc: "An e-commerece landing page that features a lot of products sold by ESHOP and built with React JS, React Router Dom, React Icons, React Slick Library and Tailwind CSS",
        techStack: [
            {
                icon: <FaReact size={30} />,
                title: "React JS"
            },
            {
                icon: <IoLogoJavascript size={30} />,
                title: "JavaScript"
            },
            {
                icon: <RiTailwindCssFill size={30} />,
                title: "Tailwind CSS"
            },
            {
                icon: <FaMobileAlt size={30} />,
                title: "Responsive"
            }
        ],
        live: "https://eshop-azure.vercel.app/",
        repo: "https://github.com/MahmoudMedhat17/Eshop"
    }
];