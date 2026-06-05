import newsExplorerImage from "../assets/Images/projects/news-explorer.jpeg";
import aroundTheWorldImage from "../assets/Images/projects/around-the-world.jpeg";

export const en = {
  header: {
    navbar: {
      home: "Home",
      about: "About",
      contact: "Contact",
      projects: "Projects",
    },
  },
  about: {
    title: "About Me",

    firstParagraph: `With my Tech Stack focused on both frontend and backend development, I am someone who enjoys challenges, as they not only test my abilities but also push me to innovate and create code that not only provides efficient solutions, but also delivers experiences that meet users' needs.`,

    secondParagraph: `Thanks to my experience as a merchant, I consider myself a responsible and observant person when it comes to understanding users' needs, which motivates me to continue learning and developing solutions that reflect my skills and commitment in every project I participate in.`,
  },
  contact: {
    title: "Contact",
    text: `Do you have a proposal, collaboration opportunity, or question?
  I'm open to new opportunities.`,
  },
  projects: {
    grid: {
      newsExplorer: {
        image: "../../assets/images/projects/news-explorer.jpeg",
        text: `News Explorer App is a news search application that provides access to a wide variety of news sources and information channels. Ideal for those who enjoy staying informed through different media outlets and perspectives from around the world.`,
        keywords: [
          "HTML",
          "CSS",
          "React",
          "Node.js",
          "Express",
          "MySQL",
          "REST API",
          "Responsive Design",
          "MVC",
        ],
      },
      aroundTheWorld: {
        text: `Interactive social media-style platform. Around the World is an intuitive space that allows users to share and discover some of the world’s most iconic and fascinating places.`,
        keywords: [
          "HTML",
          "CSS",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "BEM",
        ],
      },
      tripleEspresso: {
        text: `Static website for a coffee business. Triple Espresso is a cozy space that I used as practice to apply positioning techniques and color harmonization principles, giving the page a vibrant and visually appealing design for users.`,
        keywords: [
          "HTML",
          "CSS",
          "Responsive Design",
          "Flexbox",
          "CSS Grid",
          "Figma",
        ],
      },
    },
  },
  projectDetail: {
    newsExplorer: {
      image: newsExplorerImage,
      title: "News Explorer App",
      firstParagraph: `Full-stack project developed with React and Node.js. News Explorer App integrates various modern technologies to provide a news search and management platform, allowing users to explore information from international sources in an unbiased way through an external API.`,
      secondParagraph: `The application incorporates an authentication and data storage system that allows users to create accounts, save articles of interest, and later access their personalized content. Additionally, it uses a MySQL database to manage user information and stored articles.`,
      githubLink: "https://github.com/MrFoxRookie/News-Explorer-App",
      liveLink: "https://news-explorer-app-three.vercel.app/",
    },
    aroundTheWorld: {
      image: aroundTheWorldImage,
      title: "Around the World",
      text: "Full-stack project developed during my web development training. The application allows users to register, log in, and manage their profile, as well as dynamically create, view, and delete cards to share content with other users.",
      firstParagraph:
        "Around the World is a full-stack project built with HTML, CSS, and JavaScript for the frontend, and Node.js, Express, and MongoDB for the backend. The application includes JWT-based authentication and user registration, allowing users to manage their profiles and dynamically create, delete, and interact with cards, creating a platform for sharing content with other users.",
      secondParagraph:
        "The project features secure authentication using JWT, profile management functionalities, dynamic card creation and deletion, and full backend integration with Node.js, Express, and MongoDB. The application is designed to support user interaction through shared content while maintaining a scalable and organized architecture.",
    },
  },
  footer: {
    text: "Zahid Tejeda Amaro. All rights reserved.",
  },
};
