import "../../globals.css";
import styles from "./Weather.module.css";

import { MainInfo } from "../ui/MainInfo";
import { Info } from "../ui/Info";
import { InfoIcon } from "../ui/InfoIcon";

import { useCityContext } from "../../hooks/useCityContext";

export const Weather = () => {
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
        <p className={styles["info"]}>Informações adicionais</p>
      </MainInfo>

      <Info>
        <InfoIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mountain-snow-icon lucide-mountain-snow"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
          </svg>
        </InfoIcon>
        {`Nível do solo: ${searchData.main.grnd_level}`}
      </Info>
      <Info>
        <InfoIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-droplet-icon lucide-droplet"
          >
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
          </svg>
        </InfoIcon>
        {`Humidade: ${searchData.main.humidity}`}
      </Info>
      <Info>
        <InfoIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-gauge-icon lucide-circle-gauge"
          >
            <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
            <circle cx="12" cy="12" r="2" />
            <path d="M13.4 10.6 19 5" />
          </svg>
        </InfoIcon>
        {`Pressão: ${searchData.main.pressure}`}
      </Info>
      <Info>
        <InfoIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-fish-icon lucide-fish"
          >
            <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
            <path d="M18 12v.5" />
            <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
            <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
            <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
            <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
          </svg>
        </InfoIcon>
        {`Nível do mar: ${searchData.main.sea_level}`}
      </Info>
      <Info>
        <InfoIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-wind-icon lucide-wind"
          >
            <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
            <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
            <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
          </svg>
        </InfoIcon>
        {`Vento: ${searchData.wind.speed}`}
      </Info>
    </div>
  );
};
