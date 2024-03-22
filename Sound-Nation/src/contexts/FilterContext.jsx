import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [dataFilters, setDataFilters] = useState({});

  return (
    <FilterContext.Provider value={{ dataFilters, setDataFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
