import { GET_CATEGORIES, GET_CATEGORY } from "../constants/action-types";

// ---

const initialState = {
  list: [],
  current: null
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        list: action.payload
      };

    case GET_CATEGORY:
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
}

export default categoriesReducer;
