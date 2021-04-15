import { Home } from './pages/home/index.js';
import { Form } from './pages/form/index.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/form': Form,

  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
// eslint-disable-next-line indent
routeRender();
});
