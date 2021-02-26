import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5uZWGtfYhqJbtvt3a7sbXlUwwTrKNqRk",
    authDomain: "netflix-clone-a0180.firebaseapp.com",
    projectId: "netflix-clone-a0180",
    storageBucket: "netflix-clone-a0180.appspot.com",
    messagingSenderId: "349953232834",
    appId: "1:349953232834:web:8884836112a25b9a44105b",
    measurementId: "G-VQ08MRNRKK"
  };

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export {firebase};