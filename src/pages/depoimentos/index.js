export const Depoimentos = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
    <section class="body">
      <div class='logo'> 
        <img class='img-logo' src="./assets/LOGO_ROXO.png">
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li class="button" data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li class="button" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li class="button" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel">
            <h5 class"depositions">
              DEPOIMENTOS:
            </h5>
          </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p class"depositions">
              “Para além dos selos e certificações de sustentabilidade, 
              a minha microempresa reduziu consideravelmente os gastos com impostos, 
              tendo em vista que as pequenas empresas sofrem com as altas tarifas na energia elétrica.
              Agora eu tenho mais estabilidade no meu fluxo de caixa, pois consigo prever meus custos com energia, 
              fora o retorno do meu investimento.”
            </p>
          </div>
          <div class="carousel-item">
            <p class"depoiments">
              “Aqui em Goianésia, a companhia que fornece energia cobra um valor muito alto 
              e não oferecia um serviço de qualidade. Quando soube sobre energias renováveis, 
              pesquisei bastante, mas a Raízen, me fornece um produto de qualidade, com valor 
              que estava dentro das minhas possibilidades e hoje posso dizer que o retorno 
              financeiro que eu tive e tenho na minha empresa é imenso, em pensar que a minha 
              maior necessidade era qualidade de fornecimento, hoje a minha empresa é considerada 
              também eco-sustentável.”
            </p>
          </div>
          <div class="carousel-item">
            <p class"depoiments">
              “Procurava um serviço que agregasse ainda mais valor à minha doceria vegana, 
              pois para nós a questão ambiental é imprescindível. Quando um fornecedor comentou 
              comigo dos beneficios que teve depois de fechar parceria com a Raízen, eu imediatamente 
              fui atrás da minha parceria também, pois a minha empresa necessitava daquilo tudo. 
              Hoje além de não consumirmos nenhum produto que prejudique animaizinhos, nós também estamos 
              ajudando o meio ambiente utilizando energia renovável.”
            </p>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
      
  `;
  return rootElement;
// eslint-disable-next-line eol-last
};