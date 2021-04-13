// exporte suas funções

export const myFunction = () => {
  // seu código aqui
  console.log('Olá mundo!');
};

export const createProfile = (email, name, consumption) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, name, consumption);
