import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../actions';
import { addCard, deleteCard, dragCard, updateCard } from '../utils';

const initialState = {
  lists: [
    {
      id: `list-${uuidv4()}`,
      title: 'Todo',
      cards: [{
        id: `card-${uuidv4()}`,
        title: 'Create Material UI Card',
        text: 'The card description preview should not contain more than 200 characters. In case the card has more than 200, shorten it with an ellipsis, but enable full-text visibility on editing the card in the modal dialog.'
      }, {
        id: `card-${uuidv4()}`,
        title: 'Create Redux store',
        text: 'Lorem ipsum dolor sit amet, da adipisicine veniam voluptate voluptatum!'
      }]
    }, {
      id: `list-${uuidv4()}`,
      title: 'In Progress',
      cards: [{
        id: `card-${uuidv4()}`,
        title: 'Set background color',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias labore magni modi nam numquam officia placeat quidem quos recusandae reiciendis ullam, voluptatem voluptatibus. Adipisci aliquam aliquid cumque, debitis delectus deleniti dolor dolores fugiat harum illo iste laudantium modi, repudiandae! Laudantium neque nihil tenetur! Aperiam itaque minima perspiciatis provident voluptatem!'
      }]
    }, {
      id: `list-${uuidv4()}`,
      title: 'Done',
      cards: [{
        id: `card-${uuidv4()}`,
        title: 'Create Edit button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autemiam voluptate voluptatum!'
      }, {
        id: `card-${uuidv4()}`,
        title: 'Create Delete button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur ducimus explicabo harum ipsa, iusto odit quia quis reiciendis repudiandae? Adipisci aperiam aspernatur atque, beatae culpa cupiditate eos et fugiat fugit, laudantium libero necessitatibus odit perspiciatis quam quis repellendus sunt! Aut eos laudantium, maxime nulla quos tenetur? Adipisci asperiores at aut beatae consectetur doloribus earum eum exercitationem facere id incidunt ipsum, iusto laboriosam maxime necessitatibus neque nisi perspiciatis placeat quas sint sunt tempore ullam voluptatem. Accusantium autem itaque modi nemo perspiciatis rerum? At, aut consequuntur dolorem ea esse est exercitationem expedita harum, ipsa laboriosam laborum nihil nulla odit ut vitae.'
      }, {
        id: `card-${uuidv4()}`,
        title: 'Create Add button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
      }]
    }
  ]
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_CARD: {
      return addCard(state, action.payload);
    }
    case ACTION_TYPES.DELETE_CARD: {
      return deleteCard(state, action.payload);
    }
    case ACTION_TYPES.UPDATE_CARD: {
      return updateCard(state, action.payload);
    }
    case ACTION_TYPES.DRAG_CARD: {
      return dragCard(state, action.payload);
    }
    default:
      return state;
  }
};

export default listReducer;
