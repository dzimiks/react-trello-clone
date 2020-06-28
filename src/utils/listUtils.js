import { v4 as uuidv4 } from 'uuid';
import { deepCopy } from '../utils';

export const addCard = (state, payload) => {
  const { listID, title, text } = payload;

  const newCard = {
    id: `card-${uuidv4()}`,
    title,
    text
  };

  return {
    lists: state.lists.map(list => {
      if (list.id === listID) {
        return {
          ...list,
          cards: [...list.cards, newCard]
        };
      }

      return list;
    })
  };
};

export const deleteCard = (state, payload) => {
  const { listID, cardID } = payload;
  const newState = deepCopy(state);
  const { lists } = newState;

  const listIndex = lists.findIndex(list => list.id === listID);
  const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
  lists[listIndex].cards.splice(cardIndex, 1);

  return newState;
};

export const updateCard = (state, payload) => {
  const { listID, cardID, title, text } = payload;
  const newState = deepCopy(state);
  const { lists } = newState;

  const listIndex = lists.findIndex(list => list.id === listID);
  const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardID);
  lists[listIndex].cards[cardIndex] = { id: cardID, title, text };
  return newState;
};

export const dragCard = (state, payload) => {
  const newState = deepCopy(state);
  const { lists } = newState;
  const { droppableIdStart, droppableIdEnd } = payload;

  if (droppableIdStart === droppableIdEnd) {
    dragInsideSameList(lists, payload);
  } else {
    dragBetweenLists(lists, payload);
  }

  return newState;
};

const dragInsideSameList = (lists, payload) => {
  const {
    droppableIdStart,
    droppableIndexStart,
    droppableIndexEnd
  } = payload;

  const list = lists.find(list => droppableIdStart === list.id);
  const card = list.cards.splice(droppableIndexStart, 1);
  list.cards.splice(droppableIndexEnd, 0, ...card);
};

const dragBetweenLists = (lists, payload) => {
  const {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd
  } = payload;

  const listStart = lists.find(list => droppableIdStart === list.id);
  const card = listStart.cards.splice(droppableIndexStart, 1);
  const listEnd = lists.find(list => droppableIdEnd === list.id);
  listEnd.cards.splice(droppableIndexEnd, 0, ...card);
};
