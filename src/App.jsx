// components
import Navbar from "./components/Navbar/Navbar"
import Container from "./components/Container/Container"
import CityContainer from "./components/Container/CityContainer";
import WindContainer from "./components/Container/WindContainer";

import getApiData from "./services/api";

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherIcon, setMinIcon, setMaxIcon } from "./slices/iconSlice";

// css
import './App.css';

function App() {
  const dispatch = useDispatch();

  const city = useSelector((state) => state.climate.city);
  const climate = useSelector((state) => state.climate.climate);
  const min = useSelector((state) => state.climate.min);
  const max = useSelector((state) => state.climate.max);
  const weatherId = useSelector((state) => state.climate.weatherId);

  // check for the current city's weather
  dispatch(setWeatherIcon(weatherId));
  dispatch(setMinIcon(min));
  dispatch(setMaxIcon(max));

  const minIcon = useSelector((state) => state.icon.minIcon);
  const maxIcon = useSelector((state) => state.icon.maxIcon);
  const weatherIcon = useSelector((state) => state.icon.weatherIcon);

  return (
    <>
      <Navbar/>
      <div className="wrapper">
        <CityContainer city={city} climate={climate} icon={weatherIcon}/>
        <Container tempInfo={'max-container'} tempValue={'max-value'} temp={max} icon={maxIcon} infoType={"máx"} contentAfter={'info-after-max'} gradient={'gradient-max'} colorIcon={'max-icon'}/>
        <WindContainer/>
      </div>
    </>
  )
}

export default App
