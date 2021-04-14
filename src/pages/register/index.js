export const Register = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
  <div>
      <form>
      <input type="name" 
      id='name-input' 
      name='name' 
      placeholder='Digite seu nome' required />
      <input type='email' 
      id='email-input' 
      name='email' 
      placeholder='Digite seu e-mail' required />
      <input type="consumption" 
      id='consumption-input' 
      name='consumption' 
      placeholder='Digite seu consumo mensal' required />
      <input class='button' 
      id='submit' type='submit' 
      value='Ver meu perfil'/> 
      </form>
  </div>
  `;
  return rootElement;
};
