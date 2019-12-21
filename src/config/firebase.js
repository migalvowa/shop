import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwv7JED-wtv-b-gkWVlA09gExfkI3CX1Y",
  authDomain: "shop-62b9c.firebaseapp.com",
  databaseURL: "https://shop-62b9c.firebaseio.com",
  projectId: "shop-62b9c",
  storageBucket: "shop-62b9c.appspot.com",
  messagingSenderId: "149095914839",
  appId: "1:149095914839:web:692e904b779e0478633212"
};

firebase.initializeApp(firebaseConfig);

firebase
  .auth()
  .signInAnonymously()
  .catch(function (error) {
    console.log("Auth error:", error);
  });

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export default firebase;
