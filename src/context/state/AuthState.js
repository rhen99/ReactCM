import { auth } from "../../firebase";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";

import { createContext, useContext, useReducer, useEffect } from "react";
import AuthReducer from "../reducers/AuthReducer";

const initalState = {
  user: null,
};

export const AuthContext = createContext(initalState);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useGoogleSignIn = () => {
  return useSignInWithGoogle(auth);
};

export const signOutUser = () => {
  return auth.signOut();
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initalState);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      return getUser(user);
    }
    return getUser(null);
  }, [user]);

  const getUser = (user) => {
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
        currentUser: state.user,
        removeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
