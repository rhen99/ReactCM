import { auth } from "../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

const initalState = {
  user: null,
};

export const AuthContext = createContext(initalState);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useGoogleSignIn = () => useSignInWithGoogle(auth);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initalState);

  const signIn = (user) => {
    dispatch({
      type: "get-user",
      payload: user,
    });
  };
  const removeUser = () => {
    dispatch({
      type: "remove-user",
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        signIn,
        removeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
