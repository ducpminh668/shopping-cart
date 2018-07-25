import React, { Component } from 'react';

class CartResult extends Component {
  showTotalAmount(cart) {
    let initialVaule = 0;
    return cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.quantity;
    }, initialVaule);
  }
  render() {
    const { cart } = this.props;
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalAmount(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light">
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
