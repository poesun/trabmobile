// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Se você precisar de autenticação
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
}

const db = firebase.firestore(); // Inicializa o Firestore
const auth = firebase.auth(); // Inicializa a autenticação

export { db, auth };
