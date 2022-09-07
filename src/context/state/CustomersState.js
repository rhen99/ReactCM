import { createContext, useContext, useReducer, useEffect } from "react";
import CustomersReducer from "../reducers/CustomersReducer";
import { useAuthContext } from "./AuthState";
import { setCustomer, getUserCustomers } from "../../services/CustomersService";

const initalState = {
  customers: [],
};

export const CustomersContext = createContext(initalState);

export const useCustomersContext = () => {
  return useContext(CustomersContext);
};

export const CustomersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CustomersReducer, initalState);
  const { currentUser } = useAuthContext();

  const addCustomer = (newCustomer) => {
    setCustomer(newCustomer)
      .then((docRef) => {
        dispatch({
          type: "add-customer",
          payload: { ...newCustomer, id: docRef.id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCustomers = (user_id) => {
    getUserCustomers(user_id)
      .then((querySnapshot) => {
        const customersArr = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let customerObj = {
            id: doc.ref,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone,
            url: doc.data().url,
          };
          customersArr.push(customerObj);
        });
        dispatch({
          type: "get-customers",
          payload: customersArr,
        });
      })
      .catch((err) => console.log(err));
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

  useEffect(() => {
    if (currentUser) {
      getCustomers(currentUser.uid);
    }
  }, [currentUser]);
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
