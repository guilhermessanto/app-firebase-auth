import { initializeApp } from "firebase/app";
/* Importando recursos da biblioteca de autenticação do Firebase */
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzscYkpSmmePTTIwjQHby2M4WKsfE92-4",
  authDomain: "app-autenticacao-6efd2.firebaseapp.com",
  projectId: "app-autenticacao-6efd2",
  storageBucket: "app-autenticacao-6efd2.appspot.com",
  messagingSenderId: "493019110779",
  appId: "1:493019110779:web:25ac3d5b41ec6604c131de",
};

export const app = initializeApp(firebaseConfig);
/* Exportando os recursos de autenticação da biblioteca */
export const auth = getAuth(app);
