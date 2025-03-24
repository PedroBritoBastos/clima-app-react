import './WindContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const WindContainer = () => {
  const wind = useSelector((state) => state.climate.wind);

  return (
    <div className='info wind-container'>
      {/* title */}
      <div className='title-icon'>
         <FontAwesomeIcon icon={faWind} className='wind-icon'/>
         <h1>Vento</h1>
      </div>

      {/* list */}
      <ul className='wind-info-list'>
         <li>
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className='wind-info-icon'/>
            <p>Velocidade:&nbsp; {wind.speed}</p>
         </li>
         <li>
            <FontAwesomeIcon icon={faWind} className='wind-info-icon'/>
            <p>Rajada de vento:&nbsp; {wind.gust}</p>
         </li>
      </ul>
    </div>
  )
}

export default WindContainer