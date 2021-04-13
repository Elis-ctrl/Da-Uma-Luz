export const Home = () => {
  const rootElement = document.createElement('div');
  Home.classList.add('container');

  rootElement.innerHTML = `
      <aside class='home-element'>
      <p>Texto dentro do elemento</p>
      </aside>
  `;
  return rootElement;
};
