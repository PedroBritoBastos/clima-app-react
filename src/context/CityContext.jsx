import { createContext } from "react";
import { useState } from "react";

export const CityContext = createContext();

import cities from "../services/Cidades.json";

export const CityContextProvider = ({ children }) => {
  const [globalCitiesData, setGlobalCitiesData] = useState(cities);
  const [selectedCity, setSelectedCity] = useState(cities[0].Nome);
  const [searchData, setSearchData] = useState(null);

  const updateGlobalCitiesData = (cities) => {
    setGlobalCitiesData(cities);
  };

  const updateSelectedCity = (city) => {
    setSelectedCity(city);
  };

  const updateSearchData = (data) => {
    setSearchData(data);
  };

  return (
    <CityContext.Provider
      value={{
        globalCitiesData,
        selectedCity,
        searchData,
        updateGlobalCitiesData,
        updateSelectedCity,
        updateSearchData,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
