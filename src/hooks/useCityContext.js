import { useContext } from "react";
import { CityContext } from "../context/CityContext";

export const useCityContext = () => {
  const value = useContext(CityContext);
  return value;
};
