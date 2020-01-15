import { TOKEN } from '../../config/constants'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const ADD_BOOKING = "ADD_BOOKING";


function fetchLogin(token) {
  localStorage.setItem(TOKEN, token)
}

export function login(user, token) {
  fetchLogin(token)
  return {
    type: LOGIN_USER,
    ...user
  }
}

function fetchLogout() {
  localStorage.removeItem(TOKEN)
}

export function logout() {
  fetchLogout()
  return {
    type: LOGOUT_USER,
  }
}

export function addBooking(service, person, date, startTime, endTime, price) {
  return {
    type: ADD_BOOKING,
    service: service,
    person: person,
    date: date,
    startTime: startTime,
    endTime: endTime,
    price: price,
  };
}