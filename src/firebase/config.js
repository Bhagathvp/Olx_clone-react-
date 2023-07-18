import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCueNaoze87RCl-rTP6rGNESR6i21dt5C8",
    authDomain: "olx-clone-97bb1.firebaseapp.com",
    projectId: "olx-clone-97bb1",
    storageBucket: "olx-clone-97bb1.appspot.com",
    messagingSenderId: "647986514016",
    appId: "1:647986514016:web:5abb4368d71d0365435b05",
    measurementId: "G-VDV7H5F162"
  };

 export default firebase.initializeApp(firebaseConfig)