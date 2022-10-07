import {MainLayout} from '../layout';
import { About, Home } from '../pages';

const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path: 'about',
    layout: MainLayout,
    component: About
  }
]

export default routes;