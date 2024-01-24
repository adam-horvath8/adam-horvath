import cartMobile from "../assets/cart-mobile.png";
import cartDesktop from "../assets/cart-desktop.png";
import cvDesktop from "../assets/cv-desktop.png";
import cvMobile from "../assets/cv-mobile.png";
import weatherDesktop from "../assets/weather-desktop.png";
import weatherMobile from "../assets/weather-mobile.png";
import reactBlack from "../assets/react-black.svg";
import jsBlack from "../assets/js-black.svg";
import webpackBlack from "../assets/webpack-black.svg";
import reacRouterBlack from "../assets/reactrouter-black.svg";
import memoryDesktop from "../assets/memory-desktop.png";
import memoryMobile from "../assets/memory-mobile.png";
import socraticCircle from "../assets/socratic-circle.png";
import socraticMobile from "../assets/socratic-mobile.png";
import reduxBlack from "../assets/redux-black.svg";
import typescriptBlack from "../assets/typescript-black.svg";
import firebaseBlack from "../assets/firebase-black.svg";
import whisperDesktop from "../assets/whisper-desktop.png";
import whisperMobile from "../assets/whisper-mobile.png";
import nuxtBlack from "../assets/nuxt-black.svg";
import nodeBlack from "../assets/node-black.svg";
import prismaBlack from "../assets/prisma-black.svg";
import bootstrapBlack from "../assets/bootstrap-black.svg";

const projectsData = [
  {
    img1: {
      url: whisperDesktop,
      alt: "whisper web picture",
    },
    img2: {
      url: whisperMobile,
      alt: "whisper web picture",
    },
    title: "Whisper Web",
    description:
      "Whisper Web is my first full-stuck project. It is a Twitter clone. The front-end is made in the Nuxt.js framework, which is based on Vue.js. The back-end is made with Node.js and the Express framework. I used Prisma as an ORM that communicates with the PostgreSQL database. The project is written in Typescript and styled with Bootstrap",
    technologies: [
      {
        url: typescriptBlack,
        name: "Typescript",
        alt: "Typescript",
      },
      {
        url: nuxtBlack,
        name: "Nuxt",
        alt: "Nuxt",
      },
      {
        url: nodeBlack,
        name: "Node",
        alt: "Node",
      },

      { url: prismaBlack, alt: "Prisma", name: "Prisma" },
      { url: bootstrapBlack, alt: "Bootstrap", name: "Bootstrap" },
    ],
    live: "https://whisper-web789h.netlify.app/",
    code: "https://github.com/adam-horvath8/Whisper-Web",
  },

  {
    img1: {
      url: socraticCircle,
      alt: "socratic circle picture",
    },
    img2: {
      url: socraticMobile,
      alt: "socratic circle picture",
    },
    title: "Socratic Circle",
    description:
      "Socratic Circle is a social media website for philosophers to connect and share their work. The back-end runs on Firebase. The project is written in Typescript. I used Redux and the Redux Toolkit for global state management. In this project, I learned CRUD operations as well as how authentication works.",
    technologies: [
      {
        url: typescriptBlack,
        name: "Typescript",
        alt: "Typescript",
      },
      {
        url: reduxBlack,
        name: "Redux",
        alt: "Redux",
      },
      {
        url: firebaseBlack,
        name: "Firebase",
        alt: "Firebase",
      },

      { url: reactBlack, alt: "React", name: "React" },
    ],
    live: "https://socraticcircle-6ba8b.web.app/",
    code: "https://github.com/adam-horvath8/Socratic-circle",
  },

  {
    img1: {
      url: cartDesktop,
      alt: "e-shop picture",
    },
    img2: {
      url: cartMobile,
      alt: "e-shop picture",
    },
    title: "Atlantis e-shop",
    description:
      "E-shop Atlantis was a shopping cart project that helped me elevate my React skills. While doing this web page, I learned to employ React routing with the React Router library. I deepened my understanding of React states, fetching data in React, and using the useEffect hook. As a global state management tool, I used the Context API.",
    technologies: [
      { url: reactBlack, alt: "React", name: "React" },
      {
        url: reacRouterBlack,
        name: "React Router",
        alt: "React Router",
      },
    ],
    live: "https://atlantis-eshop.netlify.app",
    code: "https://github.com/adam-horvath8/Atlantis-shop",
  },

  //   {
  //     img1: {
  //       url: cvDesktop,
  //       alt: "cv application picture",
  //     },
  //     img2: {
  //       url: cvMobile,
  //       alt: "cv application picture",
  //     },
  //     title: "CV App",
  //     description:
  //       "CV Application is a form that automatically populates your resume. This project was my first encounter with React states. I learned how state in React works and how to use useState hook. I also got to know why and how to lift the state up to share state between components.",
  //     technologies: [{ url: reactBlack, name: "React" }],
  //     live: "https://cv-super-maker.netlify.app",
  //     code: "https://github.com/adam-horvath8/CV-app",
  //   },

  //   {
  //     img1: {
  //       url: weatherDesktop,
  //       alt: "Weather application picture",
  //     },
  //     img2: {
  //       url: weatherMobile,
  //       alt: "Weather application picture",
  //     },
  //     title: "Weather App",
  //     description:
  //       "Weather Application is an app that I made using vanilla JS before I learned React. With this project I got deeper understanding of Object Oriented Programing. It was also my first encounter with fetching data from an open public API.",
  //     technologies: [
  //       { url: jsBlack, name: "JavaScript", alt: "JavaScript" },
  //       {
  //         url: webpackBlack,
  //         name: "Webpack",
  //         alt: "Webpack",
  //       },
  //     ],
  //     live: "https://hi-weather-app.netlify.app",
  //     code: "https://github.com/adam-horvath8/Weather-app",
  //   },

  //   {
  //     img1: {
  //       url: memoryDesktop,
  //       alt: "Memory card game picture",
  //     },
  //     img2: {
  //       url: memoryMobile,
  //       alt: "Memory card game picture",
  //     },
  //     title: "Memory Cards",
  //     description:
  //       "A memory card game is a game that challenges your memory. Try to click on all the cards without clicking on the same card twice, and you win! With this project, I got familiar with the useEffect hook.",
  //     technologies: [{ url: reactBlack, name: "React" }],
  //     live: "https://cars-memory-game.netlify.app",
  //     code: "https://github.com/adam-horvath8/Memory-card",
  //   },
];

export default projectsData;
