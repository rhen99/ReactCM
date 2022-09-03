const ACTIONS = {
  AUTHENTICATE: "authenticate",
  UNAUTHENTICATE: "unauthenticate",
  GET_USER: "get-user",
  REMOVE_USER: "remove-user",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATE:
      return { ...state, isAuthenticated: action.payload };
    case ACTIONS.UNAUTHENTICATE:
      return { ...state, isAuthenticated: false };
    case ACTIONS.GET_USER:
      return { ...state, user: action.payload };
    case ACTIONS.REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
