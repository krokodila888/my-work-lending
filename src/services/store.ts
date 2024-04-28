import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TCardActions } from './actions/cards';
import { rootReducer } from './reducers/rootReducer';

export type TAppActions = TCardActions;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const store = configureStore({
  reducer: rootReducer,
});
