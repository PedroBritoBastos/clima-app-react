import './Container.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado } from '@fortawesome/free-solid-svg-icons';

const Container = ({tempInfo, tempValue, temp, icon, contentAfter}) => {

  return (
    <div className={`info ${tempInfo} ${contentAfter} temp-container`}>
      <div className='temp-info'>
         <p className={`bold`}>Temp</p>
         <FontAwesomeIcon icon={icon} className={`cloud`}/>
      </div>

      {/* valores */}
      <div className={`temp-value ${tempValue}`}>
         <p className={`value gradient-white`}>{temp}</p>
         <p className={`unit bold`}>°C</p>
      </div>
    </div>
  )
}

export default Container