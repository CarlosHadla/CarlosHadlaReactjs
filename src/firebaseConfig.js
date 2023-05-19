
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
 

const firebaseConfig = {
  apiKey: "AIzaSyCzTIIhilkJOb74LZdpOoWjyUhlCp5uKnw",
  authDomain: "dongatobooks.firebaseapp.com",
  projectId: "dongatobooks",
  storageBucket: "dongatobooks.appspot.com",
  messagingSenderId: "634880657214",
  appId: "1:634880657214:web:04af9c61658118aeb78e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
