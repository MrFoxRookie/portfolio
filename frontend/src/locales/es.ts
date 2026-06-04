import newsExplorerImage from "../assets/Images/projects/news-explorer.jpeg";
import aroundTheWorldImage from "../assets/Images/projects/around-the-world.jpeg";

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
      text: "Proyecto full-stack desarrollado como proyecto final del bootcamp de Desarrollo Web de TripleTen. Construido con React y Node.js, integra una API de búsqueda de noticias que presenta los resultados mediante una interfaz basada en tarjetas dinámicas. Además, cuenta con un sistema de guardado utilizando una base de datos MongoDB, permitiendo a los usuarios gestionar y personalizar su lista de noticias de interés tras realizar una autorización de usuario.",
    },
    aroundTheWorld: {
      image: aroundTheWorldImage,
      title: "Around the World",
      text: "Proyecto full-stack desarrollado durante mi formación en desarrollo web. La aplicación permite a los usuarios registrarse, iniciar sesión y gestionar su perfil, así como crear, visualizar y eliminar tarjetas de forma dinámica para compartir contenido con otros usuarios.",
    },
  },
  footer: { text: "Zahid Tejeda Amaro. Todos los derechos reservados." },
};
