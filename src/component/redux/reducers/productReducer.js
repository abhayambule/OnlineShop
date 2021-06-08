import { ActionTypes } from "../contants/ActionsTypes";

const initialstate = {
  products: [],
};
export const productReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.Remove_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};
