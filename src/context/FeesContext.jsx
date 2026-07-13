import { createContext, useState, useEffect } from "react";
import feesData from "../data/feesData";


// Create Context
export const FeesContext = createContext();



export const FeesProvider = ({ children }) => {


  // Fees State
  const [fees, setFees] = useState(() => {

    const savedFees = localStorage.getItem("fees");


    return savedFees
      ? JSON.parse(savedFees)
      : feesData;

  });



  // Save Data in Local Storage
  useEffect(() => {

    localStorage.setItem(
      "fees",
      JSON.stringify(fees)
    );

  }, [fees]);



  return (

    <FeesContext.Provider
      value={{
        fees,
        setFees,
      }}
    >

      {children}

    </FeesContext.Provider>

  );

};