import { combineReducers } from "redux";

import items from "./items.reducer";
import categories from "./categories.reducer";

// ---

export default combineReducers({
  items,
  categories
});
