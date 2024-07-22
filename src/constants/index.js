import {
  javascript,
  html,
  css,
  reactjs,
  arduino,
  filmora,
  tailwind,
  git,
  canva,
  vue,
  laravel,
  figma,
  daywedding,
  azrilstoregamev1,
  skaniclibrary,
  villabunga,
  serti1,
  serti2,
  serti3,
  serti4,
  serti5,
  serti6,
  serti7,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Vue JS",
  //   icon: vue,
  // },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "arduino",
  //   icon: arduino,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
  {
    name: "filmora",
    icon: filmora,
  },
];

const projects = [
  {
    name: "Skanic Library",
    description:
      "a web-based platform that allows users to search, borrow, return and manage fines and books, providing a convenient and efficient solution to their borrowing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      { 
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skaniclibrary,
    source_code_link: "https://github.com/dayyysss/sknc-library-frontend-new",
  },
  {
    name: "Azrilstoregame",
    description:
      "Web application that allows users to purchase online gaming needs such as top ups and others.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: azrilstoregamev1,
    source_code_link: "https://github.com/dayyysss/azrilstoregame",
  },
  {
    name: "Villa Bunga",
    description:
      "Villa Bunga offers an online platform where users can explore, book and enjoy the facilities, providing a comfortable and luxurious stay.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: villabunga,
    source_code_link: "https://villa-bunga.vercel.app/",
  },
  {
    name: "Day & Yoon Wedding",
    description:
      "An online invitation platform where guests can view the wedding schedule, RSVP, access ceremony and reception details, providing a seamless and personalized experience for celebrating the special day.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: daywedding,
    source_code_link: "https://day-wedding.vercel.app/",
  },
];

const certificate = [
  {
    image: serti1,
  },
  {
    image: serti2,
  },
  {
    image: serti3,
  },
  {
    image: serti4,
  },
  {
    image: serti5,
  },
  {
    image: serti6,
  },
  {
    image: serti7,
  },
];



export { technologies, certificate, projects };
