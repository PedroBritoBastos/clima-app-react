import './Button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// redux
import {useSelector, useDispatch} from "react-redux";
import { getCity, getClimate, getMaxValue, getMinValue, getWeatherId, getAditionalInfo, getWindInfo } from '../../slices/climateSlice';

// data
import cities from '../../services/Cidades.json';
import getApiData from '../../services/api';

const Button = ({selected}) => {
  const state = useSelector((state) => state.climate.value);
  const dispatch = useDispatch();

  // alter the states
  const sendValues = async () => {
   const city = cities.filter((city) => city.Nome === selected); // get the selected city
   const cityName = city[0].Nome;

   // receiving the cities from api
   const res = await getApiData(cityName); 

   // set climate states
   dispatch(getCity(cityName));
   dispatch(getMinValue(res.main.temp_min));
   dispatch(getMaxValue(res.main.temp_max));
   dispatch(getClimate(res.weather[0].description));
   dispatch(getWeatherId(res.weather[0].id));
   dispatch(getAditionalInfo({
      feelsLike: res.main.feels_like,
      seaLevel: res.main.sea_level,
      humidity: res.main.humidity,
      pressure: res.main.pressure
   }));
   dispatch(getWindInfo({
      speed: res.wind.speed,
      gust: res.wind.gust
   }))
  }

  return (
    <button className='searchBtn' onClick={sendValues}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchMagGlass' />
      Procurar
    </button>
  )
}

export default Button