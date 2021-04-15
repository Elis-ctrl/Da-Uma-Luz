export const Home = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
    <main class='home-element'>
      <section class='energy-info'>
        <p>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
            Bioenergia
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseExample">
            Biogás
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseExample">
            Biomassa
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseExample">
            Energia Solar
          </button>
        </p>
        <div class="collapse" id="collapseOne">
          <div class="card card-body">
            Bioenergia
          </div>
        </div>
        <div class="collapse" id="collapseTwo">
          <div class="card card-body">
            Biogás
          </div>
        </div>
        <div class="collapse" id="collapseThree">
          <div class="card card-body">
            Biomassa
          </div>
        </div>
        <div class="collapse" id="collapseFour">
          <div class="card card-body">
            Energia solar
          </div>
        </div>
      </section>
    </main>
  `;
  return rootElement;
};
