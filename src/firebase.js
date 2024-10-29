// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Se você precisar de autenticação
import 'firebase/firestore'; // Se você precisar de Firestore

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_STORAGE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SEU_APP_ID',
};

// Inicialize o Firebase se ainda não estiver inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore(); // Inicializa o Firestore
const auth = firebase.auth(); // Inicializa a autenticação

export { db, auth };
