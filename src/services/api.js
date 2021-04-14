// let input = document.getElementsByClassName('input').value;
// let button = document.getElementsByClassName('submit');
// let show = document.getElementsByClassName('result')

const ListPolutionCities = async (cidade) => {

  fetch('https://api.waqi.info/feed/' + cidade + '/?token=2a8aa0c29b06e31c01bffc261d84b76dc7df73be')
  .then(response => response.json())
  .then(json => console.log(json.data))
  .catch(erro => console.error(erro.message));
}
export default ListPolutionCities;
