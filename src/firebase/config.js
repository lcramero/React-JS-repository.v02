import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoSq3YP0uZrv5KbafWyMFqXg3FHKUcdV4",
    authDomain: "react-app-v02-bbdd.firebaseapp.com",
    projectId: "react-app-v02-bbdd",
    storageBucket: "react-app-v02-bbdd.appspot.com",
    messagingSenderId: "408439653667",
    appId: "1:408439653667:web:d29045d3b90a60efe13896",
    measurementId: "G-FMZVJL3Q9J"
};

//Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)
export const getFirestore = () => {
    return firebase.firestore(app)
}