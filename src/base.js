import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "Akey",
    authDomain: "catch-of-the-day-hans-4869c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-hans-4869c.firebaseio.com"
  });


const base = Rebase.createClass(firebase.database());

// this is a named export
export {firebaseApp};

// this is a default export
export default base;