<template>
  <div>Empty</div>
</template>
<script>
import { firebaseDb } from "../api/Firebase_setup.js";
import { collection, getDocs } from "firebase/firestore/lite";

async function getTest(db) {
  const testCol = collection(db, 'test');
  const testSnapshot = await getDocs(testCol);
  testSnapshot.docs.forEach((doc) => {
    console.log(doc.data());
  });
}
getTest(firebaseDb);
export default {};
</script>
<style scoped>
</style>