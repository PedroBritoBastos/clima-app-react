import styles from "./SearchButton.module.css";

import { useCityContext } from "../../hooks/useCityContext";

import getApiData from "../../services/api";

export const SearchButton = () => {
  const { updateSearchData, selectedCity } = useCityContext();

  const handleSearch = async (e) => {
    e.stopPropagation();
    const data = await getApiData(selectedCity);
    updateSearchData(data);
  };

  return (
    <button className={`${styles["container"]}`} onClick={handleSearch}>
      Pesquisar
    </button>
  );
};
