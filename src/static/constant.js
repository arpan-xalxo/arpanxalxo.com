
export const siteData = {
    name: 'Arpan Xalxo',
    email: 'xalxoarpan1@gmail.com',
    languages: [
        {
            technology: 'Javascript',
            icon: './images/icons/javascript.svg'
        },
        {
            technology: 'TypeScript',
            icon: './/images/icons/typescript.svg'
        },
        {
            technology: 'PHP',
            icon: './images/icons/php.svg'
        },
        {
            technology: 'MySql',
            icon: './images/icons/mysql.svg'
        },
        {
            technology: 'Java',
            icon: './images/icons/java.svg'
        },
        {
            technology: 'HTML',
            icon: './images/icons/html.svg'
        },
        {
            technology: 'CSS',
            icon: './images/icons/css.svg'
        },
    ],
    tools: [
        {
            technology: 'React',
            icon: './images/icons/react.svg'

        },
        {
            technology: 'Firebase',
            icon: "./images/icons/firebase.svg"
        },
        {
            technology: 'Laravel',
            icon: './images/icons/laravel.svg'
        },
        {
            technology: 'Flutter',
            icon: './images/icons/flutter.svg'
        },
        {
            technology: 'GIT',
            icon: './images/icons/git.svg'
        },
        {
            technology: 'Nextjs',
            icon: './images/icons/nextjs.svg'
        },
        {
            technology: 'Docker',
            icon: './images/icons/docker.svg'
        },
    ],

    experiences: [
        {
            desg: "College",
            logo: <img
                width={150}
                height={"inhert"}

                src="./images/iiitk.png"
                alt="IIIT kottayam"
            />,
            description: 'Currently pursuing a degree at the Indian Institute of Information Technology (IIIT) Kottayam. I enjoy collaborating with peers, participating in hackathons, and contributing to open-source projects.',
        },
        {
            desg: "School",
            logo: (

                <img

                    width={150}
                    height={100}

                    src="./images/dps.svg"

                    alt="DelhiPublicSchool" />),
            description: 'Before college, I completed my 11th and 12th grades at Delhi Public School, where I developed a strong foundation in computer science and technology.',
        },
        {
            desg: "Co-curricular activities",
            logo: (

                <img
                    width={150}
                    height={100}

                    src="./images/hobbies.svg"

                    alt="FUN" />),
            description: ' I enjoy a variety of co-curricular activities that keep me balanced and energized. I am an avid football player and find joy in playing the keyboard and guitar',
        }
    ]
}


export const workData = {
    professional: [
        {
            title: "Frontend Login Ui",
            shortDesc: "Created a frontend login UI featuring a user-friendly design, responsive layout,",
            longDesc: "The interface includes essential elements like email and password fields, a checkbox, and a 'Forgot Password' link, ensuring both functionality and accessibility.",
            technologies: [
                {
                    icon: './images/icons/typescript.svg',
                    name: "Typescript"
                },
                {
                    icon: './images/icons/html.svg',
                    name: "Html"
                },
                {
                    icon: './images/icons/css.svg',
                    name: "CSS"
                }
            ],
            link: 'https://github.com/arpan-xalxo/frontend',
            orgLogo: './images/login1.svg',

            style: {
                color: '#F25E56'
            }
        },
        {
            title: "Backend User Authentication",
            shortDesc: "I developed an authentication system with token-based security and user registration using a Laravel backend.",
            longDesc: "This setup includes user session management to ensure secure and persistent logins, enhancing overall application security and user experience.",
            technologies: [
                {
                    icon: './images/icons/laravel.svg',
                    name: "Laravel"
                },
                {
                    icon: './images/icons/php.svg',
                    name: "PHP"
                },
                {
                    icon: './images/icons/mysql.svg',
                    name: "mysql"
                },
            ],
            link: 'https://github.com/arpan-xalxo/backend',
            orgLogo: './images/key.svg',

            style: {
                color: '#F6902E'
            }
        },
    ],
    openSource: [
        {
            title: "MovieDex App",
            shortDesc: "I created a Netflix clone app named MovieDex, utilizing REST APIs to display newly released movies",
            longDesc: "The app features a sleek, user-friendly interface with browsing and searching capabilities, providing users with up-to-date movie information",
            technologies: [
                {
                    icon: './images/icons/firebase.svg',
                    name: "Firebase"
                },
                {
                    icon: './images/icons/flutter.svg',
                    name: "Flutter"
                },
                {
                    icon: './images/icons/dart.svg',
                    name: "Dart"
                },


            ],
            link: 'https://github.com/arpan-xalxo/MovieDexApp',
            orgLogo: './images/netflix1.svg',

            style: {
                color: '#5474BF'
            }
        },
        {
            title: "Covid-Tracker-App",
            shortDesc: "Developed a COVID-19 tracker app using REST APIs and Flutter. The app fetches real-time data on COVID-19 cases",
            longDesc: "including statistics on infections, recoveries, and fatalities, and presents this information through a responsive and visually appealing interface.",
            technologies: [
                {
                    icon: './images/icons/flutter.svg',
                    name: "Flutter"
                },
                {
                    icon: './images/icons/dart.svg',
                    name: "Dart"
                },
            ],
            link: 'https://github.com/arpan-xalxo/Covid-tracker-app',
            orgLogo: './images/apps.svg',

            style: {
                color: '#539553'
            }
        },

    ]
}