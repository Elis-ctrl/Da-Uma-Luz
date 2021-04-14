// pages/home/index.js
import ListPolutionCities from '../../services/api.js';

const rootElement = document.createElement('div');
const show = document.getElementById('result');

export const Home = () => {
  const element = document.getElementById('submit');
  element.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const response = async () => {
      await ListPolutionCities(input).then((r) => {
        show.innerHTML = `
        <p>${r}</p>
        `;
      });
    };
    response();
  });
  ListPolutionCities('guarulhos');
  return rootElement;
};
