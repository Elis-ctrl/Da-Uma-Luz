// let input = document.getElementsByClassName('input').value;
// let button = document.getElementsByClassName('submit');
// let show = document.getElementsByClassName('result')

const ListPolutionCities = async (cidade) => {

  fetch('https://api.waqi.info/feed/' + cidade + '/?token=2a8aa0c29b06e31c01bffc261d84b76dc7df73be')
  .then(response => response.json())
  .then(json => {
    console.log(json.data);
    const aqi = json.data.aqi;
    if (aqi >= 0 && aqi <= 40) {
      console.log('Qualidade do ar: Boa');
    } else if (aqi >= 41 && aqi <= 80) {
      console.log('Qualidade do ar: Moderada');
    } else if (aqi >= 81 && aqi <= 120) {
      console.log('Qualidade do ar: Ruim');
    } else if (aqi >= 121 && aqi <= 200) {
      console.log('Qualidade do ar: Muito Ruim');
    } else if (aqi >= 201) {
      console.log('Qualidade do ar: Péssima');
    } else {
      console.log('erro');
    }
  })
  .catch(erro => console.error(erro.message));
}
export default ListPolutionCities;


/*
AQI = Índice de Qualidade do Ar

0 - 40: Boa
41 - 80: Moderada
81 – 120: Ruim
121 – 200: Muito Ruim
> 200: Péssima
*/
