import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../components/Message/Message';

class MessageContainer extends Component {
  render() {
    return <Message message={this.props.message}/>;
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(
  mapStateToProps,
  null
)(MessageContainer);
