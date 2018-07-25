import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import CartItem from '../components/Cart/CartItem';
import CartResult from '../components/Cart/CartResult';
import * as actions from '../actions';

class CartContainer extends Component {
  render() {
    const {
      cart,
      onDeleteCartItem,
      onChangeMessage,
      onUpdateCartItem
    } = this.props;
    const showCartitem = () => {
      return cart.map((item, index) => {
        return (
          <CartItem
            key={item.product.id}
            item={item}
            index={index}
            onDeleteCartItem={onDeleteCartItem}
            onChangeMessage={onChangeMessage}
            onUpdateCartItem={onUpdateCartItem}
          />
        );
      });
    };

    const showTotalAmount = () => {
      let result = null;
      if (cart.length > 0) {
        result = <CartResult cart={cart} />;
      }
      return result;
    };
    return (
      <Cart>
        {showCartitem()}
        {showTotalAmount()}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCartItem: cartItem => {
      dispatch(actions.deleteCartItem(cartItem));
    },
    onChangeMessage: message => {
      dispatch(actions.changeMessage(message));
    },
    onUpdateCartItem: (product, quantity) => {
      dispatch(actions.updateCartItem(product, quantity));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
