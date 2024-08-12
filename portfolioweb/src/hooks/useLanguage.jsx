import { createContext } from "react";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const LanguageContext = createContext();
//const initialLanguage = 'en';
const initialLanguage = localStorage.getItem('language') || 'en';

const translations = {
    en:{
        menuTitle1: 'Home',
        menuTitle2: 'About',
        menuTitle3: 'Works',
        menuTitle4: 'Technologies',
        portraitTitle1: `Hi! I'm`,
        portraitTitle2: 'Cristal,',
        portraitTitle3: 'Web developer',
        portraitButton: 'Get to know me →',
        homeTitle: 'Welcome to my site!',
        countryTitle: 'Dominican Republic',
        aboutTitle: `I'm a Frontend Developer stepping into Full-stack Development and Database Administration. I love creating nice-looking. Now, I'm learning Django and Node.js to connect the frontend and backend. Also, I'm getting into databases to make apps work better.`,
        aboutTitle2: `I enjoy learning and making cool stuff. Let's chat and build something awesome together!`,
        goalTitle: 'Goal',
        goalTitle2: 'Gain experience and knowledge.',
        cvTitle: 'Download CV',
        projectTitle: 'projects',
        projectTitle1: 'Project 1',
        projectTitle2: 'Project 2',
        projectTitle3: 'Project 3',
        projectTitle4: 'Project 4',
        projectTitle5: 'Project 5',
        projectTitle6: 'Project 6',
        projectName1: 'Arcane',
        projectName2: 'Travel app',
        projectName3: 'Dominican identity app',
        projectName4: 'Image search engine',
        projectName5: 'Mascotaland',
        projectName6: 'Ecorev',
        projectDesc1: `A collaborative work, where we decided to develop a friendly website based on a cinema. The user can watch the trailer of some movies, book a ticket or search for some snacks to order. We use HTML, CSS and JavaScript.`,
        projectDesc2: `Turisteo is a platform for travelers that offers detailed information by country. This is a collaborative work, The backend team developed an API with details of all the countries, while in the FrontEnd team we take care of the design and integration of the resources.`,
        projectDesc3: `This incredible application, developed in Python, uses the tkinter library and an API with some details of Dominican citizens, helping users to obtain relevant information about the citizen, by searching for their ID.`,
        projectDesc4: `Dynamic image search engine, using React. This search engine allows the user to search for any image, thanks to the Unsplash API.`,
        projectDesc5: `Mascotaland is a platform that connects pet owners with qualified sitters, simplifying the search for animal care services.`,
        projectDesc6: `A recycled products store built with Angular that allows users to add items to their cart and browse through the available merchandise.`,
        projectView: 'View demo',
        techTitle: 'Technologies',
        footerTitle: 'All rights reserved',
        errorMessage: 'Return',
    }, 

    es:{
        menuTitle1: 'Inicio',
        menuTitle2: 'Sobre mí',
        menuTitle3: 'Trabajos',
        menuTitle4: 'Tecnologías',
        portraitTitle1: '¡Hola! Soy',
        portraitTitle2: 'Cristal,',
        portraitTitle3: 'Desarrolladora web',
        portraitButton: 'Conoce más sobre mí →',
        homeTitle: '¡Bienvenido a mi página!',
        countryTitle: 'República Dominicana',
        aboutTitle: `Me defino como una apasionada desarrolladora frontend que actualmente se aventura en el fascinante mundo del desarrollo full-stack y la gestión de bases de datos. Disfruto hacer sitios web dinámicos y atrayentes. Estoy inmersa en la adquisición de habilidades en Django y Node.js para forjar conexiones fluidas entre el frontend y el backend.`,
        aboutTitle2: `Disfruto aprender y hacer cosas interesantes. ¡Charlemos y construyamos algo increíble juntos!        `,
        goalTitle: 'Meta',
        goalTitle2: 'Ganar experiencia y conocimientos.',
        cvTitle: 'Descarga mi CV',
        projectTitle: 'proyectos',
        projectTitle1: 'Proyecto 1',
        projectTitle2: 'Proyecto 2',
        projectTitle3: 'Proyecto 3',
        projectTitle4: 'Proyecto 4',
        projectTitle5: 'Proyecto 5',
        projectTitle6: 'Proyecto 6',
        projectName1: 'Arcane',
        projectName2: 'App de viajes',
        projectName3: 'App de cédulas dominicanas',
        projectName4: 'Buscador de imágenes',
        projectName5: 'MascotaLand',
        projectName6: 'Ecorev',
        projectDesc1: `Un trabajo colaborativo, donde decidimos desarrollar un sitio web amigable basado en un cine. El usuario puede ver el avance de algunas películas, reservar un ticket o buscar algunos snacks para pedir. Usamos HTML, CSS y JavaScript.`,
        projectDesc2: `Turisteo es una plataforma para viajeros que ofrece información detallada por país. Este es un trabajo colaborativo, el equipo de backend desarrolló una API con detalle de todos los países, mientras que en el equipo de FrontEnd nos encargamos del diseño e integración de los recursos.`,
        projectDesc3: `Esta increíble aplicación, desarrollada en Python, utiliza la biblioteca tkinter y una API con algunos detalles de ciudadanos dominicanos, ayudando a los usuarios a obtener información relevante del ciudadano, mediante la busqueda de su cédula.`,
        projectDesc4: `Buscador de imágenes dinámico, elaborado en React. Este buscador permite realizar búsquedas de cualquier imagen, gracias a la API de Unsplash.`,
        projectDesc5: `Mascotaland es una plataforma que conecta dueños de mascotas con cuidadores cualificados, simplificando la búsqueda de servicios de cuidado animal. `,
        projectDesc6: `Una tienda de productos reciclados desarrollada en Angular que permite a los usuarios agregar artículos al carrito y visualizar la mercancía disponible.`,
        projectView: 'Ver demo',
        techTitle: 'Tecnologías',
        footerTitle: 'Todos los derechos reservados',
        errorMessage: 'Retornar',
    }
}

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        setTexts(translations[selectedLanguage]);
    
        localStorage.setItem('language', selectedLanguage);
      };

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          setLanguage(storedLanguage);
          setTexts(translations[storedLanguage]);
        }
      }, []);

    const data = { texts, handleLanguage };
    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    );
}

export { LanguageProvider }
export default LanguageContext;

LanguageProvider.propTypes = {
    children: PropTypes.any,
};