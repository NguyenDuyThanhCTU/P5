import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isUploadProduct, setIsUploadProduct] = useState("");
  const [isSelected, setSelected] = useState(0);
  const [isRefetch, setIsRefetch] = useState("");

  //custom
  const [isLoading, setIsLoading] = useState(false);
  const [isSort, setIsSort] = useState("");

  return (
    <StateContext.Provider
      value={{
        isSort,
        setIsSort,
        isLoading,
        setIsLoading,
        isSelected,
        setSelected,
        isRefetch,
        setIsRefetch,
        isUploadProduct,
        setIsUploadProduct,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);