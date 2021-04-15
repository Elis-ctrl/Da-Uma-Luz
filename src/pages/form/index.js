import { onNavigate } from '../../utils/history.js';
import { addData } from '../../services/index.js';

export const Form = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
  <div>
    <img class="img-logo" src='./assets/logo-roxo.png' alt='logo'>
    <p class="form">Deixe-nos saber como oferecer o melhor para você e o seu negócio!</p>
      <form>
      
      <input type="name" 
      id='name' 
      name='name' 
      placeholder='Digite seu nome' required />
      
      <input type='email' 
      id='email' 
      name='email' 
      placeholder='Digite seu e-mail' required />
      
      <input type='phone' 
      id='phone' 
      name='phone' 
      placeholder='Digite seu telefone' required />
      
      <input type='consumption'
      id='consumption' 
      name='consumption' 
      placeholder='Digite seu consumo mensal' required />
      </form>
      <input class='button' 
      id='submit-form' type='submit' 
      value='Enviar'/>
  </div>
  `;

  const btnRegister = rootElement.querySelector('#submit-form');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();

    const user = {
      name: rootElement.querySelector('#name').value,
      email: rootElement.querySelector('#email').value,
      phone: rootElement.querySelector('#phone').value,
      consumption: rootElement.querySelector('#consumption').value,
    };
    addData(user);

    onNavigate('/');
  });

  return rootElement;
};
