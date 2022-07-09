import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyAj9wF-ZO2bUNlKzggLOhyXO08PFZtHlsI',
  authDomain: 'real-estate-app-edd67.firebaseapp.com',
  projectId: 'real-estate-app-edd67',
  storageBucket: 'real-estate-app-edd67.appspot.com',
  messagingSenderId: '410576611913',
  appId: '1:410576611913:web:aa8a2ce7f37036cb14ad98',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
