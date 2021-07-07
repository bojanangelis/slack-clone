import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCox64_WbBSXAkbHwk8CTn2MVKPW-zeLDc",
  authDomain: "slack-clone-29481.firebaseapp.com",
  projectId: "slack-clone-29481",
  storageBucket: "slack-clone-29481.appspot.com",
  messagingSenderId: "1075258819244",
  appId: "1:1075258819244:web:0fe2567d7874c57f085509",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
