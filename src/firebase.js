// src/firebase.js
import firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import 'firebase/firestore'; // Se você precisar de Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAUiRprJ7qPKIRK9yHxtWQPP6OFyjNWDGY",
  authDomain: "database-b0fef.firebaseapp.com",
  projectId: "database-b0fef",
  storageBucket: "database-b0fef.appspot.com",
  messagingSenderId: "79271479086",
  appId: "1:79271479086:web:5ad4803a742590d8355cbf"
};

// Inicialize o Firebase se ainda não estiver inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.getAuth(getAuth)
}

const db = firebase.firestore(); // Inicializa o Firestore
const autenticação = firebase.auth() // Inicializa a autenticação
const createUserWithEmailAndPassword = firebase.createUserWithEmailAndPassword()
const signInWithEmailAndPassword = firebase.signInWithEmailAndPassword()
const onAuthStateChanged = firebase.onAuthStateChanged()
const signOut= firebase.signOut()

export { db, autenticação ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut};
