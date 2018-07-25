import React, { Component } from 'react';
import * as MESSAGE from '../../constants/Message';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  componentWillMount() {
    const { quantity } = this.props.item;
    this.setState({
      quantity: quantity
    });
  }

  showSubTotal(price, quantity) {
    return price * quantity;
  }
  onDeleteCartItem = cartItem => {
    this.props.onDeleteCartItem(cartItem);
    this.props.onChangeMessage(MESSAGE.MESS_DELETE_CART_ITEM_SUCCESS);
  };
  updateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity
      });
    }
    this.props.onUpdateCartItem(product, quantity);
  };
  render() {
    const { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.description}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{this.state.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() =>
                this.updateQuantity(item.product, item.quantity - 1)
              }>
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() =>
                this.updateQuantity(item.product, item.quantity + 1)
              }>
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteCartItem(item.product)}>
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
