import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfi = {
    apiKey: "AIzaSyBqPOuFdaT-oZGLe9pDrcgqYwyHSk27iHA",
    authDomain: "twitter-clonewfb.firebaseapp.com",
    databaseURL: "https://twitter-clonewfb.firebaseio.com",
    projectId: "twitter-clonewfb",
    storageBucket: "twitter-clonewfb.appspot.com",
    messagingSenderId: "434383129566",
    appId: "1:434383129566:web:1038de68e7fdf3b777eb4f",
    measurementId: "G-KX33RZVGJR"
  };

//   as yeh cheeze apne-firebase-account ki sari info hai and where yeh cheez apn jab apne app ko  firebase-database se connect krenge then vaha apnko yeh infos input krni hogi tabbhi apn apne firebase-database account meh jump kr payenge and usseh access kr payenge..

let firebasei = firebase.initializeApp(firebaseConfi)
// thus toh esseh yeh function apna kaam bhi kr dega and apni return value ess firebasei-container meh return kr dega.

const datab = firebasei.firestore()

export default datab