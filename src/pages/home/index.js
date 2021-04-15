import ListPolutionCities from '../../services/api.js';

export const Home = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
  <main class='home-element'>
    <div class='rectangle' >
      <h1 class='rectangle-text'>Descubra tudo sobre energia renovável e qual a melhor opção para seu negócio ser mais sustentável</h1>
    </div>
    <input tipe=city>
    <p id='result' id='input'></p>
    <button id='submit'>Go</button>

    <div class='logo'> 
      <img class='img-logo' src="./assets/LOGO_ROXO.png">
    </div>
    <div>
      <p class='title'></p>
        O que são energias renováveis?
      </p>
    </div>
    <div class='container-explication'></div>
      <div class='explication'>
        <h5 class='title'>
          <br>Energias renováveis são aquelas que vem de fontes naturais que se reabastecem e nunca acabam. 
          <br>Em 2020 aproximadamente 80% da energia consumida vinha de combustíveis fósseis.
        </h5>
        <h5 class='title'>
          Vantagens:
          <ul>
            <li>Combate as alterações climáticas: não criam emissão de gases de efeito estufa. As únicas emissões produzidas são as indiretas (que são consequências das operações da empresa de fabricação e instalação das peças, mas que ocorrem em fontes de propriedade de ou controladas por outra empresa), mesmo assim são mínimas;</li>
            <li>Reduzem a poluição, o que ocasiona na diminuição de ameaças à saúde;</li>
            <li>Sistemas eólicos, solares e hidroelétricos não emitem NENHUM tipo de poluição ao ar;</li>
            <li>Sistemas gerotermais e de biomassa são menores que as fontes não renovaveis;</li>
            <li>São fontes de energias confiáveis, nunca acabam;</li>
            <li>Os preços são estáveis por mais tempo já que uma vez construídas, a manutenção das instalações são mais baratas e o combustível muitas vezes  grátis;</li>
          </ul>
        </h5>
      </div>
    </div>

      <section class='energy-info'>
        <p>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
            BIOENERGIA
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseExample">
            BIOGÁS
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseExample">
            BIOMASSA
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseExample">
            ENERGIA SOLAR
          </button>
        </p>
        <div class="collapse" id="collapseOne">
          <div class="card card-body">
            BIOENERGIA
            A  raízen é a maior produtora de energia gerada a partir do bagaço da cana-de-açúcar, aproveitando os coprodutos da cana que são gerados a partir da produçãoo de açúcar e etanol, com capacidade atual para abastecer uma cidade como a do Rio de Janeiro por um ano, por meio de uma fonte constante e previsível, que tem seu pico de produção justamente no período mais seco do ano, quando a matriz hídrica fica mais pressionada.
            É uma energia limpa que reduz a emissão de CO2, um composto químico gasoso que provoca desequilíbrios no efeito estufa e a colheita da cana acontece em períodos que os reservatórios estão em baixa.
          </div>
        </div>
        <div class="collapse" id="collapseTwo">
          <div class="card card-body">
            BIOGÁS
            O biogás é resultado de um complexo processo produtivo, em que biodigestores convertem a matéria orgânica proveniente dos processamentos da cana-de-açúcar, como a torta de filtro (resíduos restantes da purificação do caldo da cana) e a vinhaça (água restante do processo de destilação), em metano e CO2, o chamado biogás. Contribuí para tornar a matriz energética brasileira mais limpa, aumentando o potencial de energia elétrica
            Quando em motogeradores, esse biogás é transformado em energia elétrica limpa e é por isso que temos nossa planta de biogás em Guariba, em São Paulo, com 21 MW de capacidade instalada. Além de ser uma grande fonte de energia renovável, é um substituto do diesel na forma de biometano.

            São dois processos distintos:
            Nos biorreatores verticais (equipamento onde ocorre uma série de reações químicas), são realizadas as biodigestão anaeróbica de torta de filtro, na presença de bactérias, transformando a biomassa da torta em gás.
            Antes da combustão nos motogeradores esse gás passa por um outro processo, de dessufurização, onde ficará pronto para ser inserido em motores onde o gás será queimado e a energia gerada.

            Já a vinhaça, vinda do caldo de cana de açucar, alimenta lagoas de biodigestão. Bactérias presentes no local transformam a matéria orgânica em gás rico em metano. Esse gás precisa ser purificado, após isso ocorre a queima, onde se origina a eletricidade.
            No fim deste processo o subproduto é um adubo turbinado rico em potássio e nitrogênio (compostos orgânicos que dão energia as plantas), que volta a fertilizar o campo. 
          </div>
        </div>
        <div class="collapse" id="collapseThree">
          <div class="card card-body">
            BIOMASSA
            Biomassa é todo tipo de matéria orgânica que possibilita a produção de energia, sendo ela não fóssil. A energia de biomassa, que já responde por 6% da matriz energética nacional, é obtida pela queima de materiais orgânicos, como bagaço de cana, casca de arroz e cavaco de madeira. Em comparação com os combustíveis fósseis, esses resíduos geram menos emissões de gases causadores do efeito estufa.
          </div>
        </div>
        <div class="collapse" id="collapseFour">
          <div class="card card-body">
            ENERGIA SOLAR
            Em mais um passo para o futuro, desenvolvemos a maior planta de energia solar do estado de São Paulo, um projeto piloto em Piracicaba. Sua potência instalada é de 1,3 MWp, suficiente para abastecer um bairro da cidade por um ano. São 3.800 placas solares ocupando um espaço de 40 mil m², o equivalente a dois campos de futebol. Com a planta, alcançamos um novo nível de inovação, que representa a busca por uma gestão energética mais sustentável, baseada em energia limpa, perene e econômica.
          </div>
        </div>
      </section>

      <p>
        Qual é a melhor opção para meu negógio?
        -Consumidores com sua tensão ABAIXO de R$40.000 mensais, têm a opção de utilizar a energia solar economizando até 20%, utilizando o processo de Geração Distribuída.
        -Consumidores com sua tensão ACIMA de R$40.000 mensais, devem migrar para o processo do mercado livre. É uma forma livre de consumir energia em que você pode escolher seu fornecedor de energia, preço, garantia, pagamento e prazo, podendo assim economizar até 30% dos gastos.
      </p>

      <p>
        Por que a Raízen?
        Os processos na Raízen buscam atingir o ideal de que, nada se perde, nada se cria e tudo se transforma. Com esses movimentos de criação de energias renováveis, a Raízen segue se consolidando como uma empresa integrada de energia, contribuindo para uma matriz energética mais limpa, assumindo uma posição de destaque ampliando seu portifólio de renováveis, liderando o processo de transição energética e descarbonização, acelerando o futuro.
        
        OPERAÇÃO SEGURA
        Somos uma das principais distribuidoras de combustíveis do Brasil, posição conquistada e mantida graças ao trabalho de parceiros engajados, com os quais estabelecemos padrões de performance e desenvolvemos iniciativas para preservar a segurança dos profissionais envolvidos nessas operações. Algumas medidas são:
        
        -Monitoramento remoto dos motoristas por meio de sistema de telemetria;
        -Realização de inspeções anuais nas transportadoras contratadas com foco em Saúde, Segurança e Meio Ambiente (SSMA);
        -Somente transportadoras com desempenho superior a 85% podem operar.
        
        GARANTIA DA QUALIDADE
        Detemos certificações e registros que atestam a qualidade dos nossos produtos e a excelência dos nossos processos.
        
        DESENVOLVIMENTO DO ENTORNO
        Além de gerar empregos e movimentar economias, buscamos promover a transformação social nas localidades em que atuamos, ampliando oportunidades para jovens, adultos e crianças.
        
        Vantagens de ser uma empresa com selo Raízen:
        -Reconhecimento por ter uma energia totalmente renovável;
        -Fechando negócio com a Raízen, você consome energia limpa e ainda recebe desconto nas taxas;
        -Ser consumidor de uma empresa que zela por um produto de qualidade, que trás confiança e acompanhamento personalizado ao cliente.
      </p>

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

    <button>Mostrar interesse</button>
    </main>
  `;

  const show = document.getElementById('result');
  const element = document.getElementById('submit');
  element.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const response = async () => {
      await ListPolutionCities(input).then((r) => {
        show.innerHTML = `
        <p id='results>${r}</p>
        `;
      });
    };
    response();
  });
  ListPolutionCities('guarulhos');

  return rootElement;
};
