export const Energy = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
    <aside class='home-element'>
    <div class='logo'> 
      <img class='img-logo' src="./assets/LOGO_ROXO.png">
    </div>
    <div>
      <p class='title'>
        O que são energias renováveis?
      </p>
    </div>
    <div class='container-explication'>
      <div class='explication'>
        <h5 class='title'>
          Energias renováveis são aquelas que vem de fontes naturais que se reabastecem e nunca acabam. 
          Em 2020 aproximadamente 80% da energia consumida vinha de combustíveis fosseis, sendo eles:
        </h5>
        <div class='graphic'> 
          <img class='img-graphic' src="./assets/gráfico.jpg">
        </div>
      </div>
    </div>
  `;
  return rootElement;
};
