import cartMobile from "../assets/cart-mobile.png";
import cartDesktop from "../assets/cart-desktop.png";
import cvDesktop from "../assets/cv-desktop.png";
import cvMobile from "../assets/cv-mobile.png";
import weatherDesktop from "../assets/weather-desktop.png";
import weatherMobile from "../assets/weather-mobile.png";

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
    title: "Shoping Cart",
    description:
      "E-shop Atlantis was a shopping cart project that helped me elevate my React skills. While doing this web page I learned to employ react routing with React Router library. I deepned my understanding of React states, fetching data in react and useEffect hook. As an state management tool I used Context API.",
    technologies: [],
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
    description: "CV Application is a form that automatically populates your resume. This project was my first encounter with React states. I learned how state in React works and how to use useState hook. I also got to know why and how to lift the state up to share state between components.",
    technologies: [],
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
    description: "Weather Application is an app that I made using vanilla JS before I learned React. With this project I got deeper understanding of Object Oriented Programing. It was also my first encounter with fetching data from an open public API.",
    technologies: [],
  },
];

export default projectsData;
