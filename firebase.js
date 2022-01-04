import * as firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyBmwN5hQ0sMr2oG6U6LpUiBoQXHMXAirX8',
  authDomain: 'recepies-a2d06.firebaseapp.com',
  projectId: 'recepies-a2d06',
  storageBucket: 'recepies-a2d06.appspot.com',
  messagingSenderId: '450699228159',
  appId: '1:450699228159:web:f6b7040e5a5a94362aedca',
  measurementId: 'G-W12FW0KQH9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
