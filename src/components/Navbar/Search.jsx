import styles from "./Search.module.css";

import { useCityContext } from "../../hooks/useCityContext";

import cities from "../../services/Cidades.json";

export const Search = () => {
  const { updateGlobalCitiesData, updateSelectedCity } = useCityContext();

  const handleInputChange = (e) => {
    if (e.target.value.length === 0) {
      updateGlobalCitiesData(cities);
      updateSelectedCity("");
      return;
    }

    const filtered = cities.filter((city) =>
      city.Nome.toLowerCase().startsWith(e.target.value.toLowerCase()),
    );
    updateGlobalCitiesData(filtered);
  };

  return (
    <input
      type="text"
      placeholder="pesquisar"
      id="search"
      className={`${styles["container"]}`}
      onChange={handleInputChange}
    />
  );
};
