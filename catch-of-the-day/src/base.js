import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDp1dPB0yumGnLA4k3hQsCabWD1FEf9plc",
  authDomain: "catch-of-the-day-javespi.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-javespi.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
