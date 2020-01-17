import { ADD_BOOKING } from "../actions/actions";
import {CLEAR_BOOKING} from '../actions/actions'
function bookingReducer(state = [], action) {
  switch (action.type) {

    case ADD_BOOKING:
      return [
      {
        service: action.service,
        person: action.person,
        date: action.date,
        startTime: action.startTime,
        endTime: action.endTime,
        price: action.price
      }]
      case CLEAR_BOOKING:
        return []
    default:
      return state;
  }
}

export default bookingReducer;