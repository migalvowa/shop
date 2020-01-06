import { GET_ITEMS, GET_ITEM } from "../constants/action-types";

const initialState = {
  items: null,
  item: null
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };

    case GET_ITEM:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}

export default itemsReducer;
