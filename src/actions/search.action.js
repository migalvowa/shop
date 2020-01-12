import { SET_SEARCH_VALUE } from "../constants/action-types";

// ---

export const setSearchValue = value => {
  return async dispatch => {
    dispatch({ type: SET_SEARCH_VALUE, payload: value });
  };
};
