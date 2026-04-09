import styles from "./Select.module.css";
import { useCityContext } from "../../hooks/useCityContext";

export const Select = () => {
  const { globalCitiesData, updateSelectedCity, selectedCity } =
    useCityContext();

  return (
    <select
      name="cities"
      id="cities"
      className={`${styles["container"]}`}
      value={selectedCity}
      onChange={(e) => updateSelectedCity(e.target.value)}
    >
      {globalCitiesData.map((cityData) => (
        <option key={cityData.ID} value={cityData.Nome}>
          {cityData.Nome}
        </option>
      ))}
    </select>
  );
};
