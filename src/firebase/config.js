// Your web app's Firebase configuration

import * as firebase from 'firebase/app';
import   'firebase/firestore';
import   'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBsy-i6OXsFmZNPY8xgIBqL04Hx7cwszks",
    authDomain: "firegram-fffdb.firebaseapp.com",
    databaseURL: "https://firegram-fffdb.firebaseio.com",
    projectId: "firegram-fffdb",
    storageBucket: "firegram-fffdb.appspot.com",
    messagingSenderId: "1045065296924",
    appId: "1:1045065296924:web:3dce58ebe41682435c83d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const ProjectStorage = firebase.storage();
  const ProjectFirestore = firebase.firestore();
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;

  export { ProjectStorage, ProjectFirestore,timestamp };
