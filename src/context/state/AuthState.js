import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

const initalState = {
  isAuthenticated: false,
  user: null,
};

export const AuthContext = createContext(initalState);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initalState);

  const signIn = () => {
    dispatch({
      type: "authenticate",
      payload: true,
    });
    dispatch({
      type: "get-user",
      payload: {},
    });
  };
  const signOut = () => {
    dispatch({
      type: "unauthenticate",
    });
    dispatch({
      type: "remove-user",
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
