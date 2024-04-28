import {
  ADD_CARD,
  REMOVE_CARD,
  EDIT_CARD
} from "../../utils/constants";

import { TCard } from '../../utils/types';

export interface IAddCard {
  readonly type: typeof ADD_CARD;
  readonly item: TCard;
}

export interface IRemoveCard {
  readonly type: typeof REMOVE_CARD;
  readonly removedItem: TCard;
}

export interface IEditCard {
  readonly type: typeof EDIT_CARD;
  readonly editedItem: TCard;
}

export type TCardActions =
  | IAddCard
  | IRemoveCard
  | IEditCard

export function addCard(data: TCard) {
  return {
    type: ADD_CARD,
    item: data
  }
}

export function removeCard(data: TCard) {
  return {
    type: REMOVE_CARD,
    removedItem: data
  }
} 

export function editCard(data: TCard) {
  return {
    type: EDIT_CARD,
    editedItem: data
  }
} 
