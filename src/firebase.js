import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC6348d6FJWDtYegQn6aQhKI8CPnB_4Njg',
  authDomain: 'm-city-nzmai.firebaseapp.com',
  databaseURL: 'https://m-city-nzmai.firebaseio.com',
  projectId: 'm-city-nzmai',
  storageBucket: 'm-city-nzmai.appspot.com',
  messagingSenderId: '104422193656'
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers
};
