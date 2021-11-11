import {firebaseDb} from "../api/Firebase_setup.js";
import {collection, getDocs} from 'firebase/firestore/lite';


const testCol = collection(firebaseDb,'test');
const testSnapshot = await getDocs(testCol);
testSnapshot.docs.forEach((doc)=>{console.log(doc.data())});


export default{

}