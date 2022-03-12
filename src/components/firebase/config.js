import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrNcTvOFQ-hZD03AgGpa9Wux9xclcjp-o",
  authDomain: "proyecto-coderhouse-79233.firebaseapp.com",
  projectId: "proyecto-coderhouse-79233",
  storageBucket: "proyecto-coderhouse-79233.appspot.com",
  messagingSenderId: "663225850460",
  appId: "1:663225850460:web:4a01031e32ff4b81dbe499",
  measurementId: "G-JY27R7K3EN"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
