import "../../globals.css";
import styles from "./Temperature.module.css";

import { Info } from "../ui/Info";
import { MainInfo } from "../ui/MainInfo";

import { useCityContext } from "../../hooks/useCityContext";

import { capitalize } from "../../utils/format";

export const Temperature = () => {
  const { searchData } = useCityContext();

  if (!searchData) {
    return (
      <div className={`container ${styles["container"]}`}>
        <MainInfo>
          <p>Carregando...</p>
        </MainInfo>
      </div>
    );
  }

  return (
    <div className={`container ${styles["container"]}`}>
      <MainInfo>
        <p className={`${styles["temperatureValue-city"]}`}>
          {searchData.name}
        </p>
        <p
          className={`${styles["temperatureValue-value"]}`}
        >{`${searchData.main?.temp || "N/A"}ºC`}</p>
      </MainInfo>

      <Info>
        <div className={styles["description"]}>
          <p>{capitalize(searchData.weather[0].description)}</p>
        </div>
      </Info>

      <Info>{`Máxima: ${searchData.main.temp_max}`}</Info>
      <Info>{`Mínima: ${searchData.main.temp_min}`}</Info>
      <Info>{`Sensação térmica: ${searchData.main.feels_like}`}</Info>
    </div>
  );
};
