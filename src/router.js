import { Depoimentos } from './pages/depoimentos/index.js';
import { Energy } from './pages/energy/index.js';
import { Register } from './pages/register/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Energy,
    '/depoimentos': Depoimentos,
    '/register': Register,

  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('energy')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });
  document
    .getElementById('depoimentos')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/depoimentos');
    });
  document
    .getElementById('register')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register');
    });

  routeRender();
});
