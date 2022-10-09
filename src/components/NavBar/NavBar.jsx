import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconLogo from '../../assets/img/icons/logo.svg';
import IconDownload from '../../assets/img/icons/download.svg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import './NavBar.css';

export const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToogleMenu = () =>{
    setToggleMenu(!toggleMenu);
  }

  const menu = [
    {
      id : '01.',
      path: '/about',
      title: 'Acerca de mí'
    },
    {
      id : '02.',
      path: '/habilidades',
      title: 'Habilidades'
    },
    {
      id : '03.',
      path: '/proyectos',
      title: 'trabajos'
    },
    {
      id : '04.',
      path: '/contactame',
      title: 'Contáctame'
    }
  ]

  return (
    <header className="header">
      <nav className='nav content'>
        <Link>
          <img src={IconLogo} alt="" />
        </Link>
        <ul className={(toggleMenu && 'active') + ' nav__menu' }>
          {
            menu.map((item, index)=>(
              <li key={index}>
                <Link onClick={handleToogleMenu} to={item.path}>
                  <span className='menu__number'>{item.id} </span>{item.title}
                </Link>
              </li>
            ))
          }
          <div className='nav__menu--cv'>
            <p>CV</p>
            <a href="" target='_blank'>
              <img src={IconDownload} alt="Icono de descargar CV" />
            </a>
          </div>
        </ul>
        <div onClick={handleToogleMenu} className="nav__icon">
          <p>{toggleMenu ? <AiOutlineClose/> : <GiHamburgerMenu /> }</p>
        </div>
      </nav>
    </header>
  )
}