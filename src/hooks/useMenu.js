import { useEffect, useState } from "react";

export const useMenu = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToogleMenu = () =>{
    setToggleMenu(!toggleMenu);
  }
  useEffect(() => {
    console.log('montado')
    // window.addEventListener("scroll",handleScroll)
  }, [])

  const menu = [
    {
      id : '01.',
      ruta: 'inicio',
      path: '/',
      title: 'Inicio',
    },
    {
      id : '02.',
      ruta: 'about',
      path: '/about',
      title: 'Acerca de mí',
    },
    {
      id: '03.',
      ruta : 'habilidades',
      path: '/habilidades',
      title: 'Habilidades',
    },
    {
      id: '04.',
      ruta : 'proyectos',
      path: '/proyectos',
      title: 'Proyectos',
    },
    {
      id : '05.',
      ruta: 'contactame',
      path: '/contactame',
      title: 'Contáctame'
    }
  ]

  return{
    menu,
    handleToogleMenu,
    toggleMenu
  }
}
