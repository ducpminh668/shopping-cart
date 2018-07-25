import * as Types from '../constants/ActionTypes';
import * as Messages from '../constants/Message';

const initialState = Messages.MESS_WELCOME;
const message = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default message;
