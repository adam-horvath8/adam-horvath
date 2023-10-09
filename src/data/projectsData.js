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

const projectsData = [
  {
    img1: {
      url: cartDesktop,
      alt: "dsa",
    },
    img2: {
      url: cartMobile,
      alt: "dsa",
    },
    title: "Atlantis e-shop",
    description:
      "E-shop Atlantis was a shopping cart project that helped me elevate my React skills. While doing this web page I learned to employ react routing with React Router library. I deepned my understanding of React states, fetching data in react and useEffect hook. As an state management tool I used Context API.",
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
  {
    img1: {
      url: cvDesktop,
      alt: "",
    },
    img2: {
      url: cvMobile,
      alt: "",
    },
    title: "CV App",
    description:
      "CV Application is a form that automatically populates your resume. This project was my first encounter with React states. I learned how state in React works and how to use useState hook. I also got to know why and how to lift the state up to share state between components.",
    technologies: [{ url: reactBlack, name: "React" }],
    live: "https://cv-super-maker.netlify.app",
    code: "https://github.com/adam-horvath8/CV-app",
  },
  {
    img1: {
      url: weatherDesktop,
      alt: "",
    },
    img2: {
      url: weatherMobile,
      alt: "",
    },
    title: "Weather App",
    description:
      "Weather Application is an app that I made using vanilla JS before I learned React. With this project I got deeper understanding of Object Oriented Programing. It was also my first encounter with fetching data from an open public API.",
    technologies: [
      { url: jsBlack, name: "JavaScript", alt: "JavaScript" },
      {
        url: webpackBlack,
        name: "Webpack",
        alt: "Webpack",
      },
    ],
    live: "https://hi-weather-app.netlify.app",
    code: "https://github.com/adam-horvath8/Weather-app",
  },
  {
    img1: {
      url: memoryDesktop,
      alt: "",
    },
    img2: {
      url: memoryMobile,
      alt: "",
    },
    title: "Memory Cards",
    description:
      "Weather Application is an app that I made using vanilla JS before I learned React. With this project I got deeper understanding of Object Oriented Programing. It was also my first encounter with fetching data from an open public API.",
    technologies: [{ url: reactBlack, name: "React" }],
    live: "https://cars-memory-game.netlify.app",
    code: "https://github.com/adam-horvath8/Memory-card",
  },
];

export default projectsData;
