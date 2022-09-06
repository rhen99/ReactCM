const ACTIONS = {
  GET_USER: "get-user",
  REMOVE_USER: "remove-user",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER:
      return { ...state, user: action.payload };
    case ACTIONS.REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
