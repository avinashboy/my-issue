import React,{ createContext, useState } from "react";

const appURL = "http://localhost:3030/";
// const appURL = "https://pwdrest.herokuapp.com/";

const authToken = localStorage.getItem("token") || "sdsd"
console.log('authToken context:', authToken)

const initial = {authToken, appURL};

export const Short = createContext(initial);

export const Provider = ({ children }) => {
  const [data, setData] = useState(initial)
  return (
    <Short.Provider
      value={{data, setData}}
    >
      {children}
    </Short.Provider>
  );
};