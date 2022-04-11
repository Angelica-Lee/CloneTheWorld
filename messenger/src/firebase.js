import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUyYL9znJ-XVrdp1xOICp0EM_k4_AyhuE",
  authDomain: "messenger-1869b.firebaseapp.com",
  projectId: "messenger-1869b",
  storageBucket: "messenger-1869b.appspot.com",
  messagingSenderId: "1044959882005",
  appId: "1:1044959882005:web:56b2e672c5aa22c187571c",
  measurementId: "G-CTBKGSBSKR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;