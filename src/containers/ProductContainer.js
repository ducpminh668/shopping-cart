import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products/Products';
import ProductItem from '../components/Products/ProductItem';
import PropTypes from 'prop-types';
import * as actions from '../actions';
class ProductContainer extends Component {
  render() {
    const { products, onAddToCart, onChangeMessage } = this.props;
    const showProduct = () => {
      const element = products.map(item => {
        return (
          <ProductItem key={item.id} product={item} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
        );
      });
      return element;
    };
    return <Products>{showProduct()}</Products>;
  }
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, prop) => {
  return {
    onAddToCart: product => {
      dispatch(actions.addToCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(actions.changeMessage(message));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
