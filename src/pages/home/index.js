export const Home = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = ` 
      <aside class='home-element'>
      </aside>  
      <div id="main-container" >
      <h1>Descubra tudo sobre energia renovável e qual a melhor opção para seu negócio ser mais sustentável</h1>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

  `;
  return rootElement;
};
