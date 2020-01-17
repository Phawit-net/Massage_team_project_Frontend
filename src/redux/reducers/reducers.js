import { combineReducers } from 'redux';
import userReducer from './userReducer'
import bookingReducer from './bookingReducer';


const reducers = combineReducers({
  user: userReducer,
  booking: bookingReducer
});


export default reducers