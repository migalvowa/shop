import axios from "axios";
import { GET_ITEMS } from "../constants/action-types";
import { URL } from '../constants/api';

export const getItems = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/items.json`);
    dispatch({ type: GET_ITEMS, payload: data });
  };
};
