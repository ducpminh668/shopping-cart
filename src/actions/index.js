import * as types from '../constants/ActionTypes';

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};

export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
}

export const deleteCartItem = (item) => {
  return {
    type: types.DELETE_ITEM_IN_CART,
    item
  }
}

export const updateCartItem = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product, 
    quantity
  }
}
