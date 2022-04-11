import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUyYL9znJ-XVrdp1xOICp0EM_k4_AyhuE",
  authDomain: "messenger-1869b.firebaseapp.com",
  projectId: "messenger-1869b",
  storageBucket: "messenger-1869b.appspot.com",
  messagingSenderId: "1044959882005",
  appId: "1:1044959882005:web:56b2e672c5aa22c187571c",
  measurementId: "G-CTBKGSBSKR"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { auth, db };