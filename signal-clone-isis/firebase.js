import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAHzCCbWD169yaeMwtIwNoarsXjtanYQIg",
  authDomain: "signal-clone-d34ab.firebaseapp.com",
  projectId: "signal-clone-d34ab",
  storageBucket: "signal-clone-d34ab.appspot.com",
  messagingSenderId: "164191844208",
  appId: "1:164191844208:web:c68c7853b5d089d428c1b5"
  };

  let app;

  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }
  else
  {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};