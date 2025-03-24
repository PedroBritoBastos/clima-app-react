import cities from '../../services/Cidades.json';

// css
import './Query.css';

// components
import Button from '../Button/Button';

import { useState, useEffect, useRef } from 'react';

const Query = ({queryValue, replaceInputValue}) => {

   const [queryResult, setQueryResult] = useState([]);
   const [selected, setSelected] = useState("");
   const optionRef = useRef(null);

   const createOptions = () => {
      // creates the city arrays
      const cityList = cities.map((city) => city.Nome);

      // alter the state of Query Result if city starts with the query value
      let queryResultList = [];
      
      if(queryValue !== "") {
         let query = queryValue.charAt(0).toUpperCase() + queryValue.slice(1).toLowerCase();
         cityList.forEach((cityName) => {
            if (cityName.startsWith(query)) {
               queryResultList.push(cityName);
            }
         });

         setQueryResult(queryResultList)
      }
   }

   useEffect(() => {
      createOptions();
   }, [queryValue])

   // select the first item if there aren't selected items
   useEffect(() => {
      if (queryResult.length > 0) {
         setSelected(queryResult[0]);
      }
   }, [queryResult]);

   const handleSelect = (e) => {
      setSelected(e.target.value);
   }

  return (
   <div className='query'>
      <select id="queryOptions" onChange={handleSelect}>
         { queryValue !== '' ? queryResult.map((result, index) => (
            <option key={index} value={result} ref={optionRef}>
               {result}
            </option>
         )) : <option ref={optionRef}>Cidades</option>}
      </select>
      <Button replaceInputValue={replaceInputValue} selected={selected}/>
   </div>
  )
}

export default Query