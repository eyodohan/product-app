import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  if (type) {
    if (type === ActionTypes.SET_PRODUCTS) {
      return { ...state, products: payload };
    }
    return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  if (type) {
    if (type === ActionTypes.SELECTED_PRODUCT) {
      return { ...state, ...payload };
    }
    if (type === ActionTypes.REMOVE_SELECTED_PRODUCT) {
      return {};
    }
    return state;
  }
};
