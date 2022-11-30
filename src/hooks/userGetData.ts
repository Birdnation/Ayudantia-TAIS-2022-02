import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

async function getData() {
    const q = await getDocs(collection(db,'usuarios'));
    return q.docs;
}

export {getData}