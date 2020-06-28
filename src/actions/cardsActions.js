import { ACTION_TYPES } from './index';

export const addCard = (listID, title, text) => {
  return {
    type: ACTION_TYPES.ADD_CARD,
    payload: { listID, title, text }
  };
};

export const deleteCard = (listID, cardID) => {
  return {
    type: ACTION_TYPES.DELETE_CARD,
    payload: { listID, cardID }
  };
};

export const updateCard = (listID, cardID, title, text) => {
  return {
    type: ACTION_TYPES.UPDATE_CARD,
    payload: { listID, cardID, title, text }
  };
};
