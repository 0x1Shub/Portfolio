import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  exposys,
  getfly,
  ibm,
  codsoft,
  prodigy,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  cpp,
  nextjs,
  mysql,
  express,
  caringCause,
  syncChat,
  movieFlex,
  adminDashboard,
  cohort,
  isro,
  leetCode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Web 3.0 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "App Developer",
    company_name: "Exposys Data Labs",
    icon: exposys,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Designed and executed a comprehensive user interface for the mobile application",
      "ORDERADDA: Online food delivery app using android studio and firebase",
      "Optimized app performance through coding improvements and bug fixes.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "GetFly Technologies",
    icon: getfly,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jun 2023",
    points: [
      "Developed and optimized website Library Management System using MERN stack.",
      "Implemented responsive design features to ensure seamless user experience across all devices",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "IBM SkillsBuild and CSRBOX Academic Internship",
    icon: ibm,
    iconBg: "#383E56",
    date: "Jun 2022 - Jul 2023",
    points: [
      "Served as a frontend developer intern in an academic internship, collaborating with a team to develop an online learning platform.",
      "Completed various frontend learning modules, activities, and assessments to enhance technical skills.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Collaborated as a Web Developer Intern to design and develop a website according to specific requirements.",
      "Successfully completed all assigned website tasks within a 1-month program.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Executed software tasks within a 1-month program, completing all assignments ahead of schedule with a 100% accuracy rate",
      "Successfully completed all assigned website tasks within a 1-month program.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Achieved dynamic tracking of LeetCode progress, enhancing problem-solving skills and coding proficiency through continuous practice and challenges.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Caring-Cause",
    description:
      "Developed a Caring-Cause Crowdfunding platform using TypeScript, React.js, Node.js, and MongoDB, enabling users to create and manage fundraising campaigns efficiently and securely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: caringCause,
    source_code_link: "https://github.com/0x1Shub/Caring-Cause",
    link: "",
  },
  {
    name: "SyncChat",
    description:
      "Developed SyncChat, an online chat application using React.js, Node.js, MongoDB, and Socket.IO, enabling real-time messaging, user authentication, profile creation, and group channels.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "SocketIO",
        color: "pink-text-gradient",
      },
    ],
    image: syncChat,
    source_code_link: "https://github.com/0x1Shub/SyncChat",
    link: "",
  },
  {
    name: "MovieFlex",
    description:
      "Developed MovieFlex, a Netflix-like web application using React, providing comprehensive information about movies and TV shows, including details, ratings, and recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "tmdb",
        color: "pink-text-gradient",
      },
    ],
    image: movieFlex,
    source_code_link: "https://github.com/0x1Shub/Movieflex",
    link: "",
  },
  {
    name: "Admin Dashboard",
    description:
      "Developed an Admin Dashboard using React and TypeScript, featuring real-time data visualization for transactions, revenue, inventory, and users with bar charts, line graphs, and pie charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescipt",
        color: "green-text-gradient",
      },
      {
        name: "react-tables",
        color: "pink-text-gradient",
      },
    ],
    image: adminDashboard,
    source_code_link: "https://github.com/0x1Shub/admin-dashboard",
    link: "https://admin-dashboard-omega-gray.vercel.app/",
  },
];

const certifications = [
  {
    name: "Full Stack Developer Certification",
    organization: "100xDevs",
    date: "Mar 2024",
    image: cohort,
    link: "https://drive.google.com/file/d/1an3b24soXE6wgTMfBz5mTaNyaqK80izi/view?usp=drive_link",
  },
  {
    name: "Geo-data sharing and Cyber Security",
    organization: "Indian Space Research Organisation (ISRO)",
    date: "Oct 2022",
    image: isro,
    link: "https://drive.google.com/file/d/1JEXLLHmAOZF4Yo-c73jnb__rt-B2FA7Q/view?usp=sharing",
  },
  {
    name: "LeetCode Profile",
    link: "https://leetcode.com/u/shubham_yeram/",
    image: leetCode,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certifications,
};
