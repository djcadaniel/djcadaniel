import ImageAbout from '../../assets/img/icons/about.png';
// import { useEffect, useRef, useState } from 'react';
import './About.css';

const text = [
  {
    id: '02. ',
    title: 'Acerca de mí',
    description: `
    Hola! soy Daniel Castro, especializado y apasiona en el mundo frontend.
    Disfruto creando cosas que existen en Internet. ya sean sitios web, aplicaciones o cualquier otro elemento intermedio.
    Mi objetivo es siempre crear productos que proporcionen experiencias de rendimiento perfectas en píxeles.
    Poco después de graduarme, me uní a Platzi una plataforma virtual de cursos de especialización en programación, donde aprendí y desarolle una amplia variedad de proyectos.
    `
  }
]

export const About = () => {
  return (
    <section id='sectionAbout' className='about content'>
      <div className="about__image">
        <img src={ImageAbout} alt="Foto de Daniel Castro" />
      </div>
      <div className="about__description">
        <h2><small>{text[0].id}</small>{text[0].title}</h2>
        <p>{text[0].description}</p>
      </div>
    </section>
  )
}