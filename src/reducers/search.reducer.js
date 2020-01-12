import { SET_SEARCH_VALUE } from "../constants/action-types";

// ---

const initialState = {
  searchValue: ""
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };

    default:
      return state;
  }
}

export default searchReducer;
