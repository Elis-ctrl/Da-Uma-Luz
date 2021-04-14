const collection = 'users';

export const addData = (user) => {
  firebase.firestore().collection(collection)
    .add(user)
    .then((docRef) => {
      console.log('inserido', docRef.id);
    })
    .catch((error) => {
      console.log(error);
    });
};
