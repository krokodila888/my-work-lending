import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { TCard } from '../utils/types';

type TCardsState = TCard[];

const initialState: TCardsState = [];

export const cardsSlice = createSlice({
  name: 'cardsHolder',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<TCard>) => {
      const newCard = action.payload;
      newCard.ID = current(state).length + 1;
      state.push(newCard);
    },
    removeCard: (state, action: PayloadAction<TCard>) => {
      const res = current(state)
        .filter((item) => item.ID !== action.payload.ID)
        .map((item, index) => {
          let clonedObject = { ...item };
          clonedObject = { ...clonedObject, ID: index + 1 };
          return clonedObject;
        });
      return (state = res);
    },
    editCard: (state, action: PayloadAction<TCard>) => {
      const res = current(state).map((item) => {
        if (item.ID !== action.payload.ID) return item;
        else return action.payload;
      });
      return (state = res);
    },
  },
});

export const { addCard, removeCard, editCard } = cardsSlice.actions;

export default cardsSlice.reducer;
