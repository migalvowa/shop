import axios from "axios";

import { GET_CATEGORIES, GET_CATEGORY } from "../constants/action-types";
import { BASE_URL } from "../constants/api";

// ---

export const getCategories = () => {
  return async dispatch => {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    dispatch({ type: GET_CATEGORIES, payload: data });
  };
};

export const getCategory = slug => {
  return async dispatch => {
    const { data } = await axios.get(`${BASE_URL}/categories/${slug}`);
    dispatch({ type: GET_CATEGORY, payload: data });
  };
};
