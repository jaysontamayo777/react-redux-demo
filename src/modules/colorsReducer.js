import initialState from './initialState';
import * as TYPES from '../constants/actionTypes';

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
const colorsReducer = (state = initialState.color, action) => {

  switch (action.type) {
    case TYPES.SET_COLOR:
      let color = action.payload
      return color;

    default:
      return state;
  }
};

export default colorsReducer;
