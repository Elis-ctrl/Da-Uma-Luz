// exporte suas funções

export const myFunction = () => {
  // seu código aqui
  console.log('Olá mundo!');
};

export const createProfile = (email, name, consumption) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, name, consumption);

// let input = document.getElementsByClassName('input').value;
// let button = document.getElementsByClassName('submit');
// let show = document.getElementsByClassName('result')
