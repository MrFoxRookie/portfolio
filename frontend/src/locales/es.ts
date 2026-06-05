import newsExplorerImage from "../assets/Images/projects/news-explorer.jpeg";
import aroundTheWorldImage from "../assets/Images/projects/around-the-world.jpeg";
import tripleEspressoImage from "../assets/Images/projects/triple-espresso.png";

export const es = {
  header: {
    navbar: {
      home: "Inicio",
      about: "Acerca de mí",
      contact: "Contacto",
      projects: "Proyectos",
    },
  },
  about: {
    title: "Acerca de mí",
    firstParagraph: `De la mano de mi Tech Stack, enfocado tanto en el frontend como en el
        backend, soy una persona a la que le gustan los retos, ya que no solo me
        ponen a prueba, sino que también me impulsan a innovar y crear código
        que no solo ofrezca soluciones eficientes, sino que también brinde a los
        usuarios experiencias que satisfagan sus necesidades.`,
    secondParagraph: `Gracias a mi experiencia como comerciante, me considero una persona
        responsable y observadora al momento de comprender las necesidades de
        los usuarios, lo cual me motiva a seguir aprendiendo y a desarrollar
        soluciones que reflejen mis habilidades y compromiso en cada proyecto en
        el que participo.`,
  },
  contact: {
    title: "Contacto",
    text: `¿Tienes una propuesta, colaboración o pregunta?
  Estoy abierto a nuevas oportunidades.`,
  },
  projects: {
    grid: {
      newsExplorer: {
        text: `News Explorer App es una aplicación de búsqueda de noticias que
              brinda acceso a una gran variedad de fuentes informativas. Ideal para
              aquellos que les gusta mantenerse informados a través de distintos
              medios alrededor del mundo.`,
        keywords: [
          "HTML",
          "CSS",
          "React",
          "Node.js",
          "Express",
          "MySQL",
          "REST API",
          "Diseño Responsivo",
          "MVC",
        ],
      },
      aroundTheWorld: {
        text: `Plataforma interactiva tipo red social. Around the World es un espacio intuitivo que permite a los usuarios compartir y descubrir algunos de los lugares más emblemáticos y fascinantes alrededor del mundo.`,
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
        text: `Página estática para un negocio de café. Triple Espresso es un espacio hogareño que utilicé como práctica para aplicar conocimientos de posicionamiento y armonización de colores, otorgando a la página un diseño vibrante y agradable a la vista del usuario.`,
        keywords: [
          "HTML",
          "CSS",
          "Diseño Responsivo",
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
      firstParagraph: `Proyecto full-stack desarrollado con React y Node.js. News Explorer App integra diversas tecnologías modernas para ofrecer una plataforma de búsqueda y gestión de noticias, permitiendo a los usuarios explorar información proveniente de fuentes internacionales de forma imparcial a través de una API externa.`,
      secondParagraph: `La aplicación incorpora un sistema de autenticación y almacenamiento de datos que permite a los usuarios crear cuentas, guardar noticias de interés y acceder posteriormente a su contenido personalizado. Además, utiliza una base de datos MySQL para gestionar la información de usuarios y sus artículos guardados.`,
      githubLink: "https://github.com/MrFoxRookie/News-Explorer-App",
      liveLink: "https://news-explorer-app-three.vercel.app/",
    },
    aroundTheWorld: {
      image: aroundTheWorldImage,
      title: "Around the World",
      firstParagraph:
        "Around the World es un proyecto full-stack desarrollado con HTML, CSS y JavaScript para el frontend, y Node.js, Express y MongoDB para el backend. La aplicación incluye autenticación basada en JWT y registro de usuarios, permitiendo a los usuarios administrar sus perfiles y crear, eliminar e interactuar dinámicamente con tarjetas, creando una plataforma para compartir contenido con otros usuarios.",

      secondParagraph:
        "El proyecto cuenta con autenticación segura mediante JWT, funcionalidades de gestión de perfil, creación y eliminación dinámica de tarjetas, e integración completa del backend utilizando Node.js, Express y MongoDB. La aplicación está diseñada para facilitar la interacción entre usuarios mediante contenido compartido, manteniendo una arquitectura escalable y organizada.",
      githubLink: "https://github.com/MrFoxRookie/Around-the-World-App",
      liveLink: "https://around-the-world-app-kappa.vercel.app/",
    },
    tripleEspresso: {
      image: tripleEspressoImage,
      title: "Triple Espresso",
      firstParagraph: `El proyecto presenta una página web de la cafetería "Triple Espresso" la cual expone información sobre la misma, así como proporciona la posibilidad de realizar reservaciones a sus instalaciones. Dicha página hace uso de las tecnologías HTML y CSS para la creación y diseño de la misma, así como de las funcionalidades con las que las mismas cuentan tales como: Enlaces a las distintas secciones de la página para una mayor experiencia de usuario. Videos digitales de terceros mediante iframes los cuales muestran recetas que podrían ser interes para los usuarios. Formularios para la obtención de información por parte de los usuarios mediante la cual puedan realizar reservaciones a las instalaciones de "Triple Espresso." Enlaces a las redes sociales de "Triple Espresso.`,

      secondParagraph: "",
      githubLink: "https://github.com/MrFoxRookie/web_project_coffeeshop",
      liveLink: "https://mrfoxrookie.github.io/web_project_coffeeshop/",
    },
  },
  footer: { text: "Zahid Tejeda Amaro. Todos los derechos reservados." },
};
