import { ExperienceItemProps } from "@/components/main/ExperienceSection"

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: "Frontend Engineer",
      experienceDescription: [
        "Revamped Live Market on the <u>DART</u> dashboard using Golden Layout, making it more intuitive & thereby simplifying the trading flow.",
        "Built Bonds Search & Detailed pages using Golden Layout, driving the development of the <u>FinD</u> dashboard.",
        "Led the migration of the DART dashboard from Nuxt2 & BootstrapVue to Nuxt3 & PrimeVue for improved functionality",
        "Developed a <u>scalable design system</u> with PrimeVue 4 styled mode, collaborating closely with designers to ensure consistency, accessibility, and seamless user experience.",
        "Enhanced web performance on the DART dashboard by resolving critical issues.",
      ],
      experienceOrg: {
        name: "Harmoney",
        link: "https://www.harmoney.in/",
        websiteDisplayName: "harmoney.in",
      },
      experienceStatus: {
        startAt: "March, 2024",
        endAt: "Present",
      },
      experienceTech: [
        "Nuxt.js",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "BootstrapVue",
        "PrimeVue",
        "Pinia",
        "GoldenLayout",
        "NuxtAuth",
        "FormKit",
      ],
    },
    {
      experienceTitle: "SDE-2",
      experienceDescription: [
        "Developed the new website entirely from scratch using NextJS with SSG in record time.",
        "Developed various features for internal CMS tool to automate creation of assessments.",
        "Integrated Strapi CMS for rapid, performant static page generation by business/content teams aiding SEO.",
        "Implemented various optimization techniques in EasyAccess dashboard, reducing loading & build time by 70%.",
        "Developed a microservice for on-demand generation and delivery of candidate reports in PDF format, allowing them to be sent as a single file or in bulk.",
        "Built React Native app for EasyAccess that runs on iOS, Android, and the Web, achieving an 85% concurrency of the codebase.",
        "Contributed to two successful ProductHunt launches: <u>EasySource</u> (#5 Product of the Day) and <u>JD Generator</u> (#1 Product of the Day).",
      ],
      experienceOrg: {
        name: "HireQuotient",
        link: "https://www.hirequotient.com/",
        websiteDisplayName: "hirequotient.com",
      },
      experienceStatus: {
        startAt: "Jun, 2022",
        endAt: "Feb, 2024",
      },
      experienceTech: [
        "HTML5",
        "CSS3",
        "SASS",
        "Material UI",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
        "React",
        "Redux Saga",
        "Next.js",
        "TypeScript",
        "Strapi CMS",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "AWS",
        "GCP",
      ],
    },
    {
      experienceTitle: "Software Engineer Intern",
      experienceDescription: [
        "Engineered financial calculators module from scratch for SEO purposes.",
        "Developed the Company Financials Component for US Stocks detail page.",
        "Built the Fixed Deposit Purchase Flow on web, catering to both KYC and non-KYC users.",
        "Implemented Family Account Invite Flow on web from scratch.",
      ],
      experienceOrg: {
        name: "INDmoney",
        link: "https://www.indmoney.com/",
        websiteDisplayName: "indmoney.com",
      },
      experienceStatus: {
        startAt: "Jan, 2022",
        endAt: "Jun, 2022",
      },
      experienceTech: [
        "Tailwind CSS",
        "React",
        "React Query",
        "React Hook Form",
        "React Highcharts",
        "Next.js",
        "TypeScript",
        "Strapi CMS",
      ],
    },
    {
      experienceTitle: "Web Development Intern",
      experienceDescription: [
        "Revamped existing and engineered new UI components.",
        "Bridged frontend and backend via API integrations.",
      ],
      experienceOrg: {
        name: "Youniv",
        link: "https://www.linkedin.com/company/younivapp/",
        websiteDisplayName: "youniv",
      },
      experienceStatus: {
        startAt: "Dec, 2021",
        endAt: "Jan, 2022",
      },
      experienceTech: ["Bootstrap", "Next.js", "Recoil", "Firebase"],
    },
    {
      experienceTitle: "Web Development Intern",
      experienceDescription: [
        "Designed and developed various responsive UI components for company's website named <u>KritikalHire</u> from scratch.",
        "Designed and developed company’s another website named <u>ServingNotice</u> completely from scratch.",
        "Built a blog site along with an admin panel having CRUD functionalities.",
      ],
      experienceOrg: {
        name: "e-InnoSec Advisory and Consulting",
        link: "https://www.einnosec.com",
        websiteDisplayName: "einnosec.com",
      },
      experienceStatus: {
        startAt: "Nov, 2021",
        endAt: "Jan, 2022",
      },
      experienceTech: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "MySQL",
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
      ],
    },
  ]
}
