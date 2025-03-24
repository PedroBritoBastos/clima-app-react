import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   max: 0,
   min: 0,
   city: "Cidade",
   climate: "sem informação",
   weatherId: 0,
   aditionalInfo: {
      feelsLike: 0,
      seaLevel: 0,
      humidity: 0,
      pressure: 0
   },
   wind: {
      speed: 0,
      gust: 0
   }
};

const climateSlice = createSlice({
   name: "climate",
   initialState,
   reducers: {
      getMinValue: (state, action) => {
         state.min = action.payload; // receiving the min temperature 
      },
      getMaxValue: (state, action) => {
         state.max = action.payload; // receiving the max temperature
      },
      getCity: (state, action) => {
         state.city = action.payload; // receiving the city name 
      },
      getClimate: (state, action) => {
         state.climate = action.payload; // receiving the climate
      },
      getWeatherId: (state, action) => { // receiving weather id
         state.weatherId = action.payload;
      },
      getAditionalInfo: (state, action) => { // receiving the aditional info
         state.aditionalInfo.feelsLike = action.payload.feelsLike;
         state.aditionalInfo.seaLevel = action.payload.seaLevel;
         state.aditionalInfo.humidity = action.payload.humidity;
         state.aditionalInfo.pressure = action.payload.pressure;
      },
      getWindInfo: (state, action) => {
         state.wind.speed = action.payload.speed;
         state.wind.gust = action.payload.gust;
      }
   }
})

export const { getMinValue, getMaxValue, getCity, getClimate, getWeatherId, getAditionalInfo, getWindInfo } = climateSlice.actions;
export default climateSlice.reducer;