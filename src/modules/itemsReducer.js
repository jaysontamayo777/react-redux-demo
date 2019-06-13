import initialState from './initialState';
import * as TYPES from '../constants/actionTypes';
import _ from 'lodash';

/**
 * Saves the modification made on the state to redux.
 *
 * @param {object} state
 * Current value of Items in Redux
 *
 * @param {object} action
 * Object sent from Action file. Should have 'type' and 'payload'
 * field.
 */
const itemsReducer = (state = initialState.items, action) => {
  const items = _.cloneDeep(state);

  switch (action.type) {
    case TYPES.ADD_ITEM:
      console.log(`Reducer - ADD_ITEM - Appending value to items`);
      items.push(action.payload);
      return items;

    case TYPES.REMOVE_ITEM:
      console.log(`Reducer - REMOVE_ITEM - Removing value from items`);
      items.splice(action.payload, 1);
      return items;

    case TYPES.INITIAL_STATE:
      console.log(`Reducer - INITIAL_STATE - Reseting items`);
      return Object.assign({}, initialState.items);

    default:
      return state;
  }
};

export default itemsReducer;
