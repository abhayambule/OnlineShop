import { ActionTypes } from "../contants/ActionsTypes";

const initialstate = {
  products: [{ id: 1, title: "Abhay", category: "programmer" }],
};
export const productReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
