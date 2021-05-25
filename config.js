import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyAbuhhNAq705YUyBhwFRBatWc8GVMy7nC0",
  authDomain: "booksanta-ffd99.firebaseapp.com",
  projectId: "booksanta-ffd99",
  storageBucket: "booksanta-ffd99.appspot.com",
  messagingSenderId: "551711226173",
  appId: "1:551711226173:web:8a9588ab5c15672e4b2d54"
};
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   export default firebase.firestore()