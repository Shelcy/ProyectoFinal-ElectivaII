import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebaseConfig"

export const getToDatabase = async (dbName) => {
  const querySnapshot = await getDocs(collection(db, dbName));
  const id= querySnapshot.docs.map(doc => doc.id)
  const data = querySnapshot.docs.map(doc => doc.data())
  return {data, id}
}

export const addToDatabase = async (dbName, data) => {
  await addDoc(collection(db, dbName), data)
}
