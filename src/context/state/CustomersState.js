import { createContext, useContext, useReducer } from "react";
import CustomersReducer from "../reducers/CustomersReducer";

const initalState = {
  customers: [
    {
      id: 0,
      name: "John Doe",
      email: "jdoe@test.com",
      phone: "1234567899",
    },
    {
      id: 1,
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      phone: "12345678910",
    },
    {
      id: 2,
      name: "Ken Smith",
      email: "ks@test.com",
      phone: "1234567891011",
    },
  ],
};

export const CustomersContext = createContext(initalState);

export const useCustomersContext = () => {
  return useContext(CustomersContext);
};

export const CustomersProvider = ({ children }) => {
  const [state] = useReducer(CustomersReducer, initalState);
  return (
    <CustomersContext.Provider
      value={{
        customers: state.customers,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};
