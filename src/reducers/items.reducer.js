import { GET_ITEMS, GET_ITEM } from "../constants/action-types";

const initialState = {
  list: [],
  current: null
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        list: action.payload
      };

    case GET_ITEM:
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
}

export default itemsReducer;
