import axios from "axios";
import { GET_ITEMS, GET_ITEM } from "../constants/action-types";
import { URL } from "../constants/api";

export const getItems = () => {
  return async dispatch => {
    const { data } = await axios.get(`${URL}/items`);
    dispatch({ type: GET_ITEMS, payload: data });
  };
};

export const getItem = slug => {
  return async dispatch => {
    const { data } = await axios.get(`${URL}/items/${slug}`);
    dispatch({ type: GET_ITEM, payload: data });
  };
};
