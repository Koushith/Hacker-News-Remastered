import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = (props: any) => {
  const { children } = props;

  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };
  // @ts-ignore - fix later
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
