import './Container.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado } from '@fortawesome/free-solid-svg-icons';

const Container = ({tempInfo, tempValue, temp, icon, infoType, contentAfter, gradient, colorIcon}) => {

  return (
    <div className={`info ${tempInfo} ${contentAfter} temp-container`}>
      {/* indicação de max e min */}
      <div className='temp-info'>
         <p className={`bold ${gradient}`}>{infoType}</p>
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