import {
    SiJavascript,
    SiCss3,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiReact,
    SiGit,
    SiGithub,
    SiLinux,
    SiNetlify,
    SiUbuntu,
    SiVercel,
    SiCplusplus,
    SiCanva,
    SiMysql,
    SiSolidity,
    SiExpress,
    SiPython,
    SiPostman,
    SiThreedotjs,
    SiNodemon,
    SiBootstrap,
    SiJquery,
    SiNpm,
    SiDart,
    SiAdobepremierepro,
    // SiMaterialui
} from "react-icons/si";

import {
    FaNodeJs,    
} from "react-icons/fa"

const data = [{
        name: 'JavaScript',
        icon: SiJavascript,
        options: {
            color: 'yellow',
            size: 32
        },
        iconstyles:{
            width: '1.7rem'
        }
    },
    {
        name: 'CSS3',
        icon: SiCss3,
        options: {
            color: '#1572B6',
            size: 32
        }
    },

    {
        name: 'HTML5',
        icon: SiHtml5,
        options: {
            color: '#E34F26',
            size: 32
        }
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        options: {
            color: '#47A248',
            size: 32
        }
    },
    {
        name: 'NodeJS',
        icon: FaNodeJs,
        options: {
            color: '#339933',
            size: 32
        }
    },
    {
        name: 'Python',
        icon: SiPython,
        options: {
            color: '#3776AB',
            size: 32
        }
    },
    {
        name: 'React',
        icon: SiReact,
        options: {
            color: '#61DAFB',
            size: 32
        }
    },
    {
        name: 'Git',
        icon: SiGit,
        options: {
            color: '#F05032',
            size: 32
        }
    },
    {
        name: 'GitHub',
        icon: SiGithub,
        options: {
            color: 'white',
            size: 32
        }
    },
    
    // {
    //     name: 'Material-Ui',
    //     icon: SiMaterialui,
    //     options: {
    //         color: 'blue'
    //     }
    // },
   
    {
        name: 'MySQL',
        icon: SiMysql,
        options: {
            color: '#4479A1',
            size: 32
        }
    },

    {
        name: 'Express',
        icon: SiExpress,
        options: {
            color: 'white',
            size: 32
        }
    },
    {
        name: 'Postman',
        icon: SiPostman,
        options: {
            color: '#FF6C37',
            size: 32
        }
    },
   
    {
        name: 'Nodemon',
        icon: SiNodemon,
        options: {
            color: "green",
            size: 32
        }
    },
    {
        name: 'Bootstrap',
        icon: SiBootstrap,
        options: {
            color: "purple",
            size: 32
        }
    },
    
    {
        name: 'Npm',
        icon: SiNpm,
        options: {
            color: "red",
            size: 32
        }
    },
    

]

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));