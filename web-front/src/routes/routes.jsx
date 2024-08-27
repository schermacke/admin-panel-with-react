import Home from '../pages/Home/index';
import Sobre from '../pages/Sobre/index';
import Conhecimento from '../pages/Conhecimento/index';
import Contato from '../pages/Contato/index';
import NotFound from "../pages/notFound/index";


export const routesList = [
  {
    id: 0,
    description: 'Inicio',
    path: '/',
    component: <Home />
  },
  {
    id: 1,
    description: 'Sobre',
    path: '/sobre',
    component: <Sobre />
  },
  {
    id: 2,
    description: 'Conhecimento',
    path: '/conhecimento',
    component: <Conhecimento />
  },
  {
    id: 3,
    description: 'Contato',
    path: '/contato',
    component: <Contato />
  },
  {
    id: 4,
    description: 'Página Não Encontrada',
    path: '*',
    component: <NotFound />
  }
  
];
