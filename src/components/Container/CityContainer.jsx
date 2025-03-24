import './Container.css';
import './CityContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const CityContainer = ({city, climate, icon}) => {
  const aditionalInfo = useSelector((state) => state.climate.aditionalInfo);
  console.log(aditionalInfo)

  return (
    <div className='info city-container city-grid city-container-wrapper'>
      

      <div className='city-info-container'>
         <div className='city-info'>
            <FontAwesomeIcon icon={faCity} className='city-icon'/>
            <p className='city-name bold gradient-white'>{city}</p>
         </div>

         <div className='climate-info'>
            <p className='climate bold gradient-white'>Clima</p>
            <FontAwesomeIcon icon={icon} className='climate-icon'/>
         </div>
         <p className='climate-value gradient-white'>{climate}</p>
      </div>
      
      {/* other info container */}
      <div className='aditional-container'>
         <ul className='aditionalInfo-list'>
            <li>
               <FontAwesomeIcon icon={faTemperatureThreeQuarters} className='climate-icon'/>
               <p>Sensação térmica:&nbsp; {aditionalInfo.feelsLike}</p>
            </li>
            <li>
               <FontAwesomeIcon icon={faWater} className='climate-icon'/>
               <p>Umidade:&nbsp; {aditionalInfo.humidity} %</p>
            </li>
            <li>
               <FontAwesomeIcon icon={faWeightScale} className='climate-icon'/>
               <p>Pressão:&nbsp; {aditionalInfo.pressure}</p>
            </li>
            <li>
               <FontAwesomeIcon icon={faUmbrellaBeach} className='climate-icon'/>
               <p>Nível do mar:&nbsp; {aditionalInfo.seaLevel}</p>
            </li>
         </ul>
      </div>
   </div>
  )
}

export default CityContainer