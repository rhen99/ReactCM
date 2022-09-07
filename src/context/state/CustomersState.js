import { createContext, useContext, useReducer } from "react";
import { firestore } from "../../firebase";
import { collection, query, where, addDoc, doc } from "firebase/firestore";
import CustomersReducer from "../reducers/CustomersReducer";

const initalState = {
  customers: [],
};

export const CustomersContext = createContext(initalState);

export const useCustomersContext = () => {
  return useContext(CustomersContext);
};
export const setCustomer = (customer) => {
  return addDoc(collection(firestore, "customers"), customer);
};

export const CustomersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CustomersReducer, initalState);

  const addCustomer = (newCustomer) => {
    dispatch({
      type: "add-customer",
      payload: newCustomer,
    });
  };
  const updateCustomer = (newCustomer) => {
    dispatch({
      type: "update-customer",
      payload: newCustomer,
    });
  };
  const deleteCustomer = (id) => {
    dispatch({
      type: "delete-customer",
      payload: id,
    });
  };
  return (
    <CustomersContext.Provider
      value={{
        customers: state.customers,
        addCustomer,
        deleteCustomer,
        updateCustomer,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};
