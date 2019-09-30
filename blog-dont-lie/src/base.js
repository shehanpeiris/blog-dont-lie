import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANvqgSdaUTH8OEQCN18t3tYgeH38xypls",
  authDomain: "blog-dont-lie-test.firebaseapp.com",
  databaseURL: "https://blog-dont-lie-test.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;