import { Home } from './pages/home/index.js';
import { Form } from './pages/form/index.js';
import { Clapping } from './pages/clapping/index.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/form': Form,
    '/clapping': Clapping,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
// eslint-disable-next-line indent
routeRender();
});
