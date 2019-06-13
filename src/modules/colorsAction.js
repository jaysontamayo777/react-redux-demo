import * as TYPES from '../constants/actionTypes';

export const setColor = color => {
  return {
    type: TYPES.SET_COLOR,
    payload: color 
  }
}