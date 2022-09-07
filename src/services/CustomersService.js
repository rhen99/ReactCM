import { firestore } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const setCustomerData = (customer) => {
  return addDoc(collection(firestore, "customers"), customer);
};
export const getCustomersData = (creator_id) => {
  const cidQuery = query(
    collection(firestore, "customers"),
    where("creator_id", "==", creator_id)
  );
  return getDocs(cidQuery);
};
export const deleteCustomerData = (id) => {
  return deleteDoc(doc(firestore, "customers", id));
};
