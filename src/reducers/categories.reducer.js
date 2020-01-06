import { GET_CATEGORIES, GET_CATEGORY } from "../constants/action-types";

const initialState = {
  categories: null,
  category: null
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };

    default:
      return state;
  }
}

export default categoriesReducer;
