import newsExplorerImage from "../assets/Images/projects/news-explorer.jpeg";
import aroundTheWorldImage from "../assets/Images/projects/around-the-world.jpeg";

export const en = {
  header: {
    navbar: {
      home: "Home",
      about: "About",
      contact: "Contac",
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
        ],
      },
      aroundTheWorld: {
        text: `Interactive social media-style platform. Around the World is an intuitive space that allows users to share and discover some of the world’s most iconic and fascinating places.`,
        keywords: ["HTML", "CSS", "React", "Node.js", "Express"],
      },
    },
  },
  projectDetail: {
    newsExplorer: {
      image: newsExplorerImage,
      title: "News Explorer App",
      text: "Full-stack project developed as the final project of the TripleTen Web Development bootcamp. Built with React and Node.js, it integrates a news search API that displays results through a dynamic card-based interface. It also includes a save system using a MongoDB database, allowing users to manage and customize their list of news of interest after user authentication.",
    },
    aroundTheWorld: {
      image: aroundTheWorldImage,
      title: "Around the World",
      text: "Full-stack project developed during my web development training. The application allows users to register, log in, and manage their profile, as well as dynamically create, view, and delete cards to share content with other users.",
    },
  },
  footer: {
    text: "Zahid Tejeda Amaro. All rights reserved.",
  },
};
