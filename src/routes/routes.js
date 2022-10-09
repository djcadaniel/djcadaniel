import {MainLayout} from '../layout';
import { About, Home, Ability, Proyects, Contact } from '../pages';

const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path: '/about',
    layout: MainLayout,
    component: About
  },
  {
    path: '/habilidades',
    layout: MainLayout,
    component: Ability
  },
  {
    path:'/proyectos',
    layout: MainLayout,
    component: Proyects
  },
  {
    path:'/contactame',
    layout: MainLayout,
    component: Contact
  }
]

export default routes;