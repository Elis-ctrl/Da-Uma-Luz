import ListPolutionCities from '../../services/api.js';

export const Home = () => {
  const rootElement = document.createElement('div');

  ListPolutionCities('guarulhos');

  rootElement.innerHTML = `
      <aside class='home-element'>
      <p>Texto dentro do elemento</p>
      </aside>
  `;
  return rootElement;
};
