const ListPolutionCities = async (cidade) => {
  let airQuality = '';

  // eslint-disable-next-line prefer-template
  await fetch('https://api.waqi.info/feed/' + cidade + '/?token=2a8aa0c29b06e31c01bffc261d84b76dc7df73be')
    .then((response) => response.json())
    .then((json) => {
      const aqi = json.data.aqi;
      if (aqi >= 0 && aqi <= 40) {
        airQuality = 'Qualidade do ar: Boa';
      } else if (aqi >= 41 && aqi <= 80) {
        airQuality = 'Qualidade do ar: Moderada';
      } else if (aqi >= 81 && aqi <= 120) {
        airQuality = 'Qualidade do ar: Ruim';
      } else if (aqi >= 121 && aqi <= 200) {
        airQuality = 'Qualidade do ar: Muito Ruim';
      } else if (aqi >= 201) {
        airQuality = 'Qualidade do ar: Péssima';
      } else {
        alert('Verifique se nome da cidade esta escrita corretamente');
      }
    })
    .catch((erro) => console.error(erro.message));

  return airQuality;
};
export default ListPolutionCities;

/*
AQI = Índice de Qualidade do Ar

0 - 40: Boa
41 - 80: Moderada
81 – 120: Ruim
121 – 200: Muito Ruim
> 200: Péssima

https://servicos.cetesb.sp.gov.br/qa/
*/
