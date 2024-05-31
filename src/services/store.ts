import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardSlice';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
