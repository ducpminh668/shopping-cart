import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
class Rating extends Component {
  showRating(rating) {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i className="fa fa-star" key={uuidv4()}/>);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(<i className="fa fa-star-o" key={uuidv4()}/>);
    }
    return result;
  }
  render() {
    const { rating } = this.props;
    return (
      <ul className="rating">
        <li>{this.showRating(rating)}</li>
      </ul>
    );
  }
}

export default Rating;
