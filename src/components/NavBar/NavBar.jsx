import './NavBar.css';
import IconLogo from '../../assets/img/icons/logo.svg';
import { Link } from 'react-router-dom';
import IconDownload from '../../assets/img/icons/download.svg';

export const NavBar = () => {

  const menu = [
    {
      id : '01.',
      path: '/about',
      title: 'Acerca de mí'
    },
    {
      id : '02.',
      path: '/ability',
      title: 'Habilidades'
    },
    {
      id : '03.',
      path: '/works',
      title: 'trabajos'
    },
    {
      id : '04.',
      path: '/contact',
      title: 'Contáctame'
    }
  ]

  return (
    <header className="header">
      <nav className='nav content'>
        <img src={IconLogo} alt="" />
        <ul className='nav__menu'>
          {
            menu.map((item, index)=>(
              <li key={index}>
                <Link to={item.path}>
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
      </nav>
    </header>
  )
}