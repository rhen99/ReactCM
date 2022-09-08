import { firestore } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
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

export const updateCustomerData = (newCustomer) => {
  return setDoc(doc(firestore, "customers", newCustomer.id), {
    name: newCustomer.name,
    email: newCustomer.email,
    phone: newCustomer.phone,
    url: newCustomer.url,
    creator_id: newCustomer.creator_id,
  });
};
