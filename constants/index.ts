import {type Contact, type ITechIcons, type Stack, type Tool} from "@/types.js"

export const CONTACT: Contact[] = [
    {
        title: "linkedin",
        icon: "mdi:linkedin",
        link: "https://www.linkedin.com/in/mohammed-fawzey-4202a4316/"
    },
    {
        title: "github",
        icon: "mdi:github",
        link: "https://github.com/devfawzey"
    },
    {
        title: "mail",
        icon: "material-symbols-light:mail-outline",
        link: "mailto:devfawzey@gmail.com",
        isMail: true,
    },
]
export const PROJECTS = [
    {
        title: "eCommerceHope",
        type: "ecommerce",
        grid: "xx-large",
        techs: <ITechIcons[]>[
            // 'mdi:nuxt', 'bxl:typescript', 'mdi:tailwind', 'carbon:api'
            {
                icon: "mdi-nuxt",
                title: "Nuxt"
            },
            {
                icon: "bxl:typescript",
                title: "typescript"
            },
            {
                icon: "file-icons:nuxt",
                title: "NuxtUI"
            },
            {
                icon: "mdi:tailwind",
                title: "tailwindcss"
            },
            {
                icon: "carbon:api",
                title: "RestAPI"
            },
        ],
        src: "nuxt-commercehope",
        link: "https://nuxt-ecommerce-iota.vercel.app/",
        githubLink: "https://github.com/devfawzey/nuxt-ecommerce"
    },
    {
        title: "tabarak company",
        type: "design",
        grid: "x-large",
        techs: <ITechIcons[]>[
            {
                icon: "mdi:nuxt",
                title: "Nuxt",
            },
            {
                icon: "bxl:typescript",
                title: "typescript"
            },
            {
                icon: "file-icons:nuxt",
                title: "NuxtUI"
            },
            {
                icon: "mdi:tailwind",
                title: "tailwindcss"
            }
        ],
        src: "tabark",
        link: "https://tabrak-pi.vercel.app/",
        githubLink: "https://github.com/devfawzey/tabrak"
    },
    {
        "title": "Innovate",
        "type": "design",
        "grid": "small",
        techs: <ITechIcons[]>[{
            icon: "devicon-plain:vuetify",
            title: "vuetify"
        },
            {
                icon: "mdi:nuxt",
                title: "Nuxt"
            }],
        "tags": [
            {
                "title": "NuxtJs",
                "color": "rgb(79 70 229)"
            },
            {
                "title": "Portfolio",
                "color": "rgb(71 85 105)"
            },
            {
                "title": "latest",
                "color": "rgb(220 38 38)"
            }
        ],
        "src": "innovate",
        "link": "https://innovate3.online/"
    },
    {
        "title": "Commerce-Hope",
        "type": "ecommerce",
        show: true,
        "grid": "xx-large",
        techs: <ITechIcons[]>[
            {
                icon: "mdi:nuxt",
                title: "Nuxt",
            },
            {
                icon: 'devicon-plain:vuetify',
                title: "vuetify",
            },
            {
                icon: 'carbon:api',
                title: "RestAPI",
            }
        ],

        "tags": [
            {
                "title": "nuxt",
                "color": "rgb(79 70 229)"
            },
            {
                "title": "Ecommerce",
                "color": "rgb(220 38 38)"
            }
        ],
        "src": "commerce-hope",
        "link": "https://commerce-hope.vercel.app/"
    },
    {
        "title": "Hager UI-UX Developer",
        "type": "design",
        grid: "x-large",
        techs: <ITechIcons[]>[
            {
                icon: "mdi:nuxt",
                title: "Nuxt",
            },
            {
                icon: "devicon-plain:vuetify",
                title: "vuetify",
            },
        ],
        "tags": [
            {
                "title": "NuxtJs",
                "color": "rgb(79 70 229)"
            },
            {
                "title": "Portfolio",
                "color": "rgb(71 85 105)"
            }
        ],
        "src": "ui-ux",
        "link": "https://hager-ui-ux.vercel.app/"
    },
    {
        "title": "Movies Hunter",
        show: true,
        "type": "design",
        "grid": "xx-large",
        techs: <ITechIcons[]>[
            {
                icon: "mdi:vuejs",
                title: "vue",
            },
            {
                icon: "devicon-plain:vuetify",
                title: "vuetify",
            },
            {
                icon: "carbon:api",
                title: "RestAPI"
            }
        ],
        "tags": [
            {
                "title": "VueJS",
                "color": "rgb(66, 184, 131)"
            }
        ],
        "src": "movies",
        "link": "https://movie-appio.vercel.app/"
    },
    {
        "title": ".Store",
        show: false,
        "type": "ecommerce",
        techs: <ITechIcons[]>[
            {
                icon: "mdi:nuxt",
                title: "Nuxt",
            },
            {
                icon: "devicon-plain:vuetify",
                title: "vuetify"
            }
        ],
        "tags": [
            {
                "title": "NuxtJs",
                "color": "rgb(79 70 229)"
            },
            {
                "title": "eCommerce",
                "color": "rgb(71 85 105)"
            }
        ],
        "src": "store",
        "link": "https://storex.vercel.app/"
    },
    {
        "title": "traders-academy",
        "type": "design",
        techs: <ITechIcons[]>[
            {
                icon: "mdi:vuejs",
                title: "Vue",
            },
            {
                icon: "devicon-plain:vuetify",
                title: "Vuetify",
            },
        ],
        "tags": [
            {
                "title": "VueJS",
                "color": "rgb(66, 184, 131)"
            },
            {
                "title": "Landing",
                "color": "rgb(71 85 105)"
            }
        ],
        "src": "traders",
        "link": "https://traders-academy-gold.vercel.app/ar",
        // githubLink:"https://github.com/mohammedfawzey/traders-academy"
    },
    {
        "title": "Pexels eCommerce",
        show: false,
        "type": "ecommerce",
        "made_with": "Nuxtjs",
        techs: <ITechIcons[]>[
            {
                icon: "mdi-nuxt",
                title: "Nuxt",
            },
            {
                icon: "devicon-plain:vuetify",
                title: "vuetify",
            },
        ],
        "grid": "medium",
        "tags": [
            {
                "title": "NuxtJS",
                "color": "rgb(79 70 229)"
            }
        ],
        "src": "pexel",
        "link": "https://ecommerce-pexels.vercel.app/"
    },
    {
        "title": "Restaurant",
        techs: <ITechIcons[]>[
            {
                icon: "ri:bootstrap-fill",
                title: "Bootstrap",
            },
        ],
        "type": "design",
        "made_with": "",
        "grid": "xx-large",
        "tags": [
            {
                "title": "Bootstrap",
                "color": "rgb(118, 16, 245)"
            }
        ],
        "src": "restaurant",
        "link": "https://mohammed2711111.github.io/Restaurant_Site/resturant.html"
    },
    {
        "title": "nix",
        "type": "design",
        "made_with": "",
        techs: ['ri:bootstrap-fill'],
        "tags": [
            {
                "title": "Bootstrap",
                "color": "rgb(118, 16, 245)"
            }
        ],
        "src": "nix",
        show: false,
        "link": "https://mohammed2711111.github.io/NIX_Website/Nix.html"
    },
]

export const STACKS: Stack[] = [
    {
        title: "nuxt",
        icon: "mdi:nuxt"
    },
    {
        title: "vue",
        icon: "mdi:vuejs"
    },
    {
        title: "typescript",
        icon: "bxl:typescript"
    },
    {
        title: "RestAPI",
        icon: "carbon:api"
    },
    {
        title: "NuxtUI",
        icon: "file-icons:nuxt"
    },
    {
        title: "tailwind",
        icon: "mdi:tailwind"
    },
    {
        title: "vuetify",
        icon: "devicon-plain:vuetify"
    },
    {
        title: "git",
        icon: "mdi:git"
    },
    {
        title: "bootstrap",
        icon: "ri:bootstrap-fill"
    },
    {
        title: "javascript",
        icon: "ri:javascript-fill"
    },
    {
        title: "CSS",
        icon: "flowbite:css-solid"
    },
    {
        title: "HTML",
        icon: "flowbite:html-solid"
    },
    // {
    //  title: "node.js",
    //  icon: "mdi:nodejs"
    // },
]

export const TOOLS: Tool[] = [
    {
        title: "vscode",
        icon: "mdi:microsoft-visual-studio-code"
    },
    {
        title: "mongodb",
        icon: "fontisto:mongodb"
    },
    {
        title: "postman",
        icon: "simple-icons:postman"
    },
    {
        title: "Google Chrome",
        icon: "simple-icons:googlechrome"
    },
    {
        title: "Chat GPT",
        icon: "arcticons:openai-chatgpt"
    },
    {
        title: "Figma",
        icon: "solar:figma-broken"
    },
]

export interface HeaderLink {
    title: string,
    icon: string
}

export const HEADERLINKS:HeaderLink[] = [
    {
        title: "profile",
        icon: 'iconamoon:profile-thin'
    },
    {
        title: "timeline",
        icon: 'material-symbols:timeline'
    },
    {
        title: "projects",
        icon: "material-symbols-light:work-outline"
    },
    {
        title: "techs",
        icon: "hugeicons:nano-technology"
    },
    {
        title: "tools",
        icon: "et:tools-2"
    },
]

export const TIMELINE = [
    {
        date: "2022-08-01",
        text: "Graduated in Computer Science"
    },
    {
        date: "2023-02-01",
        text: "First developer job as frontend developer",
        isLeft: true
    },
    {
        date: "2023-04-01",
        text: "Working as a freelancer",
    },
    {
        date: "2024-04-01",
        text: "joined <a target='_blank' href='https://www.linkedin.com/company/talent-innovate/' style='text-decoration: underline;'>@innovate</a> as a frontend developer",
        isLeft: true
    },
    {
        date: "present",
        text: "Self-Employed Frontend Developer"
    },
]