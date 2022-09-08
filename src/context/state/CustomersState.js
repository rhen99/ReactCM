import { createContext, useContext, useReducer, useEffect } from "react";
import CustomersReducer from "../reducers/CustomersReducer";
import { useAuthContext } from "./AuthState";
import {
  setCustomerData,
  getCustomersData,
  deleteCustomerData,
  updateCustomerData,
} from "../../services/CustomersService";

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
    setCustomerData(newCustomer)
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
    getCustomersData(user_id)
      .then((querySnapshot) => {
        const customersArr = [];
        querySnapshot.forEach((doc) => {
          let customerObj = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone,
            url: doc.data().url,
            creator_id: doc.data().creator_id,
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
    updateCustomerData(newCustomer)
      .then(() => {
        dispatch({
          type: "update-customer",
          payload: newCustomer,
        });
      })
      .catch((err) => console.log(err));
  };
  const deleteCustomer = (id) => {
    deleteCustomerData(id)
      .then(() => {
        dispatch({
          type: "delete-customer",
          payload: id,
        });
      })
      .catch((err) => console.log(err));
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
