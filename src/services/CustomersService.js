import { firestore } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const setCustomer = (customer) => {
  return addDoc(collection(firestore, "customers"), customer);
};
export const getUserCustomers = (creator_id) => {
  const cidQuery = query(
    collection(firestore, "customers"),
    where("creator_id", "==", creator_id)
  );
  return getDocs(cidQuery);
};
