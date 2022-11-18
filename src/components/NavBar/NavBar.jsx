import { Link, useLocation, useNavigate } from 'react-router-dom';
import IconLogo from '../../assets/img/icons/logo.svg';
import IconDownload from '../../assets/img/icons/download.svg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import cv from '../../assets/cv/cvFront.pdf';
import './NavBar.css';
import { useMenu } from '../../hooks/useMenu';
import { NestNextDoor } from './NestNextDoor';

export const NavBar = () => {

  const {menu, handleToogleMenu, toggleMenu} = useMenu();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollRutas = (nameSection)=>{
    if(pathname == '/'){
      window.scroll({top: nameSection.getBoundingClientRect().y, left:0, behavior:"smooth"});
    }else{
      navigate('/');
      setTimeout(() => {
        window.scroll({top: nameSection.getBoundingClientRect().y, left:0, behavior:"smooth"});
      }, 300);
    }
  }
  const redirectAbout =(ruta)=>{
    console.log(ruta)
    switch (ruta) {
      case 'about':
        const sectionAbout = document.getElementById('sectionAbout');
        scrollRutas(sectionAbout);
      break;
      case 'habilidades':
        const sectionAbilities = document.getElementById('sectionAbilities');
        scrollRutas(sectionAbilities);
        break;
      default:
        break;
    }
    handleToogleMenu();
  }

  return (
    <header className="header" id='home'>
      <nav className='nav'>
        <Link to='/'>
          <img className='nav__logo' src={IconLogo} alt="" />
        </Link>
        <ul className={(toggleMenu && 'active') + ' nav__menu' }>
          {
            menu.map((item, index)=>(
              <li key={index} onClick={()=>redirectAbout(item.ruta)}>
                {/* <Link onClick={handleToogleMenu} to={item.path}> */}
                  <span className='menu__number'>{item.id}</span>{item.title}
                {/* </Link> */}
              </li>
            ))
          }
          <div className='nav__menu--cv'>
            <p>CV</p>
            <a href={cv} target='_blank'>
              <img src={IconDownload} alt="Icono de descargar CV" />
            </a>
          </div>
        </ul>
        <div onClick={handleToogleMenu} className="nav__icon">
          <p>{toggleMenu ? <AiOutlineClose/> : <GiHamburgerMenu /> }</p>
        </div>
      </nav>
      <NestNextDoor />
    </header>
  )
}