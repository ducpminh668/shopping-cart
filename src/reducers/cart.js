import * as types from './../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('cart'));
const initialState = data ? data : [];

const cart = (state = initialState, action) => {
  const { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      let index = state.findIndex(item => {
        return item.product.id === product.id;
      });
      if (index === -1) {
        state.push({
          product,
          quantity
        });
      } else {
        state[index].quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    case types.DELETE_ITEM_IN_CART:
      const { item } = action;
      index = state.findIndex(cartItem => {
        return cartItem.id === item.id;
      });
      state.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    case types.UPDATE_PRODUCT_IN_CART:
      index = state.findIndex(item => {
        return item.product.id === product.id;
      });
      if (index > -1) {
        if (quantity > 0) {
          state[index].quantity = action.quantity;
        } else {
          state.splice(index, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
