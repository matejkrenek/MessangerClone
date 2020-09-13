import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDGFmCf2pyblTA93yNvgMYskPyjc0GnPik",
        authDomain: "messenger-clone-f5763.firebaseapp.com",
        databaseURL: "https://messenger-clone-f5763.firebaseio.com",
        projectId: "messenger-clone-f5763",
        storageBucket: "messenger-clone-f5763.appspot.com",
        messagingSenderId: "604018006279",
        appId: "1:604018006279:web:528eb721ebff0812c14da2"

  });

  const db = firebaseApp.firestore();

  export default db;