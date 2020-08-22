import React, { createContext, useState } from "react";

export const FarmersFilterContext = createContext();

const FarmersFilterContextProvider = (props) => {
  const [filterText, setFilterText] = useState({});
  const [farmerCards, setFarmerCards] = useState({});

  return (
    <FarmersFilterContext.Provider
      value={{
        filterText: filterText,
        setFilterText: setFilterText,
        farmerCards: farmerCards,
        setFarmerCards: setFarmerCards,
      }}
    >
      {props.children}
    </FarmersFilterContext.Provider>
  );
};

export default FarmersFilterContextProvider;
