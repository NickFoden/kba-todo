## KBA Todo

Somethings get lost in the verbal ticket creation system that many people in my office enjoy using.

So this is a straightforward app that will let our office add tasks to a list of todos. And later be able to upload and tag documents with tasks. Creating an SOP for the office.

To run this repo you will need to add a config.js file at same level as App.js

import firebase from "firebase";

grab this config object from your firebase console

"Add Firebase to your web app"

let config = {
apiKey: "yourkeyhere",
authDomain: "yourapp.com",
databaseURL: "https://yourapp.firebaseio.com",
projectId: "yourapp",
storageBucket: "yourapp.appspot.com",
messagingSenderId: "911111111111"
};
if (!firebase.apps.length) {
firebase.initializeApp(config);
}
let storage = firebase.storage();

const db = firebase.database();
const auth = firebase.auth();
const ref = firebase.database().ref();
const storageRef = storage.ref();

export { firebase, auth, db, ref, storageRef };
