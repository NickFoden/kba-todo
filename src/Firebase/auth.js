import { auth } from "../config";

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerUser = (username, email, password) => {
  return auth
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
      db.doCreateUser(authUser.user.uid, email, username);
    })
    .then(function(snap) {
      console.log("The Snap  " + snap);
    })
    .catch(error => {
      console.log(" error " + error);
    });
  // console.log("Error creating a user " + error);
};
