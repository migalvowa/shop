import { combineReducers } from "redux";

import items from "./items.reducer";
import categories from "./categories.reducer";
import search from "./search.reducer";

// ---

export default combineReducers({
  items,
  categories,
  search
});
