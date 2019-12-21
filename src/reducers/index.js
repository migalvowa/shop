import { GET_ITEMS } from "../constants/action-types";

const initialState = {
  items: {},
  title: "Todo App"
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}

export default itemsReducer;
