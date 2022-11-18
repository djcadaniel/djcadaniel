import { useState } from 'react';
import ImageBootstrap from '../../assets/img/abilitys/1.png';
import ImageCss from '../../assets/img/abilitys/2.png';
import ImageGit from '../../assets/img/abilitys/3.png';
import ImageGithub from '../../assets/img/abilitys/4.png';
import ImageHtml from '../../assets/img/abilitys/5.png';
import ImageJs from '../../assets/img/abilitys/6.png';
import ImageReact from '../../assets/img/abilitys/7.png';
import ImageSass from '../../assets/img/abilitys/8.png';
import './Ability.css'
import { ButtonAbility } from './ButtonAbility/ButtonAbility';

export const Ability = () => {

  // const [modal, setModal] = useState(false);
  // const [currentSkill, setCurrentSkill] = useState({})

  // const handleCurrentSkill = (skill)=>{
  //   setCurrentSkill(skill);
  //   handleModal();
  // }
  // const handleModal = ()=>{
  //   setModal(!modal);
  // }

  const skills = [
    {
      title: 'REACT',
      image: ImageReact,
      alt: 'ícono de REACT'
    },
    {
      title: 'TAILWIND',
      image: ImageReact,
      alt: 'ícono de TAILWIND'
    },
    {
      title: 'JS',
      image: ImageJs,
      alt: 'ícono de JS'
    },
    {
      title: 'HTML',
      image: ImageHtml,
      alt: 'ícono de HTML'
    },
    {
      title: 'CSS',
      image: ImageCss,
      alt: 'ícono de CSS'
    },
    {
      title: 'SASS',
      image: ImageSass,
      alt: 'ícono de SASS'
    },
    {
      title: 'GIT',
      image: ImageGit,
      alt: 'ícono de GIT'
    },
    {
      title: 'GITHUB',
      image: ImageGithub,
      alt: 'ícono de GITHUB'
    },
  ]

  return (
    <>
      <section id='sectionAbilities' className="ability content">
        <h2 className='ability__title'><small>03. </small>Habilidades</h2>
        <div className='ability__contain'>
          {skills.map((item, index)=>(
            <div className='ability__contain--item' key={index}>
              <h3>{item.title}</h3> 
              <img src={item.image} alt={item.alt}/>
              {/* <ButtonAbility index={index} activeModal={()=>handleCurrentSkill(item)}/> */}
            </div>
          ))}
        </div>
      </section>
      {/* {
        modal && (
          <div id='modal' onClick={handleModal} className='modal bg-primary-color/90'>
            <div className='modal__container bg-gray-400' onClick={(e)=>e.stopPropagation()}>
    
              <button onClick={handleModal} className="bg-red-700">Cerrar</button>
            </div>
          </div>
        )
      } */}
    </>
  )
}