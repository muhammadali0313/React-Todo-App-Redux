// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPMso8rfcZ5ah5gJRrvyqk60FWV0g_aBA",
    authDomain: "todo-app-d3fa3.firebaseapp.com",
    projectId: "todo-app-d3fa3",
    storageBucket: "todo-app-d3fa3.appspot.com",
    messagingSenderId: "241408984366",
    appId: "1:241408984366:web:3c606e4a2a2b3dc06926bf"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
