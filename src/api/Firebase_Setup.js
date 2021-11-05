import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config/Firebase_config";

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDb = getFirestore();

export { firebaseApp, firebaseDb }