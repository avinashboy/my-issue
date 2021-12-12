import { createContext } from "react";

const appURL = "https://pwdrest.herokuapp.com/";

const authToken = localStorage.getItem("token")
console.log('authToken context:', authToken)

const initial = {authToken, appURL};

export const Short = createContext(initial);

export const Provider = ({ children }) => {
  return (
    <Short.Provider
      value={initial}
    >
      {children}
    </Short.Provider>
  );
};
