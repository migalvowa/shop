import axios from "axios";

import { GET_ITEMS, GET_ITEM } from "../constants/action-types";
import { BASE_URL } from "../constants/api";

// ---

export const getItems = () => {
  return async dispatch => {
    const { data } = await axios.get(`${BASE_URL}/items`);
    dispatch({ type: GET_ITEMS, payload: data });
  };
};

export const getItem = slug => {
  return async dispatch => {
    const { data } = await axios.get(`${BASE_URL}/items/${slug}`);
    dispatch({ type: GET_ITEM, payload: data });
  };
};
