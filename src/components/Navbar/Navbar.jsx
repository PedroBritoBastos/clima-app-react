// css
import './Navbar.css';

// components
import Query from '../Query/Query';


import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// redux
import {useSelector, useDispatch} from "react-redux";
import { getCity, getClimate, getMaxValue, getMinValue } from '../../slices/climateSlice';

const Navbar = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // replaces the input value with the value selected in query
  const replaceInputValue = (value) => {
    inputRef.current.value = value;
  }

  return (
    <nav className='navbar'>
      <div className='container'>
         <h1 className='logo'>Clima App</h1>
         <div className='search-container'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='magGlass' />
          <input 
              className='searchbar'
              type='text'
              placeholder='Nome da cidade'
              onChange={(e) => setQuery(e.target.value)}
              ref={inputRef}
          />
         </div>
      </div>
      <Query queryValue={query} replaceInputValue={replaceInputValue}/>
    </nav>
  )
}


export default Navbar