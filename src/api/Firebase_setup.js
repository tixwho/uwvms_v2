import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { firebaseConfig } from "../config/Firebase_config";

//for pure JS file, Naming: Upper_case_first.js
//for vue file, Naming: AlwaysUpperFirst.vue

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDb = getFirestore(firebaseApp);

export {firebaseApp,firebaseDb};
