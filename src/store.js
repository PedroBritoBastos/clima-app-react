import { configureStore } from "@reduxjs/toolkit";

// reducers
import climateReducer from './slices/climateSlice';
import iconReducer from "./slices/iconSlice";

export const store = configureStore({
   reducer: {
     climate: climateReducer,
     icon: iconReducer
   },
 });
 
 export default store;