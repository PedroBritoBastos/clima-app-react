import { createSlice } from "@reduxjs/toolkit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faSnowman } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';
import { faTornado } from '@fortawesome/free-solid-svg-icons';

const initialState = {
   weatherIcon: faCloud,
   minIcon: faCloud,
   maxIcon: faCloud
};

const iconSlice = createSlice({
   name: "icon",
   initialState,
   reducers: {
      setWeatherIcon: (state, action) => {
         const id = action.payload;

         // check the current weather to add an icon
         if(id <= 232) {
            state.weatherIcon = faCloudBolt;
         } else if(id > 232 && id <= 531) {
            state.weatherIcon = faCloudRain;
         } else if(id >= 600 && id <= 622 ) {
            state.weatherIcon = faSnowman;
         } else if(id >= 701 && id <= 762 ) {
            state.weatherIcon = faSmog;
         } else if(id >= 771 && id <= 781 ) {
            state.weatherIcon = faTornado;
         } else if(id >= 800 && id <= 803 ) {
            state.weatherIcon = faSun;
         } else {
            state.weatherIcon = faCloudSun;
         }
      },
      setMinIcon: (state, action) => {
         // check if climate is hot or cold and changes the icon
         if(action.payload <= 15) {
            state.minIcon = faSnowflake;
         } else {
            state.minIcon = faSun;
         }
      },
      setMaxIcon: (state, action) => {
         // check if climate is hot or cold and changes the icon
         if(action.payload <= 15) {
            state.maxIcon = faSnowflake;
         } else {
            state.maxIcon = faSun;
         }
      }
   }
})

export const { setWeatherIcon, setMinIcon, setMaxIcon } = iconSlice.actions;
export default iconSlice.reducer;
