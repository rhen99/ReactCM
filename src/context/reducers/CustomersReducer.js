const ACTIONS = {
  GET_CUSTOMERS: "get-customer",
  ADD_CUSTOMER: "add-customer",
  UPDATE_CUSTOMER: "update-customer",
  DELETE_CUSTOMER: "delete-customer",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_CUSTOMERS:
      return { ...state, customers: action.payload };
    case ACTIONS.ADD_CUSTOMERS:
      return { ...state, customers: [...state.customers, action.payload] };
    case ACTIONS.UPDATE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.map((customer) => {
          if (customer.id === action.payload.id) {
            return action.payload.updatedCustomer;
          }
          return customer;
        }),
      };
    case ACTIONS.DELETE_CUSTOMERS:
      return {
        ...state,
        customers: state.filter((customer) => {
          return customer.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
