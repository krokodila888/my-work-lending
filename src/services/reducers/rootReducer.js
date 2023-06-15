import { combineReducers } from 'redux';
import { cardsReducer } from "./cardsReducer";
import {locationReducer} from './locationReducer';

export const rootReducer = combineReducers({
  //ingredientsReducer,
  cardsReducer,
  /*currentIngredientReducer,
  currentOrderReducer,
  resetPasswordReducer,
  authReducer,*/
  locationReducer
}) 
